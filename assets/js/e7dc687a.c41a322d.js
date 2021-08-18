"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[284],{7527:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],o={},s="flexmetrics",p={unversionedId:"plugins/flexmetrics",id:"plugins/flexmetrics",isDocsHomePage:!1,title:"flexmetrics",description:"About",source:"@site/docs/plugins/flexmetrics.md",sourceDirName:"plugins",slug:"/plugins/flexmetrics",permalink:"/docs/plugins/flexmetrics",editUrl:"https://github.com/go-flexible/go-flexible.github.io/edit/main/docs/plugins/flexmetrics.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flexhttp",permalink:"/docs/plugins/flexhttp"},next:{title:"flexready",permalink:"/docs/plugins/flexready"}},u=[{value:"About",id:"about",children:[]},{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Example",id:"example",children:[{value:"Starting the server and exposing metrics",id:"starting-the-server-and-exposing-metrics",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flexmetrics"},"flexmetrics"),(0,l.kt)("h2",{id:"about"},"About"),(0,l.kt)("p",null,"The package ",(0,l.kt)("inlineCode",{parentName:"p"},"go-flexible/flexmetrics")," provides a default set of configuration for hosting prometheus and ",(0,l.kt)("inlineCode",{parentName:"p"},"pprof")," metrics."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/go-flexible/flexmetrics\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/go-flexible/flexmetrics"},(0,l.kt)("img",{parentName:"a",src:"https://pkg.go.dev/badge/github.com/go-flexible/flexmetrics.svg",alt:"Go Reference"}))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The metric server can be configured through the environment to match setup in the infrastructure."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PROMETHEUS_ADDR")," default: ",(0,l.kt)("inlineCode",{parentName:"li"},":2112")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PROMETHEUS_PATH")," default: ",(0,l.kt)("inlineCode",{parentName:"li"},"/metrics"))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"starting-the-server-and-exposing-metrics"},"Starting the server and exposing metrics"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// Rely on the package defaults\nsrv := flexmetrics.New()\nsrv.Run(ctx)\n\n// Or bring your own\nhttpServer := &http.Server{\n        Addr: ":8081",\n}\nsrv := flexmetrics.New(\n        flexmetrics.WithServer(httpServer),\n        flexmetrics.WithPath("/__/metrics"),\n)\nsrv.Run(ctx)\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pprof")," metrics will be exposed on:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"/debug/pprof/\n/debug/pprof/cmdline\n/debug/pprof/profile\n/debug/pprof/symbol\n/debug/pprof/trace\n")))}d.isMDXComponent=!0}}]);