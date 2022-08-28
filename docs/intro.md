---
sidebar_position: 1
title: Discover Flex
---

# Discover Flex

## Getting Started

Get started by **creating a new go project**.

### Requirements

- **Go 1.16 or later**

## Let's make an API

Let's start by creating a new directory, and initialise a go project.

```shell
mkdir flex-tutorial
cd flex-tutorial
go mod init flex-tutorial
touch main.go
```

### Bring in flex

```shell
go get github.com/go-flexible/flex
```

### Write the program

In the `main.go` file, and add in the following code:

```go
package main

import (
        "context"
        "fmt"
        "log"
        "net/http"

        "github.com/go-flexible/flex"
)

func main() {
        // Create a new mux and attach a handler. 
        mux := http.NewServeMux()
        mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
                fmt.Fprintln(w, "Hello, World!")
        })

        // Create a simple (and not production ready) http server.
        server := &http.Server{
                Addr:    ":8080",
                Handler: mux,
        }

        // Start the application.
        flex.MustStart(
                context.Background(),
                &httpServer{Server: server},
        )
}

// Create an httpServer wrapper struct.
// This allows us to implement the Worker primitive.
type httpServer struct{ *http.Server }

// Run should run start processing the worker and be a blocking operation.
func (h *httpServer) Run(_ context.Context) error {
        log.Printf("serving on: %s", h.Addr)
        return h.ListenAndServe()
}

// Halt should tell the worker to stop doing work.
func (h *httpServer) Halt(ctx context.Context) error {
        log.Println("shutting down http server")
        return h.Shutdown(ctx)
}
```

### Review

Obviously, this is a contrived example. If this is all you were really building, you wouldn't need flex!

However, here's what we've acheived:

We've implemented an http server that flex can run as a [Worker](https://pkg.go.dev/github.com/go-flexible/flex#Worker). This means that the server is running in it's own goroutine, and that graceful shutdown will occur when the context we've passed as the first argument to [MustStart](https://pkg.go.dev/github.com/go-flexible/flex#MustStart) is cancelled.
This can be done by interrupting the program with `CTRL+c`, or by signalling the application (for example, the way kubernetes would).
