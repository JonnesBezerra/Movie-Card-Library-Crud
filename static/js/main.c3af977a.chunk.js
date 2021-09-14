(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/jonnesflix-logo.c5824d31.png"},28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=a(7),c=(a(33),a(1)),s=(a(34),a(3)),u=a(4),m=a(6),d=a(5),v=a(24),h=a.n(v),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"movie-card-header"},i.a.createElement("img",{className:"page-title",src:h.a,alt:"logo"}))}}]),a}(i.a.Component),b=a(11),f=a.n(b),g=a(13),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.imagePath,r=e.id;return i.a.createElement("div",{className:"movie-card","data-testid":"movie-card"},i.a.createElement("img",{src:n,className:"movie-card-image",alt:t}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{className:"movie-card-title"},t),i.a.createElement("p",{className:"movie-card-storyline"},a)),i.a.createElement(l.b,{to:"movies/".concat(r),className:"button view-details"},"VER DETALHES"))}}]),a}(i.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"loading-section"},i.a.createElement("p",{className:"loading"},"Carregando..."))}}]),a}(n.Component),O=a(27),j=a(14),k=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(k));var S=function(){return JSON.parse(localStorage.getItem("movies"))},N=function(e){return localStorage.setItem("movies",JSON.stringify(e))},w=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},I=function(e){var t=S().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){w(t)(e)}))},_=function(e){return new Promise((function(t){var a=S().map((function(t){return t.id===parseInt(e.id,10)?Object(j.a)(Object(j.a)({},t),e):t}));N(a),w("OK")(t)}))},C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchMovies=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=S();w(t)(e)}));case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}}),e)}))),n.state={movies:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"render",value:function(){var e=this.state.movies;return 0===e.length?i.a.createElement(y,null):i.a.createElement("div",{className:"home"},i.a.createElement(l.b,{className:"button add-movie-button",to:"/movies/new"},"ADICIONAR CART\xc3O"),i.a.createElement("div",{className:"movie-list","data-testid":"movie-list"},e.map((function(e){return i.a.createElement(E,{key:e.title,movie:e})}))))}}]),a}(n.Component),A=a(17),x=a(12),M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(j.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(A.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),"T\xedtulo"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline"},i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchMovie=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.id,e.next=3,I(t);case 3:a=e.sent,n.setState({movie:a,loading:!1});case 5:case"end":return e.stop()}}),e)}))),n.deleteFilm=function(){!function(e){var t=S();t=t.filter((function(t){return t.id!==parseInt(e,10)})),N(t),new Promise((function(e){w({status:"OK"})(e)}))}(n.state.movie.id)},n.state={movie:[],loading:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"render",value:function(){var e=this.state,t=e.movie;if(e.loading)return i.a.createElement(y,null);var a=t.title,n=t.storyline,r=t.imagePath,o=t.genre,c=t.rating,s=t.subtitle,u=t.id;return i.a.createElement("div",{className:"movie-card-details","data-testid":"movie-details"},i.a.createElement("img",{className:"movie-card-image",alt:"Movie Cover",src:"../".concat(r)}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h1",{className:"movie-card-title"},"Title: ".concat(a," ")),i.a.createElement("h2",{className:"movie-card-subtitle"},"Subtitle: ".concat(s)),i.a.createElement("p",{className:"movie-card-storyline"},"Storyline: ".concat(n)),i.a.createElement("p",{className:"movie-card-storyline"},"Genre: ".concat(o))),i.a.createElement("div",{className:"movie-card-rating"},i.a.createElement("span",{className:"rating"},"Rating: ".concat(c))),i.a.createElement("section",{className:"buttons-section"},i.a.createElement(l.b,{to:"/",className:"button back-button"},"VOLTAR"),i.a.createElement(l.b,{to:"/movies/".concat(u,"/edit"),className:"button edit-button"},"EDITAR"),i.a.createElement(l.b,{to:"/",onClick:this.deleteFilm,className:"button delete-button"},"DELETAR")))}}]),a}(n.Component),F=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:{genre:"",imagePath:"",rating:0,storyline:"",subtitle:"",title:""},finishedAdd:!1},n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var a=S(),n=a[a.length-1].id+1,i=Object(j.a)(Object(j.a)({},t),{},{id:n});a=[].concat(Object(O.a)(a),[i]),N(a),w("OK")(e)})),this.setState({finishedAdd:!0})}},{key:"render",value:function(){var e=this.state,t=e.finishedAdd,a=e.movie;return t?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(M,{movie:a,onSubmit:this.handleSubmit}))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={movie:[],status:"loading",shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(x.a)(n)),n.fetchMovie=n.fetchMovie.bind(Object(x.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"handleSubmit",value:function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchMovie",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,I(t);case 3:a=e.sent,this.setState({movie:a,status:"OK"});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(y,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(M,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);var D=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:C}),i.a.createElement(c.b,{path:"/movies/new",component:F}),i.a.createElement(c.b,{exact:!0,path:"/movies/:id",render:function(e){return i.a.createElement(P,e)}}),i.a.createElement(c.b,{path:"/movies/:id/edit",component:R}),i.a.createElement(c.b,{component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(l.a,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c3af977a.chunk.js.map