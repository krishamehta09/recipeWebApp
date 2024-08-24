(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],{19:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.93342ecb.png"},36:function(e,t,a){e.exports=a.p+"static/media/food.82c8cc61.jpg"},37:function(e,t,a){e.exports=a(62)},42:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(42),a(3)),o=a.n(i),u=a(5),m=a(4),s=(a(19),function(e){var t=e.search,a=e.onInputChange,n=e.onSearchClick;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-1"},r.a.createElement("i",{className:"material-icons brand-icon"},"fastfood"),"Recipes at your service"),r.a.createElement("div",{className:"input-group w-50 mx-auto"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Look for your favorite recipes...",value:t,onChange:a}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-dark",onClick:n},"Search Recipe"))))}),p=function(e){var t=e.name,a=e.image,n=e.ingredientLines;return r.a.createElement("div",{id:"recipes-containers"},r.a.createElement("div",{className:"recipe-items"},r.a.createElement("img",{src:a,className:"recipe-images"}),r.a.createElement("div",{className:"recipe-names"},r.a.createElement("h5",null,t)),r.a.createElement("ul",{className:"recipe-ingredientss"},n.map((function(e){return r.a.createElement("li",{key:e},e)})))))},d=function(e){var t=e.recipes;return r.a.createElement("div",{className:"card-columns"},t.map((function(e){return r.a.createElement(p,{key:100*Math.random(),name:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines})})))},E=a(11),f=a(35),b=a.n(f),h=function(){return r.a.createElement("nav",{className:"navbar a"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:b.a,alt:"Logo"}))),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/customRecipe"},"Custom Recipes")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contact"},"Contact"))))},v=a(2),g=a(17),y=a.n(g),N=a(7),j=(a(61),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(m.a)(l,2),s=i[0],p=i[1],d=Object(n.useState)(""),E=Object(m.a)(d,2),f=E[0],b=E[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),g=v[0],j=v[1],k=Object(n.useState)(""),O=Object(m.a)(k,2),w=O[0],x=O[1],C=Object(n.useState)(null),S=Object(m.a)(C,2),q=S[0],R=S[1];Object(n.useEffect)((function(){A()}),[]);var A=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://127.0.0.1:8000/api/recipes/");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:a=e.sent,c(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("There was a problem with the fetch operation:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("title",f),n.append("ingredients",g),n.append("instructions",w),q&&n.append("image",q),e.prev=6,e.next=9,y.a.post("http://127.0.0.1:8000/api/recipes/",n,{headers:{"Content-Type":"multipart/form-data"}});case 9:r=e.sent,c([].concat(Object(N.a)(a),[r.data])),b(""),j(""),x(""),R(null),p(!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(6),console.error("There was a problem with adding the recipe:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("http://127.0.0.1:8000/api/recipes/".concat(t,"/"));case 3:c(a.filter((function(e){return e.id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("There was a problem with deleting the recipe:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"recipes-container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){return p(!s)}},s?"Cancel":"Add Recipe")),s&&r.a.createElement("div",{className:"add-recipe-form"},r.a.createElement("h2",null,"Add a New Recipe"),r.a.createElement("form",{onSubmit:F,encType:"multipart/form-data"},r.a.createElement("input",{type:"text",placeholder:"Title",value:f,onChange:function(e){return b(e.target.value)},required:!0}),r.a.createElement("textarea",{placeholder:"Ingredients",value:g,onChange:function(e){return j(e.target.value)},required:!0}),r.a.createElement("textarea",{placeholder:"Instructions",value:w,onChange:function(e){return x(e.target.value)},required:!0}),r.a.createElement("input",{type:"file",onChange:function(e){return R(e.target.files[0])}}),r.a.createElement("button",{type:"submit"},"Add Recipe"))),r.a.createElement("div",{className:"recipe-list"},a.map((function(e){return r.a.createElement("div",{className:"recipe",key:e.id},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,r.a.createElement("strong",null,"Ingredients:")," ",e.ingredients),r.a.createElement("p",null,r.a.createElement("strong",null,"Instructions:")," ",e.instructions),e.image&&r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("button",{className:"delete-button",onClick:function(){return I(e.id)}},"Delete"))}))))}),k=a(36),O=a.n(k),w=function(){return r.a.createElement("div",{className:"about-container"},r.a.createElement("main",{className:"about-content"},r.a.createElement("h1",null,"About Us"),r.a.createElement("img",{src:O.a,alt:"About Us",className:"about-image"}),r.a.createElement("p",null,"Welcome to the FoodRecipe Web Application!!"),r.a.createElement("p",null,"Here you have an option of searching for existing recipes or creating your own recipes and adding details about them."),r.a.createElement("p",null,"Thank you for visiting our website. If you have any questions or feedback, please feel free to ",r.a.createElement("a",{href:"/contact"},"contact us"),". We look forward to hearing from you!")))},x=a(6),C=a(25),S=function(){var e=Object(n.useState)({name:"",email:"",query:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(m.a)(l,2),o=i[0],u=i[1],s=function(e){c(Object(C.a)(Object(C.a)({},a),{},Object(x.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"contact-container"},r.a.createElement("h2",null,"Contact Us"),o?r.a.createElement("p",{className:"thank-you-message"},"Thank you for contacting us, we will reach out soon!"):r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a),u(!0),c({name:"",email:"",query:""})}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name",value:a.name,onChange:s,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",name:"email",value:a.email,onChange:s,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"query"},"Query"),r.a.createElement("textarea",{id:"query",name:"query",value:a.query,onChange:s,required:!0})),r.a.createElement("button",{type:"submit",className:"submit-btn"},"Submit")))};var q=function(){var e=Object(n.useState)("mango"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(m.a)(l,2),p=i[0],f=i[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.edamam.com/search?q=".concat(a,"&app_id=").concat("4eba66a3","&app_key=").concat("33d22d5b041c3d38447666c5a16b9247"));case 2:t=e.sent,f(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(E.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null)," ",r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{search:a,onInputChange:function(e){c(e.target.value)},onSearchClick:function(){b()}}),r.a.createElement("div",{className:"container"},r.a.createElement(d,{recipes:p})))}),r.a.createElement(v.a,{path:"/about",element:r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null))}),r.a.createElement(v.a,{path:"/customRecipe",element:r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"heading"},"Custom Recipes"),r.a.createElement(j,null))}),r.a.createElement(v.a,{path:"/contact",element:r.a.createElement(S,null)}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.425f004c.chunk.js.map