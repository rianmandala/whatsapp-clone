(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(29),i=a.n(n),r=(a(56),a(14)),o=(a(57),a(96)),j=a(87),d=a(88),l=a(89),h=a(90),u=a(91),b=a(28),p=a(3),O=Object(c.createContext)(),m=function(e){var t=e.children,a=e.initialState,s=e.reducer;return Object(p.jsx)(O.Provider,{value:Object(c.useReducer)(s,a),children:t})},x=a(26),f=x.a.initializeApp({apiKey:"AIzaSyCG76lY8SdZaU3_eMijX4wTsMDaDhccp48",authDomain:"whatsapp-clone-bbf79.firebaseapp.com",projectId:"whatsapp-clone-bbf79",storageBucket:"whatsapp-clone-bbf79.appspot.com",messagingSenderId:"270397991461",appId:"1:270397991461:web:25298117f42464ff892dcc"}),g=f.firestore(),v=f.auth(),_=new x.a.auth.GoogleAuthProvider;a(62);var N=function(e){var t,a=e.addNewChat,s=e.name,n=e.idGroup,i=Object(c.useState)([]),j=Object(r.a)(i,2),d=j[0],l=j[1];return Object(c.useEffect)((function(e){if(n){var t=g.collection("groups").doc(n).collection("chats").orderBy("timestamp","asc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}}))),console.log(d)}));return function(){t()}}}),[]),a?Object(p.jsx)("div",{onClick:function(){var e=prompt("Please enter name for room chat");e&&g.collection("groups").add({name:e,timestamp:x.a.firestore.FieldValue.serverTimestamp()})},className:"sidebar-chat",children:Object(p.jsx)("h2",{children:"Create new room chat"})}):Object(p.jsxs)("div",{className:"sidebar-chat",children:[s&&Object(p.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(s,".svg")}),Object(p.jsxs)("div",{className:"sidebar-chat__info",children:[Object(p.jsx)("h2",{children:s}),Object(p.jsx)("p",{children:d.length>0&&(null===(t=d[d.length-1])||void 0===t?void 0:t.data.message)})]})]})};a(67);var S=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useContext)(O),i=Object(r.a)(n,2),m=i[0].user;return i[1],Object(c.useEffect)((function(){var e=g.collection("groups").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebar__header",children:[Object(p.jsx)(o.a,{src:m.photoURL}),Object(p.jsxs)("div",{className:"sidebar__header-right",children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(l.a,{})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(h.a,{})})]})]}),Object(p.jsx)("div",{className:"sidebar__search",children:Object(p.jsxs)("div",{className:"sidebar__search-container",children:[Object(p.jsx)(u.a,{className:"sidebar__search-icon"}),Object(p.jsx)("form",{children:Object(p.jsx)("input",{placeholder:"Search group",type:"text"})})]})}),Object(p.jsxs)("div",{className:"sidebar__chat",children:[Object(p.jsx)(N,{addNewChat:!0}),a.map((function(e){return Object(p.jsx)(b.b,{to:"/groups/".concat(e.id),children:Object(p.jsx)(N,{name:e.data.name,idGroup:e.id})},e.id)}))]})]})},w=a(92),C=a(93),y=a(94),D=a(10),I=a.p+"static/media/bg-wa-chat.7e014094.jpg";a(71);var E=function(){var e,t,a,s=Object(c.useState)(""),n=Object(r.a)(s,2),i=n[0],d=n[1],l=Object(c.useState)([]),b=Object(r.a)(l,2),m=b[0],f=b[1],v=Object(c.useState)(""),_=Object(r.a)(v,2),N=_[0],S=_[1],E=Object(D.f)().id,k=Object(c.useContext)(O),F=Object(r.a)(k,2),L=F[0].user;return F[1],Object(c.useEffect)((function(e){var t=g.collection("groups").doc(E).collection("chats").orderBy("timestamp","asc").onSnapshot((function(e){f(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})),a=g.collection("groups").doc(E).onSnapshot((function(e){S(e.data().name)}));return function(){t(),a()}}),[E]),Object(p.jsxs)("div",{className:"chat",children:[Object(p.jsxs)("div",{className:"chat__header",children:[Object(p.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(N,".svg")}),Object(p.jsxs)("div",{className:"chat__header-info",children:[Object(p.jsx)("h3",{children:N}),Object(p.jsx)("p",{children:m.length>0&&new Date(null===(e=m[m.length-1])||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.timestamp)||void 0===a?void 0:a.toDate()).toLocaleDateString()})]}),Object(p.jsxs)("div",{className:"chat__header-right",children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(u.a,{})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(w.a,{})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(h.a,{})})]})]}),Object(p.jsx)("div",{className:"chat__body",style:{background:I},children:m.map((function(e){var t,a;return Object(p.jsx)("div",{className:"chat__message-container ".concat(e.data.authorEmail==L.email&&"chat__message-container-receiver"),children:Object(p.jsxs)("div",{className:"chat__message-wrapper",children:[Object(p.jsx)("span",{className:"chat__name",children:e.data.authorName}),Object(p.jsx)("p",{className:"chat__message",children:e.data.message}),Object(p.jsx)("span",{className:"chat__timestamp",children:new Date(null===(t=e.data)||void 0===t||null===(a=t.timestamp)||void 0===a?void 0:a.toDate()).toLocaleDateString()})]})},e.id)}))}),Object(p.jsxs)("div",{className:"chat__footer",children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(C.a,{})}),Object(p.jsx)("form",{onSubmit:function(e){i.trim()&&g.collection("groups").doc(E).collection("chats").add({message:i,authorName:L.displayName,authorEmail:L.email,timestamp:x.a.firestore.FieldValue.serverTimestamp()}),d(""),e.preventDefault()},children:Object(p.jsx)("input",{value:i,onChange:function(e){return d(e.target.value)},placeholder:"message",type:"text"})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(y.a,{})})]})]})},k=(a(72),a.p+"static/media/whatsapp-logo.4ba01ee1.png"),F=a(95),L=a(41),P={user:JSON.parse(localStorage.getItem("user"))},T="SET_USER";var B=function(){var e=Object(c.useContext)(O),t=Object(r.a)(e,2),a=(t[0],t[1]);return Object(p.jsx)("div",{className:"login",children:Object(p.jsxs)("div",{className:"login__container",children:[Object(p.jsx)("img",{className:"login__whatsapp-logo",src:k,alt:"Whatsapp Logo"}),Object(p.jsx)("h1",{children:"Sign in to whatsapp"}),Object(p.jsx)(F.a,{onClick:function(e){v.signInWithPopup(_).then((function(e){var t;console.log(e.user),a((t=e.user,{type:T,user:t}))})).catch((function(e){return console.log(e)}))},children:"Sign in with google"})]})})};var G=function(){var e=Object(c.useContext)(O),t=Object(r.a)(e,2),a=t[0].user;return t[1],Object(p.jsx)("div",{className:"app",children:a?Object(p.jsx)("div",{className:"app__body",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(D.c,{children:[Object(p.jsx)(D.a,{exact:!0,path:"/",children:Object(p.jsx)(S,{})}),Object(p.jsxs)(D.a,{path:"/groups/:id",children:[Object(p.jsx)(S,{}),Object(p.jsx)(E,{})]})]})})}):Object(p.jsx)(B,{})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(m,{initialState:P,reducer:function(e,t){switch(t.type){case T:return localStorage.setItem("user",JSON.stringify(t.user)),Object(L.a)(Object(L.a)({},e),{},{user:t.user});default:return e}},children:Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(G,{})})}),document.getElementById("root")),J()}},[[73,1,2]]]);
//# sourceMappingURL=main.1b4bd3b7.chunk.js.map