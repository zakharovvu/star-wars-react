(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(13),o=n.n(c),l=n(32),s=(n(24),n(5)),i=n(6),u=n(9),p=n(7),m=n(10),f=n(33),h=n(16),E=function(){return r.a.createElement("div",null,"Home")},d=n(11),v=n.n(d),b=n(14),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={people:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.co/api/people/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({people:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.people.results)return console.log(this.state.people),r.a.createElement("div",null,"fg",this.state.people.results.map(function(e){return r.a.createElement("div",null,e.name)}))}}]),t}(r.a.Component),w=function(){return r.a.createElement("div",null,"Films")},O=(n(27),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Starwars"},r.a.createElement("h1",null,"Star Wars"),r.a.createElement("div",{className:"Content"},r.a.createElement("menu",{className:"Menu"},r.a.createElement(f.a,{to:"/"},"Home"),r.a.createElement(f.a,{to:"/People"},"People"),r.a.createElement(f.a,{to:"/Films"},"Films")),r.a.createElement("section",{className:"Section"},r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{exact:!0,path:"/People",component:j}),r.a.createElement(h.a,{exact:!0,path:"/Films",component:w}))))}}]),t}(a.Component));o.a.render(r.a.createElement(l.a,{basename:"/star-wars-react"},r.a.createElement(O,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a4d44171.chunk.js.map