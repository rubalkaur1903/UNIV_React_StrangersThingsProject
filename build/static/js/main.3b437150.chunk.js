(this.webpackJsonpuniv_react_strangersthingsproject=this.webpackJsonpuniv_react_strangersthingsproject||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(3),c=s.n(n),r=s(7),a=s(5),i=s(1),o=s(17),j=s.n(o),l=s(4),u=s(2),b=function(){var e=Object(r.a)(c.a.mark((function e(t){var s,n,r,a,i,o,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.url,n=t.method,r=t.token,a=t.body,e.prev=1,i={method:n?n.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},r&&(i.headers.Authorization="Bearer ".concat(r)),e.next=6,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT").concat(s),i);case 6:return o=e.sent,e.next=9,o.json();case 9:return(j=e.sent).error&&j.error,e.abrupt("return",j);case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),d=s(0),h=function(e){var t=e.post,s=e.children;return t?Object(d.jsxs)("div",{className:"single-post",children:[Object(d.jsx)("h3",{children:Object(d.jsxs)("b",{children:["Seller's Username: ",t.author.username]})}),Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:Object(d.jsx)("i",{children:t.title})})}),Object(d.jsxs)("div",{children:["Price: ",t.price?t.price:"[On Request]"]}),Object(d.jsxs)("div",{children:["Description: ",t.description]}),Object(d.jsxs)("div",{children:["Location: ",t.location?t.location:"[On Request]"]}),Object(d.jsxs)("div",{children:["Will Deliver? -- ",t.willDeliver?"yes":"no"]}),s]}):"Loading...."},p=function(e){var t=e.posts,s=(e.setPostId,e.token),n=e.fetchPosts,a=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({method:"DELETE",url:"/posts/".concat(t),token:s});case 2:return e.sent,e.next=5,n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[s?Object(d.jsx)(l.b,{className:"add-post-link",to:"/addpost",children:"Add Post"}):"",Object(d.jsx)("h1",{children:"Posts"}),t.map((function(e){return Object(d.jsxs)(h,{id:"posts",post:e,token:s,children:[Object(d.jsx)(l.b,{to:"/posts/".concat(e._id),children:"Details"}),e.isAuthor&&Object(d.jsx)("button",{onClick:function(){return a(e._id)},children:"Delete Post"})]},e._id)}))]})},O=function(e){var t=e.setToken,s=e.setUser,n=Object(i.useState)(""),o=Object(a.a)(n,2),j=o[0],l=o[1],h=Object(i.useState)(""),p=Object(a.a)(h,2),O=p[0],x=p[1],m=Object(u.f)(),f=Object(u.e)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{className:"inputs",onSubmit:function(){var e=Object(r.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,b({url:"/users/".concat(m.method),method:"POST",body:{user:{username:j,password:O}}});case 3:if(!(r=e.sent).data){e.next=13;break}return e.next=7,b({url:"/users/me",token:r.data.token});case 7:if(a=e.sent,t(r.data.token),s(a.data.username),r.data.token&&f.push("/"),O){e.next=13;break}throw"wrong username or password";case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(d.jsx)("input",{className:"inputs",type:"text",placeholder:"Enter Username",minLength:8,value:j,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("input",{className:"inputs",type:"password",placeholder:"Enter Password",minLength:8,value:O,onChange:function(e){return x(e.target.value)}}),Object(d.jsx)("button",{className:"btn-input",type:"submit",children:"Submit"})]})})},x=function(e){var t=e.username,s=e.token;return Object(d.jsxs)("div",{id:"welcome",children:[s?Object(d.jsx)("h1",{className:"title",children:"Strager's Things"}):Object(d.jsx)("h1",{className:"title",children:" Welcome to Strager's Things"}),s?Object(d.jsxs)("div",{className:"welcome-message",children:["Welcome! You are logged in as ",t,"!"]}):"",s?Object(d.jsx)(l.b,{className:"profile-link",to:"/profile",children:"View Profile"}):"",Object(d.jsx)("img",{className:"the-image",src:"https://images-na.ssl-images-amazon.com/images/I/610wb0SooJL.png",alt:"image of shopping online"})]})},m=function(e){var t=e.setToken;return Object(d.jsx)(l.b,{className:"main-link",to:"/",onClick:function(){return t("")},children:"LOGOUT"})},f=function(e){var t=Object(i.useState)(""),s=Object(a.a)(t,2),n=s[0],o=s[1],j=Object(i.useState)(""),l=Object(a.a)(j,2),h=l[0],p=l[1],O=Object(i.useState)(""),x=Object(a.a)(O,2),m=x[0],f=x[1],v=Object(i.useState)(""),g=Object(a.a)(v,2),k=g[0],S=g[1],y=Object(i.useState)(""),P=Object(a.a)(y,2),w=P[0],N=P[1],T=e.token,C=e.setPosts,D=Object(u.e)(),E=function(){var e=Object(r.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b({url:"/posts",method:"POST",body:{post:{title:n,price:h,description:m,location:k,willDeliver:w}},token:T});case 3:return e.sent,e.next=6,b({url:"/posts",token:T});case 6:s=e.sent,C(s.data.posts),o(""),p(""),f(""),s.data.posts&&D.push("/posts");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:T&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Add New Post"}),Object(d.jsxs)("form",{onSubmit:E,children:[Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("label",{children:"Title: "}),Object(d.jsx)("input",{type:"text",placeholder:"*title*",value:n,onChange:function(e){o(e.target.value)}})]}),Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("label",{children:"Price: "}),Object(d.jsx)("input",{type:"text",placeholder:"price",value:h,onChange:function(e){p(e.target.value)}})]}),Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("label",{children:"Description: "}),Object(d.jsx)("input",{type:"text",placeholder:"description",value:m,onChange:function(e){f(e.target.value)}})]}),Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("label",{children:"Location: "}),Object(d.jsx)("input",{type:"text",placeholder:"location",value:k,onChange:function(e){S(e.target.value)}})]}),Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("label",{children:"Will Deliver? "}),Object(d.jsxs)("select",{type:"text",value:w,onChange:function(e){return N(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Select"}),Object(d.jsx)("option",{value:"true",children:"Yes"}),Object(d.jsx)("option",{value:"false",children:"No"})]})]}),Object(d.jsx)("fieldset",{children:Object(d.jsx)("button",{className:"newpost-submit",type:"submit",children:"Submit"})})]})]})})},v=function(e){var t=e.post,s=e.token,n=e.fetchPosts,o=Object(u.f)().postId,j=Object(i.useState)(""),l=Object(a.a)(j,2),h=l[0],p=l[1],O=function(){var e=Object(r.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b({method:"POST",url:"/posts/".concat(o,"/messages"),token:s,body:{message:{content:h}}});case 3:return r=e.sent,p(r.data.message.content),e.next=7,n();case 7:p("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[s&&!t.isAuthor?Object(d.jsxs)("form",{onSubmit:O,children:[Object(d.jsx)("input",{value:h,placeholder:"content",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Send Message"})]}):"",t.isAuthor&&t.messages.length?Object(d.jsxs)("form",{onSubmit:O,children:[Object(d.jsx)("input",{value:h,placeholder:"content",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Send Message"})]}):""]})},g=function(e){var t=e.posts,s=e.token,n=e.fetchPosts,c=Object(u.f)().postId;console.log("postId",c);var r=t.find((function(e){return e._id===c}));return console.log("post: ",r),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(h,{post:r,children:[r&&r.messages&&r.messages.map((function(e){return Object(d.jsxs)("div",{children:[e.fromUser.username,": ",e.content]},e._id)})),Object(d.jsx)(v,{post:r,token:s,fetchPosts:n})]})})},k=function(e){var t=e.token,s=e.messages,n=e.user,a=e.setMesaages,i=Object(u.e)(),o=function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({url:"/users/me",token:t});case 2:s=e.sent,a(s.data.messages);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t||i.push("/"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"My Profile"}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),o()},children:Object(d.jsx)("button",{type:"submit",children:"Click for Messages"})}),Object(d.jsx)("h2",{children:"Sent Messages"}),t?s.map((function(e,t){return Object(d.jsx)("div",{children:n===e.fromUser.username?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Product Title: "}),'"',e.post.title,'" ']}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Product ID: "}),e.post._id]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Message Sent by Me: "}),e.content]}),Object(d.jsx)("hr",{})]})}):""},t)})):"",Object(d.jsx)("h2",{children:"Received Messages"}),t?s.map((function(e,t){return Object(d.jsx)("div",{children:n!==e.fromUser.username?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Product Title: "}),'"',e.post.title,'" ']}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Product ID: "}),e.post._id]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Message: "}),e.content]}),Object(d.jsx)("hr",{})]}):""},t)})):""]})},S=function(e){var t=e.posts,s=e.setPosts,n=e.fetchPosts,c=Object(i.useState)(""),r=Object(a.a)(c,2),o=r[0],j=r[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),function(){var e=t.filter((function(e){return function(e,t){return e.includes(t)}(e.title.toLowerCase(),o)}));s(e),o.length||n()}()},children:[Object(d.jsx)("input",{type:"text",placeholder:"search by title",className:"search-input",value:o,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"search-btn",children:"Search"})]})})},y=(s(33),function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),s=t[0],n=t[1],o=Object(i.useState)(""),j=Object(a.a)(o,2),h=j[0],v=j[1],y=Object(i.useState)(""),P=Object(a.a)(y,2),w=P[0],N=P[1],T=Object(i.useState)(""),C=Object(a.a)(T,2),D=(C[0],C[1]),E=Object(i.useState)([]),I=Object(a.a)(E,2),M=I[0],L=I[1],_=function(){var e=Object(r.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({url:"/posts",token:h});case 2:t=e.sent,(s=t.data.posts)&&n(s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){try{_()}catch(e){console.log(e)}}),[h]),Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{id:"container",children:[Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)(l.b,{className:"main-link",to:"/",children:"HOME"}),Object(d.jsx)(l.b,{className:"main-link",to:"/posts",children:"POSTS"}),h&&Object(d.jsx)(l.b,{className:"main-link",to:"/profile",children:"PROFILE"}),h?Object(d.jsx)(m,{setToken:v}):Object(d.jsx)(l.b,{className:"main-link",to:"/account/:method",children:"LOGIN/REGISTER"})]}),Object(d.jsx)(u.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{username:w,token:h,posts:s})}),Object(d.jsxs)(u.a,{exact:!0,path:"/posts",children:[Object(d.jsx)(S,{posts:s,setPosts:n,fetchPosts:_}),Object(d.jsx)(p,{posts:s,token:h,fetchPosts:_,setPostId:D})]}),Object(d.jsx)(u.a,{exact:!0,path:"/addpost",children:Object(d.jsx)(f,{token:h,setPosts:n})}),Object(d.jsx)(u.a,{exact:!0,path:"/posts/:postId",children:Object(d.jsx)(g,{posts:s,token:h,fetchPosts:_})}),Object(d.jsx)(u.a,{exact:!0,path:"/profile",children:Object(d.jsx)(k,{token:h,messages:M,setMesaages:L,user:w})}),Object(d.jsxs)(u.a,{exact:!0,path:"/account/:method",children:[Object(d.jsx)(l.b,{className:"links",to:"/account/login",children:"Login"}),Object(d.jsx)(l.b,{className:"links",to:"/account/register",children:"Register"}),Object(d.jsx)(O,{setToken:v,setUser:N})]})]})})});j.a.render(Object(d.jsx)(y,{}),document.getElementById("app"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3b437150.chunk.js.map