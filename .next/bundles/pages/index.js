
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([5],{220:function(e,t,a){e.exports=a(221)},221:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(8),r=s(l),n=a(1),c=s(n),o=a(2),d=s(o),m=a(9),u=s(m),i=a(10),f=s(i),x=a(69),p=s(x),j=a(6),b=s(j),E=a(45),h=s(E),N=a(70),g=s(N),v=function(e){function t(e){(0,c.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.updateInputValue=function(e){document.getElementById("error").style.display="none",a.setState({inputValue:e.target.value})},a.generatorHandleClick=function(e){document.getElementById("error").style.display="none";var t="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";if(e&&void 0!==e||(e=100),e<100001)try{for(var l=0;l<e;l++)t+=s.charAt(Math.floor(Math.random()*s.length));a.setState({generatedPassword:t})}catch(e){console.log(e)}else document.getElementById("error").style.display="block"},a.state={inputValue:100,generatedPassword:""},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this;return b.default.createElement("div",{className:"jsx-182322028 root"},b.default.createElement(h.default,null,b.default.createElement("meta",{charSet:"utf-8",className:"jsx-182322028"}),b.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge",className:"jsx-182322028"}),b.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-182322028"}),b.default.createElement("title",{className:"jsx-182322028"},"GENPASS"),b.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",className:"jsx-182322028"}),b.default.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/spectre.css/dist/spectre.min.css",className:"jsx-182322028"}),b.default.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/spectre.css/dist/spectre-exp.min.css",className:"jsx-182322028"}),b.default.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/spectre.css/dist/spectre-icons.min.css",className:"jsx-182322028"})),b.default.createElement(p.default,{styleId:"182322028",css:['.root.jsx-182322028{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}',".footer.jsx-182322028{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}",".footer.jsx-182322028 a.jsx-182322028{color:#667189;}",".centered.jsx-182322028{text-align:center;}",".navbar.jsx-182322028 a.jsx-182322028{color:#6a11cb !important;}",".logo.jsx-182322028{color:#1c1a27;font-size:35px;}",".card.jsx-182322028{width:50%;margin:0 auto;margin-top:5vh;border:.3rem dotted #e7e9ed;box-shadow:0 6px 15px rgba(36,37,38,0.08);}",".btn-primary.jsx-182322028,.btn-primary.jsx-182322028:focus,.btn-primary.jsx-182322028:active{background:#6a11cb !important;border-color:#6a11cb !important;}","input.jsx-182322028{max-width:150px;margin:0 auto;}","label.jsx-182322028{color:#868f96 !important;}","textarea.jsx-182322028{resize:none;}",".form-input.jsx-182322028:focus{border-color:#6a11cb;box-shadow:none;}","#error.jsx-182322028{color:red;display:none;}","@media only screen and (max-width:1100px){.card.jsx-182322028{width:100%;}h1.jsx-182322028{font-size:1rem;}.root.jsx-182322028{padding:3px;}}"]}),b.default.createElement("header",{className:"jsx-182322028 navbar animated fadeInDown"},b.default.createElement("section",{className:"jsx-182322028 navbar-section logo"},"GENPASS"),b.default.createElement("section",{className:"jsx-182322028 navbar-section"},b.default.createElement(g.default,{href:"/"},b.default.createElement("a",{className:"jsx-182322028 btn btn-link"},"Home")),b.default.createElement(g.default,{href:"/username-generator"},b.default.createElement("a",{"data-badge":"beta",className:"jsx-182322028 btn btn-link badge"},"Username generator")),b.default.createElement(g.default,{href:"/contact"},b.default.createElement("a",{className:"jsx-182322028 btn btn-link"},"Contact")))),b.default.createElement("main",{className:"jsx-182322028"},b.default.createElement("div",{className:"jsx-182322028 container"},b.default.createElement("div",{className:"jsx-182322028 columns"},b.default.createElement("div",{className:"jsx-182322028 column col-xs-12 text-center"},b.default.createElement("div",{id:"main_card",className:"jsx-182322028 card animated fadeInUp"},b.default.createElement("div",{className:"jsx-182322028 card-header"},b.default.createElement("h1",{className:"jsx-182322028 card-title h1"},"Generator of random password"),b.default.createElement("div",{className:"jsx-182322028 card-subtitle text-gray"},"So, click on the button and generate your password now!")),b.default.createElement("div",{className:"jsx-182322028 card-body"},b.default.createElement("div",{className:"jsx-182322028 form-group"},b.default.createElement("label",{for:"count",className:"jsx-182322028 form-label"},"Set lenght of your password (default is 100)"),b.default.createElement("input",{value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},type:"number",min:"1",max:"100000",id:"count",className:"jsx-182322028 form-input"})),b.default.createElement("button",{onClick:function(){e.generatorHandleClick(e.state.inputValue)},id:"start_button",className:"jsx-182322028 btn btn-primary"},"Generate now!"),b.default.createElement("span",{id:"error",className:"jsx-182322028"},"Max value is 100000")),b.default.createElement("div",{className:"jsx-182322028 card-footer"},b.default.createElement("div",{className:"jsx-182322028 form-group"},b.default.createElement("label",{for:"result",className:"jsx-182322028 form-label"},"Your password is:"),b.default.createElement("textarea",{value:this.state.generatedPassword,id:"result",rows:"7",readOnly:!0,className:"jsx-182322028 form-input"})),b.default.createElement("div",{className:"jsx-182322028 card-subtitle text-gray"},"Random, secure, custom, easy and fast."))))))),b.default.createElement("footer",{className:"jsx-182322028 footer animated fadeInDown"},b.default.createElement("p",{className:"jsx-182322028 centered"},b.default.createElement("a",{href:"mailto:petr.nikolas@icloud.com?subject=Hello",className:"jsx-182322028"},"Send me a feedback.")),b.default.createElement("p",{className:"jsx-182322028 centered"},"Built with ♥ by ",b.default.createElement("a",{target:"_blank",href:"http://www.petrnikolas.com/",className:"jsx-182322028"},"Petr Nikolas"))))}}]),t}(b.default.Component);t.default=v}},[220]);
            return { page: comp.default }
          })
        