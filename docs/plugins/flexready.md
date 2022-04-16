---
sidebar_position: 3
---
# flexready

## About

A common occurence when writing services is the need to determine the health of some or all of the attached resources your service might be using.

Using `flexready` this can be done easily by configuring an endpoint to serve the result of a set of a [CheckerFunc](https://pkg.go.dev/github.com/go-flexible/flexready#CheckerFunc) functions which you provide.

## Install

```shell
go get github.com/go-flexible/flexready
```

[![Go Reference](https://pkg.go.dev/badge/github.com/go-flexible/flexready.svg)](https://pkg.go.dev/github.com/go-flexible/flexready)

## Example

```go
// Prepare your readyserver.
readysrv := flexready.New(flexready.Checks{
        "redis":       func() error { return redisCheck(nil) },
        "cockroachdb": func() error { return cockroachCheck(nil) },
}, flexready.WithAddress(":9999"))

// Run it, or better yet, let `flex` run it for you!
_ = readysrv.Run(context.Background())

// Ready server is now available on http://localhost:9999/ready
```
