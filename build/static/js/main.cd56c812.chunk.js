(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(t,e,o){},30:function(t,e,o){"use strict";o.r(e);var c=o(1),a=o.n(c),n=o(9),l=o.n(n),s=(o(22),o(8)),r=o(11),i=o(2);var d={todos:function(){if(localStorage.getItem("todos"))return JSON.parse(localStorage.getItem("todos"));var t=[{id:"1",text:"This is an example todo! Have Fun",completed:!1}];return localStorage.setItem("todos",JSON.stringify(t)),t}(),currentTodo:null,counts:function(){if(localStorage.getItem("counts"))return JSON.parse(localStorage.getItem("counts"));var t={all:1,completed:0,left:1};return localStorage.setItem("counts",JSON.stringify(t)),t}(),filters:{showCompleted:!0,showLeft:!0}};var u=Object(s.combineReducers)({todosState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"todos/addTodo":return Object(i.a)(Object(i.a)({},t),{},{todos:[].concat(Object(r.a)(t.todos),[e.payload]),counts:Object(i.a)(Object(i.a)({},t.counts),{},{all:t.counts.all+1,left:t.counts.left+1})});case"todos/toggleCompleted":return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==e.payload.id?t:Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed})})),counts:Object(i.a)(Object(i.a)({},t.counts),{},{left:e.payload.leftCount,completed:e.payload.completedCount})});case"todos/deleteTodo":return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.payload})),counts:Object(i.a)(Object(i.a)({},t.counts),{},{all:t.counts.all-1,completed:t.todos.reduce((function(t,o){return o.completed&&o.id!==e.payload?t+1:t}),0),left:t.todos.reduce((function(t,o){return o.completed||o.id===e.payload?t:t+1}),0)})});case"todos/setCurrentTodo":return Object(i.a)(Object(i.a)({},t),{},{currentTodo:e.payload});case"todos/editTodo":return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==e.payload.id?t:e.payload})),currentTodo:null});case"todos/clearAll":return Object(i.a)(Object(i.a)({},t),{},{todos:[],counts:Object(i.a)(Object(i.a)({},t.counts),{},{all:0,completed:0,left:0})});case"todos/completeAll":return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{completed:!0})})),counts:Object(i.a)(Object(i.a)({},t.counts),{},{completed:t.counts.all,left:0})});case"todos/toggleShowCompleted":return Object(i.a)(Object(i.a)({},t),{},{filters:Object(i.a)(Object(i.a)({},t.filters),{},{showCompleted:!t.filters.showCompleted})});case"todos/toggleShowLeft":return Object(i.a)(Object(i.a)({},t),{},{filters:Object(i.a)(Object(i.a)({},t.filters),{},{showLeft:!t.filters.showLeft})});default:return t}}}),j=o(17),p=Object(s.createStore)(u,Object(j.composeWithDevTools)()),f=o(7),m=o(10),b=o(3),O=o(4),h=o(6),g=o(5),x=function(t){return t.text.length>30&&(t.text=t.text.slice(30)+"..."),function(t){var e=JSON.parse(localStorage.getItem("todos")),o=JSON.parse(localStorage.getItem("counts"));localStorage.setItem("todos",JSON.stringify([].concat(Object(r.a)(e),[t]))),localStorage.setItem("counts",JSON.stringify(Object(i.a)(Object(i.a)({},o),{},{all:o.all+1})))}(t),{type:"todos/addTodo",payload:t}},S=function(t){var e=function(t){var e=JSON.parse(localStorage.getItem("todos")),o=JSON.parse(localStorage.getItem("counts"));e=e.map((function(e){return e.id!==t?e:Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed})})),localStorage.setItem("todos",JSON.stringify(e));var c=e.reduce((function(t,e){return e.completed?t+1:t}),0),a=e.reduce((function(t,e){return e.completed?t:t+1}),0);return localStorage.setItem("counts",JSON.stringify(Object(i.a)(Object(i.a)({},o),{},{left:a,completed:c}))),{completedCount:c,leftCount:a}}(t);return{type:"todos/toggleCompleted",payload:{id:t,completedCount:e.completedCount,leftCount:e.leftCount}}},C=function(t){return function(t){var e=JSON.parse(localStorage.getItem("todos")),o=JSON.parse(localStorage.getItem("counts"));localStorage.setItem("todos",JSON.stringify(e.filter((function(e){return e.id!==t})))),localStorage.setItem("counts",JSON.stringify(Object(i.a)(Object(i.a)({},o),{},{all:o.all-1,completed:e.reduce((function(e,o){return o.completed&&o.id!==t?e+1:e}),0),left:e.reduce((function(e,o){return o.completed||o.id===t?e:e+1}),0)})))}(t),{type:"todos/deleteTodo",payload:t}},v=function(t){return{type:"todos/setCurrentTodo",payload:t}},y=function(t){return{type:"todos/editTodo",payload:t}},N=function(){return localStorage.setItem("todos",JSON.stringify([])),localStorage.setItem("counts",JSON.stringify({all:0,completed:0,left:0})),{type:"todos/clearAll"}},k=function(){return function(){var t=JSON.parse(localStorage.getItem("todos")),e=JSON.parse(localStorage.getItem("counts"));localStorage.setItem("todos",JSON.stringify(t.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{completed:!0})})))),localStorage.setItem("counts",JSON.stringify(Object(i.a)(Object(i.a)({},e),{},{completed:e.all,left:0})))}(),{type:"todos/completeAll"}},w=o(32),T=o(0),I=function(t){Object(h.a)(o,t);var e=Object(g.a)(o);function o(){var t;Object(b.a)(this,o);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={todoText:""},t.onFormChange=function(e){return t.setState(Object(m.a)({},e.target.name,e.target.value))},t.onFormSubmit=function(e){e.preventDefault();var o=t.props.currentTodo;o?p.dispatch(y({id:o.id,text:t.state.todoText,completed:o.completed})):(p.dispatch(x({id:Object(w.a)(),text:t.state.todoText,completed:!1})),p.dispatch(v(null))),t.setState({todoText:""})},t}return Object(O.a)(o,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){t.currentTodo&&this.setState({todoText:t.currentTodo.text})}},{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsxs)("form",{className:"todo-form",onSubmit:this.onFormSubmit,children:[Object(T.jsx)("input",{type:"text",name:"todoText",id:"todoText",className:"todo-input",placeholder:"Your Todo...",required:!0,autoComplete:"off",value:this.state.todoText,onChange:this.onFormChange}),Object(T.jsx)("input",{type:"submit",value:this.props.currentTodo?"Edit":"Add",className:"btn btn-block btn-primary"})]})})}}]),o}(c.Component),J=Object(f.b)((function(t){return{currentTodo:t.todosState.currentTodo}}))(I),A=function(t){Object(h.a)(o,t);var e=Object(g.a)(o);function o(){var t;Object(b.a)(this,o);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).onCompletedClick=function(){return p.dispatch(S(t.props.id))},t.onDeleteClick=function(){return p.dispatch(C(t.props.id))},t.onEditClick=function(){var e=t.props,o={id:e.id,text:e.text,completed:e.completed};p.dispatch(v(o))},t}return Object(O.a)(o,[{key:"render",value:function(){var t=this.props,e=t.text,o=t.completed;return Object(T.jsxs)("div",{className:"todo-field",children:[Object(T.jsx)("i",{onClick:this.onCompletedClick,className:o?"fas fa-check-circle checkbox":"far fa-check-circle checkbox"}),Object(T.jsx)("h2",{className:"todo-text",children:e}),Object(T.jsx)("i",{onClick:this.onEditClick,className:"fas fa-pen todo-edit"}),Object(T.jsx)("i",{onClick:this.onDeleteClick,className:"fas fa-minus-circle todo-delete"})]})}}]),o}(c.Component),L=function(t){Object(h.a)(o,t);var e=Object(g.a)(o);function o(){return Object(b.a)(this,o),e.apply(this,arguments)}return Object(O.a)(o,[{key:"render",value:function(){var t=this.props.todos,e=this.props.filters,o=e.showCompleted,c=e.showLeft;return Object(T.jsx)(a.a.Fragment,{children:t.map((function(t){return t.completed&&o||!t.completed&&c?Object(T.jsx)(A,{id:t.id,text:t.text,completed:t.completed},t.id):null}))})}}]),o}(c.Component),F=Object(f.b)((function(t){return{todos:t.todosState.todos,filters:t.todosState.filters}}))(L),D=function(t){Object(h.a)(o,t);var e=Object(g.a)(o);function o(){return Object(b.a)(this,o),e.apply(this,arguments)}return Object(O.a)(o,[{key:"render",value:function(){var t=this.props.counts,e=t.all,o=t.completed,c=t.left;return Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{className:"filter-lead",children:"Todos"}),Object(T.jsxs)("ul",{className:"list list-info",children:[Object(T.jsxs)("li",{className:"list-info-item",children:["All: ",e]}),Object(T.jsxs)("li",{className:"list-info-item",children:["Completed: ",o]}),Object(T.jsxs)("li",{className:"list-info-item",children:["Not Completed: ",c]})]})]})}}]),o}(c.Component),E=Object(f.b)((function(t){return{counts:t.todosState.counts}}))(D),M=function(t){Object(h.a)(o,t);var e=Object(g.a)(o);function o(){var t;Object(b.a)(this,o);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).onClearClick=function(){return p.dispatch(N())},t.onCompleteClick=function(){return p.dispatch(k())},t}return Object(O.a)(o,[{key:"render",value:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{className:"filter-lead",children:"Modifiers"}),Object(T.jsxs)("ul",{className:"list list-modifiers",children:[Object(T.jsx)("li",{className:"list-modifiers-item",onClick:this.onCompleteClick,children:"Mark All Completed"}),Object(T.jsx)("li",{className:"list-modifiers-item",onClick:this.onClearClick,children:"Clear All"})]})]})}}]),o}(c.Component),P=function(t){Object(h.a)(o,t);var e=Object(g.a)(o);function o(){var t;Object(b.a)(this,o);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).state={showCompleted:!0,showLeft:!0},t.onShowCompletedClick=function(){t.setState({showCompleted:!t.state.showCompleted}),p.dispatch({type:"todos/toggleShowCompleted"})},t.onShowLeftClick=function(){t.setState({showLeft:!t.state.showLeft}),p.dispatch({type:"todos/toggleShowLeft"})},t}return Object(O.a)(o,[{key:"render",value:function(){var t=this.state,e=t.showCompleted,o=t.showLeft;return Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{className:"filter-lead",children:"Filters"}),Object(T.jsxs)("ul",{className:"list list-filters",children:[Object(T.jsxs)("li",{className:"list-filter-item",children:[Object(T.jsx)("i",{onClick:this.onShowCompletedClick,className:e?"fas fa-check-circle checkbox":"far fa-check-circle checkbox"})," ","Show Completed"]}),Object(T.jsxs)("li",{className:"list-filter-item",children:[Object(T.jsx)("i",{onClick:this.onShowLeftClick,className:o?"fas fa-check-circle checkbox":"far fa-check-circle checkbox"})," ","Show Not Completed"]})]})]})}}]),o}(c.Component);function W(){return Object(T.jsxs)("div",{className:"settings-container",children:[Object(T.jsx)(E,{}),Object(T.jsx)(M,{}),Object(T.jsx)(P,{})]})}var B=function(){return Object(T.jsx)(f.a,{store:p,children:Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)("div",{className:"card main-card",children:[Object(T.jsxs)("div",{className:"card-left",children:[Object(T.jsx)("div",{className:"card-header",children:Object(T.jsx)("h1",{children:"What's on your mind?"})}),Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsx)(J,{}),Object(T.jsx)(F,{})]})]}),Object(T.jsx)("div",{className:"card-right",children:Object(T.jsx)(W,{})})]})})})},R=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,33)).then((function(e){var o=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,l=e.getTTFB;o(t),c(t),a(t),n(t),l(t)}))};l.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(B,{})}),document.getElementById("root")),R()}},[[30,1,2]]]);
//# sourceMappingURL=main.cd56c812.chunk.js.map