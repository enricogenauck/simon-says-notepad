(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=(n(72),n(26)),s=n(27),l=n(30),u=n(28),m=n(16),d=n(29),E=(n(73),n(60));var v=function(e){var t=e.addEntry,n=e.color,a=e.position;return r.a.createElement("button",{className:"diamond-button-"+a+" "+n,onMouseDown:function(){return t(n)},onTouchStart:function(){return t(n)}})};n(85);var f=function(e){var t=e.addEntry;return r.a.createElement("div",{className:"diamond"},r.a.createElement("div",{className:"diamond-button-wrapper"},r.a.createElement(v,{color:"blue",position:"1",addEntry:t}),r.a.createElement(v,{color:"yellow",position:"2",addEntry:t}),r.a.createElement(v,{color:"green",position:"3",addEntry:t}),r.a.createElement(v,{color:"red",position:"4",addEntry:t})))},y=(n(86),n(87),function(e){var t=e.color,n=e.position,a=e.removeEntry;return r.a.createElement("div",{className:t+" entry",onMouseDown:function(){return a(n)},onTouchStart:function(){return a(n)}})}),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={entries:[]},n.addEntry=n.addEntry.bind(Object(m.a)(n)),n.removeEntry=n.removeEntry.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"addEntry",value:function(e){var t=this.state.entries.concat([e]);this.setState({entries:t})}},{key:"removeEntry",value:function(e){var t=this.state.entries.slice();t.splice(e,1),this.setState({entries:t})}},{key:"purgeEntries",value:function(){this.setState({entries:[]})}},{key:"render",value:function(){var e=this,t=this.state.entries.map(function(t,n){return r.a.createElement(y,{key:n,color:t,position:n,removeEntry:e.removeEntry})});return r.a.createElement("div",{className:"column"},r.a.createElement(E.CSSTransitionGroup,{transitionName:"column-entry",transitionEnterTimeout:200,transitionLeaveTimeout:200},t),r.a.createElement("div",{className:"column-diamond-container"},r.a.createElement(f,{addEntry:this.addEntry})))}}]),t}(a.Component),p=n(66),b=n(61),w=n.n(b),k=n(63),j=n.n(k),O=n(64),g=n.n(O),C=n(65),N=n.n(C);var S=Object(p.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes,n=e.resetCallback;return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,null,r.a.createElement(j.a,null,r.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.grow},"Simon Says Notepad"),r.a.createElement(N.a,{color:"inherit",onClick:function(){return n()}},"Reset"))))}),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={columnCount:3},n.columnRefs=[],n.emptyColumns=n.emptyColumns.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"emptyColumns",value:function(){this.columnRefs.map(function(e){return e.current.purgeEntries()}),console.log(this.columnRefs)}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.columnCount;t++){var n=r.a.createRef();this.columnRefs.push(n),e.push(r.a.createElement(h,{key:t,ref:n}))}return r.a.createElement("div",{className:"App"},r.a.createElement(S,{resetCallback:this.emptyColumns}),r.a.createElement("div",{className:"columns-container"},e))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){e.exports=n(171)},72:function(e,t,n){},73:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.578e34ce.chunk.js.map