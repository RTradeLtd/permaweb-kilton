(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(156);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You found a place that doesn't exist... yet and may never."))}},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(148),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},151:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(158),c=a.n(r),i=a(34),s=a.n(i),o=a(7),u=a.n(o),m=a(159),d=a.n(m),p=a(4),E=a.n(p),f=function(e){return e.children},h=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(s()(t)),t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){d.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,r=n.element,c=n.offset,i=n.timeout;if(l&&r)switch(l){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,c,i):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout(function(){window.scroll({top:n+t,left:0,behavior:"smooth"})},a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return l.a.createElement(f,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component);h.propTypes={type:E.a.string,element:E.a.string,offset:E.a.number,timeout:E.a.number,children:E.a.node.isRequired};var y=h;t.a=function(e){return l.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},l.a.createElement(c.a,{items:["intro","first","second","cta","footer"],currentClassName:"is-active",offset:-300},l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"intro"},l.a.createElement("a",{href:"#"},"Introduction"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"first"},l.a.createElement("a",{href:"#"},"Productive"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"second"},l.a.createElement("a",{href:"#"},"Resilient"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"cta"},l.a.createElement("a",{href:"#"},"Open Source"))),l.a.createElement("li",null,l.a.createElement(y,{type:"id",element:"footer"},l.a.createElement("a",{href:"#"},"Community")))))}},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),i=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},153:function(e,t,a){e.exports=a.p+"static/matrix-4ac688522419ae8eef6fe5e61230ad2f.png"},154:function(e,t,a){e.exports=a.p+"static/irc-f79d62683780eb6f02c0043ae3d54ca3.png"},155:function(e,t,a){e.exports=a.p+"static/discordlogo-f25ecd618c517e8fd09f97fb64af72aa.png"},156:function(e,t,a){"use strict";var n=a(7),l=a.n(n),r=a(0),c=a.n(r),i=(a(157),a(149),a(151),a(150)),s=a.n(i),o=function(e){return c.a.createElement(s.a,{server:"475789330380488707",channel:"509533264206233610",shard:"https://disweb.deploys.io",height:"800",width:"450",onAPI:function(e){}})},u=a(162),m=a(153),d=a.n(m),p=a(154),E=a.n(p),f=a(155),h=a.n(f),y=function(e){return c.a.createElement("footer",{id:"footer"},c.a.createElement("h1",{align:"center"},"Join the Community"),c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"column"},c.a.createElement("h2",null,"Open Source"),c.a.createElement("p",null,"Epona is on Github. Give us a Star!        ",c.a.createElement(u.a,{href:"https://github.com/GetEpona/Epona-js","data-size":"large","data-show-count":"true","aria-label":"Star GetEpona/Epona-js on GitHub"},"Star")),c.a.createElement("h2",null,"Contribute"),c.a.createElement("p",null,"We're always looking for contributors. Epona is built in React Electron, and uses IPFS and Textile.  ",c.a.createElement("a",{href:"https://gateway.textile.cafe/ipfs/QmcLYowzA59kMoNAsQ5Ch8pCU3ZFxdmJjVGZD9wDjPw6Mf?key=d1x3adUwxMay1FY8kgq7hjT2x9YGtEMKJFP5SbkzBXh9dYTYKtuJGNUXoQha"},"Become a contributor"),"."),c.a.createElement("h2",null," Feature Requests"),c.a.createElement("p",null,"Suggest new features and report any bugs on our ",c.a.createElement("a",{href:"https://github.com/GetEpona/Epona-js/issues"},"GitHub Issues")," page."),c.a.createElement("h2",null,"Donate"),c.a.createElement("p",null,"Leave us some Bitcoin, alts, even your shitcoins! Drop us a line in our Discord if you don't see a wallet of your preffered choice."),c.a.createElement("ul",{className:"donations",style:{listStyleType:"none"}},c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"BTC"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"1LrufiuFTzn2ZzKsgdPH1K1AKZDenCeYrQ"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"BCH"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"192PJCrtvP7UPFpX9ZCcti2mVD6PViw3o2"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"ETH"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"0x75d60297fc0b42492a3d99700db770b547c74617"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"ETC"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"0x397cf3b5f19110bda7ecdfb1c7134770fdbdc487"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"LTC"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"LQqKv8mps5nP2DMHdThAnvJtNSdcSc3XJe"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"NEO"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"AKxoCE8YjP7jyQcDCxEXHuFvtWh74Km64g"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"DOGE"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"DG7zCPmQYBue9rL1iHtugignX3cfJ2hb4c"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"Cardano ADA"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"DdzFFzCqrht2CsRqSYPvR9Mw3L2sPMgGx44CHDjLxSuQzrnw628AXiB42uiGJ1sPxTKW6352ZGBS9RG3RtzeDF6wWbTu2n6jEvF9CMdZ"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"Augur REP"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"0x75d60297fc0b42492a3d99700db770b547c74617"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"Lisk"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"12320849510539754337L"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"TRON TRX"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"TB3QGqV5qEPFxoN6gM8iFj3VoM19UiyMTc"})),c.a.createElement("li",null,c.a.createElement("div",{className:"currency-name"},"BAT"),c.a.createElement("input",{className:"wallet-id",type:"text",readOnly:"",value:"0x75d60297fc0b42492a3d99700db770b547c74617"})))),c.a.createElement("div",{class:"column"},c.a.createElement("ul",{className:"icons",style:{listStyleType:"none"},align:"center"},c.a.createElement("li",null,c.a.createElement("img",{src:d.a,alt:"Matrix",width:"24",height:"24"})," ",c.a.createElement("a",{href:"https://riot.im/app/#/room/#epona:getepona.com"},"Matrix")),c.a.createElement("li",null,c.a.createElement("img",{src:E.a,alt:"IRC",width:"24",height:"24"})," ",c.a.createElement("a",{href:"irc://freenode/epona"},"IRC")),c.a.createElement("li",null,c.a.createElement("img",{src:h.a,alt:"Discord",width:"24",height:"24"})," ",c.a.createElement("a",{href:"https://discord.gg/DrPFqa2"},"Discord"))),c.a.createElement(o,null))),c.a.createElement("p",{className:"copyright",align:"center"},"© 2019 Epona"))},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return c.a.createElement("div",{className:"body "+this.state.loading},c.a.createElement("div",{id:"wrapper"},e,c.a.createElement(y,null)))},t}(c.a.Component);t.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-ffc31a6880df04a2a36b.js.map