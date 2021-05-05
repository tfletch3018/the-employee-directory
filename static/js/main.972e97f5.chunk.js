(this["webpackJsonpthe-employee-directory"]=this["webpackJsonpthe-employee-directory"]||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(18),a=n.n(r),i=(n(6),n(0));var o=function(){return Object(i.jsx)("nav",{children:Object(i.jsx)("h1",{children:"The Employee Directory"})})};var l=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("ul",{class:"footer",children:Object(i.jsxs)("li",{class:"nav-item",children:[Object(i.jsx)("p",{children:"Generated Data Courtesy of: "}),Object(i.jsx)("a",{class:"nav-link active",href:"https://randomuser.me/",children:"Random user API"})]})})})},j=n(7),b=n.n(j),d=n(8),u=n(19),h=n(9),m=n(20),f=n.n(m);var O=function(e){return Object(i.jsxs)("table",{style:{width:"100%"},children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsxs)("th",{children:["Phone Number ",Object(i.jsx)("button",{className:"filter",onClick:e.sortNumber,children:Object(i.jsx)("i",{class:"fas fa-sort"})})]}),Object(i.jsxs)("th",{children:["Email ",Object(i.jsx)("button",{className:"filter",onClick:e.sortEmail,children:Object(i.jsx)("i",{class:"fas fa-sort"})})]}),Object(i.jsx)("th",{children:"Location"})]})}),Object(i.jsx)("tbody",{children:e.list.map((function(e){return Object(i.jsxs)("tr",{style:{borderTop:"2px solid #b3b3ff"},children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:e.picture.thumbnail,alt:"profile"})}),Object(i.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(i.jsx)("td",{children:e.phone}),Object(i.jsx)("td",{children:e.email}),Object(i.jsxs)("td",{children:[e.location.state,", ",e.location.country]})]})}))})]})};var x=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(h.a)(r,2),o=a[0],l=a[1];function j(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://randomuser.me/api/?results=30&seed=seed");case 2:t=e.sent,s(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){j()}),[]),Object(i.jsxs)("div",{className:"container",style:{marginTop:"20px",marginBottom:"20px"},children:[Object(i.jsxs)("div",{className:"input-group mb-3 float-center",children:[Object(i.jsx)("input",{value:o,onChange:function(e){l(e.target.value),console.log(e.target.value)},type:"text",className:"form-control",placeholder:"Search for an Employee by Name (Entries are case sensitive ie 'John Smith')","aria-label":"Username","aria-describedby":"button-addon"}),Object(i.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){l(""),j()},children:Object(i.jsx)("i",{class:"fas fa-recycle"})}),Object(i.jsxs)("button",{onClick:function(e){e.preventDefault(),function(){console.log("Searching...: ",o);var e=n.filter((function(e){return o.indexOf(e.name.first)>-1||o.indexOf(e.name.last)>-1}));console.log(e),s(e)}()},className:"btn btn-outline-primary",type:"submit",id:"button-addon",children:[Object(i.jsx)("i",{class:"fab fa-searchengin"}),"Search"]})]}),Object(i.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"auto",color:"#b3b3ff"},children:Object(i.jsx)("p",{children:Object(i.jsx)("small",{children:"Hover to the right of Phone Number or Email to Sort\ud83d\ude0a"})})}),Object(i.jsx)(O,{list:n,sortEmail:function(){console.log("Items are being sorted!");var e=n.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0}));console.log("Sorted List: ",e),s(Object(d.a)(e))},sortNumber:function(){console.log("Items are being sorted!");var e=n.sort((function(e,t){return e.phone<t.phone?-1:e.phone>t.phone?1:0}));console.log("Sorted List: ",e),s(Object(d.a)(e))}})]})};var p=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(x,{}),Object(i.jsx)(l,{})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))},6:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.972e97f5.chunk.js.map