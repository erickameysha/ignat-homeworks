(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={wrapper:"Message_wrapper__1JEwj",img:"Message_img__DT5Lq",content:"Message_content__1vT6S",name:"Message_name__15tmJ",message:"Message_message__3FG_E",time:"Message_time__3Bg2d",egle:"Message_egle__14sqv"}},,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2FvLo",errorInput:"SuperInputText_errorInput__8KEZe",error:"SuperInputText_error__ms9eA"}},,function(e,t,n){e.exports={blue:"HW4_blue__18ctL",column:"HW4_column__1JtV7",testSpanError:"HW4_testSpanError__3O3IX"}},function(e,t,n){e.exports={default:"SuperButton_default__3yUaz",red:"SuperButton_red__kPfGz"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2jHKE",spanClassName:"SuperCheckbox_spanClassName__3upUp"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__31iel",error:"Greeting_error__3aj83"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(16),a=n.n(s),j=(n(23),n(24),n(8)),i=n(0);var o=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:"404"}),Object(i.jsx)("div",{children:"Page not found!"}),Object(i.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},l=n(7),b=n.n(l);var u=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:b.a.wrapper,children:[Object(i.jsx)("img",{className:b.a.img,src:e.avatar,alt:""}),Object(i.jsx)("div",{className:b.a.egle,children:Object(i.jsx)("svg",{width:"24",height:"19",viewBox:"0 0 24 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M0.153427 18.6688L23.474 0.982594L23.4055 18.9652L0.153427 18.6688Z",fill:"#871010"})})}),Object(i.jsxs)("div",{className:b.a.content,children:[Object(i.jsx)("div",{className:b.a.name,children:e.name}),Object(i.jsx)("div",{className:b.a.message,children:e.message}),Object(i.jsx)("div",{className:b.a.time,children:e.time})]})]})})},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",h="glrrlrrllrlrlrrl",x="22:00";var p=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),"homeworks 1",Object(i.jsx)(u,{avatar:d,name:O,message:h,time:x}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{})]})};var m=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(p,{})})},f=n(3);var v=function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:e.affair.name}),"  ",Object(i.jsxs)("span",{children:["[",e.affair.priority,"]"]})," ",Object(i.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})," "]})};var g=function(e){var t=e.data.map((function(t){return Object(i.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("ul",{className:"affair",children:t}),Object(i.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(i.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(i.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(i.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var _=function(){var e=Object(c.useState)(C),t=Object(f.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)("all"),a=Object(f.a)(s,2),j=a[0],o=a[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority==t}))}(n,j);return Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),"homeworks 2",Object(i.jsx)(g,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))},filter:j}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{})]})},k=n(18),N=n(17),S=n.n(N),y=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,s=e.totalUsers,a=e.onClickEnter,j=r?S.a.error:"";return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{value:t,onChange:n,onKeyPress:a,className:j}),Object(i.jsx)("button",{disabled:!!r,onClick:c,children:"add"}),Object(i.jsx)("span",{children:s})]}),Object(i.jsx)("span",{children:r})]})},w=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),s=Object(f.a)(r,2),a=s[0],j=s[1],o=Object(c.useState)("\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),l=Object(f.a)(o,2),b=l[0],u=l[1],d=function(){n(a),alert("Hello  ".concat(a," !")),j(""),u("\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")},O=t.length;return Object(i.jsx)(y,{name:a,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(j(t),b&&u("")):(a&&j(""),u("\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")),console.log(b)},onClickEnter:function(e){"Enter"===e.key&&d()},addUser:d,error:b,totalUsers:O})},E=n(29);var F=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),"homeworks 3",Object(i.jsx)(w,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};r([].concat(Object(k.a)(n),[t]))}}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{})]})},T=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{}),Object(i.jsx)(_,{}),Object(i.jsx)(F,{})]})},I=n(4),P=n(6),J=n(11),A=n.n(J),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,s=e.error,a=(e.className,e.spanClassName,Object(P.a)(e,B)),j=s?A.a.error:"",o=s?A.a.errorInput:A.a.superInput;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:o},a)),s&&Object(i.jsx)("span",{className:j,children:s})]})},L=n(13),U=n.n(L),H=n(14),K=n.n(H),D=["red","className"],G=function(e){var t=e.red,n=(e.className,Object(P.a)(e,D)),c=t?K.a.red:K.a.default;return Object(i.jsx)("button",Object(I.a)({className:c},n))},W=n(15),q=n.n(W),z=["type","onChange","onChangeChecked","className","spanClassName","children"],X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),s=Object(P.a)(e,z),a="".concat(q.a.checkbox," ").concat(c||"");return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:a},s)),r&&Object(i.jsx)("span",{className:q.a.spanClassName,children:r})]})};var Z=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],s=n?"":"error",a=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},j=Object(c.useState)(!1),o=Object(f.a)(j,2),l=o[0],b=o[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),"homeworks 4",Object(i.jsxs)("div",{className:U.a.column,children:[Object(i.jsx)(M,{value:n,onChangeText:r,onEnter:a,error:s}),Object(i.jsx)(M,{className:U.a.blue}),Object(i.jsx)(G,{children:"default"}),Object(i.jsx)(G,{red:!0,onClick:a,children:"delete "}),Object(i.jsx)(G,{disabled:!0,children:"disabled"}),Object(i.jsx)(X,{checked:l,onChangeChecked:b,children:"some text "}),Object(i.jsx)(X,{checked:l,onChange:function(e){return b(e.currentTarget.checked)}})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{})]})},R=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{}),Object(i.jsx)(_,{}),Object(i.jsx)(F,{}),Object(i.jsx)(Z,{})]})},V=n(2),Y="/pre-junior",Q="/junior",$="/junior-plus";var ee=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(V.d,{children:[Object(i.jsx)(V.b,{path:"/",element:Object(i.jsx)(V.a,{to:Y})}),Object(i.jsx)(V.b,{path:Y,element:Object(i.jsx)(m,{})}),Object(i.jsx)(V.b,{path:Q,element:Object(i.jsx)(T,{})}),Object(i.jsx)(V.b,{path:$,element:Object(i.jsx)(R,{})}),"// add routes",Object(i.jsx)(V.b,{path:"/*",element:Object(i.jsx)(o,{})})]})})};n(26);var te=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{className:"mainmenubtn",children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"}),Object(i.jsxs)("div",{className:"dropdownChild",children:[Object(i.jsxs)("a",{children:[" ",Object(i.jsx)(j.b,{to:Y,children:"Pre-Junior"})]}),Object(i.jsxs)("a",{children:["  ",Object(i.jsx)(j.b,{to:Q,children:"Junior"})]}),Object(i.jsxs)("a",{children:["  ",Object(i.jsx)(j.b,{to:$,children:"Junior+++"})]})]})]})})};var ne=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(j.a,{children:[Object(i.jsx)(te,{}),Object(i.jsx)(ee,{})]})})},ce=["autoFocus","onBlur","onEnter","spanProps"],re=["children","onDoubleClick","className"],se=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,s=Object(P.a)(e,ce),a=Object(c.useState)(!1),j=Object(f.a)(a,2),o=j[0],l=j[1],b=r||{},u=b.children,d=b.onDoubleClick,O=b.className,h=Object(P.a)(b,re),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(i.jsx)(i.Fragment,{children:o?Object(i.jsx)(M,Object(I.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},s)):Object(i.jsxs)("span",Object(I.a)(Object(I.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},h),{},{children:["\u270e  ",u||s.value]}))})};function ae(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function je(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}ae("test",{x:"A",y:1});je("test",{x:"",y:0});var ie=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),"homeworks 6",Object(i.jsx)("div",{children:Object(i.jsx)(se,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(i.jsx)(G,{onClick:function(){ae("editable-span-value",n)},children:"save"}),Object(i.jsx)(G,{onClick:function(){r(je("editable-span-value",n))},children:"restore"}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{})]})},oe=["options","onChange","onChangeOption"],le=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(P.a)(e,oe),s=t?t.map((function(e,t){return Object(i.jsx)("option",{value:e,children:e},e+" -"+t)})):[];return Object(i.jsx)("select",Object(I.a)(Object(I.a)({onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},be=["type","name","options","value","onChange","onChangeOption"],ue=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,s=e.onChangeOption,a=Object(P.a)(e,be),j=function(e){r&&r(e),s&&s(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(i.jsxs)("label",{children:[Object(i.jsx)("input",Object(I.a)({type:"radio",name:t,checked:e===c,value:e,onChange:j},a)),e]},t+"-"+n)})):[];return Object(i.jsx)(i.Fragment,{children:o})},de=["x","y","z"];var Oe=function(){var e=Object(c.useState)(de[1]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("hr",{}),"homeworks 7",Object(i.jsx)("div",{children:Object(i.jsx)(le,{options:de,value:n,onChangeOption:r})}),Object(i.jsx)("div",{children:Object(i.jsx)(ue,{name:"radio",options:de,value:n,onChangeOption:r})}),Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{})]})};var he=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(ne,{}),Object(i.jsx)(ie,{}),Object(i.jsx)(Oe,{})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(he,{})}),document.getElementById("root")),xe()}],[[27,1,2]]]);
//# sourceMappingURL=main.86c515c7.chunk.js.map