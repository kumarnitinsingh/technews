(this.webpackJsonpheadlines=this.webpackJsonpheadlines||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);var i=a(5),o=a(1),s=a(2),u=a(4),h=a(3),m=function(e){e.id;var t=e.name,a=e.author,n=e.title,l=e.description,c=e.url,i=e.urlToImage,o=e.publishedAt,s=e.content;return r.a.createElement("div",{className:" tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"newsImage",src:i}),r.a.createElement("div",null,r.a.createElement("h2",null,t," by ",a),r.a.createElement("h3",null,n),r.a.createElement("h4",null,o),r.a.createElement("p",null,l),r.a.createElement("p",null,s),r.a.createElement("a",{href:c},"view full")))},d=function(e){var t=e.articles;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(m,{key:a,id:t[a].source.id,name:t[a].source.name,author:t[a].author,title:t[a].title,url:t[a].url,urlToImage:t[a].urlToImage,publishedAt:t[a].publishedAt,content:t[a].content,description:t[a].description})})))},f=function(e){e.id;var t=e.name,a=e.author,n=e.title,l=e.description,c=e.url,i=e.urlToImage,o=e.publishedAt,s=e.content;return r.a.createElement("div",{className:" tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"newsImage",src:i}),r.a.createElement("div",null,r.a.createElement("h2",null,t," by ",a),r.a.createElement("h3",null,n),r.a.createElement("h4",null,o),r.a.createElement("p",null,l),r.a.createElement("p",null,s),r.a.createElement("a",{href:c},"view full")))},p=function(e){var t=e.articles1;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(f,{key:a,id:t[a].source.id,name:t[a].source.name,author:t[a].author,title:t[a].title,url:t[a].url,urlToImage:t[a].urlToImage,publishedAt:t[a].publishedAt,content:t[a].content,description:t[a].description})})))},E=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search news",onChange:t}))},g=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=(a(15),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops! sorry Try again later."):this.props.children}}]),a}(n.Component)),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={articles:[],articles1:[],searchfield:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=374e559cb5c74f888ef70ececa968ad1"),fetch("http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=374e559cb5c74f888ef70ececa968ad1")]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return Promise.all([a.json(),n.json()])})).then((function(t){var a=Object(i.a)(t,2),n=a[0],r=a[1];e.setState({articles:n.articles,articles1:r.articles})}))}},{key:"render",value:function(){var e=this,t=this.state.articles.filter((function(t){return t.source.name.toLowerCase().includes(e.state.searchfield.toLowerCase())})),a=this.state.articles1.filter((function(t){return t.source.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"TECH HEADLINES"),r.a.createElement(E,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement("h1",{className:"f3"},"India's Tech News"),r.a.createElement(d,{articles:t}),r.a.createElement("h1",{className:"f3"},"USA's Tech News"),r.a.createElement(p,{articles1:a}))),r.a.createElement("footer",{className:"f3"},"Powered by @",r.a.createElement("a",{href:"https://www.linkedin.com/in/nitin-kumar-singh-a744511a8"},"Nitin Kumar Singh")))}}]),a}(n.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.7743cc06.chunk.js.map