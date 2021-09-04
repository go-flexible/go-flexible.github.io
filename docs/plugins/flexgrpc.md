---
sidebar_position: 2
---

# flexgrpc

## About

A flex compatible grpc server

The package flexgrpc provides a default set of configuration for hosting a grpc server in a service.

## Install

```shell
go get github.com/go-flexible/flexgrpc
```

[![Go Reference](https://pkg.go.dev/badge/github.com/go-flexible/flexgrpc.svg)](https://pkg.go.dev/github.com/go-flexible/flexgrpc)

## Example

### Starting server and exposing the service

```go
srv := flexgrpc.New(
    &flexgrpc.Config{Addr: ":8080"},
    grpc.ConnectionTimeout(10*time.Second),
)
_ = srv.Run(ctx)
```
