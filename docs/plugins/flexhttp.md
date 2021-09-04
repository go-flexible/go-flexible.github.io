---
sidebar_position: 1
---

# flexhttp

## About

If you noticed the HTTP server we created in the quick start, flexhttp is a more complete implementation.  
This of course avoids you having to write your own, but also allows us to provide you with some sane defaults.  
If you don't like our defaults, you can pass in your HTTP server with the exact configuration you need!

## Install

```shell
go get github.com/go-flexible/flexhttp
```

[![Go Reference](https://pkg.go.dev/badge/github.com/go-flexible/flexhttp.svg)](https://pkg.go.dev/github.com/go-flexible/flexhttp)

## Example

```go
// Create some router and endpoints...
router := http.NewServeMux()
router.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
        fmt.Fprint(rw, "Hello, world!\n")
})

// Create a standard http server.
srv := &http.Server{
        Addr:              ":8080",
        Handler:           router,
        ReadTimeout:       5 * time.Second, 
        ReadHeaderTimeout: time.Second,
        // Missing timeouts will be set to a sane default.
}

// Run it, or better yet, let `flex` run it!
flexhttp.New(srv).Run(context.Background())
```
