(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),s=c(10),n=c.n(s),i=c(6),l=c(4),h=c(5),o=c.n(h),j=(c(16),c(2)),u=c.p+"static/media/marvel-logo.32c3cbaf.png",m=c(1),b=function(){return Object(m.jsx)("nav",{className:"header",children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)("img",{className:"header__logo",src:u,alt:"Marvel"})})})},_=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"http://marvel.com",children:"Data provided by Marvel. \xa9 2021 MARVEL"})})},d=function(e){var t=e.setCharacter,c=(e.character,Object(j.f)()),a=function(){var e=Object(i.a)(o.a.mark((function e(a){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),r=a.target.children[0].value,s=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://powerful-beyond-95375.herokuapp.com/api/characters/".concat(r)).then((function(e){return e.json()})).then((function(e){var c=e.data.results;return t(c)}));case 3:case 5:e.next=8;break;case 8:s(),c("/results");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"search",children:Object(m.jsx)("form",{className:"search__form",type:"submit",onSubmit:a,children:Object(m.jsx)("input",{className:"search__input",type:"text",placeholder:"Find Your Hero... "})})})},p=function(){return Object(m.jsxs)("p",{className:"welcome",children:["Hey Marvel Fans! ",Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{})," No excuse anymore not to find out ALL about your favorite characters  :)"]})},x=function(e){var t=e.allCharacters;return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{className:"home",children:t.map((function(e,t){return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"!==e.thumbnail.path?Object(m.jsx)("a",{className:"home__link",href:e.urls[1].url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{className:"home__image",src:"".concat(e.thumbnail.path,"/standard_amazing.").concat(e.thumbnail.extension),alt:e.events.name})},t):null}))})]})},f=function(e){var t=e.character;return Object(m.jsx)("div",{className:"albhabet__characters",children:t.map((function(e,t){return 0!==e.comics.available?Object(m.jsxs)("div",{className:"character",children:[Object(m.jsx)("div",{className:"character__image",children:Object(m.jsx)("img",{className:"character__img",src:"".concat(e.thumbnail.path,"/standard_amazing.").concat(e.thumbnail.extension),alt:e.name})}),Object(m.jsx)("h1",{className:"character__name",children:e.name}),Object(m.jsx)("p",{className:"character__description",children:e.description}),Object(m.jsxs)("div",{className:"character__comics",children:[Object(m.jsx)("h2",{className:"character__comics__heading",children:"Comics"}),Object(m.jsx)("ul",{className:"character__comics__list",children:e.comics.items.map((function(e,t){return Object(m.jsx)("li",{className:"character__comics__list__li",children:e.name},t)}))})]}),Object(m.jsxs)("div",{className:"character__series",children:[Object(m.jsx)("h2",{className:"character__series__heading",children:"Series"}),Object(m.jsx)("ul",{className:"character__series__list",children:e.series.items.map((function(e,t){return Object(m.jsx)("li",{className:"character__series__list__li",children:e.name},t)}))})]}),Object(m.jsxs)("div",{className:"character__stories",children:[Object(m.jsx)("h2",{className:"character__stories__heading",children:"Stories"}),Object(m.jsx)("ul",{className:"character__stories__list",children:e.stories.items.map((function(e,t){return Object(m.jsx)("li",{className:"character__stories__list__li",children:e.name},t)}))})]})]},t):null}))})},O=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)([]),n=Object(l.a)(s,2),h=n[0],u=n[1],p=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://powerful-beyond-95375.herokuapp.com/api/characters").then((function(e){return e.json()})).then((function(e){return r(e.data.results)}));case 3:case 5:e.next=8;break;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return p(),function(){}}),[]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(b,{}),Object(m.jsx)(d,{character:h,setCharacter:u}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",element:Object(m.jsx)(x,{allCharacters:c})}),Object(m.jsx)(j.a,{path:"/results",element:Object(m.jsx)(f,{character:h})})]}),Object(m.jsx)(_,{})]})},v=c(9);n.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v.a,{children:Object(m.jsx)(O,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a8098745.chunk.js.map