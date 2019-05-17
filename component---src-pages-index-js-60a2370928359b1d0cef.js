(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),r=a(0),c=a.n(r),s=a(150),o=a(155),i=a.n(o),m=a(171),u=(a(156),a(153)),d=a(151),E=a.n(d),p=function(e){return c.a.createElement("header",{id:"header",className:"alt"},c.a.createElement("span",{className:"logo"},c.a.createElement("img",{src:E.a,alt:""})),c.a.createElement("h1",null,"Epona"),c.a.createElement("p",null,"The most productive writing, collaboration, and publishing tool. ",c.a.createElement("br",null)," ",c.a.createElement("a",{href:"https://github.com/GetEpona"},"Open sourced")," and ready for the distributed web."))},M=a(175),w=a.n(M),y=a(34),N=a.n(y),L=a(189),h=a.n(L),f=a(4),g=a.n(f),j=function(e){return e.children},D=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(N()(t)),t}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){h.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,r=n.element,c=n.offset,s=n.timeout;if(l&&r)switch(l){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,c,s):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout(function(){window.scroll({top:n+t,left:0,behavior:"smooth"})},a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return c.a.createElement(j,null,"object"==typeof this.props.children?c.a.cloneElement(this.props.children,{onClick:this.handleClick}):c.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(c.a.Component);D.propTypes={type:g.a.string,element:g.a.string,offset:g.a.number,timeout:g.a.number,children:g.a.node.isRequired};var C=D,I=function(e){return c.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},c.a.createElement(w.a,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},c.a.createElement("li",null,c.a.createElement(C,{type:"id",element:"intro"},c.a.createElement("a",{href:"#"},"Introduction"))),c.a.createElement("li",null,c.a.createElement(C,{type:"id",element:"first"},c.a.createElement("a",{href:"#"},"First Section"))),c.a.createElement("li",null,c.a.createElement(C,{type:"id",element:"second"},c.a.createElement("a",{href:"#"},"Second Section"))),c.a.createElement("li",null,c.a.createElement(C,{type:"id",element:"cta"},c.a.createElement("a",{href:"#"},"Get Started")))))},b=a(190),T=a.n(b),v=(a(157),function(e){function t(t){var a;return(a=e.call(this,t)||this)._handleWaypointEnter=function(){a.setState(function(){return{stickyNav:!1}})},a._handleWaypointLeave=function(){a.setState(function(){return{stickyNav:!0}})},a.state={stickyNav:!1},a}return l()(t,e),t.prototype.render=function(){return c.a.createElement(u.a,null,c.a.createElement(i.a,{title:"GetEpona"}),c.a.createElement(p,null),c.a.createElement(m.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),c.a.createElement(I,{sticky:this.state.stickyNav}),c.a.createElement("div",{id:"main"},c.a.createElement("section",{id:"intro",className:"main"},c.a.createElement("div",{className:"spotlight"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Writing Made Modern")),c.a.createElement("p",null,"Epona is a modern writing tool for effective and privacy conscious people. It is censorship resistent and offers productivity shortcuts."),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(s.a,{to:"/generic",className:"button"},"Learn More")))),c.a.createElement("span",{className:"image"},c.a.createElement("img",{src:T.a,alt:""})))),c.a.createElement("section",{id:"first",className:"main special"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Insanely Powerful")),c.a.createElement("ul",{className:"features"},c.a.createElement("li",null,c.a.createElement("span",{className:"icon major style1 fa-code"}),c.a.createElement("h3",null,"Markdown like a Boss"),c.a.createElement("p",null,"Be super productive using modern markdown language.")),c.a.createElement("li",null,c.a.createElement("span",{className:"icon major style3 fa-copy"}),c.a.createElement("h3",null,"Censorship Resistent"),c.a.createElement("p",null,"Everything you wrote is encrypted and you're in control of the keys.")),c.a.createElement("li",null,c.a.createElement("span",{className:"icon major style5 fa-diamond"}),c.a.createElement("h3",null,"Self-Hosted"),c.a.createElement("p",null,"Epona is not cloud-based. It runs on a series of self-hosted and encrypted nodes."))),c.a.createElement("footer",{className:"major"},c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(s.a,{to:"/generic",className:"button"},"Learn More"))))),c.a.createElement("section",{id:"second",className:"main special"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Bleeding Edge"),c.a.createElement("p",null,"Epona combines the latest technologies in decentralized tech and encryption ",c.a.createElement("br",null),"We make it easy to deploy.")),c.a.createElement("ul",{className:"statistics"},c.a.createElement("li",{className:"style1"},c.a.createElement("span",{className:"icon fa-code-fork"}),c.a.createElement("strong",null,"5,120")," Productive"),c.a.createElement("li",{className:"style2"},c.a.createElement("span",{className:"icon fa-folder-open-o"}),c.a.createElement("strong",null,"8,192")," Markdown"),c.a.createElement("li",{className:"style3"},c.a.createElement("span",{className:"icon fa-signal"}),c.a.createElement("strong",null,"2,048")," Censorship Resistent"),c.a.createElement("li",{className:"style4"},c.a.createElement("span",{className:"icon fa-laptop"}),c.a.createElement("strong",null,"4,096")," Self-hosted"),c.a.createElement("li",{className:"style5"},c.a.createElement("span",{className:"icon fa-diamond"}),c.a.createElement("strong",null,"1,024")," Open-sourced")),c.a.createElement("p",{className:"content"},"Not just another writing app Notes, documents, articles under one roof Super productive: markdown, shortcuts What you write on Epona stays on Epona. We do not have a cloud. Instead, we run on ecnrypted nodes powered by our users. Want to host your own node like it’s nobody’s business? You can."),c.a.createElement("footer",{className:"major"},c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(s.a,{to:"/generic",className:"button"},"Learn More"))))),c.a.createElement("section",{id:"cta",className:"main special"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Start Writing Now"),c.a.createElement("p",null,"Use the best writing tool.",c.a.createElement("br",null),"Distributed tech is here. Start writing like it.")),c.a.createElement("footer",{className:"major"},c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(s.a,{to:"/generic",className:"button special"},"Get Started")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/generic",className:"button"},"Learn More")))))))},t}(c.a.Component));t.default=v},149:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},150:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(4),c=a.n(r),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(149),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},151:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),s=a(55),o=a(2),i=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=i},153:function(e,t,a){"use strict";var n=a(7),l=a.n(n),r=a(0),c=a.n(r),s=(a(154),a(150)),o=(a(151),function(e){return c.a.createElement("footer",{id:"footer"},c.a.createElement("section",null,c.a.createElement("h2",null,"Powered by Textile"),c.a.createElement("p",null,"Epona runs on Textile's open-sourced technology. It supports offline and mobile-first usage of IPFS."),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(s.a,{to:"/generic",className:"button"},"Learn More")))),c.a.createElement("section",null,c.a.createElement("h2",null,"Join the Community"),c.a.createElement("dl",{className:"alt"},c.a.createElement("dt",null,"GitHub"),c.a.createElement("dd",null,c.a.createElement("a",{href:"#"},"information@untitled.tld")),c.a.createElement("dt",null,"Matrix"),c.a.createElement("dd",null,c.a.createElement("a",{href:"#"},"information@untitled.tld")),c.a.createElement("dt",null,"IRC"),c.a.createElement("dd",null,c.a.createElement("a",{href:"#"},"information@untitled.tld")),c.a.createElement("dt",null,"Discord"),c.a.createElement("dd",null,c.a.createElement("a",{href:"#"},"information@untitled.tld")))),c.a.createElement("p",{className:"copyright"},"© 2019 "))}),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return c.a.createElement("div",{className:"body "+this.state.loading},c.a.createElement("div",{id:"wrapper"},e,c.a.createElement(o,null)))},t}(c.a.Component);t.a=i},157:function(e,t,a){"use strict";var n=a(158),l=a(0),r=a.n(l),c=a(4),s=a.n(c),o=a(155),i=a.n(o);function m(e){var t=e.description,a=e.lang,l=e.meta,c=e.keywords,s=e.title,o=n.data.site,m=t||o.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},158:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-starter-stellar",description:"Gatsby Starter - Stellar by HTML5 UP",author:"Hunter Chang"}}}}},190:function(e,t,a){e.exports=a.p+"static/pic01-b9959e167f94349be29be7284e7b9112.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-60a2370928359b1d0cef.js.map