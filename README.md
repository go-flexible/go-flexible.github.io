# Go Flexible

A collection of packages for building Go services.

<p align="center">
  <img src="docs/iana-lettering.svg" width="300px"/>
</p>

- [Go Flexible](#go-flexible)
  - [Goals](#goals)
    - [Principles](#principles)
    - [Quality](#quality)
  - [Primitive: Runner](#primitive-runner)
  - [Primitive: Halter](#primitive-halter)
  - [Primitive: Worker](#primitive-worker)
  - [Plugins](#plugins)


## Goals

### Principles

- Provide `flex`ible primitives to build upon.
- Simplify process lifecycle and graceful shutdown.
- Make it easy to extend behaviour.

### Quality

- No third party dependencies allowed within `flex` itself.
- All published packages must be tested.

---

## Primitive: Runner

A `Runner` represents anything which can "run" itself.
For example, an `HTTP` server.

```go
// Runner represents the behaviour for running a service worker.
type Runner interface {
        // Run should run start processing the worker and be a blocking operation.
        Run(context.Context) error
}
```

---

## Primitive: Halter

A `Halter` represents anything which can "halt" itself.
For example a `Kafka` broker.

```go
// Halter represents the behaviour for stopping a service worker.
type Halter interface {
        // Halt should tell the worker to stop doing work.
        Halt(context.Context) error
}
```

---

## Primitive: Worker

A `Worker` represents anything that can both "run" and "halt" itself.
For example, a `cron` job.

```go
// Worker represents the behaviour for a service worker.
type Worker interface {
        Runner
        Halter
}
```

## Plugins

- [flexhttp](https://github.com/go-flexible/flexhttp)
  - A `flex` compatible http server.
- [flexready](https://github.com/go-flexible/flexready)
  - A `flex` compatible readiness server.
- [flexmetrics](https://github.com/go-flexible/flexmetrics)
  - The package go-flexible/flexmetrics provides a default set of configuration for hosting prometheus and pprof metrics.