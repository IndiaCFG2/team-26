(this.webpackJsonpiwash=this.webpackJsonpiwash||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=a(25),i=a(22),s=(a(82),a(18)),u=a(27),m=a(55),d=a(8),p={data:[],status:""},f={data:[],status:""},g=Object(u.c)({slotTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SLOTS_REQUESTED":return Object(d.a)(Object(d.a)({},e),{},{status:"waiting"});case"SLOTS_RECEIVED":return Object(d.a)(Object(d.a)({},e),{},{data:t.payload,status:"received"});case"SLOTS_FAILED":return Object(d.a)(Object(d.a)({},e),{},{status:"failed"});default:return e}},pfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SLOTS_REQUESTED":return Object(d.a)(Object(d.a)({},e),{},{status:"waiting"});case"SLOTS_RECEIVED":return Object(d.a)(Object(d.a)({},e),{},{data:t.payload,status:"received"});case"SLOTS_FAILED":return Object(d.a)(Object(d.a)({},e),{},{status:"failed"});default:return e}}}),h=Object(u.e)(g,{},Object(u.d)(Object(u.a)(m.a))),E=(a(87),a(39)),v=a.n(E);function b(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-row"},r.a.createElement("img",{src:v.a,className:"logo",alt:"ivizz logo"}),r.a.createElement("div",null,r.a.createElement("h1",null,"FPO Connect"),r.a.createElement("div",{className:"line"},"Connecting, together !"))))}var y=a(33);y.initializeApp({apiKey:"",authDomain:"quizapplication-b81d4.firebaseapp.com",databaseURL:"https://quizapplication-b81d4.firebaseio.com",projectId:"quizapplication-b81d4",storageBucket:"quizapplication-b81d4.appspot.com",messagingSenderId:"126218865029",appId:"1:126218865029:web:271f4e3a58bf3895df1cec"});var O=y.firestore(),j=(y.storage(),function(){return function(e){e({type:"SLOTS_REQUESTED"});var t=[];O.collection("forum").get().then((function(e){e.forEach((function(e){t.push(e.data())}))})).then((function(){e({type:"SLOTS_RECEIVED",payload:t})})).catch((function(t){return e({type:"SLOTS_FAILED",payload:t})}))}});var w=Object(s.b)((function(e){return{data:e.slotTime.data,status:e.slotTime.status}}),(function(e){return{getSlotTime:function(){return e(j())}}}))((function(e){e.data,e.status;var t=e.getSlotTime;return Object(n.useEffect)((function(){t()})),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"hello"))})),x=(a(66),a(12)),S=(a(99),a(28)),C=a(56),L=a(57),A=a(67),k=a(65),I=a(58),T=a(117),D=(a(49),a(115)),R=function(e){Object(A.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(C.a)(this,a),(e=t.call(this)).updateInput=function(t){e.setState(Object(S.a)({},t.target.name,t.target.value))},e.addUser=function(t){t.preventDefault();var a=y.firestore();a.settings({timestampsInSnapshots:!0});var n=new Date;a.collection("forum").add({name:e.state.name,posts:[{content:e.state.content,author:e.state.author,url:e.state.url,date:n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear()}]});e.setState({name:"",content:"",author:"",url:""})},e.state={name:"",content:"",author:"",url:""},e}return Object(L.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(I.a,{trigger:r.a.createElement("div",{style:{padding:"10px",backgroundColor:"#f3f3f3",borderRadius:"5px",cursor:"pointer"}},r.a.createElement("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",fill:"#3B77FA"}))),modal:!0,contentStyle:{width:"500px"}},(function(t){return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("h2",{style:{fontFamily:"Roboto",textAlign:"center",width:"90%"}},"Enter Details"),r.a.createElement(D.a,{onClick:t},r.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",fill:"black"})))),r.a.createElement("div",{className:"content",style:{padding:"20px"}},r.a.createElement("input",{placeholder:"Title",id:"name",name:"name",onChange:e.updateInput,value:e.state.name}),r.a.createElement("br",null)),r.a.createElement("div",{className:"content",style:{padding:"20px"}},r.a.createElement("textarea",{rows:"5",cols:"75",placeholder:"Content",id:"content",name:"content",onChange:e.updateInput,value:e.state.content}),r.a.createElement("br",null)),r.a.createElement("div",{className:"content",style:{padding:"20px"}},r.a.createElement("input",{placeholder:"Author Name",id:"name",name:"author",onChange:e.updateInput,value:e.state.author}),r.a.createElement("br",null)),r.a.createElement("div",{className:"content",style:{padding:"20px"}},r.a.createElement("input",{placeholder:"URL Link",id:"name",name:"url",onChange:e.updateInput,value:e.state.url}),r.a.createElement("br",null)),r.a.createElement("div",{className:"actions",style:{padding:"0 20px 10px"}},r.a.createElement(T.a,{variant:"contained",onClick:e.addUser,color:"primary",style:{backgroundColor:"#3265D5",width:"100%"}},"Save")))}))}}]),a}(r.a.Component);var V=Object(s.b)((function(e){return{data:e.slotTime.data,status:e.slotTime.status}}),(function(e){return{getSlotTime:function(){return e(j())}}}))((function(e){var t=e.data,a=(e.status,e.getSlotTime),l=Object(n.useState)(0),c=Object(x.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)([]),u=Object(x.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(""),f=Object(x.a)(p,2),g=(f[0],f[1],Object(n.useState)([])),h=Object(x.a)(g,2),E=h[0],v=h[1];return Object(n.useEffect)((function(){a()})),Object(n.useEffect)((function(){v(t[o])}),[o,t]),Object(n.useEffect)((function(){var e=[];t.map((function(t){e.push(t.name)})),e!==m&&d(e)}),[t]),Object(n.useEffect)((function(){}),[m]),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{margin:"20px 0"}},"Community Forum"),0===t.length?r.a.createElement("div",null,"Loading"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("h3",{style:{marginRight:"20px"}},t.length," topics"),r.a.createElement(R,null)),r.a.createElement("div",{className:"tags"},m.map((function(e,t){return r.a.createElement("div",{onClick:function(){return i(t)},tabIndex:"0",style:{cursor:"pointer"}},e)})))),r.a.createElement("div",null,E&&E.posts.map((function(e){return r.a.createElement("div",{className:"posts"},r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px"}},r.a.createElement("img",{alt:"profile",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAZlBMVEX///8AAAD29vaurq77+/vQ0NCioqIxMTHn5+fLy8vu7u7r6+tfX19aWlrj4+O8vLw6OjpQUFDd3d0/Pz9/f3+cnJxpaWkICAiVlZV4eHgoKCiOjo7X19cQEBC0tLQVFRVISEgfHx/8OVbkAAADu0lEQVR4nO2a2ZajIBCG2wUQjQtxSTSJy/u/5LQNLklHsdGiz8zwXSZ18JdaKMCPD4PBYDAYDAaDwWAwGP53bB/VGOcY18i3f01FhAvSWJyGhHn0KyrqxHolcVzNIty4/aaip421uscv3qroKQJ9MuLLooxPal0yrvOndgljLOnmP121yyAZPfcBYZ9pRjQLGWU8CvT0ByovGoU4w7NC+pqkLg2HPx1oGd6YF+9KhTvmkQcrw24lLzxMVwtbR7B03gchGFKGL2p5tmKTcZMEsp6JXAlXjULwnHEr/ojzqtWZG1Vwax6Ve6VHeAZJzNQp+QN8iZnPzUooGSJKC6khryKJTK8q3tZa6cDWsprHn3x4j8dzDKTjxiulfLp9XnVvQDpOywvLM2KZkQeSGuGmrO3JNpQ7ddjm2eYeZP+4jtPm8sQL3glIBx89lHcWdghaUPOv0Yl8QQ8IaAty/xq9oVJDyne9dyAdgbUxUHmYWlCdkMsDlUgNeVk/gTUgojuVrRuxBRoeY2Mh6cWHnh5q2f8YKojkTcWsQVWPHvrgz1hLGdE8PuRppc6wXyPLPYjoPbYsyzvgJeRz6VjKyYAJC6jiIRi2a9X7bhyJ2YDfaItQtS7O96yx6+HkATJIOV4qHmUVr5FIB41WCrzd74lGIVZaTzu78+wcM9VykjoTYnWsxDGNcck6S7OMT9eE1hqhBqcI8IqMXOeZMlqaEga3u36LG1dvVHRQW7g1aJY+nSsnN8glZQ2fOhlL0yRNWeZQjQfrb7A5v6rBYDD8bbh2gGKcX3tyHKPA1n1r2oOuRdrN6/qlS4ur3vXl7hBrCeLctUyLG9WsWVTR07R1BC7lXC5PxURVrl9J7IWud4RzQrgmIPp+m96QtGWMtSn57qsCqF2+vkhoyxrdPb7i294d1WX7IgbiSip+igt2o+9aDpve2NwsOTyPs9mrkgwt9z02us0UN1tOwbfjnaahH1h6H4Ufk/npwHYxnsatts30zIuXw3xTTx7Jt75dkE9KDvogZJIR/qQ6RVOtOeQw5DZO8E+Hq0d3HnAzNW5lk5+XpelkYPdZ6ugUpbifvmfaGSPx3pkdi/CurIkeO2XMwmvHamOHu2VMQjbcHy2RHRLuuRhFucQPZXTvIaQI1odqiIilrdp7cWCLk8RGrVsUXmn2t3hBt8Mz6MCiPKS/yuGZ8Ooxl8FiMJUbf95yVMc03h5Rjnie90e1mFi5ANj9IsUOO/jqPUPUMq/GR37SGmPtXy8bDAaDwWAwGAyK/AHW9yajz8Fb1QAAAABJRU5ErkJggg=="}),r.a.createElement("div",null,r.a.createElement("h3",null,e.author),r.a.createElement("p",null,e.date))),r.a.createElement("div",null,e.content),r.a.createElement("a",{href:e.url},"View Resource"),r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginTop:"20px"}},r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M2 42H10V18H2V42ZM46 20C46 17.79 44.21 16 42 16H29.37L31.28 6.86C31.32 6.66 31.35 6.45 31.35 6.23C31.35 5.4 31.01 4.65 30.47 4.11L28.34 2L15.17 15.17C14.45 15.9 14 16.9 14 18V38C14 40.21 15.79 42 18 42H36C37.66 42 39.08 40.99 39.68 39.56L45.71 25.46C45.89 25 46 24.51 46 24V20.17L45.98 20.15L46 20Z",fill:"black"})),r.a.createElement("span",{style:{marginLeft:"10px"}},"5 likes")))})))))}));function N(){return r.a.createElement("div",{style:{background:"#e7e7e7",textAlign:"center",padding:"20px 0",marginTop:"60px",width:"100%"}},r.a.createElement("div",null,"For Sales Enquiry"),r.a.createElement("div",null,"Contact: +1-484-753-392"),r.a.createElement("a",{href:"mailto:contact@fpoconnect.com"},"contact@fpoconnect.com"))}var P=function(){return function(e){e({type:"SLOTS_REQUESTED"});var t=[];O.collection("fpo").get().then((function(e){e.forEach((function(e){t.push({name:e.id,data:e.data()})}))})).then((function(){e({type:"SLOTS_RECEIVED",payload:t})})).catch((function(t){return e({type:"SLOTS_FAILED",payload:t})}))}},H=a(63),Q=a.n(H),M=a(118),U=a(9);function z(e){var t=Object(M.a)((function(e){return{search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(U.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(U.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%",display:"flex",flexDirection:"row",marginBottom:"30px"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}}))();return r.a.createElement("div",{className:t.search},r.a.createElement("input",{className:"search-bar",placeholder:"Search FPO...",value:e.value,onChange:function(t){e.onChange(t.target.value)},style:{padding:"0 15px",fontSize:16},id:"text"}),r.a.createElement("div",{className:"search-button"},r.a.createElement(D.a,null,r.a.createElement(Q.a,{style:{fontSize:37,alignSelf:"center",color:"#ffffff"},color:"disabled"}))))}var B=a(119);a(53);var Z=Object(s.b)((function(e){return{data:e.pfo.data,status:e.pfo.status}}),(function(e){return{getFPO:function(){return e(P())}}}))((function(e){var t=e.data,a=(e.status,e.getFPO),l=Object(n.useState)(""),c=Object(x.a)(l,2),i=c[0],s=c[1],u=Object(n.useState)([]),m=Object(x.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)([]),g=Object(x.a)(f,2),h=g[0],E=g[1];return Object(n.useEffect)((function(){console.log(a())}),[]),Object(n.useEffect)((function(){t!==d&&(console.log(t),p(t),E(t))}),[t]),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{margin:"20px 0"}},"Market Place"),r.a.createElement(z,{value:i,onChange:function(e){s(e),p(h.filter((function(t){return t.data.name.includes(e)})))}}),0===d.length?r.a.createElement("div",null,"Loading"):r.a.createElement("div",{style:{padding:"0 35px"}},d.map((function(e){return r.a.createElement(o.b,{to:"/details/".concat(e.name)},r.a.createElement("div",{className:"fpodesc",style:{backgroundColor:"#EDEDEB",boxShadow:"0px 1px 10px #999",padding:"30px",marginBottom:"30px",borderRadius:"5px",cursor:"pointer",textDecoration:"none"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:e.data.img,className:"fpo-img",style:{height:"150px",width:"150px",borderRadius:"50%",marginRight:"30px"}}),r.a.createElement("div",null,r.a.createElement("h2",{style:{marginBottom:"2px"}},e.data.name),r.a.createElement("p",{style:{margin:0,fontSize:"14px"}},e.data.Email),r.a.createElement(B.a,{name:"read-only",value:e.data.rating,precision:.25,readOnly:!0}),r.a.createElement("p",null,e.data.members," members"))),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("h3",null,"Product Listing"),r.a.createElement("ul",{style:{marginLeft:"30px"}},e.data.products.map((function(e){return r.a.createElement("li",null,e.name)}))))))}))))}));var q=Object(i.h)((function(){Object(i.f)();var e=Object(n.useState)({email:"",password:""}),t=Object(x.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)(!1),c=Object(x.a)(l,2),o=c[0],s=(c[1],function(e){var t=e.target.id,n=e.target.value;a((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(S.a)({},t,n))}))});return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"500px",boxShadow:"2px 1px 12px rgba(0, 0, 0, 0.15)",padding:"50px",margin:"150px auto",borderRadius:"10px"}},r.a.createElement("center",null,r.a.createElement("img",{src:v.a,alt:"Jan Dhan Logo"})),r.a.createElement("label",null,"User ID"),r.a.createElement("input",{type:"email",id:"email",onChange:s,style:{width:"100%"},placeholder:"admin@bank.com"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:s,style:{width:"100%"},placeholder:"password"}),r.a.createElement(T.a,{variant:"contained",color:"primary",style:{backgroundColor:"#3265D5",width:"100%"}},o?"Signing in..":"Login")))}));var G=Object(s.b)((function(e){return{data:e.pfo.data,status:e.pfo.status}}),(function(e){return{getFPO:function(){return e(P())}}}))((function(e){var t=e.data,a=(e.status,e.getFPO),l=Object(n.useState)([]),c=Object(x.a)(l,2),o=c[0],s=c[1],u=Object(i.g)("id").id,m=Object(n.useState)([]),d=Object(x.a)(m,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){console.log(a())}),[]),Object(n.useEffect)((function(){t!==p&&(console.log(t),f(t),console.log(t),console.log(t.filter((function(e){return e.name===u}))),s(t.filter((function(e){return e.name===u}))))}),[t]),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{margin:"20px 0"}},o[0]&&o[0].data.name),r.a.createElement("div",null,r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M24 4C16.27 4 10 10.27 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.27 31.73 4 24 4ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z",fill:"black"})),r.a.createElement("span",null,"Bazar Beria PO PS Kakdwip South 24 Parganas743374, Suryanagar, West Bengal")),r.a.createElement("p",null,"The average fish production potential was estimated at 250 kg/ha for reservoirs and about 350 kg/ha for wetlands. While reservoirs fisheries and freshwater aquaculture would be the two main pillars of growth, other types of water resources like floodplain and wetlands, irrigation canals, etc. need intervention to enhance production. Another major activity in the aquaculture sector is the cage/ pen culture in open waters, which needs localised and affordable solutions to engage more community members. Jaljeevika is working with the community to install affordable technologies to enhance fish production and productivity. Different strategies are adopted to ensure long term objective like promoting collectives for value chain development, micro-entrepreneurship development program, skill development program to motivate small scale farmers, research and policy advocacy to improvise sectoral growth etc."))}));var W=function(){return r.a.createElement(s.a,{store:h},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"main"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:w}),r.a.createElement(i.a,{exact:!0,path:"/community",component:V}),r.a.createElement(i.a,{exact:!0,path:"/market",component:Z}),r.a.createElement(i.a,{exact:!0,path:"/login",component:q}),r.a.createElement(i.a,{exact:!0,path:"/details/:id",component:G}))),r.a.createElement(N,null))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))},39:function(e,t,a){e.exports=a.p+"static/media/logo.7f1e3464.png"},49:function(e,t,a){},53:function(e,t,a){},77:function(e,t,a){e.exports=a(103)},82:function(e,t,a){},87:function(e,t,a){},99:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.d61b1e9e.chunk.js.map