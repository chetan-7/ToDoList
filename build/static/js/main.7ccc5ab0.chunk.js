(this.webpackJsonptracker=this.webpackJsonptracker||[]).push([[0],{12:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=(n(12),n(7)),a=n.n(o),s=n(9),i=n(5),d=n(2),l=(n(16),function(e){var t=e.onClick,n=e.color,r=e.text;return Object(c.jsx)("button",{onClick:t,style:{backgroundColor:n},className:"btn",children:r})});l.defaultProps={color:"red"};var j=l,u=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return Object(c.jsx)("div",{children:Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("h1",{children:[" ",t," "]}),Object(c.jsx)(j,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})})};u.defaultProps={title:"Task Tracker"};var b=u,h=n(8),O=function(e){var t=e.task,n=e.onDlete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(O,{task:e,onDlete:function(){return n(e.id)},onToggle:r},e.id)}))})},x=function(e){var t=e.onAdd,n=Object(r.useState)(""),o=Object(d.a)(n,2),a=o[0],s=o[1],i=Object(r.useState)(""),l=Object(d.a)(i,2),j=l[0],u=l[1],b=Object(r.useState)(!1),h=Object(d.a)(b,2),O=h[0],m=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:O}),s(""),u(""),m(!1)):alert("Text field is empty")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},placeholder:"Add Task"})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day n Time"}),Object(c.jsx)("input",{type:"text",value:j,onChange:function(e){return u(e.target.value)},placeholder:"Add Day n Time"})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",checked:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},f=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Metting at school",day:"Feb 6th at 1:30 pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2:30 pm",reminder:!1}]),l=Object(d.a)(a,2),j=l[0],u=l[1];return Object(c.jsxs)("div",{className:"div1",children:[Object(c.jsx)(b,{title:"Assignment tracker",onAdd:function(){return o(!n)},showAdd:n}),n&&Object(c.jsx)(x,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,n=Object(i.a)({id:t},e);u([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(c.jsx)(m,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!=e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No tasks to show"]})};a.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7ccc5ab0.chunk.js.map