
          window.__NEXT_REGISTER_PAGE('/username-generator', function() {
            var comp = module.exports=webpackJsonp([4],{221:function(e,a,t){e.exports=t(222)},222:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(11),r=l(n),s=t(1),m=l(s),d=t(2),u=l(d),c=t(12),o=l(c),i=t(13),f=l(i),x=t(69),p=l(x),j=t(6),h=l(j),y=t(45),E=(l(y),t(70)),b=l(E),g=t(108),N=l(g),v=function(e){function a(e){(0,m.default)(this,a);var t=(0,o.default)(this,(a.__proto__||(0,r.default)(a)).call(this,e));return t.updateNameValue=function(e){document.getElementById("error").style.display="none",t.setState({nameValue:e.target.value}),void 0!==e.target.value&&e.target.value?document.getElementById("name_chip").style.display="inline-block":document.getElementById("name_chip").style.display="none"},t.updateSecondNameValue=function(e){document.getElementById("error").style.display="none",t.setState({secondNameValue:e.target.value}),void 0!==e.target.value&&e.target.value?document.getElementById("second_name_chip").style.display="inline-block":document.getElementById("second_name_chip").style.display="none"},t.updateSurnameValue=function(e){document.getElementById("error").style.display="none",t.setState({surnameValue:e.target.value}),void 0!==e.target.value&&e.target.value?document.getElementById("surname_chip").style.display="inline-block":document.getElementById("surname_chip").style.display="none"},t.generatorHandleClick=function(e,a,l){document.getElementById("error").style.display="none";var n="",r="";if(a&&void 0!==a||(a=""),e&&void 0!==e&&l&&void 0!==l){var s=e+a+l+"1234567890",m=s.length;try{for(var d=0;d<m;d++)n+=s.charAt(Math.floor(Math.random()*s.length));r=n;for(var u=0;u<length;u++)r+=r.charAt(Math.floor(Math.random()*r.length));t.setState({generatedUsername:r})}catch(e){console.log(e)}}else document.getElementById("error").style.display="block"},t.state={nameValue:"",secondNameValue:"",surnameValue:"",generatedUsername:""},t}return(0,f.default)(a,e),(0,u.default)(a,[{key:"render",value:function(){var e=this;return h.default.createElement(N.default,null,h.default.createElement(p.default,{styleId:"130896464",css:[".breadcrumb-item.jsx-130896464 a.jsx-130896464{color:#f8114d;}",".breadcrumb.jsx-130896464 .breadcrumb-item.jsx-130896464:not(:last-child) a.jsx-130896464{color:#667189;}",".card.jsx-130896464{width:100%;max-width:45rem;margin:2.5rem auto 0;-webkit-box-shadow:0 0.5rem 2rem rgba(0,0,0,.15);box-shadow:0 0.5rem 2rem rgba(0,0,0,.15);border-radius:.75rem;background-color:#fff;padding:2rem 1.5rem;}",".btn-primary.jsx-130896464,.btn-primary.jsx-130896464:focus,.btn-primary.jsx-130896464:active{background:#f8114d !important;border-color:#f8114d !important;}","input.jsx-130896464{max-width:150px;margin:0 auto;}","label.jsx-130896464{color:#868f96 !important;}","textarea.jsx-130896464{resize:none;}",".form-input.jsx-130896464:focus{border-color:#868f96;box-shadow:none;}","#error.jsx-130896464{color:red;display:none;}","#name_chip.jsx-130896464,#second_name_chip.jsx-130896464,#surname_chip.jsx-130896464{display:none;}","@media only screen and (max-width:1100px){.card.jsx-130896464{width:100%;}h1.jsx-130896464{font-size:1rem;}}"]}),h.default.createElement("div",{className:"jsx-130896464 container"},h.default.createElement("ul",{className:"jsx-130896464 breadcrumb animated fadeInDown"},h.default.createElement("li",{className:"jsx-130896464 breadcrumb-item"},h.default.createElement(b.default,{href:"/"},h.default.createElement("a",{className:"jsx-130896464"},"Home"))),h.default.createElement("li",{className:"jsx-130896464 breadcrumb-item"},h.default.createElement(b.default,{href:"/username-generator"},h.default.createElement("a",{className:"jsx-130896464"},"Username generator")))),h.default.createElement("div",{className:"jsx-130896464 columns"},h.default.createElement("div",{className:"jsx-130896464 column col-xs-12 text-center"},h.default.createElement("div",{id:"main_card",className:"jsx-130896464 card animated fadeInUp"},h.default.createElement("div",{className:"jsx-130896464 card-header"},h.default.createElement("h1",{className:"jsx-130896464 card-title h1"},"Generator of random username"),h.default.createElement("div",{className:"jsx-130896464 card-subtitle text-gray"},"So, click on the button and generate your username from your name and surname now!"),h.default.createElement("br",{className:"jsx-130896464"}),h.default.createElement("div",{className:"jsx-130896464 card-subtitle text-gray"},"* second name is not required")),h.default.createElement("div",{className:"jsx-130896464 card-body"},h.default.createElement("div",{className:"jsx-130896464 form-group"},h.default.createElement("div",{className:"jsx-130896464 columns"},h.default.createElement("div",{className:"jsx-130896464 column col-lg-4 col-xs-12"},h.default.createElement("label",{for:"name",className:"jsx-130896464 form-label"},"Your name"),h.default.createElement("input",{value:this.state.nameValue,onChange:function(a){return e.updateNameValue(a)},type:"text",id:"name",className:"jsx-130896464 form-input"})),h.default.createElement("div",{className:"jsx-130896464 column col-lg-4 col-xs-12"},h.default.createElement("label",{for:"secondName",className:"jsx-130896464 form-label"},"Your second name"),h.default.createElement("input",{value:this.state.secondNameValue,onChange:function(a){return e.updateSecondNameValue(a)},type:"text",id:"secondName",className:"jsx-130896464 form-input"})),h.default.createElement("div",{className:"jsx-130896464 column col-lg-4 col-xs-12"},h.default.createElement("label",{for:"surname",className:"jsx-130896464 form-label"},"Your surname"),h.default.createElement("input",{value:this.state.surnameValue,onChange:function(a){return e.updateSurnameValue(a)},type:"text",id:"surname",className:"jsx-130896464 form-input"})))),h.default.createElement("button",{onClick:function(){e.generatorHandleClick(e.state.nameValue,e.state.secondNameValue,e.state.surnameValue)},id:"start_button",className:"jsx-130896464 btn btn-primary"},"Generate now!"),h.default.createElement("span",{id:"error",className:"jsx-130896464"},"Name and surname are required")),h.default.createElement("div",{className:"jsx-130896464 card-footer"},h.default.createElement("div",{className:"jsx-130896464 form-group"},h.default.createElement("label",{for:"result",className:"jsx-130896464 form-label"},"Your username is:"),h.default.createElement("textarea",{value:this.state.generatedUsername,id:"result",rows:"3",readOnly:!0,className:"jsx-130896464 form-input"})),h.default.createElement("div",{className:"jsx-130896464"},"Generated from:",h.default.createElement("span",{id:"name_chip",className:"jsx-130896464 chip"}," ",this.state.nameValue," "),h.default.createElement("span",{id:"second_name_chip",className:"jsx-130896464 chip"}," ",this.state.secondNameValue," "),h.default.createElement("span",{id:"surname_chip",className:"jsx-130896464 chip"}," ",this.state.surnameValue," ")),h.default.createElement("div",{className:"jsx-130896464 card-subtitle text-gray"},"Random, secure, custom, easy and fast.")))))))}}]),a}(h.default.Component);a.default=v}},[221]);
            return { page: comp.default }
          })
        