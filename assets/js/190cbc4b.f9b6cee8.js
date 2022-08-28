"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[307],{5788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:1},s="flexhttp",u={unversionedId:"plugins/flexhttp",id:"plugins/flexhttp",isDocsHomePage:!1,title:"flexhttp",description:"About",source:"@site/docs/plugins/flexhttp.md",sourceDirName:"plugins",slug:"/plugins/flexhttp",permalink:"/docs/plugins/flexhttp",editUrl:"https://github.com/go-flexible/go-flexible.github.io/edit/documentation/docs/plugins/flexhttp.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/install"},next:{title:"flexgrpc",permalink:"/docs/plugins/flexgrpc"}},p=[{value:"About",id:"about",children:[]},{value:"Install",id:"install",children:[]},{value:"Example",id:"example",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flexhttp"},"flexhttp"),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"If you noticed the HTTP server we created in the quick start, flexhttp is a more complete implementation.",(0,i.kt)("br",{parentName:"p"}),"\n","This of course avoids you having to write your own, but also allows us to provide you with some sane defaults.",(0,i.kt)("br",{parentName:"p"}),"\n","If you don't like our defaults, you can pass in your HTTP server with the exact configuration you need!"),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/go-flexible/flexhttp\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/go-flexible/flexhttp"},(0,i.kt)("img",{parentName:"a",src:"https://pkg.go.dev/badge/github.com/go-flexible/flexhttp.svg",alt:"Go Reference"}))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Create some router and endpoints...\nrouter := http.NewServeMux()\nrouter.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {\n        fmt.Fprint(rw, "Hello, world!\\n")\n})\n\n// Create a standard http server.\nsrv := &http.Server{\n        Addr:              ":8080",\n        Handler:           router,\n        ReadTimeout:       5 * time.Second, \n        ReadHeaderTimeout: time.Second,\n        // Missing timeouts will be set to a sane default.\n}\n\n// Run it, or better yet, let `flex` run it!\nflexhttp.New(srv).Run(context.Background())\n')))}c.isMDXComponent=!0}}]);