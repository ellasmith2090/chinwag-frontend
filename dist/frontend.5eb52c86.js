!function(){let t,e,i,o,r,a,s,l,n,d,c,h,u,p,f,m,g,b,v,y,w,_,x,k,C,$,S,z,A,E,T,D,I,L,O,P,M,N,R,F,B,U,H,V,q,j,W,K,G,Y,X,Q,Z,J,tt,te,ti;function to(t,e){return Object.keys(e).forEach(function(i){"default"===i||"__esModule"===i||Object.prototype.hasOwnProperty.call(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[i]}})}),t}function tr(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}function ta(t){return t&&t.__esModule?t.default:t}var ts,tl,tn,td,tc,th,tu,tp,tf=Object.defineProperty,tm=Object.defineProperties,tg=Object.getOwnPropertyDescriptor,tb=Object.getOwnPropertyDescriptors,tv=Object.getOwnPropertySymbols,ty=Object.prototype.hasOwnProperty,tw=Object.prototype.propertyIsEnumerable,t_=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),tx=t=>{throw TypeError(t)},tk=(t,e,i)=>e in t?tf(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tC=(t,e)=>{for(var i in e||(e={}))ty.call(e,i)&&tk(t,i,e[i]);if(tv)for(var i of tv(e))tw.call(e,i)&&tk(t,i,e[i]);return t},t$=(t,e)=>tm(t,tb(e)),tS=(t,e,i,o)=>{for(var r,a=o>1?void 0:o?tg(e,i):e,s=t.length-1;s>=0;s--)(r=t[s])&&(a=(o?r(e,i,a):r(a))||a);return o&&a&&tf(e,i,a),a},tz=(t,e,i)=>e.has(t)||tx("Cannot "+i),tA=function(t,e){this[0]=t,this[1]=e},tE=new WeakMap,tT=new WeakMap,tD=new WeakMap,tI=new WeakSet,tL=new WeakMap,tO=class{hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),tL.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),tL.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,tE.has(this.form)?tE.get(this.form).add(this.host):tE.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),tT.has(this.form)||(tT.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),tD.has(this.form)||(tD.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=tE.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),tT.has(this.form)&&(this.form.reportValidity=tT.get(this.form),tT.delete(this.form)),tD.has(this.form)&&(this.form.checkValidity=tD.get(this.form),tD.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?tI.add(t):tI.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,i=!!tI.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}constructor(t,e){this.handleFormData=t=>{let e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!r&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,o.toString()))},this.handleFormSubmit=t=>{var e;let i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=tE.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),tL.set(this.host,[])},this.handleInteraction=t=>{let e=tL.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let t of this.form.querySelectorAll("*"))if("function"==typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let t of this.form.querySelectorAll("*"))if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=tC({form:t=>{let e=t.form;if(e){let i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}},tP=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),tM=Object.freeze(t$(tC({},tP),{valid:!1,valueMissing:!0})),tN=Object.freeze(t$(tC({},tP),{valid:!1,customError:!0}));let tR=globalThis,tF=tR.ShadowRoot&&(void 0===tR.ShadyCSS||tR.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tB=Symbol(),tU=new WeakMap;class tH{get styleSheet(){let t=this.o,e=this.t;if(tF&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=tU.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tU.set(e,t))}return t}toString(){return this.cssText}constructor(t,e,i){if(this._$cssResult$=!0,i!==tB)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}}let tV=(t,...e)=>new tH(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,tB),tq=tF?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,i="";for(let e of t.cssRules)i+=e.cssText;return new tH("string"==typeof(e=i)?e:e+"",void 0,tB)})(t):t,{is:tj,defineProperty:tW,getOwnPropertyDescriptor:tK,getOwnPropertyNames:tG,getOwnPropertySymbols:tY,getPrototypeOf:tX}=Object,tQ=globalThis,tZ=tQ.trustedTypes,tJ=tZ?tZ.emptyScript:"",t0=tQ.reactiveElementPolyfillSupport,t1={toAttribute(t,e){switch(e){case Boolean:t=t?tJ:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},t2=(t,e)=>!tj(t,e),t5={attribute:!0,type:String,converter:t1,reflect:!1,useDefault:!1,hasChanged:t2};null!=(tl=Symbol).metadata||(tl.metadata=Symbol("metadata")),null!=tQ.litPropertyMetadata||(tQ.litPropertyMetadata=new WeakMap);class t3 extends HTMLElement{static addInitializer(t){var e;this._$Ei(),(null!=(e=this.l)?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=t5){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&tW(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){var o;let{get:r,set:a}=null!=(o=tK(this.prototype,t))?o:{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){let o=null==r?void 0:r.call(this);null==a||a.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!=(e=this.elementProperties.get(t))?e:t5}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=tX(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...tG(t),...tY(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(tq(i));else void 0!==t&&e.push(tq(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e,i;(null!=(i=this._$EO)?i:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;let e=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(tF)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),o=tR.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(e,this.constructor.elementStyles),e}connectedCallback(){var t;null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){var r;let a=(void 0!==(null==(r=i.converter)?void 0:r.toAttribute)?i.converter:t1).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){var r,a,s,l;let t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(r=t.converter)?void 0:r.fromAttribute)?t.converter:t1;this._$Em=o,this[o]=null!=(l=null!=(s=n.fromAttribute(e,t.type))?s:null==(a=this._$Ej)?void 0:a.get(o))?l:null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){var o,r;let a=this.constructor,s=this[t];if(null!=i||(i=a.getPropertyOptions(t)),!((null!=(r=i.hasChanged)?r:t2)(s,e)||i.useDefault&&i.reflect&&s===(null==(o=this._$Ej)?void 0:o.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},a){var s,l,n;i&&!(null!=(s=this._$Ej)?s:this._$Ej=new Map).has(t)&&(this._$Ej.set(t,null!=(l=null!=a?a:e)?l:this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(null!=(n=this._$Eq)?n:this._$Eq=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t){let{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}}t3.elementStyles=[],t3.shadowRootOptions={mode:"open"},t3.elementProperties=new Map,t3.finalized=new Map,null==t0||t0({ReactiveElement:t3}),(null!=(tn=tQ.reactiveElementVersions)?tn:tQ.reactiveElementVersions=[]).push("2.1.0");let t6=globalThis,t4=t6.trustedTypes,t7=t4?t4.createPolicy("lit-html",{createHTML:t=>t}):void 0,t8="$lit$",t9=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+t9,ee=`<${et}>`,ei=document,eo=()=>ei.createComment(""),er=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ea=Array.isArray,es=t=>ea(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),el="[ 	\n\f\r]",en=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ed=/-->/g,ec=/>/g,eh=RegExp(`>|${el}(?:([^\\s"'>=/]+)(${el}*=${el}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eu=/'/g,ep=/"/g,ef=/^(?:script|style|textarea|title)$/i,em=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),eg=em(1),eb=em(2),ev=em(3),ey=Symbol.for("lit-noChange"),ew=Symbol.for("lit-nothing"),e_=new WeakMap,ex=ei.createTreeWalker(ei,129);function ek(t,e){if(!ea(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==t7?t7.createHTML(e):e}let eC=(t,e)=>{let i=t.length-1,o=[],r,a=2===e?"<svg>":3===e?"<math>":"",s=en;for(let e=0;e<i;e++){let i=t[e],l,n,d=-1,c=0;for(;c<i.length&&(s.lastIndex=c,null!==(n=s.exec(i)));)c=s.lastIndex,s===en?"!--"===n[1]?s=ed:void 0!==n[1]?s=ec:void 0!==n[2]?(ef.test(n[2])&&(r=RegExp("</"+n[2],"g")),s=eh):void 0!==n[3]&&(s=eh):s===eh?">"===n[0]?(s=null!=r?r:en,d=-1):void 0===n[1]?d=-2:(d=s.lastIndex-n[2].length,l=n[1],s=void 0===n[3]?eh:'"'===n[3]?ep:eu):s===ep||s===eu?s=eh:s===ed||s===ec?s=en:(s=eh,r=void 0);let h=s===eh&&t[e+1].startsWith("/>")?" ":"";a+=s===en?i+ee:d>=0?(o.push(l),i.slice(0,d)+t8+i.slice(d)+t9+h):i+t9+(-2===d?e:h)}return[ek(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class e${static createElement(t,e){let i=ei.createElement("template");return i.innerHTML=t,i}constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,a=0,s=t.length-1,l=this.parts,[n,d]=eC(t,e);if(this.el=e$.createElement(n,i),ex.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=ex.nextNode())&&l.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(let t of o.getAttributeNames())if(t.endsWith(t8)){let e=d[a++],i=o.getAttribute(t).split(t9),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?eT:"?"===s[1]?eD:"@"===s[1]?eI:eE}),o.removeAttribute(t)}else t.startsWith(t9)&&(l.push({type:6,index:r}),o.removeAttribute(t));if(ef.test(o.tagName)){let t=o.textContent.split(t9),e=t.length-1;if(e>0){o.textContent=t4?t4.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],eo()),ex.nextNode(),l.push({type:2,index:++r});o.append(t[e],eo())}}}else if(8===o.nodeType)if(o.data===et)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(t9,t+1));)l.push({type:7,index:r}),t+=t9.length-1}r++}}}function eS(t,e,i=t,o){var r,a,s;if(e===ey)return e;let l=void 0!==o?null==(r=i._$Co)?void 0:r[o]:i._$Cl,n=er(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==n&&(null==l||null==(a=l._$AO)||a.call(l,!1),void 0===n?l=void 0:(l=new n(t))._$AT(t,i,o),void 0!==o?(null!=(s=i._$Co)?s:i._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=eS(t,l._$AS(t,e.values),l,o)),e}class ez{get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:o}=this._$AD,r=(null!=(e=null==t?void 0:t.creationScope)?e:ei).importNode(i,!0);ex.currentNode=r;let a=ex.nextNode(),s=0,l=0,n=o[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new eA(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new eL(a,this,t)),this._$AV.push(e),n=o[++l]}s!==(null==n?void 0:n.index)&&(a=ex.nextNode(),s++)}return ex.currentNode=ei,r}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}}class eA{get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cv}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){er(t=eS(this,t,e))?t===ew||null==t||""===t?(this._$AH!==ew&&this._$AR(),this._$AH=ew):t!==this._$AH&&t!==ey&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):es(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ew&&er(this._$AH)?this._$AA.nextSibling.data=t:this.T(ei.createTextNode(t)),this._$AH=t}$(t){var e;let{values:i,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=e$.createElement(ek(o.h,o.h[0]),this.options)),o);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{let t=new ez(r,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=e_.get(t.strings);return void 0===e&&e_.set(t.strings,e=new e$(t)),e}k(t){ea(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let r of t)o===e.length?e.push(i=new eA(this.O(eo()),this.O(eo()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}constructor(t,e,i,o){var r;this.type=2,this._$AH=ew,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=null==(r=null==o?void 0:o.isConnected)||r}}class eE{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let r=this.strings,a=!1;if(void 0===r)(a=!er(t=eS(this,t,e,0))||t!==this._$AH&&t!==ey)&&(this._$AH=t);else{let o,s,l=t;for(t=r[0],o=0;o<r.length-1;o++)(s=eS(this,l[i+o],e,o))===ey&&(s=this._$AH[o]),a||(a=!er(s)||s!==this._$AH[o]),s===ew?t=ew:t!==ew&&(t+=(null!=s?s:"")+r[o+1]),this._$AH[o]=s}a&&!o&&this.j(t)}j(t){t===ew?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}constructor(t,e,i,o,r){this.type=1,this._$AH=ew,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ew}}class eT extends eE{j(t){this.element[this.name]=t===ew?void 0:t}constructor(){super(...arguments),this.type=3}}class eD extends eE{j(t){this.element.toggleAttribute(this.name,!!t&&t!==ew)}constructor(){super(...arguments),this.type=4}}class eI extends eE{_$AI(t,e=this){var i;if((t=null!=(i=eS(this,t,e,0))?i:ew)===ey)return;let o=this._$AH,r=t===ew&&o!==ew||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==ew&&(o===ew||r);r&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!=(i=null==(e=this.options)?void 0:e.host)?i:this.element,t):this._$AH.handleEvent(t)}constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}}class eL{get _$AU(){return this._$AM._$AU}_$AI(t){eS(this,t)}constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}}let eO=t6.litHtmlPolyfillSupport;null==eO||eO(e$,eA),(null!=(td=t6.litHtmlVersions)?td:t6.litHtmlVersions=[]).push("3.3.0");let eP=(t,e,i)=>{var o,r;let a=null!=(o=null==i?void 0:i.renderBefore)?o:e,s=a._$litPart$;if(void 0===s){let t=null!=(r=null==i?void 0:i.renderBefore)?r:null;a._$litPart$=s=new eA(e.insertBefore(eo(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s},eM=globalThis;class eN extends t3{createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=eP(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return ey}constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}}eN._$litElement$=!0,eN.finalized=!0,null==(tc=eM.litElementHydrateSupport)||tc.call(eM,{LitElement:eN});let eR=eM.litElementPolyfillSupport;null==eR||eR({LitElement:eN}),(null!=(th=eM.litElementVersions)?th:eM.litElementVersions=[]).push("4.2.0");var eF=tV(e||(e=(t=>t)`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`)),eB=tV(i||(i=(t=>t)`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`)),eU=(t="value")=>(e,i)=>{let o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,a,s){var l;let n=o.getPropertyOptions(t);if(e===("string"==typeof n.attribute?n.attribute:t)){let e=n.converter||t1,o=("function"==typeof e?e:null!=(l=null==e?void 0:e.fromAttribute)?l:t1.fromAttribute)(s,n.type);this[t]!==o&&(this[i]=o)}r.call(this,e,a,s)}},eH=tV(o||(o=(t=>t)`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`)),eV=class{hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{let e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}},eq="",ej={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},eW=[{name:"default",resolver:t=>(function(t=""){if(!eq){let t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)eq=e.getAttribute("data-shoelace");else{let e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)),i="";e&&(i=e.getAttribute("src")),eq=i.split("/").slice(0,-1).join("/")}}return eq.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")})(`assets/icons/${t}.svg`)},{name:"system",resolver:t=>t in ej?`data:image/svg+xml,${encodeURIComponent(ej[t])}`:""}],eK=[];function eG(t){return eW.find(e=>e.name===t)}var eY=tV(r||(r=(t=>t)`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`));function eX(t,e){let i=tC({waitUntilFirstUpdate:!1},e);return(e,o)=>{let{update:r}=e,a=Array.isArray(t)?t:[t];e.update=function(t){a.forEach(e=>{if(t.has(e)){let r=t.get(e),a=this[e];r!==a&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,a)}}),r.call(this,t)}}}var eQ=tV(a||(a=(t=>t)`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`));let eZ={attribute:!0,type:String,converter:t1,reflect:!1,hasChanged:t2};function eJ(t){return(e,i)=>"object"==typeof i?((t=eZ,e,i)=>{let{kind:o,metadata:r}=i,a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===o){let{name:o}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)})(t,e,i):((t,e,i)=>{let o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function e0(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){var o;o=i[e],e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o})}return t}function e1(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i.push.apply(i,o)}return i})(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}function e2(t){return eJ(e1(e0({},t),{state:!0,attribute:!1}))}function e5(t){return(e,i)=>{Object.assign("function"==typeof e?e:e[i],t)}}let e3=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function e6(t,e){return(i,o,r)=>{let a=e=>{var i,o;return null!=(o=null==(i=e.renderRoot)?void 0:i.querySelector(t))?o:null};if(e){let{get:t,set:e}="object"==typeof o?i:null!=r?r:(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return e3(i,o,{get(){let i=t.call(this);return void 0===i&&(null!==(i=a(this))||this.hasUpdated)&&e.call(this,i),i}})}return e3(i,o,{get(){return a(this)}})}}var e4=class extends eN{emit(t,e){let i=new CustomEvent(t,tC({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){let o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch(o){customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",a=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(a=" v"+o.version),r&&a&&r===a||console.warn(`Attempted to register <${t}>${r}, but <${t}>${a} has already been registered.`)}attributeChangedCallback(t,e,i){let o,r;if(tz(this,o=tu,"read from private field"),r?!r.call(this):!o.get(this)){let t,e;this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),tz(this,t=tu,"write to private field"),e?e.call(this,!0):t.set(this,!0)}super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}constructor(){let t;super(),(t=tu).has(this)?tx("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}};tu=new WeakMap,e4.version="2.20.1",e4.dependencies={},tS([eJ()],e4.prototype,"dir",2),tS([eJ()],e4.prototype,"lang",2);let{I:e7}={M:t8,P:t9,A:et,C:1,L:eC,R:ez,D:es,V:eS,I:eA,H:eE,N:eD,U:eI,B:eT,F:eL},e8={},e9=t=>t,it;var ie=Symbol(),ii=Symbol(),io=new Map,ir=class extends e4{async resolveIcon(t,e){var i;let o;if(null==e?void 0:e.spriteSheet)return this.svg=eg(it||(it=e9`<svg part="svg">
        <use part="use" href="${0}"></use>
      </svg>`),t),this.svg;try{if(!(o=await fetch(t,{mode:"cors"})).ok)return 410===o.status?ie:ii}catch(t){return ii}try{let t=document.createElement("div");t.innerHTML=await o.text();let e=t.firstElementChild;if((null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase())!=="svg")return ie;tp||(tp=new DOMParser);let r=tp.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");if(!r)return ie;return r.part.add("svg"),document.adoptNode(r)}catch(t){return ie}}connectedCallback(){super.connectedCallback(),eK.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,eK=eK.filter(e=>e!==t)}getIconSource(){let t=eG(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:i}=this.getIconSource(),o=i?eG(this.library):void 0;if(!e){this.svg=null;return}let r=io.get(e);if(r||(r=this.resolveIcon(e,o),io.set(e,r)),!this.initialRender)return;let a=await r;if(a===ii&&io.delete(e),e===this.getIconSource().url){let e;if(void 0===e?void 0!==(null==a?void 0:a._$litType$):(null==a?void 0:a._$litType$)===e){if(this.svg=a,o){await this.updateComplete;let t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&t&&o.mutator(t)}return}switch(a){case ii:case ie:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),null==(t=null==o?void 0:o.mutator)||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}};ir.styles=[eQ,eY],tS([e2()],ir.prototype,"svg",2),tS([eJ({reflect:!0})],ir.prototype,"name",2),tS([eJ()],ir.prototype,"src",2),tS([eJ()],ir.prototype,"label",2),tS([eJ({reflect:!0})],ir.prototype,"library",2),tS([eX("label")],ir.prototype,"handleLabelChange",1),tS([eX(["name","src","library"])],ir.prototype,"setIcon",1);let ia={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},is=t=>(...e)=>({_$litDirective$:t,values:e});class il{get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}constructor(t){}}let id=is(class extends il{render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(void 0===this.st){for(let o in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)!e[o]||(null==(i=this.nt)?void 0:i.has(o))||this.st.add(o);return this.render(e)}let r=t.element.classList;for(let t of this.st)t in e||(r.remove(t),this.st.delete(t));for(let t in e){let i=!!e[t];i===this.st.has(t)||(null==(o=this.nt)?void 0:o.has(t))||(i?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return ey}constructor(t){var e;if(super(t),t.type!==ia.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}}),ic=t=>null!=t?t:ew,ih=is(class extends il{render(t){return t}update(t,[e]){if(e===ey||e===ew)return e;let i=t.element,o=t.name;if(t.type===ia.PROPERTY){if(e===i[o])return ey}else if(t.type===ia.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return ey}else if(t.type===ia.ATTRIBUTE&&i.getAttribute(o)===e+"")return ey;return((t,e=e8)=>t._$AH=e)(t),e}constructor(t){if(super(t),t.type!==ia.PROPERTY&&t.type!==ia.ATTRIBUTE&&t.type!==ia.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==t.strings)throw Error("`live` bindings can only contain a single expression")}}),iu=t=>t,ip,im,ig;var ib=class extends e4{get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return eg(ig||(ig=iu`
      <div
        class=${0}
      >
        <label
          part="base"
          class=${0}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${0}
            name=${0}
            value=${0}
            .indeterminate=${0}
            .checked=${0}
            .disabled=${0}
            .required=${0}
            aria-checked=${0}
            aria-describedby="help-text"
            @click=${0}
            @input=${0}
            @invalid=${0}
            @blur=${0}
            @focus=${0}
          />

          <span
            part="control${0}${0}"
            class="checkbox__control"
          >
            ${0}
            ${0}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${0}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${0}</slot>
        </div>
      </div>
    `),id({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e}),id({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size}),this.title,this.name,ic(this.value),ih(this.indeterminate),ih(this.checked),this.disabled,this.required,this.checked?"true":"false",this.handleClick,this.handleInput,this.handleInvalid,this.handleBlur,this.handleFocus,this.checked?" control--checked":"",this.indeterminate?" control--indeterminate":"",this.checked?eg(ip||(ip=iu`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `)):"",!this.checked&&this.indeterminate?eg(im||(im=iu`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `)):"",e?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new eV(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}};ib.styles=[eQ,eH,eB],ib.dependencies={"sl-icon":ir},tS([e6('input[type="checkbox"]')],ib.prototype,"input",2),tS([e2()],ib.prototype,"hasFocus",2),tS([eJ()],ib.prototype,"title",2),tS([eJ()],ib.prototype,"name",2),tS([eJ()],ib.prototype,"value",2),tS([eJ({reflect:!0})],ib.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],ib.prototype,"disabled",2),tS([eJ({type:Boolean,reflect:!0})],ib.prototype,"checked",2),tS([eJ({type:Boolean,reflect:!0})],ib.prototype,"indeterminate",2),tS([eU("checked")],ib.prototype,"defaultChecked",2),tS([eJ({reflect:!0})],ib.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],ib.prototype,"required",2),tS([eJ({attribute:"help-text"})],ib.prototype,"helpText",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],ib.prototype,"handleDisabledChange",1),tS([eX(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ib.prototype,"handleStateChange",1);var iv=tV(s||(s=(t=>t)`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`));let iy=new Set,iw=new Map,i_="ltr",ix="en",ik="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(ik){let t=new MutationObserver(i$);i_=document.documentElement.dir||"ltr",ix=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iC(...e){e.map(e=>{let i=e.$code.toLowerCase();iw.has(i)?iw.set(i,Object.assign(Object.assign({},iw.get(i)),e)):iw.set(i,e),t||(t=e)}),i$()}function i$(){ik&&(i_=document.documentElement.dir||"ltr",ix=document.documentElement.lang||navigator.language),[...iy.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}class iS{hostConnected(){iy.add(this.host)}hostDisconnected(){iy.delete(this.host)}dir(){return`${this.host.dir||i_}`.toLowerCase()}lang(){return`${this.host.lang||ix}`.toLowerCase()}getTranslationData(t){var e,i;let o=new Intl.Locale(t.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),a=null!=(i=null==(e=null==o?void 0:o.region)?void 0:e.toLowerCase())?i:"",s=iw.get(`${r}-${a}`),l=iw.get(r);return{locale:o,language:r,region:a,primary:s,secondary:l}}exists(e,i){var o;let{primary:r,secondary:a}=this.getTranslationData(null!=(o=i.lang)?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!r&&!!r[e]||!!a&&!!a[e]||!!i.includeFallback&&!!t&&!!t[e]}term(e,...i){let o,{primary:r,secondary:a}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(a&&a[e])o=a[e];else{if(!t||!t[e])return console.error(`No translation found for: ${String(e)}`),String(e);o=t[e]}return"function"==typeof o?o(...i):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}constructor(t){this.host=t,this.host.addController(this)}}var iz={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};iC(iz);var iA=class extends iS{};iC(iz);let iE=t=>t,iT;var iD=class extends e4{render(){return eg(iT||(iT=iE`
      <svg part="base" class="spinner" role="progressbar" aria-label=${0}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `),this.localize.term("loading"))}constructor(){super(...arguments),this.localize=new iA(this)}};iD.styles=[eQ,iv];var iI=new Map,iL=new WeakMap;function iO(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function iP(t,e){iI.set(t,null!=e?e:{keyframes:[],options:{duration:0}})}function iM(t,e,i){let o=iL.get(t);if(null==o?void 0:o[e])return iO(o[e],i.dir);let r=iI.get(e);return r?iO(r,i.dir):{keyframes:[],options:{duration:0}}}function iN(t,e,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=t.animate(e,t$(tC({},i),{duration:iF()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function iR(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function iF(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function iB(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function iU(t,e){return t.map(t=>t$(tC({},t),{height:"auto"===t.height?`${e}px`:t.height}))}function iH(t,e,i){return t?e(t):null==i?void 0:i(t)}let iV=t=>t,iq,ij,iW;var iK=class t extends e4{static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await iB(this.childrenContainer);let{keyframes:t,options:e}=iM(this,"tree-item.collapse",{dir:this.localize.dir()});await iN(this.childrenContainer,iU(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){let e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await iB(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:t,options:e}=iM(this,"tree-item.expand",{dir:this.localize.dir()});await iN(this.childrenContainer,iU(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){let t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return eg(iW||(iW=iV`
      <div
        part="base"
        class="${0}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${0}
            ${0}
            ${0}
            ${0}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${0}
            aria-hidden="true"
          >
            ${0}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${0}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${0}></sl-icon>
            </slot>
          </div>

          ${0}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${0}"></slot>
        </div>
      </div>
    `),id({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()}),this.disabled?"item--disabled":"",this.expanded?"item--expanded":"",this.indeterminate?"item--indeterminate":"",this.selected?"item--selected":"",id({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e}),iH(this.loading,()=>eg(iq||(iq=iV` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `))),t?"chevron-left":"chevron-right",t?"chevron-left":"chevron-right",iH(this.selectable,()=>eg(ij||(ij=iV`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${0}"
                ?checked="${0}"
                ?indeterminate="${0}"
                tabindex="-1"
              ></sl-checkbox>
            `),this.disabled,ih(this.selected),this.indeterminate)),this.handleChildrenSlotChange)}constructor(){super(...arguments),this.localize=new iA(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}};iK.styles=[eQ,eF],iK.dependencies={"sl-checkbox":ib,"sl-icon":ir,"sl-spinner":iD},tS([e2()],iK.prototype,"indeterminate",2),tS([e2()],iK.prototype,"isLeaf",2),tS([e2()],iK.prototype,"loading",2),tS([e2()],iK.prototype,"selectable",2),tS([eJ({type:Boolean,reflect:!0})],iK.prototype,"expanded",2),tS([eJ({type:Boolean,reflect:!0})],iK.prototype,"selected",2),tS([eJ({type:Boolean,reflect:!0})],iK.prototype,"disabled",2),tS([eJ({type:Boolean,reflect:!0})],iK.prototype,"lazy",2),tS([e6("slot:not([name])")],iK.prototype,"defaultSlot",2),tS([e6("slot[name=children]")],iK.prototype,"childrenSlot",2),tS([e6(".tree-item__item")],iK.prototype,"itemElement",2),tS([e6(".tree-item__children")],iK.prototype,"childrenContainer",2),tS([e6(".tree-item__expand-button slot")],iK.prototype,"expandButtonSlot",2),tS([eX("loading",{waitUntilFirstUpdate:!0})],iK.prototype,"handleLoadingChange",1),tS([eX("disabled")],iK.prototype,"handleDisabledChange",1),tS([eX("selected")],iK.prototype,"handleSelectedChange",1),tS([eX("expanded",{waitUntilFirstUpdate:!0})],iK.prototype,"handleExpandedChange",1),tS([eX("expanded",{waitUntilFirstUpdate:!0})],iK.prototype,"handleExpandAnimation",1),tS([eX("lazy",{waitUntilFirstUpdate:!0})],iK.prototype,"handleLazyChange",1),iP("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),iP("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),iK.define("sl-tree-item");var iG=tV(l||(l=(t=>t)`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`)),iY=tV(n||(n=(t=>t)`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`));function iX(t,e){if(null==t)return{};var i,o,r=function(t,e){if(null==t)return{};var i,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)i=a[o],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}let iQ=Math.min,iZ=Math.max,iJ=Math.round,i0=Math.floor,i1=t=>({x:t,y:t}),i2={left:"right",right:"left",bottom:"top",top:"bottom"},i5={start:"end",end:"start"};function i3(t,e){return"function"==typeof t?t(e):t}function i6(t){return t.split("-")[0]}function i4(t){return t.split("-")[1]}function i7(t){return"x"===t?"y":"x"}function i8(t){return"y"===t?"height":"width"}function i9(t){return["top","bottom"].includes(i6(t))?"y":"x"}function ot(t){return t.replace(/start|end/g,t=>i5[t])}function oe(t){return t.replace(/left|right|bottom|top/g,t=>i2[t])}function oi(t){return"number"!=typeof t?e0({top:0,right:0,bottom:0,left:0},t):{top:t,right:t,bottom:t,left:t}}function oo(t){let{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function or(t,e,i){let o,{reference:r,floating:a}=t,s=i9(e),l=i7(i9(e)),n=i8(l),d=i6(e),c="y"===s,h=r.x+r.width/2-a.width/2,u=r.y+r.height/2-a.height/2,p=r[n]/2-a[n]/2;switch(d){case"top":o={x:h,y:r.y-a.height};break;case"bottom":o={x:h,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:u};break;case"left":o={x:r.x-a.width,y:u};break;default:o={x:r.x,y:r.y}}switch(i4(e)){case"start":o[l]-=p*(i&&c?-1:1);break;case"end":o[l]+=p*(i&&c?-1:1)}return o}let oa=async(t,e,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:s}=i,l=a.filter(Boolean),n=await (null==s.isRTL?void 0:s.isRTL(e)),d=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:c,y:h}=or(d,o,n),u=o,p={},f=0;for(let i=0;i<l.length;i++){let{name:a,fn:m}=l[i],{x:g,y:b,data:v,reset:y}=await m({x:c,y:h,initialPlacement:o,placement:u,strategy:r,middlewareData:p,rects:d,platform:s,elements:{reference:t,floating:e}});c=null!=g?g:c,h=null!=b?b:h,p=e1(e0({},p),{[a]:e0({},p[a],v)}),y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(d=!0===y.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:c,y:h}=or(d,u,n)),i=-1)}return{x:c,y:h,placement:u,strategy:r,middlewareData:p}};async function os(t,e){var i;void 0===e&&(e={});let{x:o,y:r,platform:a,rects:s,elements:l,strategy:n}=t,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=i3(e,t),f=oi(p),m=l[u?"floating"===h?"reference":"floating":h],g=oo(await a.getClippingRect({element:null==(i=await (null==a.isElement?void 0:a.isElement(m)))||i?m:m.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(l.floating)),boundary:d,rootBoundary:c,strategy:n})),b="floating"===h?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,v=await (null==a.getOffsetParent?void 0:a.getOffsetParent(l.floating)),y=await (null==a.isElement?void 0:a.isElement(v))&&await (null==a.getScale?void 0:a.getScale(v))||{x:1,y:1},w=oo(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:v,strategy:n}):b);return{top:(g.top-w.top+f.top)/y.y,bottom:(w.bottom-g.bottom+f.bottom)/y.y,left:(g.left-w.left+f.left)/y.x,right:(w.right-g.right+f.right)/y.x}}async function ol(t,e){let{placement:i,platform:o,elements:r}=t,a=await (null==o.isRTL?void 0:o.isRTL(r.floating)),s=i6(i),l=i4(i),n="y"===i9(i),d=["left","top"].includes(s)?-1:1,c=a&&n?-1:1,h=i3(e,t),{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&"number"==typeof f&&(p="end"===l?-1*f:f),n?{x:p*c,y:u*d}:{x:u*d,y:p*c}}function on(){return"undefined"!=typeof window}function od(t){return ou(t)?(t.nodeName||"").toLowerCase():"#document"}function oc(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function oh(t){var e;return null==(e=(ou(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function ou(t){return!!on()&&(t instanceof Node||t instanceof oc(t).Node)}function op(t){return!!on()&&(t instanceof Element||t instanceof oc(t).Element)}function of(t){return!!on()&&(t instanceof HTMLElement||t instanceof oc(t).HTMLElement)}function om(t){return!!on()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof oc(t).ShadowRoot)}function og(t){let{overflow:e,overflowX:i,overflowY:o,display:r}=o_(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function ob(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function ov(t){let e=oy(),i=op(t)?o_(t):t;return["transform","translate","scale","rotate","perspective"].some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||["transform","translate","scale","rotate","perspective","filter"].some(t=>(i.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(i.contain||"").includes(t))}function oy(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function ow(t){return["html","body","#document"].includes(od(t))}function o_(t){return oc(t).getComputedStyle(t)}function ox(t){return op(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ok(t){if("html"===od(t))return t;let e=t.assignedSlot||t.parentNode||om(t)&&t.host||oh(t);return om(e)?e.host:e}function oC(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);let r=function t(e){let i=ok(e);return ow(i)?e.ownerDocument?e.ownerDocument.body:e.body:of(i)&&og(i)?i:t(i)}(t),a=r===(null==(o=t.ownerDocument)?void 0:o.body),s=oc(r);if(a){let t=o$(s);return e.concat(s,s.visualViewport||[],og(r)?r:[],t&&i?oC(t):[])}return e.concat(r,oC(r,[],i))}function o$(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function oS(t){let e=o_(t),i=parseFloat(e.width)||0,o=parseFloat(e.height)||0,r=of(t),a=r?t.offsetWidth:i,s=r?t.offsetHeight:o,l=iJ(i)!==a||iJ(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function oz(t){return op(t)?t:t.contextElement}function oA(t){let e=oz(t);if(!of(e))return i1(1);let i=e.getBoundingClientRect(),{width:o,height:r,$:a}=oS(e),s=(a?iJ(i.width):i.width)/o,l=(a?iJ(i.height):i.height)/r;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}let oE=i1(0);function oT(t){let e=oc(t);return oy()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:oE}function oD(t,e,i,o){var r;void 0===e&&(e=!1),void 0===i&&(i=!1);let a=t.getBoundingClientRect(),s=oz(t),l=i1(1);e&&(o?op(o)&&(l=oA(o)):l=oA(t));let n=(void 0===(r=i)&&(r=!1),o&&(!r||o===oc(s))&&r)?oT(s):i1(0),d=(a.left+n.x)/l.x,c=(a.top+n.y)/l.y,h=a.width/l.x,u=a.height/l.y;if(s){let t=oc(s),e=o&&op(o)?oc(o):o,i=t,r=o$(i);for(;r&&o&&e!==i;){let t=oA(r),e=r.getBoundingClientRect(),o=o_(r),a=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,s=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;d*=t.x,c*=t.y,h*=t.x,u*=t.y,d+=a,c+=s,r=o$(i=oc(r))}}return oo({width:h,height:u,x:d,y:c})}function oI(t,e){let i=ox(t).scrollLeft;return e?e.left+i:oD(oh(t)).left+i}function oL(t,e,i){void 0===i&&(i=!1);let o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-(i?0:oI(t,o)),y:o.top+e.scrollTop}}function oO(t,e,i){let o;if("viewport"===e)o=function(t,e){let i=oc(t),o=oh(t),r=i.visualViewport,a=o.clientWidth,s=o.clientHeight,l=0,n=0;if(r){a=r.width,s=r.height;let t=oy();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,n=r.offsetTop)}return{width:a,height:s,x:l,y:n}}(t,i);else if("document"===e)o=function(t){let e=oh(t),i=ox(t),o=t.ownerDocument.body,r=iZ(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),a=iZ(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),s=-i.scrollLeft+oI(t),l=-i.scrollTop;return"rtl"===o_(o).direction&&(s+=iZ(e.clientWidth,o.clientWidth)-r),{width:r,height:a,x:s,y:l}}(oh(t));else if(op(e))o=function(t,e){let i=oD(t,!0,"fixed"===e),o=i.top+t.clientTop,r=i.left+t.clientLeft,a=of(t)?oA(t):i1(1),s=t.clientWidth*a.x,l=t.clientHeight*a.y;return{width:s,height:l,x:r*a.x,y:o*a.y}}(e,i);else{let i=oT(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return oo(o)}function oP(t){return"static"===o_(t).position}function oM(t,e){if(!of(t)||"fixed"===o_(t).position)return null;if(e)return e(t);let i=t.offsetParent;return oh(t)===i&&(i=i.ownerDocument.body),i}function oN(t,e){let i=oc(t);if(ob(t))return i;if(!of(t)){let e=ok(t);for(;e&&!ow(e);){if(op(e)&&!oP(e))return e;e=ok(e)}return i}let o=oM(t,e);for(;o&&["table","td","th"].includes(od(o))&&oP(o);)o=oM(o,e);return o&&ow(o)&&oP(o)&&!ov(o)?i:o||function(t){let e=ok(t);for(;of(e)&&!ow(e);){if(ov(e))return e;if(ob(e))break;e=ok(e)}return null}(t)||i}let oR=async function(t){let e=this.getOffsetParent||oN,i=this.getDimensions,o=await i(t.floating);return{reference:function(t,e,i){let o=of(e),r=oh(e),a="fixed"===i,s=oD(t,!0,a,e),l={scrollLeft:0,scrollTop:0},n=i1(0);if(o||!o&&!a)if(("body"!==od(e)||og(r))&&(l=ox(e)),o){let t=oD(e,!0,a,e);n.x=t.x+e.clientLeft,n.y=t.y+e.clientTop}else r&&(n.x=oI(r));a&&!o&&r&&(n.x=oI(r));let d=!r||o||a?i1(0):oL(r,l);return{x:s.left+l.scrollLeft-n.x-d.x,y:s.top+l.scrollTop-n.y-d.y,width:s.width,height:s.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},oF={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t,a="fixed"===r,s=oh(o),l=!!e&&ob(e.floating);if(o===s||l&&a)return i;let n={scrollLeft:0,scrollTop:0},d=i1(1),c=i1(0),h=of(o);if((h||!h&&!a)&&(("body"!==od(o)||og(s))&&(n=ox(o)),of(o))){let t=oD(o);d=oA(o),c.x=t.x+o.clientLeft,c.y=t.y+o.clientTop}let u=!s||h||a?i1(0):oL(s,n,!0);return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-n.scrollLeft*d.x+c.x+u.x,y:i.y*d.y-n.scrollTop*d.y+c.y+u.y}},getDocumentElement:oh,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t,a=[..."clippingAncestors"===i?ob(e)?[]:function(t,e){let i=e.get(t);if(i)return i;let o=oC(t,[],!1).filter(t=>op(t)&&"body"!==od(t)),r=null,a="fixed"===o_(t).position,s=a?ok(t):t;for(;op(s)&&!ow(s);){let e=o_(s),i=ov(s);i||"fixed"!==e.position||(r=null),(a?!i&&!r:!i&&"static"===e.position&&!!r&&["absolute","fixed"].includes(r.position)||og(s)&&!i&&function t(e,i){let o=ok(e);return!(o===i||!op(o)||ow(o))&&("fixed"===o_(o).position||t(o,i))}(t,s))?o=o.filter(t=>t!==s):r=e,s=ok(s)}return e.set(t,o),o}(e,this._c):[].concat(i),o],s=a[0],l=a.reduce((t,i)=>{let o=oO(e,i,r);return t.top=iZ(o.top,t.top),t.right=iQ(o.right,t.right),t.bottom=iQ(o.bottom,t.bottom),t.left=iZ(o.left,t.left),t},oO(e,s,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:oN,getElementRects:oR,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:i}=oS(t);return{width:e,height:i}},getScale:oA,isElement:op,isRTL:function(t){return"rtl"===o_(t).direction}};function oB(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}let oU=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,o;let r,a,{placement:s,rects:l,platform:n,elements:d}=e,c=i3(t,e),{apply:h=()=>{}}=c,u=iX(c,["apply"]),p=await os(e,u),f=i6(s),m=i4(s),g="y"===i9(s),{width:b,height:v}=l.floating;"top"===f||"bottom"===f?(r=f,a=m===(await (null==n.isRTL?void 0:n.isRTL(d.floating))?"start":"end")?"left":"right"):(a=f,r="end"===m?"top":"bottom");let y=v-p.top-p.bottom,w=b-p.left-p.right,_=iQ(v-p[r],y),x=iQ(b-p[a],w),k=!e.middlewareData.shift,C=_,$=x;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&($=w),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(C=y),k&&!m){let t=iZ(p.left,0),e=iZ(p.right,0),i=iZ(p.top,0),o=iZ(p.bottom,0);g?$=b-2*(0!==t||0!==e?t+e:iZ(p.left,p.right)):C=v-2*(0!==i||0!==o?i+o:iZ(p.top,p.bottom))}await h(e1(e0({},e),{availableWidth:$,availableHeight:C}));let S=await n.getDimensions(d.floating);return b!==S.width||v!==S.height?{reset:{rects:!0}}:{}}}};function oH(t){var e=t;for(let t=e;t;t=oV(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=oV(e);t;t=oV(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if("contents"!==e.display&&("static"!==e.position||ov(e)||"BODY"===t.tagName))return t}return null}function oV(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}let oq=t=>t,oj,oW;var oK=class extends e4{async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else{var t;this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,i,o){let r;void 0===o&&(o={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,c=oz(t),h=a||s?[...c?oC(c):[],...oC(e)]:[];h.forEach(t=>{a&&t.addEventListener("scroll",i,{passive:!0}),s&&t.addEventListener("resize",i)});let u=c&&n?function(t,e){let i,o=null,r=oh(t);function a(){var t;clearTimeout(i),null==(t=o)||t.disconnect(),o=null}return!function s(l,n){void 0===l&&(l=!1),void 0===n&&(n=1),a();let d=t.getBoundingClientRect(),{left:c,top:h,width:u,height:p}=d;if(l||e(),!u||!p)return;let f=i0(h),m=i0(r.clientWidth-(c+u)),g={rootMargin:-f+"px "+-m+"px "+-i0(r.clientHeight-(h+p))+"px "+-i0(c)+"px",threshold:iZ(0,iQ(1,n))||1},b=!0;function v(e){let o=e[0].intersectionRatio;if(o!==n){if(!b)return s();o?s(!1,o):i=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==o||oB(d,t.getBoundingClientRect())||s(),b=!1}try{o=new IntersectionObserver(v,e1(e0({},g),{root:r.ownerDocument}))}catch(t){o=new IntersectionObserver(v,g)}o.observe(t)}(!0),a}(c,i):null,p=-1,f=null;l&&(f=new ResizeObserver(t=>{let[o]=t;o&&o.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),i()}),c&&!d&&f.observe(c),f.observe(e));let m=d?oD(t):null;return d&&function e(){let o=oD(t);m&&!oB(m,o)&&i(),m=o,r=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach(t=>{a&&t.removeEventListener("scroll",i),s&&t.removeEventListener("resize",i)}),null==u||u(),null==(t=f)||t.disconnect(),f=null,d&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,e,i;let o;if(!this.active||!this.anchorEl)return;let r=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(e){var i,o;let{x:r,y:a,placement:s,middlewareData:l}=e,n=await ol(e,t);return s===(null==(i=l.offset)?void 0:i.placement)&&null!=(o=l.arrow)&&o.alignmentOffset?{}:{x:r+n.x,y:a+n.y,data:e1(e0({},n),{placement:s})}}}];this.sync?r.push(oU({apply:({rects:t})=>{let e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push({name:"flip",options:e={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var i,o,r,a,s;let{placement:l,middlewareData:n,rects:d,initialPlacement:c,platform:h,elements:u}=t,p=i3(e,t),{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0}=p,w=iX(p,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if(null!=(i=n.arrow)&&i.alignmentOffset)return{};let _=i6(l),x=i9(c),k=i6(c)===c,C=await (null==h.isRTL?void 0:h.isRTL(u.floating)),$=g||(k||!y?[oe(c)]:function(t){let e=oe(t);return[ot(t),e,ot(e)]}(c)),S="none"!==v;!g&&S&&$.push(...function(t,e,i,o){let r=i4(t),a=function(t,e,i){let o=["left","right"],r=["right","left"];switch(t){case"top":case"bottom":if(i)return e?r:o;return e?o:r;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(i6(t),"start"===i,o);return r&&(a=a.map(t=>t+"-"+r),e&&(a=a.concat(a.map(ot)))),a}(c,y,v,C));let z=[c,...$],A=await os(t,w),E=[],T=(null==(o=n.flip)?void 0:o.overflows)||[];if(f&&E.push(A[_]),m){let t=function(t,e,i){void 0===i&&(i=!1);let o=i4(t),r=i7(i9(t)),a=i8(r),s="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[a]>e.floating[a]&&(s=oe(s)),[s,oe(s)]}(l,d,C);E.push(A[t[0]],A[t[1]])}if(T=[...T,{placement:l,overflows:E}],!E.every(t=>t<=0)){let t=((null==(r=n.flip)?void 0:r.index)||0)+1,e=z[t];if(e&&("alignment"!==m||x===i9(e)||T.every(t=>t.overflows[0]>0&&i9(t.placement)===x)))return{data:{index:t,overflows:T},reset:{placement:e}};let i=null==(a=T.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:a.placement;if(!i)switch(b){case"bestFit":{let t=null==(s=T.filter(t=>{if(S){let e=i9(t.placement);return e===x||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:s[0];t&&(i=t);break}case"initialPlacement":i=c}if(l!==i)return{reset:{placement:i}}}return{}}}),this.shift&&r.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(t){let{x:e,y:o,placement:r}=t,a=i3(i,t),{mainAxis:s=!0,crossAxis:l=!1,limiter:n={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}}}=a,d=iX(a,["mainAxis","crossAxis","limiter"]),c={x:e,y:o},h=await os(t,d),u=i9(i6(r)),p=i7(u),f=c[p],m=c[u];if(s){let t="y"===p?"top":"left",e="y"===p?"bottom":"right",i=f+h[t],o=f-h[e];f=iZ(i,iQ(f,o))}if(l){let t="y"===u?"top":"left",e="y"===u?"bottom":"right",i=m+h[t],o=m-h[e];m=iZ(i,iQ(m,o))}let g=n.fn(e1(e0({},t),{[p]:f,[u]:m}));return e1(e0({},g),{data:{x:g.x-e,y:g.y-o,enabled:{[p]:s,[u]:l}}})}}),this.autoSize?r.push(oU({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push({name:"arrow",options:o={element:this.arrowEl,padding:this.arrowPadding},async fn(t){let{x:e,y:i,placement:r,rects:a,platform:s,elements:l,middlewareData:n}=t,{element:d,padding:c=0}=i3(o,t)||{};if(null==d)return{};let h=oi(c),u={x:e,y:i},p=i7(i9(r)),f=i8(p),m=await s.getDimensions(d),g="y"===p,b=g?"clientHeight":"clientWidth",v=a.reference[f]+a.reference[p]-u[p]-a.floating[f],y=u[p]-a.reference[p],w=await (null==s.getOffsetParent?void 0:s.getOffsetParent(d)),_=w?w[b]:0;_&&await (null==s.isElement?void 0:s.isElement(w))||(_=l.floating[b]||a.floating[f]);let x=_/2-m[f]/2-1,k=iQ(h[g?"top":"left"],x),C=iQ(h[g?"bottom":"right"],x),$=_-m[f]-C,S=_/2-m[f]/2+(v/2-y/2),z=iZ(k,iQ(S,$)),A=!n.arrow&&null!=i4(r)&&S!==z&&a.reference[f]/2-(S<k?k:C)-m[f]/2<0,E=A?S<k?S-k:S-$:0;return{[p]:u[p]+E,data:e0({[p]:z,centerOffset:S-z-E},A&&{alignmentOffset:E}),reset:A}}});let a="absolute"===this.strategy?t=>oF.getOffsetParent(t,oH):oF.getOffsetParent;((t,e,i)=>{let o=new Map,r=e0({platform:oF},i),a=e1(e0({},r.platform),{_c:o});return oa(t,e,e1(e0({},r),{platform:a}))})(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:t$(tC({},oF),{getOffsetParent:a})}).then(({x:t,y:e,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){let t=i.arrow.x,e=i.arrow.y,o="",s="",l="",n="";if("start"===this.arrowPlacement){let i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=r?i:"",n=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=r?"":i,n=r?i:"",l="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(n="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(n="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:s,bottom:l,left:n,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return eg(oW||(oW=oq`
      <slot name="anchor" @slotchange=${0}></slot>

      <span
        part="hover-bridge"
        class=${0}
      ></span>

      <div
        part="popup"
        class=${0}
      >
        <slot></slot>
        ${0}
      </div>
    `),this.handleAnchorChange,id({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active}),id({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow}),this.arrow?eg(oj||(oj=oq`<div part="arrow" class="popup__arrow" role="presentation"></div>`)):"")}constructor(){super(...arguments),this.localize=new iA(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,a=0,s=0,l=0,n=0,d=0,c=0;i?t.top<e.top?(o=t.left,r=t.bottom,a=t.right,s=t.bottom,l=e.left,n=e.top,d=e.right,c=e.top):(o=e.left,r=e.bottom,a=e.right,s=e.bottom,l=t.left,n=t.top,d=t.right,c=t.top):t.left<e.left?(o=t.right,r=t.top,a=e.left,s=e.top,l=t.right,n=t.bottom,d=e.left,c=e.bottom):(o=e.right,r=e.top,a=t.left,s=t.top,l=e.right,n=e.bottom,d=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}};function oG(t,e){return new Promise(i=>{t.addEventListener(e,function o(r){r.target===t&&(t.removeEventListener(e,o),i())})})}oK.styles=[eQ,iY],tS([e6(".popup")],oK.prototype,"popup",2),tS([e6(".popup__arrow")],oK.prototype,"arrowEl",2),tS([eJ()],oK.prototype,"anchor",2),tS([eJ({type:Boolean,reflect:!0})],oK.prototype,"active",2),tS([eJ({reflect:!0})],oK.prototype,"placement",2),tS([eJ({reflect:!0})],oK.prototype,"strategy",2),tS([eJ({type:Number})],oK.prototype,"distance",2),tS([eJ({type:Number})],oK.prototype,"skidding",2),tS([eJ({type:Boolean})],oK.prototype,"arrow",2),tS([eJ({attribute:"arrow-placement"})],oK.prototype,"arrowPlacement",2),tS([eJ({attribute:"arrow-padding",type:Number})],oK.prototype,"arrowPadding",2),tS([eJ({type:Boolean})],oK.prototype,"flip",2),tS([eJ({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],oK.prototype,"flipFallbackPlacements",2),tS([eJ({attribute:"flip-fallback-strategy"})],oK.prototype,"flipFallbackStrategy",2),tS([eJ({type:Object})],oK.prototype,"flipBoundary",2),tS([eJ({attribute:"flip-padding",type:Number})],oK.prototype,"flipPadding",2),tS([eJ({type:Boolean})],oK.prototype,"shift",2),tS([eJ({type:Object})],oK.prototype,"shiftBoundary",2),tS([eJ({attribute:"shift-padding",type:Number})],oK.prototype,"shiftPadding",2),tS([eJ({attribute:"auto-size"})],oK.prototype,"autoSize",2),tS([eJ()],oK.prototype,"sync",2),tS([eJ({type:Object})],oK.prototype,"autoSizeBoundary",2),tS([eJ({attribute:"auto-size-padding",type:Number})],oK.prototype,"autoSizePadding",2),tS([eJ({attribute:"hover-bridge",type:Boolean})],oK.prototype,"hoverBridge",2);let oY=t=>t,oX;var oQ=class extends e4{disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await iB(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:i}=iM(this,"tooltip.show",{dir:this.localize.dir()});await iN(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await iB(this.body);let{keyframes:t,options:i}=iM(this,"tooltip.hide",{dir:this.localize.dir()});await iN(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,oG(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oG(this,"sl-after-hide")}render(){return eg(oX||(oX=oY`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${0}
        placement=${0}
        distance=${0}
        skidding=${0}
        strategy=${0}
        flip
        shift
        arrow
        hover-bridge
      >
        ${0}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${0}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${0}>
          <slot name="content">${0}</slot>
        </div>
      </sl-popup>
    `),id({tooltip:!0,"tooltip--open":this.open}),this.placement,this.distance,this.skidding,this.hoist?"fixed":"absolute","","",this.open?"polite":"off",this.content)}constructor(){super(),this.localize=new iA(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=iR(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=iR(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}};oQ.styles=[eQ,iG],oQ.dependencies={"sl-popup":oK},tS([e6("slot:not([name])")],oQ.prototype,"defaultSlot",2),tS([e6(".tooltip__body")],oQ.prototype,"body",2),tS([e6("sl-popup")],oQ.prototype,"popup",2),tS([eJ()],oQ.prototype,"content",2),tS([eJ()],oQ.prototype,"placement",2),tS([eJ({type:Boolean,reflect:!0})],oQ.prototype,"disabled",2),tS([eJ({type:Number})],oQ.prototype,"distance",2),tS([eJ({type:Boolean,reflect:!0})],oQ.prototype,"open",2),tS([eJ({type:Number})],oQ.prototype,"skidding",2),tS([eJ()],oQ.prototype,"trigger",2),tS([eJ({type:Boolean})],oQ.prototype,"hoist",2),tS([eX("open",{waitUntilFirstUpdate:!0})],oQ.prototype,"handleOpenChange",1),tS([eX(["content","distance","hoist","placement","skidding"])],oQ.prototype,"handleOptionsChange",1),tS([eX("disabled")],oQ.prototype,"handleDisabledChange",1),iP("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iP("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),oQ.define("sl-tooltip");var oZ=tV(d||(d=(t=>t)`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`));function oJ(t,e,i){let o=t=>Object.is(t,-0)?0:t;return o(t<e?e:t>i?i:t)}let o0=t=>t,o1;function o2(t,e=!1){function i(t){let e=t.getChildrenItems({includeDisabled:!1});if(e.length){let i=e.every(t=>t.selected),o=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!o}}!function t(o){for(let i of o.getChildrenItems())i.selected=e?o.selected||i.selected:!i.disabled&&o.selected,t(i);e&&i(o)}(t),function t(e){let o=e.parentElement;iK.isTreeItem(o)&&(i(o),t(o))}(t)}var o5=class extends e4{async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){let e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){let i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){let e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),o2(t);else if("single"===this.selection||t.isLeaf)for(let e of this.getAllTreeItems())e.selected=e===t;else"leaf"===this.selection&&(t.expanded=!t.expanded);let i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;let e=this.getFocusableItems(),i="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();let r=e.findIndex(t=>t.matches(":focus")),a=e[r],s=t=>{let i=e[oJ(t,0,e.length-1)];this.focusItem(i)},l=t=>{a.expanded=t};"ArrowDown"===t.key?s(r+1):"ArrowUp"===t.key?s(r-1):i&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?s(r+1):l(!0):i&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key?!a||a.disabled||a.isLeaf||!a.expanded?s(r-1):l(!1):"Home"===t.key?s(0):"End"===t.key?s(e.length-1):"Enter"!==t.key&&" "!==t.key||a.disabled||this.selectItem(a)}}handleClick(t){let e=t.target,i=e.closest("sl-tree-item"),o=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t="multiple"===this.selection,e=this.getAllTreeItems();for(let i of(this.setAttribute("aria-multiselectable",t?"true":"false"),e))i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>o2(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;let o=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(t),!e.has(t)})}render(){return eg(o1||(o1=o0`
      <div
        part="base"
        class="tree"
        @click=${0}
        @keydown=${0}
        @mousedown=${0}
      >
        <slot @slotchange=${0}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `),this.handleClick,this.handleKeyDown,this.handleMouseDown,this.handleSlotChange)}constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new iA(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{let i=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(null===i?t.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})},this.handleTreeChanged=t=>{for(let e of t){let t=[...e.addedNodes].filter(iK.isTreeItem),i=[...e.removedNodes].filter(iK.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),iK.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}};o5.styles=[eQ,oZ],tS([e6("slot:not([name])")],o5.prototype,"defaultSlot",2),tS([e6("slot[name=expand-icon]")],o5.prototype,"expandedIconSlot",2),tS([e6("slot[name=collapse-icon]")],o5.prototype,"collapsedIconSlot",2),tS([eJ()],o5.prototype,"selection",2),tS([eX("selection")],o5.prototype,"handleSelectionChange",1),o5.define("sl-tree");var o3=tV(c||(c=(t=>t)`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`));let o6=t=>t,o4;var o7=class extends e4{render(){return eg(o4||(o4=o6` <slot></slot> `))}};o7.styles=[eQ,o3],o7.define("sl-visually-hidden");var o8=tV(h||(h=(t=>t)`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`));let o9=t=>t,rt;var re=0,ri=class extends e4{connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return eg(rt||(rt=o9`
      <slot
        part="base"
        class=${0}
      ></slot>
    `),id({"tab-panel":!0,"tab-panel--active":this.active}))}constructor(){super(...arguments),this.attrId=++re,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}};ri.styles=[eQ,o8],tS([eJ({reflect:!0})],ri.prototype,"name",2),tS([eJ({type:Boolean,reflect:!0})],ri.prototype,"active",2),tS([eX("active")],ri.prototype,"handleActiveChange",1),ri.define("sl-tab-panel");var ro=tV(u||(u=(t=>t)`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`)),rr=tV(p||(p=(t=>t)`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`));let ra=Symbol.for(""),rs=t=>{if((null==t?void 0:t.r)===ra)return null==t?void 0:t._$litStatic$},rl=(t,...e)=>({_$litStatic$:e.reduce((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:ra}),rn=new Map,rd=t=>(e,...i)=>{let o,r,a=i.length,s=[],l=[],n,d=0,c=!1;for(;d<a;){for(n=e[d];d<a&&void 0!==(o=rs(r=i[d]));)n+=o+e[++d],c=!0;d!==a&&l.push(r),s.push(n),d++}if(d===a&&s.push(e[a]),c){let t=s.join("$$lit$$");void 0===(e=rn.get(t))&&(s.raw=s,rn.set(t,e=s)),i=l}return t(e,...i)},rc=rd(eg);rd(eb),rd(ev);let rh=t=>t,ru,rp,rf;var rm=class extends e4{handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?rl(ru||(ru=rh`a`)):rl(rp||(rp=rh`button`));return rc(rf||(rf=rh`
      <${0}
        part="base"
        class=${0}
        ?disabled=${0}
        type=${0}
        href=${0}
        target=${0}
        download=${0}
        rel=${0}
        role=${0}
        aria-disabled=${0}
        aria-label="${0}"
        tabindex=${0}
        @blur=${0}
        @focus=${0}
        @click=${0}
      >
        <sl-icon
          class="icon-button__icon"
          name=${0}
          library=${0}
          src=${0}
          aria-hidden="true"
        ></sl-icon>
      </${0}>
    `),e,id({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus}),ic(t?void 0:this.disabled),ic(t?void 0:"button"),ic(t?this.href:void 0),ic(t?this.target:void 0),ic(t?this.download:void 0),ic(t&&this.target?"noreferrer noopener":void 0),ic(t?void 0:"button"),this.disabled?"true":"false",this.label,this.disabled?"-1":"0",this.handleBlur,this.handleFocus,this.handleClick,ic(this.name),ic(this.library),ic(this.src),e)}constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}};rm.styles=[eQ,rr],rm.dependencies={"sl-icon":ir},tS([e6(".icon-button")],rm.prototype,"button",2),tS([e2()],rm.prototype,"hasFocus",2),tS([eJ()],rm.prototype,"name",2),tS([eJ()],rm.prototype,"library",2),tS([eJ()],rm.prototype,"src",2),tS([eJ()],rm.prototype,"href",2),tS([eJ()],rm.prototype,"target",2),tS([eJ()],rm.prototype,"download",2),tS([eJ()],rm.prototype,"label",2),tS([eJ({type:Boolean,reflect:!0})],rm.prototype,"disabled",2);let rg=t=>t,rb,rv;var ry=class extends e4{handleRemoveClick(){this.emit("sl-remove")}render(){return eg(rv||(rv=rg`
      <span
        part="base"
        class=${0}
      >
        <slot part="content" class="tag__content"></slot>

        ${0}
      </span>
    `),id({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable}),this.removable?eg(rb||(rb=rg`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${0}
                class="tag__remove"
                @click=${0}
                tabindex="-1"
              ></sl-icon-button>
            `),this.localize.term("remove"),this.handleRemoveClick):"")}constructor(){super(...arguments),this.localize=new iA(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}};ry.styles=[eQ,ro],ry.dependencies={"sl-icon-button":rm},tS([eJ({reflect:!0})],ry.prototype,"variant",2),tS([eJ({reflect:!0})],ry.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],ry.prototype,"pill",2),tS([eJ({type:Boolean})],ry.prototype,"removable",2),ry.define("sl-tag");var rw=tV(f||(f=(t=>t)`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`));let r_=t=>t,rx;var rk=class extends e4{get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){"number"==typeof t.top&&(this.input.scrollTop=t.top),"number"==typeof t.left&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){let r=null!=e?e:this.input.selectionStart,a=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,r,a,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return eg(rx||(rx=r_`
      <div
        part="form-control"
        class=${0}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${0}
        >
          <slot name="label">${0}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${0}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${0}
              name=${0}
              .value=${0}
              ?disabled=${0}
              ?readonly=${0}
              ?required=${0}
              placeholder=${0}
              rows=${0}
              minlength=${0}
              maxlength=${0}
              autocapitalize=${0}
              autocorrect=${0}
              ?autofocus=${0}
              spellcheck=${0}
              enterkeyhint=${0}
              inputmode=${0}
              aria-describedby="help-text"
              @change=${0}
              @input=${0}
              @invalid=${0}
              @focus=${0}
              @blur=${0}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${0}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${0}
        >
          <slot name="help-text">${0}</slot>
        </div>
      </div>
    `),id({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o}),i?"false":"true",this.label,id({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize}),this.title,ic(this.name),ih(this.value),this.disabled,this.readonly,this.required,ic(this.placeholder),ic(this.rows),ic(this.minlength),ic(this.maxlength),ic(this.autocapitalize),ic(this.autocorrect),this.autofocus,ic(this.spellcheck),ic(this.enterkeyhint),ic(this.inputmode),this.handleChange,this.handleInput,this.handleInvalid,this.handleFocus,this.handleBlur,"auto"!==this.resize,o?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new eV(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}};rk.styles=[eQ,eH,rw],tS([e6(".textarea__control")],rk.prototype,"input",2),tS([e6(".textarea__size-adjuster")],rk.prototype,"sizeAdjuster",2),tS([e2()],rk.prototype,"hasFocus",2),tS([eJ()],rk.prototype,"title",2),tS([eJ()],rk.prototype,"name",2),tS([eJ()],rk.prototype,"value",2),tS([eJ({reflect:!0})],rk.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],rk.prototype,"filled",2),tS([eJ()],rk.prototype,"label",2),tS([eJ({attribute:"help-text"})],rk.prototype,"helpText",2),tS([eJ()],rk.prototype,"placeholder",2),tS([eJ({type:Number})],rk.prototype,"rows",2),tS([eJ()],rk.prototype,"resize",2),tS([eJ({type:Boolean,reflect:!0})],rk.prototype,"disabled",2),tS([eJ({type:Boolean,reflect:!0})],rk.prototype,"readonly",2),tS([eJ({reflect:!0})],rk.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],rk.prototype,"required",2),tS([eJ({type:Number})],rk.prototype,"minlength",2),tS([eJ({type:Number})],rk.prototype,"maxlength",2),tS([eJ()],rk.prototype,"autocapitalize",2),tS([eJ()],rk.prototype,"autocorrect",2),tS([eJ()],rk.prototype,"autocomplete",2),tS([eJ({type:Boolean})],rk.prototype,"autofocus",2),tS([eJ()],rk.prototype,"enterkeyhint",2),tS([eJ({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],rk.prototype,"spellcheck",2),tS([eJ()],rk.prototype,"inputmode",2),tS([eU()],rk.prototype,"defaultValue",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],rk.prototype,"handleDisabledChange",1),tS([eX("rows",{waitUntilFirstUpdate:!0})],rk.prototype,"handleRowsChange",1),tS([eX("value",{waitUntilFirstUpdate:!0})],rk.prototype,"handleValueChange",1),rk.define("sl-textarea");var rC=tV(m||(m=(t=>t)`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`));let r$=t=>t,rS,rz;var rA=0,rE=class extends e4{connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,eg(rz||(rz=r$`
      <div
        part="base"
        class=${0}
      >
        <slot></slot>
        ${0}
      </div>
    `),id({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled}),this.closable?eg(rS||(rS=r$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${0}
                class="tab__close-button"
                @click=${0}
                tabindex="-1"
              ></sl-icon-button>
            `),this.localize.term("close"),this.handleCloseClick):"")}constructor(){super(...arguments),this.localize=new iA(this),this.attrId=++rA,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}};rE.styles=[eQ,rC],rE.dependencies={"sl-icon-button":rm},tS([e6(".tab")],rE.prototype,"tab",2),tS([eJ({reflect:!0})],rE.prototype,"panel",2),tS([eJ({type:Boolean,reflect:!0})],rE.prototype,"active",2),tS([eJ({type:Boolean,reflect:!0})],rE.prototype,"closable",2),tS([eJ({type:Boolean,reflect:!0})],rE.prototype,"disabled",2),tS([eJ({type:Number,reflect:!0})],rE.prototype,"tabIndex",2),tS([eX("active")],rE.prototype,"handleActiveChange",1),tS([eX("disabled")],rE.prototype,"handleDisabledChange",1),rE.define("sl-tab");var rT=tV(g||(g=(t=>t)`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`)),rD=tV(b||(b=(t=>t)`
  :host {
    display: contents;
  }
`));let rI=t=>t,rL;var rO=class extends e4{connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(null!==t){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return eg(rL||(rL=rI` <slot @slotchange=${0}></slot> `),this.handleSlotChange)}constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}};rO.styles=[eQ,rD],tS([eJ({type:Boolean,reflect:!0})],rO.prototype,"disabled",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],rO.prototype,"handleDisabledChange",1);var rP=new Set;function rM(t){if(rP.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let t=function(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}(),e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function rN(t){rP.delete(t),0===rP.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function rR(t,e,i="vertical",o="smooth"){let r={top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)},a=r.top+e.scrollTop,s=r.left+e.scrollLeft,l=e.scrollLeft,n=e.scrollLeft+e.offsetWidth,d=e.scrollTop,c=e.scrollTop+e.offsetHeight;("horizontal"===i||"both"===i)&&(s<l?e.scrollTo({left:s,behavior:o}):s+t.clientWidth>n&&e.scrollTo({left:s-e.offsetWidth+t.clientWidth,behavior:o})),("vertical"===i||"both"===i)&&(a<d?e.scrollTo({top:a,behavior:o}):a+t.clientHeight>c&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:o}))}let rF=t=>t,rB,rU,rH;var rV=class extends e4{connectedCallback(){let t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{let e=t.filter(({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;let e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e});if(0!==e.length){if(e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>"disabled"===t.attributeName))this.syncTabsAndPanels();else if(e.some(t=>"active"===t.attributeName)){let t=e.filter(t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase()).map(t=>t.target).find(t=>t.active);t&&this.setActiveTab(t)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((t,e)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let e=this.tabs.find(t=>t.matches(":focus")),i="rtl"===this.localize.dir(),o=null;if((null==e?void 0:e.tagName.toLowerCase())==="sl-tab"){if("Home"===t.key)o=this.focusableTabs[0];else if("End"===t.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){let t=this.tabs.findIndex(t=>t===e);o=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){let t=this.tabs.findIndex(t=>t===e);o=this.findNextFocusableTab(t,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(t=>{t.tabIndex=t===o?0:-1}),["top","bottom"].includes(this.placement)&&rR(o,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=tC({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){let i=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1}),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&rR(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,i=t.clientHeight,o="rtl"===this.localize.dir(),r=this.getAllTabs(),a=r.slice(0,r.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*a.left}px`:`${a.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${a.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null,o="forward"===e?1:-1,r=t+o;for(;t<this.tabs.length;){if(null===(i=this.tabs[r]||null)){i="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=o}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t="rtl"===this.localize.dir();return eg(rH||(rH=rF`
      <div
        part="base"
        class=${0}
        @click=${0}
        @keydown=${0}
      >
        <div class="tab-group__nav-container" part="nav">
          ${0}

          <div class="tab-group__nav" @scrollend=${0}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${0}>
                <slot name="nav" @slotchange=${0}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${0}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${0}></slot>
      </div>
    `),id({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls}),this.handleClick,this.handleKeyDown,this.hasScrollControls?eg(rB||(rB=rF`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${0}
                  name=${0}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${0}
                  @click=${0}
                ></sl-icon-button>
              `),id({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton}),t?"chevron-right":"chevron-left",this.localize.term("scrollToStart"),this.handleScrollToStart):"",this.updateScrollButtons,this.syncIndicator,this.syncTabsAndPanels,this.hasScrollControls?eg(rU||(rU=rF`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${0}
                  name=${0}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${0}
                  @click=${0}
                ></sl-icon-button>
              `),id({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton}),t?"chevron-left":"chevron-right",this.localize.term("scrollToEnd"),this.handleScrollToEnd):"",this.syncTabsAndPanels)}constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new iA(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}};rV.styles=[eQ,rT],rV.dependencies={"sl-icon-button":rm,"sl-resize-observer":rO},tS([e6(".tab-group")],rV.prototype,"tabGroup",2),tS([e6(".tab-group__body")],rV.prototype,"body",2),tS([e6(".tab-group__nav")],rV.prototype,"nav",2),tS([e6(".tab-group__indicator")],rV.prototype,"indicator",2),tS([e2()],rV.prototype,"hasScrollControls",2),tS([e2()],rV.prototype,"shouldHideScrollStartButton",2),tS([e2()],rV.prototype,"shouldHideScrollEndButton",2),tS([eJ()],rV.prototype,"placement",2),tS([eJ()],rV.prototype,"activation",2),tS([eJ({attribute:"no-scroll-controls",type:Boolean})],rV.prototype,"noScrollControls",2),tS([eJ({attribute:"fixed-scroll-controls",type:Boolean})],rV.prototype,"fixedScrollControls",2),tS([e5({passive:!0})],rV.prototype,"updateScrollButtons",1),tS([eX("noScrollControls",{waitUntilFirstUpdate:!0})],rV.prototype,"updateScrollControls",1),tS([eX("placement",{waitUntilFirstUpdate:!0})],rV.prototype,"syncIndicator",1),rV.define("sl-tab-group");var rq=tV(v||(v=(t=>t)`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`));let rj=t=>t,rW;var rK=class extends e4{render(){return eg(rW||(rW=rj`
      <div
        part="base"
        class=${0}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `),id({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect}))}constructor(){super(...arguments),this.effect="none"}};rK.styles=[eQ,rq],tS([eJ()],rK.prototype,"effect",2),rK.define("sl-skeleton");var rG=tV(y||(y=(t=>t)`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`));function rY(t,e){function i(i){let o=t.getBoundingClientRect(),r=t.ownerDocument.defaultView,a=o.left+r.scrollX,s=o.top+r.scrollY,l=i.pageX-a,n=i.pageY-s;(null==e?void 0:e.onMove)&&e.onMove(l,n)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}let rX=t=>t,rQ;var rZ=()=>null,rJ=class extends e4{toSnapFunction(t){let e=t.split(" ");return({pos:i,size:o,snapThreshold:r,isRtl:a,vertical:s})=>{let l=i,n=Number.POSITIVE_INFINITY;return e.forEach(e=>{let d;if(e.startsWith("repeat(")){let e=t.substring(7,t.length-1),r=e.endsWith("%"),l=Number.parseFloat(e),n=r?l/100*o:l;d=Math.round((a&&!s?o-i:i)/n)*n}else d=e.endsWith("%")?o*(Number.parseFloat(e)/100):Number.parseFloat(e);a&&!s&&(d=o-d);let c=Math.abs(i-d);c<=r&&c<n&&(l=d,n=c)}),l}}set snap(t){this.snapValue=null!=t?t:"",t?this.snapFunction="string"==typeof t?this.toSnapFunction(t):t:this.snapFunction=rZ}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),rY(this,{onMove:(t,i)=>{var o;let r=this.vertical?i:t;"end"===this.primary&&(r=this.size-r),r=null!=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?o:r,this.position=oJ(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position,i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e=100*("end"===this.primary)),"End"===t.key&&(e=100*("end"!==this.primary)),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=oJ(e,0,100)}}handleResize(t){let{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${r}`,this.style[e]="",eg(rQ||(rQ=rX`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${0}
        role="separator"
        aria-valuenow=${0}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${0}
        @keydown=${0}
        @mousedown=${0}
        @touchstart=${0}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `),ic(this.disabled?void 0:"0"),this.position,this.localize.term("resize"),this.handleKeyDown,this.handleDrag,this.handleDrag)}constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new iA(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=rZ,this.snapThreshold=12}};rJ.styles=[eQ,rG],tS([e6(".divider")],rJ.prototype,"divider",2),tS([eJ({type:Number,reflect:!0})],rJ.prototype,"position",2),tS([eJ({attribute:"position-in-pixels",type:Number})],rJ.prototype,"positionInPixels",2),tS([eJ({type:Boolean,reflect:!0})],rJ.prototype,"vertical",2),tS([eJ({type:Boolean,reflect:!0})],rJ.prototype,"disabled",2),tS([eJ()],rJ.prototype,"primary",2),tS([eJ({reflect:!0})],rJ.prototype,"snap",1),tS([eJ({type:Number,attribute:"snap-threshold"})],rJ.prototype,"snapThreshold",2),tS([eX("position")],rJ.prototype,"handlePositionChange",1),tS([eX("positionInPixels")],rJ.prototype,"handlePositionInPixelsChange",1),tS([eX("vertical")],rJ.prototype,"handleVerticalChange",1),rJ.define("sl-split-panel");var r0=tV(w||(w=(t=>t)`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`));let r1=t=>t,r2;var r5=class extends e4{get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return eg(r2||(r2=r1`
      <div
        class=${0}
      >
        <label
          part="base"
          class=${0}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${0}
            name=${0}
            value=${0}
            .checked=${0}
            .disabled=${0}
            .required=${0}
            role="switch"
            aria-checked=${0}
            aria-describedby="help-text"
            @click=${0}
            @input=${0}
            @invalid=${0}
            @blur=${0}
            @focus=${0}
            @keydown=${0}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${0}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${0}</slot>
        </div>
      </div>
    `),id({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e}),id({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size}),this.title,this.name,ic(this.value),ih(this.checked),this.disabled,this.required,this.checked?"true":"false",this.handleClick,this.handleInput,this.handleInvalid,this.handleBlur,this.handleFocus,this.handleKeyDown,e?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new eV(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}};r5.styles=[eQ,eH,r0],tS([e6('input[type="checkbox"]')],r5.prototype,"input",2),tS([e2()],r5.prototype,"hasFocus",2),tS([eJ()],r5.prototype,"title",2),tS([eJ()],r5.prototype,"name",2),tS([eJ()],r5.prototype,"value",2),tS([eJ({reflect:!0})],r5.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],r5.prototype,"disabled",2),tS([eJ({type:Boolean,reflect:!0})],r5.prototype,"checked",2),tS([eU("checked")],r5.prototype,"defaultChecked",2),tS([eJ({reflect:!0})],r5.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],r5.prototype,"required",2),tS([eJ({attribute:"help-text"})],r5.prototype,"helpText",2),tS([eX("checked",{waitUntilFirstUpdate:!0})],r5.prototype,"handleCheckedChange",1),tS([eX("disabled",{waitUntilFirstUpdate:!0})],r5.prototype,"handleDisabledChange",1),r5.define("sl-switch"),rO.define("sl-resize-observer");var r3=tV(_||(_=(t=>t)`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`));class r6 extends il{render(t){if(t===ew||null==t)return this._t=void 0,this.it=t;if(t===ey)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}constructor(t){if(super(t),this.it=ew,t.type!==ia.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}}r6.directiveName="unsafeHTML",r6.resultType=1;let r4=is(r6),r7=t=>t,r8,r9,at,ae,ai,ao,ar;var aa=class extends e4{get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(t=>o.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){!0===e||!1===e?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;let o=this.getAllOptions();this.selectedOptions=o.filter(t=>t.selected);let r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let o=this.selectedOptions[0];this.value=null!=(t=null==o?void 0:o.value)?t:"",this.displayLabel=null!=(i=null==(e=null==o?void 0:o.getTextLabel)?void 0:e.call(o))?i:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(t,e);return eg(r8||(r8=r7`<div @sl-remove=${0}>
          ${0}
        </div>`),e=>this.handleTagRemove(e,t),"string"==typeof i?r4(i):i)}return e===this.maxOptionsVisible?eg(r9||(r9=r7`<sl-tag size=${0}>+${0}</sl-tag>`),this.size,this.selectedOptions.length-e):eg(at||(at=r7``))})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){let t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){let t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await iB(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=iM(this,"select.show",{dir:this.localize.dir()});await iN(this.popup.popup,t,e),this.currentOption&&rR(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await iB(this);let{keyframes:t,options:e}=iM(this,"select.hide",{dir:this.localize.dir()});await iN(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,oG(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,oG(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return eg(ao||(ao=r7`
      <div
        part="form-control"
        class=${0}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${0}
          @click=${0}
        >
          <slot name="label">${0}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${0}
            placement=${0}
            strategy=${0}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${0}
              @mousedown=${0}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${0}
                .disabled=${0}
                .value=${0}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${0}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${0}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${0}
                @blur=${0}
              />

              ${0}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${0}
                ?required=${0}
                .value=${0}
                tabindex="-1"
                aria-hidden="true"
                @focus=${0}
                @invalid=${0}
              />

              ${0}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${0}
              aria-multiselectable=${0}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${0}
              @slotchange=${0}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${0}
        >
          <slot name="help-text">${0}</slot>
        </div>
      </div>
    `),id({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o}),i?"false":"true",this.handleLabelClick,this.label,id({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size}),this.placement,this.hoist?"fixed":"absolute",this.handleComboboxKeyDown,this.handleComboboxMouseDown,this.placeholder,this.disabled,this.displayLabel,this.open?"true":"false",this.disabled?"true":"false",this.handleFocus,this.handleBlur,this.multiple?eg(ae||(ae=r7`<div part="tags" class="select__tags">${0}</div>`),this.tags):"",this.disabled,this.required,Array.isArray(this.value)?this.value.join(", "):this.value,()=>this.focus(),this.handleInvalid,r?eg(ai||(ai=r7`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${0}
                      @mousedown=${0}
                      @click=${0}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `),this.localize.term("clearEntry"),this.handleClearMouseDown,this.handleClearClick):"",this.open?"true":"false",this.multiple?"true":"false",this.handleOptionClick,this.handleDefaultSlotChange,o?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new eV(this,"help-text","label"),this.localize=new iA(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>eg(ar||(ar=r7`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${0}
        size=${0}
        removable
        @sl-remove=${0}
      >
        ${0}
      </sl-tag>
    `),this.pill,this.size,e=>this.handleTagRemove(e,t),t.getTextLabel()),this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,i=null!==e.closest(".select__clear"),o=null!==e.closest("sl-icon-button");if(!i&&!o){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return(t.preventDefault(),t.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.getAllOptions(),i=e.indexOf(this.currentOption),o=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=i+1)>e.length-1&&(o=0):"ArrowUp"===t.key?(o=i-1)<0&&(o=e.length-1):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(t.key&&1===t.key.length||"Backspace"===t.key){let e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}for(let i of(t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase(),e))if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}};aa.styles=[eQ,eH,r3],aa.dependencies={"sl-icon":ir,"sl-popup":oK,"sl-tag":ry},tS([e6(".select")],aa.prototype,"popup",2),tS([e6(".select__combobox")],aa.prototype,"combobox",2),tS([e6(".select__display-input")],aa.prototype,"displayInput",2),tS([e6(".select__value-input")],aa.prototype,"valueInput",2),tS([e6(".select__listbox")],aa.prototype,"listbox",2),tS([e2()],aa.prototype,"hasFocus",2),tS([e2()],aa.prototype,"displayLabel",2),tS([e2()],aa.prototype,"currentOption",2),tS([e2()],aa.prototype,"selectedOptions",2),tS([e2()],aa.prototype,"valueHasChanged",2),tS([eJ()],aa.prototype,"name",2),tS([e2()],aa.prototype,"value",1),tS([eJ({attribute:"value"})],aa.prototype,"defaultValue",2),tS([eJ({reflect:!0})],aa.prototype,"size",2),tS([eJ()],aa.prototype,"placeholder",2),tS([eJ({type:Boolean,reflect:!0})],aa.prototype,"multiple",2),tS([eJ({attribute:"max-options-visible",type:Number})],aa.prototype,"maxOptionsVisible",2),tS([eJ({type:Boolean,reflect:!0})],aa.prototype,"disabled",2),tS([eJ({type:Boolean})],aa.prototype,"clearable",2),tS([eJ({type:Boolean,reflect:!0})],aa.prototype,"open",2),tS([eJ({type:Boolean})],aa.prototype,"hoist",2),tS([eJ({type:Boolean,reflect:!0})],aa.prototype,"filled",2),tS([eJ({type:Boolean,reflect:!0})],aa.prototype,"pill",2),tS([eJ()],aa.prototype,"label",2),tS([eJ({reflect:!0})],aa.prototype,"placement",2),tS([eJ({attribute:"help-text"})],aa.prototype,"helpText",2),tS([eJ({reflect:!0})],aa.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],aa.prototype,"required",2),tS([eJ()],aa.prototype,"getTag",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],aa.prototype,"handleDisabledChange",1),tS([eX(["defaultValue","value"],{waitUntilFirstUpdate:!0})],aa.prototype,"handleValueChange",1),tS([eX("open",{waitUntilFirstUpdate:!0})],aa.prototype,"handleOpenChange",1),iP("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),iP("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),aa.define("sl-select"),iD.define("sl-spinner");var as=tV(x||(x=(t=>t)`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`));let al=t=>t,an,ad;var ac=class extends e4{get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${100*t}%`)}syncTooltip(t){if(null!==this.output){let e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r="rtl"===this.localize.dir(),a=e*t;if(r){let r=`${e-a}px + ${t} * ${o}`;this.output.style.translate=`calc((${r} - ${i/2}px - ${o} / 2))`}else{let e=`${a}px - ${t} * ${o}`;this.output.style.translate=`calc(${e} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return eg(ad||(ad=al`
      <div
        part="form-control"
        class=${0}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${0}
        >
          <slot name="label">${0}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${0}
            @mousedown=${0}
            @mouseup=${0}
            @touchstart=${0}
            @touchend=${0}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${0}
              type="range"
              name=${0}
              ?disabled=${0}
              min=${0}
              max=${0}
              step=${0}
              .value=${0}
              aria-describedby="help-text"
              @change=${0}
              @focus=${0}
              @input=${0}
              @invalid=${0}
              @blur=${0}
            />
            ${0}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${0}
        >
          <slot name="help-text">${0}</slot>
        </div>
      </div>
    `),id({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o}),i?"false":"true",this.label,id({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip}),this.handleThumbDragStart,this.handleThumbDragEnd,this.handleThumbDragStart,this.handleThumbDragEnd,this.title,ic(this.name),this.disabled,ic(this.min),ic(this.max),ic(this.step),ih(this.value.toString()),this.handleChange,this.handleFocus,this.handleInput,this.handleInvalid,this.handleBlur,"none"===this.tooltip||this.disabled?"":eg(an||(an=al`
                  <output part="tooltip" class="range__tooltip">
                    ${0}
                  </output>
                `),"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value),o?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this),this.hasSlotController=new eV(this,"help-text","label"),this.localize=new iA(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}};ac.styles=[eQ,eH,as],tS([e6(".range__control")],ac.prototype,"input",2),tS([e6(".range__tooltip")],ac.prototype,"output",2),tS([e2()],ac.prototype,"hasFocus",2),tS([e2()],ac.prototype,"hasTooltip",2),tS([eJ()],ac.prototype,"title",2),tS([eJ()],ac.prototype,"name",2),tS([eJ({type:Number})],ac.prototype,"value",2),tS([eJ()],ac.prototype,"label",2),tS([eJ({attribute:"help-text"})],ac.prototype,"helpText",2),tS([eJ({type:Boolean,reflect:!0})],ac.prototype,"disabled",2),tS([eJ({type:Number})],ac.prototype,"min",2),tS([eJ({type:Number})],ac.prototype,"max",2),tS([eJ({type:Number})],ac.prototype,"step",2),tS([eJ()],ac.prototype,"tooltip",2),tS([eJ({attribute:!1})],ac.prototype,"tooltipFormatter",2),tS([eJ({reflect:!0})],ac.prototype,"form",2),tS([eU()],ac.prototype,"defaultValue",2),tS([e5({passive:!0})],ac.prototype,"handleThumbDragStart",1),tS([eX("value",{waitUntilFirstUpdate:!0})],ac.prototype,"handleValueChange",1),tS([eX("disabled",{waitUntilFirstUpdate:!0})],ac.prototype,"handleDisabledChange",1),tS([eX("hasTooltip",{waitUntilFirstUpdate:!0})],ac.prototype,"syncRange",1),ac.define("sl-range");var ah=tV(k||(k=(t=>t)`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`));let au="important",ap=" !"+au,af=is(class extends il{render(t){return Object.keys(t).reduce((e,i)=>{let o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(let t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let o=e[t];if(null!=o){this.ft.add(t);let e="string"==typeof o&&o.endsWith(ap);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?au:""):i[t]=o}}return ey}constructor(t){var e;if(super(t),t.type!==ia.ATTRIBUTE||"style"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}}),am=t=>t,ag,ab,av;var ay=class extends e4{getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e="rtl"===this.localize.dir(),{left:i,right:o,width:r}=this.rating.getBoundingClientRect();return oJ(e?this.roundToPrecision((o-t)/r*this.max,this.precision):this.roundToPrecision((t-i)/r*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),o=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key){let e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key){let e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){let i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys()),i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,eg(av||(av=am`
      <div
        part="base"
        class=${0}
        role="slider"
        aria-label=${0}
        aria-disabled=${0}
        aria-readonly=${0}
        aria-valuenow=${0}
        aria-valuemin=${0}
        aria-valuemax=${0}
        tabindex=${0}
        @click=${0}
        @keydown=${0}
        @mouseenter=${0}
        @touchstart=${0}
        @mouseleave=${0}
        @touchend=${0}
        @mousemove=${0}
        @touchmove=${0}
      >
        <span class="rating__symbols">
          ${0}
        </span>
      </div>
    `),id({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t}),this.label,this.disabled?"true":"false",this.readonly?"true":"false",this.value,0,this.max,this.disabled||this.readonly?"-1":"0",this.handleClick,this.handleKeyDown,this.handleMouseEnter,this.handleTouchStart,this.handleMouseLeave,this.handleTouchEnd,this.handleMouseMove,this.handleTouchMove,e.map(e=>i>e&&i<e+1?eg(ag||(ag=am`
                <span
                  class=${0}
                  role="presentation"
                >
                  <div
                    style=${0}
                  >
                    ${0}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${0}
                  >
                    ${0}
                  </div>
                </span>
              `),id({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1}),af({clipPath:t?`inset(0 ${(i-e)*100}% 0 0)`:`inset(0 0 0 ${(i-e)*100}%)`}),r4(this.getSymbol(e+1)),af({clipPath:t?`inset(0 0 0 ${100-(i-e)*100}%)`:`inset(0 ${100-(i-e)*100}% 0 0)`}),r4(this.getSymbol(e+1))):eg(ab||(ab=am`
              <span
                class=${0}
                role="presentation"
              >
                ${0}
              </span>
            `),id({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1,"rating__symbol--active":i>=e+1}),r4(this.getSymbol(e+1)))))}constructor(){super(...arguments),this.localize=new iA(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}};ay.styles=[eQ,ah],ay.dependencies={"sl-icon":ir},tS([e6(".rating")],ay.prototype,"rating",2),tS([e2()],ay.prototype,"hoverValue",2),tS([e2()],ay.prototype,"isHovering",2),tS([eJ()],ay.prototype,"label",2),tS([eJ({type:Number})],ay.prototype,"value",2),tS([eJ({type:Number})],ay.prototype,"max",2),tS([eJ({type:Number})],ay.prototype,"precision",2),tS([eJ({type:Boolean,reflect:!0})],ay.prototype,"readonly",2),tS([eJ({type:Boolean,reflect:!0})],ay.prototype,"disabled",2),tS([eJ()],ay.prototype,"getSymbol",2),tS([e5({passive:!0})],ay.prototype,"handleTouchMove",1),tS([eX("hoverValue")],ay.prototype,"handleHoverValueChange",1),tS([eX("isHovering")],ay.prototype,"handleIsHoveringChange",1),ay.define("sl-rating");let aw=t=>t,a_;var ax=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ak=class extends e4{disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let i=e.getTime()-t.getTime(),{unit:o,value:r}=ax.find(t=>Math.abs(i)<t.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/r),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t="minute"===o?aC("second"):"hour"===o?aC("minute"):"day"===o?aC("hour"):aC("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),t)}return eg(a_||(a_=aw` <time datetime=${0}>${0}</time> `),this.isoTime,this.relativeTime)}constructor(){super(...arguments),this.localize=new iA(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}};function aC(t){let e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}tS([e2()],ak.prototype,"isoTime",2),tS([e2()],ak.prototype,"relativeTime",2),tS([eJ()],ak.prototype,"date",2),tS([eJ()],ak.prototype,"format",2),tS([eJ()],ak.prototype,"numeric",2),tS([eJ({type:Boolean})],ak.prototype,"sync",2),ak.define("sl-relative-time");var a$=tV(C||(C=(t=>t)`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`)),aS=tV($||($=(t=>t)`
  ${0}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`),a$);let az=t=>t,aA;var aE=class extends e4{connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return rc(aA||(aA=az`
      <div part="base" role="presentation">
        <button
          part="${0}"
          role="radio"
          aria-checked="${0}"
          class=${0}
          aria-disabled=${0}
          type="button"
          value=${0}
          @blur=${0}
          @focus=${0}
          @click=${0}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `),`button${this.checked?" button--checked":""}`,this.checked,id({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")}),this.disabled,ic(this.value),this.handleBlur,this.handleFocus,this.handleClick)}constructor(){super(...arguments),this.hasSlotController=new eV(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}};aE.styles=[eQ,aS],tS([e6(".button")],aE.prototype,"input",2),tS([e6(".hidden-input")],aE.prototype,"hiddenInput",2),tS([e2()],aE.prototype,"hasFocus",2),tS([eJ({type:Boolean,reflect:!0})],aE.prototype,"checked",2),tS([eJ()],aE.prototype,"value",2),tS([eJ({type:Boolean,reflect:!0})],aE.prototype,"disabled",2),tS([eJ({reflect:!0})],aE.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],aE.prototype,"pill",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],aE.prototype,"handleDisabledChange",1),aE.define("sl-radio-button");var aT=tV(S||(S=(t=>t)`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`)),aD=tV(z||(z=(t=>t)`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`));let aI=t=>t,aL;var aO=class extends e4{handleFocus(t){let e=aP(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=aP(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=aP(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=aP(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let i=t.indexOf(e),o=aP(e);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",0===i),o.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),o.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),o.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===o.tagName.toLowerCase()))})}render(){return eg(aL||(aL=aI`
      <div
        part="base"
        class="button-group"
        role="${0}"
        aria-label=${0}
        @focusout=${0}
        @focusin=${0}
        @mouseover=${0}
        @mouseout=${0}
      >
        <slot @slotchange=${0}></slot>
      </div>
    `),this.disableRole?"presentation":"group",this.label,this.handleBlur,this.handleFocus,this.handleMouseOver,this.handleMouseOut,this.handleSlotChange)}constructor(){super(...arguments),this.disableRole=!1,this.label=""}};function aP(t){var e;let i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}aO.styles=[eQ,aD],tS([e6("slot")],aO.prototype,"defaultSlot",2),tS([e2()],aO.prototype,"disableRole",2),tS([eJ()],aO.prototype,"label",2);let aM=t=>t,aN,aR,aF;var aB=class extends e4{get validity(){let t=this.required&&!this.value;return""!==this.customValidityMessage?tN:t?tM:tP}get validationMessage(){let t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;e&&!e.disabled&&(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let i=this.getAllRadios().filter(t=>!t.disabled),o=null!=(e=i.find(t=>t.checked))?e:i[0],r=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value,s=i.indexOf(o)+r;s<0&&(s=i.length-1),s>i.length-1&&(s=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=i[s].value,i[s].checked=!0,this.hasButtonGroup?i[s].shadowRoot.querySelector("button").focus():(i[s].setAttribute("tabindex","0"),i[s].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),i.length>0&&!i.some(t=>t.checked))if(this.hasButtonGroup){let e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button"))return void this.syncRadioElements();customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),i=e.find(t=>t.checked),o=e.find(t=>!t.disabled),r=i||o;r&&r.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=eg(aN||(aN=aM`
      <slot @slotchange=${0} @click=${0} @keydown=${0}></slot>
    `),this.syncRadios,this.handleRadioClick,this.handleKeyDown);return eg(aF||(aF=aM`
      <fieldset
        part="form-control"
        class=${0}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${0}
          @click=${0}
        >
          <slot name="label">${0}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${0}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${0}
                tabindex="-1"
                hidden
                @invalid=${0}
              />
            </label>
          </div>

          ${0}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${0}
        >
          <slot name="help-text">${0}</slot>
        </div>
      </fieldset>
    `),id({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o}),i?"false":"true",this.handleLabelClick,this.label,this.errorMessage,this.required,this.handleInvalid,this.hasButtonGroup?eg(aR||(aR=aM`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${0}
                </sl-button-group>
              `),r):r,o?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this),this.hasSlotController=new eV(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}};aB.styles=[eQ,eH,aT],aB.dependencies={"sl-button-group":aO},tS([e6("slot:not([name])")],aB.prototype,"defaultSlot",2),tS([e6(".radio-group__validation-input")],aB.prototype,"validationInput",2),tS([e2()],aB.prototype,"hasButtonGroup",2),tS([e2()],aB.prototype,"errorMessage",2),tS([e2()],aB.prototype,"defaultValue",2),tS([eJ()],aB.prototype,"label",2),tS([eJ({attribute:"help-text"})],aB.prototype,"helpText",2),tS([eJ()],aB.prototype,"name",2),tS([eJ({reflect:!0})],aB.prototype,"value",2),tS([eJ({reflect:!0})],aB.prototype,"size",2),tS([eJ({reflect:!0})],aB.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],aB.prototype,"required",2),tS([eX("size",{waitUntilFirstUpdate:!0})],aB.prototype,"handleSizeChange",1),tS([eX("value")],aB.prototype,"handleValueChange",1),aB.define("sl-radio-group");var aU=tV(A||(A=(t=>t)`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`));let aH=t=>t,aV;"use strict";var aq=class extends e4{updated(t){if(super.updated(t),t.has("value")){let t=2*Math.PI*parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=t-this.value/100*t;this.indicatorOffset=`${e}px`}}render(){return eg(aV||(aV=aH`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${0}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${0}"
        style="--percentage: ${0}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${0}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `),this.label.length>0?this.label:this.localize.term("progress"),this.value,this.value/100,this.indicatorOffset)}constructor(){super(...arguments),this.localize=new iA(this),this.value=0,this.label=""}};aq.styles=[eQ,aU],tS([e6(".progress-ring__indicator")],aq.prototype,"indicator",2),tS([e2()],aq.prototype,"indicatorOffset",2),tS([eJ({type:Number,reflect:!0})],aq.prototype,"value",2),tS([eJ()],aq.prototype,"label",2),aq.define("sl-progress-ring");var aj=tV(E||(E=(t=>t)`
  :host {
    display: inline-block;
  }
`));let aW=null;class aK{}aK.render=function(t,e){aW(t,e)},self.QrCreator=aK;var aG=function(){function t(i,a){function l(t,e){for(var i=-1;7>=i;i+=1)if(!(-1>=t+i||h<=t+i))for(var o=-1;7>=o;o+=1)-1>=e+o||h<=e+o||(c[t+i][e+o]=0<=i&&6>=i&&(0==o||6==o)||0<=o&&6>=o&&(0==i||6==i)||2<=i&&4>=i&&2<=o&&4>=o)}function n(t,o){for(var a=h=4*i+17,n=Array(a),f=0;f<a;f+=1){n[f]=Array(a);for(var m=0;m<a;m+=1)n[f][m]=null}for(c=n,l(0,0),l(h-7,0),l(0,h-7),a=r.G(i),n=0;n<a.length;n+=1)for(f=0;f<a.length;f+=1){m=a[n];var g=a[f];if(null==c[m][g])for(var b=-2;2>=b;b+=1)for(var v=-2;2>=v;v+=1)c[m+b][g+v]=-2==b||2==b||-2==v||2==v||0==b&&0==v}for(a=8;a<h-8;a+=1)null==c[a][6]&&(c[a][6]=0==a%2);for(a=8;a<h-8;a+=1)null==c[6][a]&&(c[6][a]=0==a%2);for(n=0,a=r.w(d<<3|o);15>n;n+=1)f=!t&&1==(a>>n&1),c[6>n?n:8>n?n+1:h-15+n][8]=f,c[8][8>n?h-n-1:9>n?15-n:14-n]=f;if(c[h-8][8]=!t,7<=i){for(n=0,a=r.A(i);18>n;n+=1)f=!t&&1==(a>>n&1),c[Math.floor(n/3)][n%3+h-8-3]=f;for(n=0;18>n;n+=1)f=!t&&1==(a>>n&1),c[n%3+h-8-3][Math.floor(n/3)]=f}if(null==u){for(t=s.I(i,d),y=[],w=0,a=_={B:function(){return y},c:function(t){return 1==(y[Math.floor(t/8)]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i+=1)_.m(1==(t>>>e-i-1&1))},f:function(){return w},m:function(t){var e=Math.floor(w/8);y.length<=e&&y.push(0),t&&(y[e]|=128>>>w%8),w+=1}},n=0;n<p.length;n+=1)f=p[n],a.put(4,4),a.put(f.b(),r.f(4,i)),f.write(a);for(n=f=0;n<t.length;n+=1)f+=t[n].j;if(a.f()>8*f)throw Error("code length overflow. ("+a.f()+">"+8*f+")");for(a.f()+4<=8*f&&a.put(0,4);0!=a.f()%8;)a.m(!1);for(;!(a.f()>=8*f)&&(a.put(236,8),!(a.f()>=8*f));)a.put(17,8);var y,w,_,x=0;for(b=0,f=n=0,m=Array(t.length),g=Array(t.length);b<t.length;b+=1){var k=t[b].j,C=t[b].o-k;for(v=0,n=Math.max(n,k),f=Math.max(f,C),m[b]=Array(k);v<m[b].length;v+=1)m[b][v]=255&a.B()[v+x];for(x+=k,v=r.C(C),k=e(m[b],v.b()-1).l(v),g[b]=Array(v.b()-1),v=0;v<g[b].length;v+=1)C=v+k.b()-g[b].length,g[b][v]=0<=C?k.c(C):0}for(v=a=0;v<t.length;v+=1)a+=t[v].o;for(a=Array(a),v=x=0;v<n;v+=1)for(b=0;b<t.length;b+=1)v<m[b].length&&(a[x]=m[b][v],x+=1);for(v=0;v<f;v+=1)for(b=0;b<t.length;b+=1)v<g[b].length&&(a[x]=g[b][v],x+=1);u=a}for(t=u,a=-1,n=h-1,f=7,m=0,o=r.F(o),g=h-1;0<g;g-=2)for(6==g&&--g;;){for(b=0;2>b;b+=1)null==c[n][g-b]&&(v=!1,m<t.length&&(v=1==(t[m]>>>f&1)),o(n,g-b)&&(v=!v),c[n][g-b]=v,-1==--f&&(m+=1,f=7));if(0>(n+=a)||h<=n){n-=a,a=-a;break}}}var d=o[a],c=null,h=0,u=null,p=[],f={u:function(e){var i,o;i=e,o=t.s(i),e={S:function(){return 4},b:function(){return o.length},write:function(t){for(var e=0;e<o.length;e+=1)t.put(o[e],8)}},p.push(e),u=null},a:function(t,e){if(0>t||h<=t||0>e||h<=e)throw Error(t+","+e);return c[t][e]},h:function(){return h},J:function(){for(var t=0,e=0,i=0;8>i;i+=1){n(!0,i);var o=r.D(f);(0==i||t>o)&&(t=o,e=i)}n(!1,e)}};return f}function e(t,i){if(void 0===t.length)throw Error(t.length+"/"+i);var o=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var o=Array(t.length-e+i),r=0;r<t.length-e;r+=1)o[r]=t[r+e];return o}(),r={c:function(t){return o[t]},b:function(){return o.length},multiply:function(t){for(var i=Array(r.b()+t.b()-1),o=0;o<r.b();o+=1)for(var s=0;s<t.b();s+=1)i[o+s]^=a.i(a.g(r.c(o))+a.g(t.c(s)));return e(i,0)},l:function(t){if(0>r.b()-t.b())return r;for(var i=a.g(r.c(0))-a.g(t.c(0)),o=Array(r.b()),s=0;s<r.b();s+=1)o[s]=r.c(s);for(s=0;s<t.b();s+=1)o[s]^=a.i(a.g(t.c(s))+i);return e(o,0).l(t)}};return r}t.s=function(t){for(var e=[],i=0;i<t.length;i++){var o=t.charCodeAt(i);128>o?e.push(o):2048>o?e.push(192|o>>6,128|63&o):55296>o||57344<=o?e.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return e};var i,o={L:1,M:0,Q:3,H:2},r=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(e){for(var i=e<<10;0<=t(i)-t(1335);)i^=1335<<t(i)-t(1335);return(e<<10|i)^21522},A:function(e){for(var i=e<<12;0<=t(i)-t(7973);)i^=7973<<t(i)-t(7973);return e<<12|i},G:function(t){return i[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var i=e([1],0),o=0;o<t;o+=1)i=i.multiply(e([1,a.i(o)],0));return i},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),i=0,o=0;o<e;o+=1)for(var r=0;r<e;r+=1){for(var a=0,s=t.a(o,r),l=-1;1>=l;l+=1)if(!(0>o+l||e<=o+l))for(var n=-1;1>=n;n+=1)0>r+n||e<=r+n||(0!=l||0!=n)&&s==t.a(o+l,r+n)&&(a+=1);5<a&&(i+=3+a-5)}for(o=0;o<e-1;o+=1)for(r=0;r<e-1;r+=1)a=0,t.a(o,r)&&(a+=1),t.a(o+1,r)&&(a+=1),t.a(o,r+1)&&(a+=1),t.a(o+1,r+1)&&(a+=1),(0==a||4==a)&&(i+=3);for(o=0;o<e;o+=1)for(r=0;r<e-6;r+=1)t.a(o,r)&&!t.a(o,r+1)&&t.a(o,r+2)&&t.a(o,r+3)&&t.a(o,r+4)&&!t.a(o,r+5)&&t.a(o,r+6)&&(i+=40);for(r=0;r<e;r+=1)for(o=0;o<e-6;o+=1)t.a(o,r)&&!t.a(o+1,r)&&t.a(o+2,r)&&t.a(o+3,r)&&t.a(o+4,r)&&!t.a(o+5,r)&&t.a(o+6,r)&&(i+=40);for(r=a=0;r<e;r+=1)for(o=0;o<e;o+=1)t.a(o,r)&&(a+=1);return i+Math.abs(100*a/e/e-50)/5*10}}}(),a=function(){for(var t=Array(256),e=Array(256),i=0;8>i;i+=1)t[i]=1<<i;for(i=8;256>i;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;255>i;i+=1)e[t[i]]=i;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),s=(i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],{I:function(t,e){var r=function(t,e){switch(e){case o.L:return i[4*(t-1)];case o.M:return i[4*(t-1)+1];case o.Q:return i[4*(t-1)+2];case o.H:return i[4*(t-1)+3]}}(t,e);if(void 0===r)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);t=r.length/3,e=[];for(var a=0;a<t;a+=1)for(var s=r[3*a],l=r[3*a+1],n=r[3*a+2],d=0;d<s;d+=1){var c={};c.o=l,c.j=n,e.push(c)}return e}});return t}();function aY(t,e){t:{var i=e.text,o=e.v,r=e.N,a=e.K,s=e.P;for(r=Math.max(1,r||1),a=Math.min(40,a||40);r<=a;r+=1)try{var l=function(t,e,i,o){var r={},a=aG(i,e);a.u(t),a.J(),o=o||0;var s=a.h(),l=a.h()+2*o;return r.text=t,r.level=e,r.version=i,r.O=l,r.a=function(t,e){return t-=o,e-=o,!(0>t)&&!(t>=s)&&!(0>e)&&!(e>=s)&&a.a(t,e)},r}(i,o,r,s);break t}catch(t){}l=void 0}if(!l)return null;for(i=t.getContext("2d"),e.background&&(i.fillStyle=e.background,i.fillRect(e.left,e.top,e.size,e.size)),o=l.O,a=e.size/o,i.beginPath(),s=0;s<o;s+=1)for(r=0;r<o;r+=1){var n=i,d=e.left+r*a,c=e.top+s*a,h=s,u=r,p=l.a,f=d+a,m=c+a,g=h-1,b=h+1,v=u-1,y=u+1,w=Math.floor(Math.min(.5,Math.max(0,e.R))*a),_=p(h,u),x=p(g,v),k=p(g,u);g=p(g,y);var C=p(h,y);y=p(b,y),u=p(b,u),b=p(b,v),h=p(h,v),d=Math.round(d),c=Math.round(c),f=Math.round(f),m=Math.round(m),_?function(t,e,i,o,r,a,s,l,n,d){function c(e,i,o,r,s,l,n){e?(t.lineTo(i+l,o+n),t.arcTo(i,o,r,s,a)):t.lineTo(i,o)}s?t.moveTo(e+a,i):t.moveTo(e,i),c(l,o,i,o,r,-a,0),c(n,o,r,e,r,0,-a),c(d,e,r,e,i,a,0),c(s,e,i,o,i,0,a)}(n,d,c,f,m,w,!k&&!h,!k&&!C,!u&&!C,!u&&!h):function(t,e,i,o,r,a,s,l,n,d){function c(e,i,o,r){t.moveTo(e+o,i),t.lineTo(e,i),t.lineTo(e,i+r),t.arcTo(e,i,e+o,i,a)}s&&c(e,i,a,a),l&&c(o,i,-a,a),n&&c(o,r,-a,-a),d&&c(e,r,a,-a)}(n,d,c,f,m,w,k&&h&&x,k&&C&&g,u&&C&&y,u&&h&&b)}var $=i,S=e.fill;if("string"==typeof S)$.fillStyle=S;else{var z=S.type,A=S.colorStops;if(S=S.position.map(t=>Math.round(t*e.size)),"linear-gradient"===z)var E=$.createLinearGradient.apply($,S);else if("radial-gradient"===z)E=$.createRadialGradient.apply($,S);else throw Error("Unsupported fill");A.forEach(([t,e])=>{E.addColorStop(t,e)}),$.fillStyle=E}return i.fill(),t}var aX={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};aW=function(t,e){var i={};Object.assign(i,aX,t),i.N=i.minVersion,i.K=i.maxVersion,i.v=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.R=i.radius,i.P=i.quiet,e instanceof HTMLCanvasElement?((e.width!==i.size||e.height!==i.size)&&(e.width=i.size,e.height=i.size),e.getContext("2d").clearRect(0,0,e.width,e.height),aY(e,i)):((t=document.createElement("canvas")).width=i.size,t.height=i.size,i=aY(t,i),e.appendChild(i))};var aQ=QrCreator;let aZ=t=>t,aJ;var a0=class extends e4{firstUpdated(){this.generate()}generate(){this.hasUpdated&&aQ.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return eg(aJ||(aJ=aZ`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${0}
        style=${0}
      ></canvas>
    `),(null==(t=this.label)?void 0:t.length)>0?this.label:this.value,af({width:`${this.size}px`,height:`${this.size}px`}))}constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}};a0.styles=[eQ,aj],tS([e6("canvas")],a0.prototype,"canvas",2),tS([eJ()],a0.prototype,"value",2),tS([eJ()],a0.prototype,"label",2),tS([eJ({type:Number})],a0.prototype,"size",2),tS([eJ()],a0.prototype,"fill",2),tS([eJ()],a0.prototype,"background",2),tS([eJ({type:Number})],a0.prototype,"radius",2),tS([eJ({attribute:"error-correction"})],a0.prototype,"errorCorrection",2),tS([eX(["background","errorCorrection","fill","radius","size","value"])],a0.prototype,"generate",1),a0.define("sl-qr-code");var a1=tV(T||(T=(t=>t)`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`));let a2=t=>t,a5,a3;var a6=class extends e4{connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return eg(a3||(a3=a2`
      <span
        part="base"
        class=${0}
      >
        <span part="${0}" class="radio__control">
          ${0}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `),id({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size}),`control${this.checked?" control--checked":""}`,this.checked?eg(a5||(a5=a2` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `)):"")}constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}};a6.styles=[eQ,a1],a6.dependencies={"sl-icon":ir},tS([e2()],a6.prototype,"checked",2),tS([e2()],a6.prototype,"hasFocus",2),tS([eJ()],a6.prototype,"value",2),tS([eJ({reflect:!0})],a6.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],a6.prototype,"disabled",2),tS([eX("checked")],a6.prototype,"handleCheckedChange",1),tS([eX("disabled",{waitUntilFirstUpdate:!0})],a6.prototype,"handleDisabledChange",1),a6.define("sl-radio");var a4=tV(D||(D=(t=>t)`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`));let a7=t=>t,a8;var a9=class extends e4{connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let t=this.childNodes,e="";return[...t].forEach(t=>{t.nodeType!==Node.ELEMENT_NODE||t.hasAttribute("slot")||(e+=t.textContent),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return eg(a8||(a8=a7`
      <div
        part="base"
        class=${0}
        @mouseenter=${0}
        @mouseleave=${0}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${0}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `),id({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover}),this.handleMouseEnter,this.handleMouseLeave,this.handleDefaultSlotChange)}constructor(){super(...arguments),this.localize=new iA(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}};a9.styles=[eQ,a4],a9.dependencies={"sl-icon":ir},tS([e6(".option__label")],a9.prototype,"defaultSlot",2),tS([e2()],a9.prototype,"current",2),tS([e2()],a9.prototype,"selected",2),tS([e2()],a9.prototype,"hasHover",2),tS([eJ({reflect:!0})],a9.prototype,"value",2),tS([eJ({type:Boolean,reflect:!0})],a9.prototype,"disabled",2),tS([eX("disabled")],a9.prototype,"handleDisabledChange",1),tS([eX("selected")],a9.prototype,"handleSelectedChange",1),tS([eX("value")],a9.prototype,"handleValueChange",1),a9.define("sl-option"),oK.define("sl-popup");var st=tV(I||(I=(t=>t)`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`));let se=t=>t,si,so;var sr=class extends e4{render(){return eg(so||(so=se`
      <div
        part="base"
        class=${0}
        role="progressbar"
        title=${0}
        aria-label=${0}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${0}
      >
        <div part="indicator" class="progress-bar__indicator" style=${0}>
          ${0}
        </div>
      </div>
    `),id({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()}),ic(this.title),this.label.length>0?this.label:this.localize.term("progress"),this.indeterminate?0:this.value,af({width:`${this.value}%`}),this.indeterminate?"":eg(si||(si=se` <slot part="label" class="progress-bar__label"></slot> `)))}constructor(){super(...arguments),this.localize=new iA(this),this.value=0,this.indeterminate=!1,this.label=""}};sr.styles=[eQ,st],tS([eJ({type:Number,reflect:!0})],sr.prototype,"value",2),tS([eJ({type:Boolean,reflect:!0})],sr.prototype,"indeterminate",2),tS([eJ()],sr.prototype,"label",2),sr.define("sl-progress-bar");var sa=tV(L||(L=(t=>t)`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`));let ss=t=>t,sl;var sn=class extends e4{render(){return eg(sl||(sl=ss` <slot part="base" class="menu-label"></slot> `))}};sn.styles=[eQ,sa],sn.define("sl-menu-label");var sd=tV(O||(O=(t=>t)`
  :host {
    display: contents;
  }
`));let sc=t=>t,sh;var su=class extends e4{connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return eg(sh||(sh=sc` <slot></slot> `))}constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}};su.styles=[eQ,sd],tS([eJ({reflect:!0})],su.prototype,"attr",2),tS([eJ({attribute:"attr-old-value",type:Boolean,reflect:!0})],su.prototype,"attrOldValue",2),tS([eJ({attribute:"char-data",type:Boolean,reflect:!0})],su.prototype,"charData",2),tS([eJ({attribute:"char-data-old-value",type:Boolean,reflect:!0})],su.prototype,"charDataOldValue",2),tS([eJ({attribute:"child-list",type:Boolean,reflect:!0})],su.prototype,"childList",2),tS([eJ({type:Boolean,reflect:!0})],su.prototype,"disabled",2),tS([eX("disabled")],su.prototype,"handleDisabledChange",1),tS([eX("attr",{waitUntilFirstUpdate:!0}),eX("attr-old-value",{waitUntilFirstUpdate:!0}),eX("char-data",{waitUntilFirstUpdate:!0}),eX("char-data-old-value",{waitUntilFirstUpdate:!0}),eX("childList",{waitUntilFirstUpdate:!0})],su.prototype,"handleChange",1),su.define("sl-mutation-observer");var sp=tV(P||(P=(t=>t)`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`));let sf=t=>t,sm,sg,sb,sv,sy;var sw=class extends e4{get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){let r=null!=e?e:this.input.selectionStart,a=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,r,a,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return eg(sy||(sy=sf`
      <div
        part="form-control"
        class=${0}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${0}
        >
          <slot name="label">${0}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${0}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${0}
              title=${0}
              name=${0}
              ?disabled=${0}
              ?readonly=${0}
              ?required=${0}
              placeholder=${0}
              minlength=${0}
              maxlength=${0}
              min=${0}
              max=${0}
              step=${0}
              .value=${0}
              autocapitalize=${0}
              autocomplete=${0}
              autocorrect=${0}
              ?autofocus=${0}
              spellcheck=${0}
              pattern=${0}
              enterkeyhint=${0}
              inputmode=${0}
              aria-describedby="help-text"
              @change=${0}
              @input=${0}
              @invalid=${0}
              @keydown=${0}
              @focus=${0}
              @blur=${0}
            />

            ${0}
            ${0}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${0}
        >
          <slot name="help-text">${0}</slot>
        </div>
      </div>
    `),id({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o}),i?"false":"true",this.label,id({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons}),"password"===this.type&&this.passwordVisible?"text":this.type,this.title,ic(this.name),this.disabled,this.readonly,this.required,ic(this.placeholder),ic(this.minlength),ic(this.maxlength),ic(this.min),ic(this.max),ic(this.step),ih(this.value),ic(this.autocapitalize),ic(this.autocomplete),ic(this.autocorrect),this.autofocus,this.spellcheck,ic(this.pattern),ic(this.enterkeyhint),ic(this.inputmode),this.handleChange,this.handleInput,this.handleInvalid,this.handleKeyDown,this.handleFocus,this.handleBlur,r?eg(sm||(sm=sf`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${0}
                    @click=${0}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `),this.localize.term("clearEntry"),this.handleClearClick):"",this.passwordToggle&&!this.disabled?eg(sv||(sv=sf`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${0}
                    @click=${0}
                    tabindex="-1"
                  >
                    ${0}
                  </button>
                `),this.localize.term(this.passwordVisible?"hidePassword":"showPassword"),this.handlePasswordToggle,this.passwordVisible?eg(sg||(sg=sf`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `)):eg(sb||(sb=sf`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `))):"",o?"false":"true",this.helpText)}constructor(){super(...arguments),this.formControlController=new tO(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new eV(this,"help-text","label"),this.localize=new iA(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}};sw.styles=[eQ,eH,sp],sw.dependencies={"sl-icon":ir},tS([e6(".input__control")],sw.prototype,"input",2),tS([e2()],sw.prototype,"hasFocus",2),tS([eJ()],sw.prototype,"title",2),tS([eJ({reflect:!0})],sw.prototype,"type",2),tS([eJ()],sw.prototype,"name",2),tS([eJ()],sw.prototype,"value",2),tS([eU()],sw.prototype,"defaultValue",2),tS([eJ({reflect:!0})],sw.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],sw.prototype,"filled",2),tS([eJ({type:Boolean,reflect:!0})],sw.prototype,"pill",2),tS([eJ()],sw.prototype,"label",2),tS([eJ({attribute:"help-text"})],sw.prototype,"helpText",2),tS([eJ({type:Boolean})],sw.prototype,"clearable",2),tS([eJ({type:Boolean,reflect:!0})],sw.prototype,"disabled",2),tS([eJ()],sw.prototype,"placeholder",2),tS([eJ({type:Boolean,reflect:!0})],sw.prototype,"readonly",2),tS([eJ({attribute:"password-toggle",type:Boolean})],sw.prototype,"passwordToggle",2),tS([eJ({attribute:"password-visible",type:Boolean})],sw.prototype,"passwordVisible",2),tS([eJ({attribute:"no-spin-buttons",type:Boolean})],sw.prototype,"noSpinButtons",2),tS([eJ({reflect:!0})],sw.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],sw.prototype,"required",2),tS([eJ()],sw.prototype,"pattern",2),tS([eJ({type:Number})],sw.prototype,"minlength",2),tS([eJ({type:Number})],sw.prototype,"maxlength",2),tS([eJ()],sw.prototype,"min",2),tS([eJ()],sw.prototype,"max",2),tS([eJ()],sw.prototype,"step",2),tS([eJ()],sw.prototype,"autocapitalize",2),tS([eJ()],sw.prototype,"autocorrect",2),tS([eJ()],sw.prototype,"autocomplete",2),tS([eJ({type:Boolean})],sw.prototype,"autofocus",2),tS([eJ()],sw.prototype,"enterkeyhint",2),tS([eJ({type:Boolean,converter:{fromAttribute:t=>!!t&&"false"!==t,toAttribute:t=>t?"true":"false"}})],sw.prototype,"spellcheck",2),tS([eJ()],sw.prototype,"inputmode",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],sw.prototype,"handleDisabledChange",1),tS([eX("step",{waitUntilFirstUpdate:!0})],sw.prototype,"handleStepChange",1),tS([eX("value",{waitUntilFirstUpdate:!0})],sw.prototype,"handleValueChange",1),sw.define("sl-input");var s_=tV(M||(M=(t=>t)`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`));let sx=t=>t,sk;var sC=class extends e4{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],i=t.composedPath(),o=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(o)i.find(t=>{var e;return(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))==="menu"})===this&&("checkbox"===o.type&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}}))}handleKeyDown(t){if("Enter"===t.key||" "===t.key){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),i=this.getCurrentItem(),o=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!t.inert&&!!this.isMenuItem(t))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return eg(sk||(sk=sx`
      <slot
        @slotchange=${0}
        @click=${0}
        @keydown=${0}
        @mousedown=${0}
      ></slot>
    `),this.handleSlotChange,this.handleClick,this.handleKeyDown,this.handleMouseDown)}};sC.styles=[eQ,s_],tS([e6("slot")],sC.prototype,"defaultSlot",2),sC.define("sl-menu");var s$=tV(N||(N=(t=>t)`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`));let sS=(t,e)=>{var i;let o=t._$AN;if(void 0===o)return!1;for(let t of o)null==(i=t._$AO)||i.call(t,e,!1),sS(t,e);return!0},sz=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while(0===(null==i?void 0:i.size))},sA=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),sD(e)}};function sE(t){void 0!==this._$AN?(sz(this),this._$AM=t,sA(this)):this._$AM=t}function sT(t,e=!1,i=0){let o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)sS(o[t],!1),sz(o[t]);else null!=o&&(sS(o,!1),sz(o));else sS(this,t)}let sD=t=>{t.type==ia.CHILD&&(null!=t._$AP||(t._$AP=sT),null!=t._$AQ||(t._$AQ=sE))};class sI extends il{_$AT(t,e,i){super._$AT(t,e,i),sA(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?null==(i=this.reconnected)||i.call(this):null==(o=this.disconnected)||o.call(this)),e&&(sS(this,t),sz(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}constructor(){super(...arguments),this._$AN=void 0}}class sL{}let sO=new WeakMap,sP=is(class extends sI{render(t){return ew}update(t,[e]){var i;let o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),ew}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){var e;let i=null!=(e=this.ht)?e:globalThis,o=sO.get(i);void 0===o&&(o=new WeakMap,sO.set(i,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e,i;return"function"==typeof this.G?null==(t=sO.get(null!=(i=this.ht)?i:globalThis))?void 0:t.get(this.G):null==(e=this.G)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),sM=t=>t,sN,sR;var sF=class{hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),!this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(let t of e.assignedElements())if(0!==(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']")).length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var o;let r=null!=(o=e.get(i))?o:new CSSUnitValue(0,"px");return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){let t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?eg(sR||(sR=sM`
      <sl-popup
        ${0}
        placement=${0}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${0}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `),sP(this.popupRef),t?"left-start":"right-start",this.skidding):eg(sN||(sN=sM` <slot name="submenu" hidden></slot> `))}constructor(t,e){this.popupRef=new sL,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{let t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;let{left:o,top:r,width:a,height:s}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+s}px`)},(this.host=t).addController(this),this.hasSlotController=e}};let sB=t=>t,sU,sH;var sV=class extends e4{connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(void 0===this.cachedTextLabel){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){var t=this.defaultSlot;if(!t)return"";let e=t.assignedNodes({flatten:!0}),i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return eg(sH||(sH=sB`
      <div
        id="anchor"
        part="base"
        class=${0}
        ?aria-haspopup="${0}"
        ?aria-expanded="${0}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${0}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${0} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${0}
        ${0}
      </div>
    `),id({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e}),this.isSubmenu(),!!e,this.handleDefaultSlotChange,t?"chevron-left":"chevron-right",this.submenuController.renderSubmenu(),this.loading?eg(sU||(sU=sB` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)):"")}constructor(){super(...arguments),this.localize=new iA(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new eV(this,"submenu"),this.submenuController=new sF(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}};sV.styles=[eQ,s$],sV.dependencies={"sl-icon":ir,"sl-popup":oK,"sl-spinner":iD},tS([e6("slot:not([name])")],sV.prototype,"defaultSlot",2),tS([e6(".menu-item")],sV.prototype,"menuItem",2),tS([eJ()],sV.prototype,"type",2),tS([eJ({type:Boolean,reflect:!0})],sV.prototype,"checked",2),tS([eJ()],sV.prototype,"value",2),tS([eJ({type:Boolean,reflect:!0})],sV.prototype,"loading",2),tS([eJ({type:Boolean,reflect:!0})],sV.prototype,"disabled",2),tS([eX("checked")],sV.prototype,"handleCheckedChange",1),tS([eX("disabled")],sV.prototype,"handleDisabledChange",1),tS([eX("type")],sV.prototype,"handleTypeChange",1),sV.define("sl-menu-item");var sq=tV(R||(R=(t=>t)`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`));let sj=t=>t,sW;var sK=class extends e4{handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();t.preventDefault(),rY(this.base,{onMove:t=>{this.position=parseFloat(oJ(t/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let o=t.shiftKey?10:1,r=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key)&&(r-=o),(e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key)&&(r+=o),"Home"===t.key&&(r=0),"End"===t.key&&(r=100),r=oJ(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){let t="rtl"===this.localize.dir();return eg(sW||(sW=sj`
      <div
        part="base"
        id="image-comparer"
        class=${0}
        @keydown=${0}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${0}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${0}
          @mousedown=${0}
          @touchstart=${0}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${0}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `),id({"image-comparer":!0,"image-comparer--rtl":t}),this.handleKeyDown,af({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`}),af({left:t?`${100-this.position}%`:`${this.position}%`}),this.handleDrag,this.handleDrag,this.position)}constructor(){super(...arguments),this.localize=new iA(this),this.position=50}};sK.styles=[eQ,sq],sK.scopedElement={"sl-icon":ir},tS([e6(".image-comparer")],sK.prototype,"base",2),tS([e6(".image-comparer__handle")],sK.prototype,"handle",2),tS([eJ({type:Number,reflect:!0})],sK.prototype,"position",2),tS([eX("position",{waitUntilFirstUpdate:!0})],sK.prototype,"handlePositionChange",1),sK.define("sl-image-comparer");var sG=tV(F||(F=(t=>t)`
  :host {
    display: block;
  }
`)),sY=new Map;let sX=t=>t,sQ;var sZ=class extends e4{executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(t=>e.setAttribute(t.name,t.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await function(t,e="cors"){let i=sY.get(t);if(void 0!==i)return Promise.resolve(i);let o=fetch(t,{mode:e}).then(async e=>{let i={ok:e.ok,status:e.status,html:await e.text()};return sY.set(t,i),i});return sY.set(t,o),o}(t,this.mode);if(t!==this.src)return;if(!e.ok)return void this.emit("sl-error",{detail:{status:e.status}});this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(t=>this.executeScript(t)),this.emit("sl-load")}catch(t){this.emit("sl-error",{detail:{status:-1}})}}render(){return eg(sQ||(sQ=sX`<slot></slot>`))}constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}};sZ.styles=[eQ,sG],tS([eJ()],sZ.prototype,"src",2),tS([eJ()],sZ.prototype,"mode",2),tS([eJ({attribute:"allow-scripts",type:Boolean})],sZ.prototype,"allowScripts",2),tS([eX("src")],sZ.prototype,"handleSrcChange",1),sZ.define("sl-include"),ir.define("sl-icon"),rm.define("sl-icon-button");var sJ=class extends e4{render(){if(isNaN(this.value))return"";let t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),i=t[e]+this.unit,o=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}constructor(){super(...arguments),this.localize=new iA(this),this.value=0,this.unit="byte",this.display="short"}};tS([eJ({type:Number})],sJ.prototype,"value",2),tS([eJ()],sJ.prototype,"unit",2),tS([eJ()],sJ.prototype,"display",2),sJ.define("sl-format-bytes");let s0=t=>t,s1;var s2=class extends e4{render(){let t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return eg(s1||(s1=s0`
      <time datetime=${0}>
        ${0}
      </time>
    `),t.toISOString(),this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e}))}constructor(){super(...arguments),this.localize=new iA(this),this.date=new Date,this.hourFormat="auto"}};tS([eJ()],s2.prototype,"date",2),tS([eJ()],s2.prototype,"weekday",2),tS([eJ()],s2.prototype,"era",2),tS([eJ()],s2.prototype,"year",2),tS([eJ()],s2.prototype,"month",2),tS([eJ()],s2.prototype,"day",2),tS([eJ()],s2.prototype,"hour",2),tS([eJ()],s2.prototype,"minute",2),tS([eJ()],s2.prototype,"second",2),tS([eJ({attribute:"time-zone-name"})],s2.prototype,"timeZoneName",2),tS([eJ({attribute:"time-zone"})],s2.prototype,"timeZone",2),tS([eJ({attribute:"hour-format"})],s2.prototype,"hourFormat",2),s2.define("sl-format-date");var s5=class extends e4{render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}constructor(){super(...arguments),this.localize=new iA(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}};tS([eJ({type:Number})],s5.prototype,"value",2),tS([eJ()],s5.prototype,"type",2),tS([eJ({attribute:"no-grouping",type:Boolean})],s5.prototype,"noGrouping",2),tS([eJ()],s5.prototype,"currency",2),tS([eJ({attribute:"currency-display"})],s5.prototype,"currencyDisplay",2),tS([eJ({attribute:"minimum-integer-digits",type:Number})],s5.prototype,"minimumIntegerDigits",2),tS([eJ({attribute:"minimum-fraction-digits",type:Number})],s5.prototype,"minimumFractionDigits",2),tS([eJ({attribute:"maximum-fraction-digits",type:Number})],s5.prototype,"maximumFractionDigits",2),tS([eJ({attribute:"minimum-significant-digits",type:Number})],s5.prototype,"minimumSignificantDigits",2),tS([eJ({attribute:"maximum-significant-digits",type:Number})],s5.prototype,"maximumSignificantDigits",2),s5.define("sl-format-number");var s3=tV(B||(B=(t=>t)`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`)),s6=class extends e4{connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}constructor(){super(...arguments),this.vertical=!1}};s6.styles=[eQ,s3],tS([eJ({type:Boolean,reflect:!0})],s6.prototype,"vertical",2),tS([eX("vertical")],s6.prototype,"handleVerticalChange",1),s6.define("sl-divider");var s4=tV(U||(U=(t=>t)`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`));function*s7(t=document.activeElement){if(null!=t){var e,i,o,r,a;yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(o=(e=s7(t.shadowRoot.activeElement))[t_("asyncIterator")],r=!1,a={},null==o?(o=e[t_("iterator")](),i=t=>a[t]=e=>o[t](e)):(o=o.call(e),i=t=>a[t]=e=>{if(r){if(r=!1,"throw"===t)throw e;return e}return r=!0,{done:!1,value:new tA(new Promise(i=>{var r=o[t](e);r instanceof Object||tx("Object expected"),i(r)}),1)}}),a[t_("iterator")]=()=>a,i("next"),"throw"in o?i("throw"):a.throw=t=>{throw t},"return"in o&&i("return"),a))}}function s8(){return[...s7()].pop()}var s9=new WeakMap;function lt(t){let e=s9.get(t);return e||(e=window.getComputedStyle(t,null),s9.set(t,e)),e}function le(t){let e=new WeakMap,i=[];return!function o(r){if(r instanceof Element){var a;if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!i.includes(r)&&function(t){let e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){let e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,o=e.querySelector(`${i}:checked`);return o?o===t:e.querySelector(i)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=lt(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable")||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e))return!0;let{overflowY:o,overflowX:r}=lt(t);return"scroll"===o||"scroll"===r||"auto"===o&&"auto"===r&&(!!(t.scrollHeight>t.clientHeight)&&"auto"===o||!!(t.scrollWidth>t.clientWidth)&&"auto"===r)}(r)&&i.push(r),r instanceof HTMLSlotElement&&(null==(a=r.getRootNode({composed:!0}))?void 0:a.host)!==t&&r.assignedElements({flatten:!0}).forEach(t=>{o(t)}),null!==r.shadowRoot&&"open"===r.shadowRoot.mode&&o(r.shadowRoot)}for(let t of r.children)o(t)}(t),i.sort((t,e)=>{let i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var li=[],lo=class{activate(){li.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){li=li.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return li[li.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=le(this.element);if(!this.element.matches(":focus-within")){let e=t[0],i=t[t.length-1],o="forward"===this.tabDirection?e:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated||!this.isActive())return;let i=s8();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let o=le(this.element),r=o.findIndex(t=>t===i);this.previousFocus=this.currentFocus;let a="forward"===this.tabDirection?1:-1;for(;;){r+a>=o.length?r=0:r+a<0?r=o.length-1:r+=a,this.previousFocus=this.currentFocus;let i=o[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});let s=[...s7()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}},lr=t=>{var e;let{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())};let la=t=>t,ls,ll;function ln(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ld=class extends e4{firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),rM(this)))}disconnectedCallback(){super.disconnectedCallback(),rN(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let t=iM(this,"drawer.denyClose",{dir:this.localize.dir()});iN(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),rM(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([iB(this.drawer),iB(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=iM(this,`drawer.show${ln(this.placement)}`,{dir:this.localize.dir()}),i=iM(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([iN(this.panel,e.keyframes,e.options),iN(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{lr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),rN(this)),await Promise.all([iB(this.drawer),iB(this.overlay)]);let t=iM(this,`drawer.hide${ln(this.placement)}`,{dir:this.localize.dir()}),e=iM(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([iN(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),iN(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),rM(this)),this.open&&this.contained&&(this.modal.deactivate(),rN(this))}async show(){if(!this.open)return this.open=!0,oG(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oG(this,"sl-after-hide")}render(){return eg(ll||(ll=la`
      <div
        part="base"
        class=${0}
      >
        <div part="overlay" class="drawer__overlay" @click=${0} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${0}
          aria-label=${0}
          aria-labelledby=${0}
          tabindex="0"
        >
          ${0}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `),id({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")}),()=>this.requestClose("overlay"),this.open?"false":"true",ic(this.noHeader?this.label:void 0),ic(this.noHeader?void 0:"title"),this.noHeader?"":eg(ls||(ls=la`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${0} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${0}
                      library="system"
                      @click=${0}
                    ></sl-icon-button>
                  </div>
                </header>
              `),this.label.length>0?this.label:String.fromCharCode(65279),this.localize.term("close"),()=>this.requestClose("close-button")))}constructor(){super(...arguments),this.hasSlotController=new eV(this,"footer"),this.localize=new iA(this),this.modal=new lo(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{!this.contained&&"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}};ld.styles=[eQ,s4],ld.dependencies={"sl-icon-button":rm},tS([e6(".drawer")],ld.prototype,"drawer",2),tS([e6(".drawer__panel")],ld.prototype,"panel",2),tS([e6(".drawer__overlay")],ld.prototype,"overlay",2),tS([eJ({type:Boolean,reflect:!0})],ld.prototype,"open",2),tS([eJ({reflect:!0})],ld.prototype,"label",2),tS([eJ({reflect:!0})],ld.prototype,"placement",2),tS([eJ({type:Boolean,reflect:!0})],ld.prototype,"contained",2),tS([eJ({attribute:"no-header",type:Boolean,reflect:!0})],ld.prototype,"noHeader",2),tS([eX("open",{waitUntilFirstUpdate:!0})],ld.prototype,"handleOpenChange",1),tS([eX("contained",{waitUntilFirstUpdate:!0})],ld.prototype,"handleNoModalChange",1),iP("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),iP("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),iP("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),iP("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),iP("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),iP("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),iP("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),iP("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),iP("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),iP("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),iP("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),ld.define("sl-drawer");var lc=tV(H||(H=(t=>t)`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`));let lh=t=>t,lu;var lp=class extends e4{connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let i=e.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{("ArrowDown"===t.key||"Home"===t.key)&&(e.setCurrentItem(o),o.focus()),("ArrowUp"===t.key||"End"===t.key)&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let t,e=this.trigger.assignedElements({flatten:!0}).find(t=>(function(t){var e,i;let o=le(t);return{start:null!=(e=o[0])?e:null,end:null!=(i=o[o.length-1])?i:null}})(t).start);if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,oG(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oG(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await iB(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=iM(this,"dropdown.show",{dir:this.localize.dir()});await iN(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await iB(this);let{keyframes:t,options:e}=iM(this,"dropdown.hide",{dir:this.localize.dir()});await iN(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return eg(lu||(lu=lh`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${0}
        distance=${0}
        skidding=${0}
        strategy=${0}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${0}
        class=${0}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${0}
          @keydown=${0}
          @keyup=${0}
          @slotchange=${0}
        ></slot>

        <div aria-hidden=${0} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `),this.placement,this.distance,this.skidding,this.hoist?"fixed":"absolute",ic(this.sync?this.sync:void 0),id({dropdown:!0,"dropdown--open":this.open}),this.handleTriggerClick,this.handleTriggerKeyDown,this.handleTriggerKeyUp,this.handleTriggerSlotChange,this.open?"false":"true")}constructor(){super(...arguments),this.localize=new iA(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if("Tab"===t.key){if(this.open&&(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}let i=(t,e)=>{if(!t)return null;let o=t.closest(e);if(o)return o;let r=t.getRootNode();return r instanceof ShadowRoot?i(r.host,e):null};setTimeout(()=>{var t;let e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?s8():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}};lp.styles=[eQ,lc],lp.dependencies={"sl-popup":oK},tS([e6(".dropdown")],lp.prototype,"popup",2),tS([e6(".dropdown__trigger")],lp.prototype,"trigger",2),tS([e6(".dropdown__panel")],lp.prototype,"panel",2),tS([eJ({type:Boolean,reflect:!0})],lp.prototype,"open",2),tS([eJ({reflect:!0})],lp.prototype,"placement",2),tS([eJ({type:Boolean,reflect:!0})],lp.prototype,"disabled",2),tS([eJ({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],lp.prototype,"stayOpenOnSelect",2),tS([eJ({attribute:!1})],lp.prototype,"containingElement",2),tS([eJ({type:Number})],lp.prototype,"distance",2),tS([eJ({type:Number})],lp.prototype,"skidding",2),tS([eJ({type:Boolean})],lp.prototype,"hoist",2),tS([eJ({reflect:!0})],lp.prototype,"sync",2),tS([eX("open",{waitUntilFirstUpdate:!0})],lp.prototype,"handleOpenChange",1),iP("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),iP("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),lp.define("sl-dropdown");var lf=tV(V||(V=(t=>t)`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`));let lm=t=>t,lg;var lb=class extends e4{async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]"),r=this.from,a="";i?[r,a]=this.from.trim().split("."):o&&([r,a]=this.from.trim().replace(/\]$/,"").split("["));let s="getElementById"in e?e.getElementById(r):null;s?t=o?s.getAttribute(a)||"":i?s[a]||"":s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),r="success"===t?this.successIcon:this.errorIcon,a=iM(this,"copy.in",{dir:"ltr"}),s=iM(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:o,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await r.animate(s.keyframes,s.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return eg(lg||(lg=lm`
      <sl-tooltip
        class=${0}
        content=${0}
        placement=${0}
        ?disabled=${0}
        ?hoist=${0}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${0}
          @click=${0}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `),id({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status}),t,this.tooltipPlacement,this.disabled,this.hoist,this.disabled,this.handleCopy)}constructor(){super(...arguments),this.localize=new iA(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}};lb.styles=[eQ,lf],lb.dependencies={"sl-icon":ir,"sl-tooltip":oQ},tS([e6('slot[name="copy-icon"]')],lb.prototype,"copyIcon",2),tS([e6('slot[name="success-icon"]')],lb.prototype,"successIcon",2),tS([e6('slot[name="error-icon"]')],lb.prototype,"errorIcon",2),tS([e6("sl-tooltip")],lb.prototype,"tooltip",2),tS([e2()],lb.prototype,"isCopying",2),tS([e2()],lb.prototype,"status",2),tS([eJ()],lb.prototype,"value",2),tS([eJ()],lb.prototype,"from",2),tS([eJ({type:Boolean,reflect:!0})],lb.prototype,"disabled",2),tS([eJ({attribute:"copy-label"})],lb.prototype,"copyLabel",2),tS([eJ({attribute:"success-label"})],lb.prototype,"successLabel",2),tS([eJ({attribute:"error-label"})],lb.prototype,"errorLabel",2),tS([eJ({attribute:"feedback-duration",type:Number})],lb.prototype,"feedbackDuration",2),tS([eJ({attribute:"tooltip-placement"})],lb.prototype,"tooltipPlacement",2),tS([eJ({type:Boolean})],lb.prototype,"hoist",2),iP("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),iP("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),lb.define("sl-copy-button");var lv=tV(q||(q=(t=>t)`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`));let ly=t=>t,lw;var l_=class extends e4{firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){("Enter"===t.key||" "===t.key)&&(t.preventDefault(),this.open?this.hide():this.show()),("ArrowUp"===t.key||"ArrowLeft"===t.key)&&(t.preventDefault(),this.hide()),("ArrowDown"===t.key||"ArrowRight"===t.key)&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await iB(this.body);let{keyframes:t,options:e}=iM(this,"details.show",{dir:this.localize.dir()});await iN(this.body,iU(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await iB(this.body);let{keyframes:t,options:e}=iM(this,"details.hide",{dir:this.localize.dir()});await iN(this.body,iU(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,oG(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,oG(this,"sl-after-hide")}render(){let t="rtl"===this.localize.dir();return eg(lw||(lw=ly`
      <details
        part="base"
        class=${0}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${0}
          aria-controls="content"
          aria-disabled=${0}
          tabindex=${0}
          @click=${0}
          @keydown=${0}
        >
          <slot name="summary" part="summary" class="details__summary">${0}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${0}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${0}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `),id({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t}),this.open?"true":"false",this.disabled?"true":"false",this.disabled?"-1":"0",this.handleSummaryClick,this.handleSummaryKeyDown,this.summary,t?"chevron-left":"chevron-right",t?"chevron-left":"chevron-right")}constructor(){super(...arguments),this.localize=new iA(this),this.open=!1,this.disabled=!1}};l_.styles=[eQ,lv],l_.dependencies={"sl-icon":ir},tS([e6(".details")],l_.prototype,"details",2),tS([e6(".details__header")],l_.prototype,"header",2),tS([e6(".details__body")],l_.prototype,"body",2),tS([e6(".details__expand-icon-slot")],l_.prototype,"expandIconSlot",2),tS([eJ({type:Boolean,reflect:!0})],l_.prototype,"open",2),tS([eJ()],l_.prototype,"summary",2),tS([eJ({type:Boolean,reflect:!0})],l_.prototype,"disabled",2),tS([eX("open",{waitUntilFirstUpdate:!0})],l_.prototype,"handleOpenChange",1),iP("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),iP("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),l_.define("sl-details");var lx=tV(j||(j=(t=>t)`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`));let lk=t=>t,lC,l$;var lS=class extends e4{firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),rM(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),rN(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let t=iM(this,"dialog.denyClose",{dir:this.localize.dir()});iN(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),rM(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([iB(this.dialog),iB(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=iM(this,"dialog.show",{dir:this.localize.dir()}),i=iM(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([iN(this.panel,e.keyframes,e.options),iN(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{lr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([iB(this.dialog),iB(this.overlay)]);let t=iM(this,"dialog.hide",{dir:this.localize.dir()}),e=iM(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([iN(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),iN(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,rN(this);let i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,oG(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oG(this,"sl-after-hide")}render(){return eg(l$||(l$=lk`
      <div
        part="base"
        class=${0}
      >
        <div part="overlay" class="dialog__overlay" @click=${0} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${0}
          aria-label=${0}
          aria-labelledby=${0}
          tabindex="-1"
        >
          ${0}
          ${0}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `),id({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")}),()=>this.requestClose("overlay"),this.open?"false":"true",ic(this.noHeader?this.label:void 0),ic(this.noHeader?void 0:"title"),this.noHeader?"":eg(lC||(lC=lk`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${0} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${0}
                      library="system"
                      @click="${0}"
                    ></sl-icon-button>
                  </div>
                </header>
              `),this.label.length>0?this.label:String.fromCharCode(65279),this.localize.term("close"),()=>this.requestClose("close-button")),"")}constructor(){super(...arguments),this.hasSlotController=new eV(this,"footer"),this.localize=new iA(this),this.modal=new lo(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}};lS.styles=[eQ,lx],lS.dependencies={"sl-icon-button":rm},tS([e6(".dialog")],lS.prototype,"dialog",2),tS([e6(".dialog__panel")],lS.prototype,"panel",2),tS([e6(".dialog__overlay")],lS.prototype,"overlay",2),tS([eJ({type:Boolean,reflect:!0})],lS.prototype,"open",2),tS([eJ({reflect:!0})],lS.prototype,"label",2),tS([eJ({attribute:"no-header",type:Boolean,reflect:!0})],lS.prototype,"noHeader",2),tS([eX("open",{waitUntilFirstUpdate:!0})],lS.prototype,"handleOpenChange",1),iP("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),iP("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),iP("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),iP("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),iP("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),lS.define("sl-dialog"),ib.define("sl-checkbox");var lz=tV(W||(W=(t=>t)`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`));let lA=t=>t,lE,lT,lD,lI,lL;var lO=class extends e4{get validity(){return this.isButton()?this.button.validity:tP}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?rl(lE||(lE=lA`a`)):rl(lT||(lT=lA`button`));return rc(lL||(lL=lA`
      <${0}
        part="base"
        class=${0}
        ?disabled=${0}
        type=${0}
        title=${0}
        name=${0}
        value=${0}
        href=${0}
        target=${0}
        download=${0}
        rel=${0}
        role=${0}
        aria-disabled=${0}
        tabindex=${0}
        @blur=${0}
        @focus=${0}
        @invalid=${0}
        @click=${0}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${0}
        ${0}
      </${0}>
    `),e,id({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")}),ic(t?void 0:this.disabled),ic(t?void 0:this.type),this.title,ic(t?void 0:this.name),ic(t?void 0:this.value),ic(t&&!this.disabled?this.href:void 0),ic(t?this.target:void 0),ic(t?this.download:void 0),ic(t?this.rel:void 0),ic(t?void 0:"button"),this.disabled?"true":"false",this.disabled?"-1":"0",this.handleBlur,this.handleFocus,this.isButton()?this.handleInvalid:null,this.handleClick,this.caret?rc(lD||(lD=lA` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `)):"",this.loading?rc(lI||(lI=lA`<sl-spinner part="spinner"></sl-spinner>`)):"",e)}constructor(){super(...arguments),this.formControlController=new tO(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new eV(this,"[default]","prefix","suffix"),this.localize=new iA(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}};function lP(t,e){var i,o;"string"==typeof(i=t)&&-1!==i.indexOf(".")&&1===parseFloat(i)&&(t="100%");let r="string"==typeof(o=t)&&-1!==o.indexOf("%");return(t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),1e-6>Math.abs(t-e))?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function lM(t){return Math.min(1,Math.max(0,t))}function lN(t){return(isNaN(t=parseFloat(t))||t<0||t>1)&&(t=1),t}function lR(t){return 1>=Number(t)?`${100*Number(t)}%`:t}function lF(t){return 1===t.length?"0"+t:String(t)}function lB(t,e,i){t=lP(t,255);let o=Math.max(t,e=lP(e,255),i=lP(i,255)),r=Math.min(t,e,i),a=0,s=0,l=(o+r)/2;if(o===r)s=0,a=0;else{let n=o-r;switch(s=l>.5?n/(2-o-r):n/(o+r),o){case t:a=(e-i)/n+6*(e<i);break;case e:a=(i-t)/n+2;break;case i:a=(t-e)/n+4}a/=6}return{h:a,s:s,l:l}}function lU(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function lH(t,e,i){t=lP(t,255);let o=Math.max(t,e=lP(e,255),i=lP(i,255)),r=Math.min(t,e,i),a=0,s=o-r;if(o===r)a=0;else{switch(o){case t:a=(e-i)/s+6*(e<i);break;case e:a=(i-t)/s+2;break;case i:a=(t-e)/s+4}a/=6}return{h:a,s:0===o?0:s/o,v:o}}function lV(t,e,i,o){let r=[lF(Math.round(t).toString(16)),lF(Math.round(e).toString(16)),lF(Math.round(i).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function lq(t,e,i){let o=1-t/255,r=1-e/255,a=1-i/255,s=Math.min(o,r,a);return 1===s?(o=0,r=0,a=0):(o=(o-s)/(1-s)*100,r=(r-s)/(1-s)*100,a=(a-s)/(1-s)*100),{c:Math.round(o),m:Math.round(r),y:Math.round(a),k:Math.round(s*=100)}}lO.styles=[eQ,a$],lO.dependencies={"sl-icon":ir,"sl-spinner":iD},tS([e6(".button")],lO.prototype,"button",2),tS([e2()],lO.prototype,"hasFocus",2),tS([e2()],lO.prototype,"invalid",2),tS([eJ()],lO.prototype,"title",2),tS([eJ({reflect:!0})],lO.prototype,"variant",2),tS([eJ({reflect:!0})],lO.prototype,"size",2),tS([eJ({type:Boolean,reflect:!0})],lO.prototype,"caret",2),tS([eJ({type:Boolean,reflect:!0})],lO.prototype,"disabled",2),tS([eJ({type:Boolean,reflect:!0})],lO.prototype,"loading",2),tS([eJ({type:Boolean,reflect:!0})],lO.prototype,"outline",2),tS([eJ({type:Boolean,reflect:!0})],lO.prototype,"pill",2),tS([eJ({type:Boolean,reflect:!0})],lO.prototype,"circle",2),tS([eJ()],lO.prototype,"type",2),tS([eJ()],lO.prototype,"name",2),tS([eJ()],lO.prototype,"value",2),tS([eJ()],lO.prototype,"href",2),tS([eJ()],lO.prototype,"target",2),tS([eJ()],lO.prototype,"rel",2),tS([eJ()],lO.prototype,"download",2),tS([eJ()],lO.prototype,"form",2),tS([eJ({attribute:"formaction"})],lO.prototype,"formAction",2),tS([eJ({attribute:"formenctype"})],lO.prototype,"formEnctype",2),tS([eJ({attribute:"formmethod"})],lO.prototype,"formMethod",2),tS([eJ({attribute:"formnovalidate",type:Boolean})],lO.prototype,"formNoValidate",2),tS([eJ({attribute:"formtarget"})],lO.prototype,"formTarget",2),tS([eX("disabled",{waitUntilFirstUpdate:!0})],lO.prototype,"handleDisabledChange",1);function lj(t){return parseInt(t,16)}let lW={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},lK="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",lG="[\\s|\\(]+("+lK+")[,|\\s]+("+lK+")[,|\\s]+("+lK+")\\s*\\)?",lY="[\\s|\\(]+("+lK+")[,|\\s]+("+lK+")[,|\\s]+("+lK+")[,|\\s]+("+lK+")\\s*\\)?",lX={CSS_UNIT:new RegExp(lK),rgb:RegExp("rgb"+lG),rgba:RegExp("rgba"+lY),hsl:RegExp("hsl"+lG),hsla:RegExp("hsla"+lY),hsv:RegExp("hsv"+lG),hsva:RegExp("hsva"+lY),cmyk:RegExp("cmyk"+lY),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function lQ(t){return"number"==typeof t?!Number.isNaN(t):lX.CSS_UNIT.test(t)}class lZ{isDark(){return 128>this.getBrightness()}isLight(){return!this.isDark()}getBrightness(){let t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){let t=this.toRgb(),e=t.r/255,i=t.g/255,o=t.b/255;return .2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))}getAlpha(){return this.a}setAlpha(t){return this.a=lN(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:t}=this.toHsl();return 0===t}toHsv(){let t=lH(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){let t=lH(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${o}%)`:`hsva(${e}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){let t=lB(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){let t=lB(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${o}%)`:`hsla(${e}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return lV(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,o,r){let a=[lF(Math.round(t).toString(16)),lF(Math.round(e).toString(16)),lF(Math.round(i).toString(16)),lF(Math.round(255*parseFloat(o)).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){let t=t=>`${Math.round(100*lP(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){let t=t=>Math.round(100*lP(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return e0({},lq(this.r,this.g,this.b))}toCmykString(){let{c:t,m:e,y:i,k:o}=lq(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${o})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;let t="#"+lV(this.r,this.g,this.b,!1);for(let[e,i]of Object.entries(lW))if(t===i)return e;return!1}toString(t){let e=!!t;t=null!=t?t:this.format;let i=!1,o=this.a<1&&this.a>=0;return!e&&o&&(t.startsWith("hex")||"name"===t)?"name"===t&&0===this.a?this.toName():this.toRgbString():("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new lZ(this.toString())}lighten(t=10){let e=this.toHsl();return e.l+=t/100,e.l=lM(e.l),new lZ(e)}brighten(t=10){let e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-(t/100*255)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-(t/100*255)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-(t/100*255)))),new lZ(e)}darken(t=10){let e=this.toHsl();return e.l-=t/100,e.l=lM(e.l),new lZ(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){let e=this.toHsl();return e.s-=t/100,e.s=lM(e.s),new lZ(e)}saturate(t=10){let e=this.toHsl();return e.s+=t/100,e.s=lM(e.s),new lZ(e)}greyscale(){return this.desaturate(100)}spin(t){let e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new lZ(e)}mix(t,e=50){let i=this.toRgb(),o=new lZ(t).toRgb(),r=e/100;return new lZ({r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a})}analogous(t=6,e=30){let i=this.toHsl(),o=360/e,r=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,r.push(new lZ(i));return r}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new lZ(t)}monochromatic(t=6){let e=this.toHsv(),{h:i}=e,{s:o}=e,{v:r}=e,a=[],s=1/t;for(;t--;)a.push(new lZ({h:i,s:o,v:r})),r=(r+s)%1;return a}splitcomplement(){let t=this.toHsl(),{h:e}=t;return[this,new lZ({h:(e+72)%360,s:t.s,l:t.l}),new lZ({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){let e=this.toRgb(),i=new lZ(t).toRgb(),o=e.a+i.a*(1-e.a);return new lZ({r:(e.r*e.a+i.r*i.a*(1-e.a))/o,g:(e.g*e.a+i.g*i.a*(1-e.a))/o,b:(e.b*e.a+i.b*i.a*(1-e.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let e=this.toHsl(),{h:i}=e,o=[this],r=360/t;for(let a=1;a<t;a++)o.push(new lZ({h:(i+a*r)%360,s:e.s,l:e.l}));return o}equals(t){let e=new lZ(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}constructor(t="",e={}){var i,o;if(t instanceof lZ)return t;"number"==typeof t&&(t={r:(o=t)>>16,g:(65280&o)>>8,b:255&o}),this.originalInput=t;let r=function(t){let e={r:0,g:0,b:0},i=1,o=null,r=null,a=null,s=!1,l=!1;if("string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(lW[t])t=lW[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=lX.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=lX.rgba.exec(t))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=lX.hsl.exec(t))?{h:i[1],s:i[2],l:i[3]}:(i=lX.hsla.exec(t))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=lX.hsv.exec(t))?{h:i[1],s:i[2],v:i[3]}:(i=lX.hsva.exec(t))?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=lX.cmyk.exec(t))?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=lX.hex8.exec(t))?{r:lj(i[1]),g:lj(i[2]),b:lj(i[3]),a:lj(i[4])/255,format:e?"name":"hex8"}:(i=lX.hex6.exec(t))?{r:lj(i[1]),g:lj(i[2]),b:lj(i[3]),format:e?"name":"hex"}:(i=lX.hex4.exec(t))?{r:lj(i[1]+i[1]),g:lj(i[2]+i[2]),b:lj(i[3]+i[3]),a:lj(i[4]+i[4])/255,format:e?"name":"hex8"}:!!(i=lX.hex3.exec(t))&&{r:lj(i[1]+i[1]),g:lj(i[2]+i[2]),b:lj(i[3]+i[3]),format:e?"name":"hex"}}(t)),"object"==typeof t){if(lQ(t.r)&&lQ(t.g)&&lQ(t.b)){var n,d,c;n=t.r,d=t.g,c=t.b,e={r:255*lP(n,255),g:255*lP(d,255),b:255*lP(c,255)},s=!0,l="%"===String(t.r).substr(-1)?"prgb":"rgb"}else lQ(t.h)&&lQ(t.s)&&lQ(t.v)?(o=lR(t.s),r=lR(t.v),e=function(t,e,i){t=6*lP(t,360),e=lP(e,100),i=lP(i,100);let o=Math.floor(t),r=t-o,a=i*(1-e),s=i*(1-r*e),l=i*(1-(1-r)*e),n=o%6;return{r:255*[i,s,a,a,l,i][n],g:255*[l,i,i,s,a,a][n],b:255*[a,a,l,i,i,s][n]}}(t.h,o,r),s=!0,l="hsv"):lQ(t.h)&&lQ(t.s)&&lQ(t.l)?(o=lR(t.s),a=lR(t.l),e=function(t,e,i){let o,r,a;if(t=lP(t,360),e=lP(e,100),i=lP(i,100),0===e)r=i,a=i,o=i;else{let s=i<.5?i*(1+e):i+e-i*e,l=2*i-s;o=lU(l,s,t+1/3),r=lU(l,s,t),a=lU(l,s,t-1/3)}return{r:255*o,g:255*r,b:255*a}}(t.h,o,a),s=!0,l="hsl"):lQ(t.c)&&lQ(t.m)&&lQ(t.y)&&lQ(t.k)&&(e=function(t,e,i,o){let r=o/100;return{r:255*(1-t/100)*(1-r),g:255*(1-e/100)*(1-r),b:255*(1-i/100)*(1-r)}}(t.c,t.m,t.y,t.k),s=!0,l="cmyk");Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)}return i=lN(i),{ok:s,format:t.format||l,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=null!=(i=e.format)?i:r.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}}let lJ=t=>t,l0,l1,l2,l5,l3,l6,l4,l7;var l8="EyeDropper"in window,l9=class extends e4{get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect(),r=this.value,a=this.value;i.focus(),t.preventDefault(),rY(e,{onMove:t=>{this.alpha=oJ(t/o*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect(),r=this.value,a=this.value;i.focus(),t.preventDefault(),rY(e,{onMove:t=>{this.hue=oJ(t/o*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:o,height:r}=e.getBoundingClientRect(),a=this.value,s=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,rY(e,{onMove:(t,e)=>{this.saturation=oJ(t/o*100,0,100),this.brightness=oJ(100-e/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=oJ(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=oJ(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=oJ(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=oJ(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=oJ(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=oJ(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=oJ(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=oJ(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){let e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){let t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new lZ(t);if(!e.isValid)return null;let i=e.toHsl(),o={h:i.h,s:100*i.s,l:100*i.l,a:i.a},r=e.toRgb(),a=e.toHexString(),s=e.toHex8String(),l=e.toHsv(),n={h:l.h,s:100*l.s,v:100*l.v,a:l.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:n.h,s:n.s,v:n.v,string:this.setLetterCase(`hsv(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%)`)},hsva:{h:n.h,s:n.s,v:n.v,a:n.a,string:this.setLetterCase(`hsva(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(s)}}setColor(t){let e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){l8&&new EyeDropper().open().then(t=>{let e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,o=100){let r=new lZ(`hsva(${t}, ${e}%, ${i}%, ${o/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let i=this.parseColor(e);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),o=eg(l4||(l4=lJ`
      <div
        part="base"
        class=${0}
        aria-disabled=${0}
        aria-labelledby="label"
        tabindex=${0}
      >
        ${0}

        <div
          part="grid"
          class="color-picker__grid"
          style=${0}
          @pointerdown=${0}
          @touchmove=${0}
        >
          <span
            part="grid-handle"
            class=${0}
            style=${0}
            role="application"
            aria-label="HSV"
            tabindex=${0}
            @keydown=${0}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${0}
              @touchmove=${0}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${0}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${0}
                tabindex=${0}
                @keydown=${0}
              ></span>
            </div>

            ${0}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${0}
            style=${0}
            @click=${0}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${0}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${0}
            ?required=${0}
            ?disabled=${0}
            aria-label=${0}
            @keydown=${0}
            @sl-change=${0}
            @sl-input=${0}
            @sl-invalid=${0}
            @sl-blur=${0}
            @sl-focus=${0}
          ></sl-input>

          <sl-button-group>
            ${0}
            ${0}
          </sl-button-group>
        </div>

        ${0}
      </div>
    `),id({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus}),this.disabled?"true":"false",this.inline?"0":"-1",this.inline?eg(l0||(l0=lJ`
              <sl-visually-hidden id="label">
                <slot name="label">${0}</slot>
              </sl-visually-hidden>
            `),this.label):null,af({backgroundColor:this.getHexString(this.hue,100,100)}),this.handleGridDrag,this.handleTouchMove,id({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle}),af({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)}),ic(this.disabled?void 0:"0"),this.handleGridKeyDown,this.handleHueDrag,this.handleTouchMove,af({left:`${0===this.hue?0:100/(360/this.hue)}%`}),`${Math.round(this.hue)}`,ic(this.disabled?void 0:"0"),this.handleHueKeyDown,this.opacity?eg(l1||(l1=lJ`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${0}"
                    @touchmove=${0}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${0}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${0}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${0}
                      tabindex=${0}
                      @keydown=${0}
                    ></span>
                  </div>
                `),this.handleAlphaDrag,this.handleTouchMove,af({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`}),af({left:`${this.alpha}%`}),Math.round(this.alpha),ic(this.disabled?void 0:"0"),this.handleAlphaKeyDown):"",this.localize.term("copy"),af({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)}),this.handleCopy,this.name,this.isEmpty?"":this.inputValue,this.required,this.disabled,this.localize.term("currentValue"),this.handleInputKeyDown,this.handleInputChange,this.handleInputInput,this.handleInputInvalid,this.stopNestedEventPropagation,this.stopNestedEventPropagation,this.noFormatToggle?"":eg(l2||(l2=lJ`
                  <sl-button
                    part="format-button"
                    aria-label=${0}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${0}
                    @sl-blur=${0}
                    @sl-focus=${0}
                  >
                    ${0}
                  </sl-button>
                `),this.localize.term("toggleColorFormat"),this.handleFormatToggle,this.stopNestedEventPropagation,this.stopNestedEventPropagation,this.setLetterCase(this.format)),l8?eg(l5||(l5=lJ`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${0}
                    @sl-blur=${0}
                    @sl-focus=${0}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${0}
                    ></sl-icon>
                  </sl-button>
                `),this.handleEyeDropper,this.stopNestedEventPropagation,this.stopNestedEventPropagation,this.localize.term("selectAColorFromTheScreen")):"",i.length>0?eg(l6||(l6=lJ`
              <div part="swatches" class="color-picker__swatches">
                ${0}
              </div>
            `),i.map(t=>{let e=this.parseColor(t);return e?eg(l3||(l3=lJ`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${0}
                      role="button"
                      aria-label=${0}
                      @click=${0}
                      @keydown=${0}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${0}
                      ></div>
                    </div>
                  `),ic(this.disabled?void 0:"0"),t,()=>this.selectSwatch(t),t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa),af({backgroundColor:e.hexa})):(console.error(`Unable to parse swatch color: "${t}"`,this),"")})):"");return this.inline?o:eg(l7||(l7=lJ`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${0}
        .containingElement=${0}
        ?disabled=${0}
        ?hoist=${0}
        @sl-after-hide=${0}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${0}
          style=${0}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${0}</slot>
          </sl-visually-hidden>
        </button>
        ${0}
      </sl-dropdown>
    `),this.disabled?"true":"false",this,this.disabled,this.hoist,this.handleAfterHide,id({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0}),af({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)}),this.label,o)}constructor(){super(),this.formControlController=new tO(this),this.isSafeValue=!1,this.localize=new iA(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}};l9.styles=[eQ,lz],l9.dependencies={"sl-button-group":aO,"sl-button":lO,"sl-dropdown":lp,"sl-icon":ir,"sl-input":sw,"sl-visually-hidden":o7},tS([e6('[part~="base"]')],l9.prototype,"base",2),tS([e6('[part~="input"]')],l9.prototype,"input",2),tS([e6(".color-dropdown")],l9.prototype,"dropdown",2),tS([e6('[part~="preview"]')],l9.prototype,"previewButton",2),tS([e6('[part~="trigger"]')],l9.prototype,"trigger",2),tS([e2()],l9.prototype,"hasFocus",2),tS([e2()],l9.prototype,"isDraggingGridHandle",2),tS([e2()],l9.prototype,"isEmpty",2),tS([e2()],l9.prototype,"inputValue",2),tS([e2()],l9.prototype,"hue",2),tS([e2()],l9.prototype,"saturation",2),tS([e2()],l9.prototype,"brightness",2),tS([e2()],l9.prototype,"alpha",2),tS([eJ()],l9.prototype,"value",2),tS([eU()],l9.prototype,"defaultValue",2),tS([eJ()],l9.prototype,"label",2),tS([eJ()],l9.prototype,"format",2),tS([eJ({type:Boolean,reflect:!0})],l9.prototype,"inline",2),tS([eJ({reflect:!0})],l9.prototype,"size",2),tS([eJ({attribute:"no-format-toggle",type:Boolean})],l9.prototype,"noFormatToggle",2),tS([eJ()],l9.prototype,"name",2),tS([eJ({type:Boolean,reflect:!0})],l9.prototype,"disabled",2),tS([eJ({type:Boolean})],l9.prototype,"hoist",2),tS([eJ({type:Boolean})],l9.prototype,"opacity",2),tS([eJ({type:Boolean})],l9.prototype,"uppercase",2),tS([eJ()],l9.prototype,"swatches",2),tS([eJ({reflect:!0})],l9.prototype,"form",2),tS([eJ({type:Boolean,reflect:!0})],l9.prototype,"required",2),tS([e5({passive:!1})],l9.prototype,"handleTouchMove",1),tS([eX("format",{waitUntilFirstUpdate:!0})],l9.prototype,"handleFormatChange",1),tS([eX("opacity",{waitUntilFirstUpdate:!0})],l9.prototype,"handleOpacityChange",1),tS([eX("value")],l9.prototype,"handleValueChange",1),l9.define("sl-color-picker");var nt=tV(K||(K=(t=>t)`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`));let ne=t=>t,ni;var no=class extends e4{render(){return eg(ni||(ni=ne`
      <div
        part="base"
        class=${0}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `),id({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")}))}constructor(){super(...arguments),this.hasSlotController=new eV(this,"footer","header","image")}};no.styles=[eQ,nt],no.define("sl-card");var nr=class{hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}},na=tV(G||(G=(t=>t)`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`));let ns=t=>t,nl,nn,nd,nc;var nh=class extends e4{connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:o}=this;return Math.ceil(o?t/i:(t-e)/i+1)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=t.target,i="rtl"===this.localize.dir(),o=null!==e.closest('[part~="pagination-item"]'),r="ArrowDown"===t.key||!i&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key,a="ArrowUp"===t.key||!i&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key;t.preventDefault(),a&&this.previous(),r&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var t;let e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()})}}handleMouseDragStart(t){this.mouseDragging&&0===t.button&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let t=new IntersectionObserver(e=>{for(let i of(t.disconnect(),e)){let t=i.target;t.toggleAttribute("inert",!i.isIntersecting),t.classList.toggle("--in-view",i.isIntersecting),t.setAttribute("aria-hidden",i.isIntersecting?"false":"true")}let i=e.find(t=>t.isIntersecting);if(!i)return;let o=this.getSlides({excludeClones:!1}),r=this.getSlides().length,a=o.indexOf(i.target),s=this.loop?a-this.slidesPerPage:a;if(this.activeSlide=(Math.ceil(s/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){let t=Number(i.target.getAttribute("data-clone"));this.goToSlide(t,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){let t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),o=t.slice(0,e);i.reverse().forEach((e,i)=>{let o=e.cloneNode(!0);o.setAttribute("data-clone",String(t.length-i-1)),this.prepend(o)}),o.forEach((t,e)=>{let i=t.cloneNode(!0);i.setAttribute("data-clone",String(e)),this.append(i)})}handleSlideChange(){let t=this.getSlides();t.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){let t=this.getSlides(),e=this.slidesPerMove;t.forEach((t,i)=>{(i+e)%e==0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){let{slidesPerPage:i,loop:o}=this,r=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!r.length)return;let s=o?(t+r.length)%r.length:oJ(t,0,r.length-i);this.activeSlide=s;let l=oJ(t+(o?i:0)+("rtl"===this.localize.dir()?i-1:0),0,a.length-1),n=a[l];this.scrollToSlide(n,iF()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let i=this.scrollContainer,o=i.getBoundingClientRect(),r=t.getBoundingClientRect(),a=r.left-o.left,s=r.top-o.top;a||s?(this.pendingSlideChange=!0,i.scrollTo({left:a+i.scrollLeft,top:s+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),a=this.canScrollNext(),s="ltr"===this.localize.dir();return eg(nc||(nc=ns`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${0}"
          style="--slides-per-page: ${0};"
          aria-busy="${0}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${0}
          @mousedown="${0}"
          @scroll="${0}"
          @scrollend=${0}
          @click=${0}
        >
          <slot></slot>
        </div>

        ${0}
        ${0}
      </div>
    `),id({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging}),this.slidesPerPage,e?"true":"false",this.handleKeyDown,this.handleMouseDragStart,this.handleScroll,this.handleScrollEnd,this.handleClick,this.navigation?eg(nl||(nl=ns`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${0}"
                  aria-label="${0}"
                  aria-controls="scroll-container"
                  aria-disabled="${0}"
                  @click=${0}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${0}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${0}
                  aria-label="${0}"
                  aria-controls="scroll-container"
                  aria-disabled="${0}"
                  @click=${0}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${0}"></sl-icon>
                  </slot>
                </button>
              </div>
            `),id({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r}),this.localize.term("previousSlide"),r?"false":"true",r?()=>this.previous():null,s?"chevron-left":"chevron-right",id({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a}),this.localize.term("nextSlide"),a?"false":"true",a?()=>this.next():null,s?"chevron-right":"chevron-left"):"",this.pagination?eg(nd||(nd=ns`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${0}
              </div>
            `),function*(t,e){if(void 0!==t){let i=0;for(let o of t)yield e(o,i++)}}(function*(t,e,i=1){let o=void 0===e?0:t;null!=e||(e=t);for(let t=o;i>0?t<e:e<t;t+=i)yield t}(i),e=>{let r=e===o;return eg(nn||(nn=ns`
                    <button
                      part="pagination-item ${0}"
                      class="${0}"
                      role="tab"
                      id="tab-${0}"
                      aria-controls="slide-${0}"
                      aria-selected="${0}"
                      aria-label="${0}"
                      tabindex=${0}
                      @click=${0}
                      @keydown=${0}
                    ></button>
                  `),r?"pagination-item--active":"",id({"carousel__pagination-item":!0,"carousel__pagination-item--active":r}),e+1,e+1,r?"true":"false",r?this.localize.term("slideNum",e+1):this.localize.term("goToSlide",e+1,i),r?"0":"-1",()=>this.goToSlide(e*t),this.handleKeyDown)})):"")}constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new nr(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new iA(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{let t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});let e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");let o=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==o||i!==r)&&(t.scrollTo({left:o,top:r,behavior:iF()?"auto":"smooth"}),await oG(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(t=>[...t.addedNodes,...t.removedNodes].some(t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}};nh.styles=[eQ,na],nh.dependencies={"sl-icon":ir},tS([eJ({type:Boolean,reflect:!0})],nh.prototype,"loop",2),tS([eJ({type:Boolean,reflect:!0})],nh.prototype,"navigation",2),tS([eJ({type:Boolean,reflect:!0})],nh.prototype,"pagination",2),tS([eJ({type:Boolean,reflect:!0})],nh.prototype,"autoplay",2),tS([eJ({type:Number,attribute:"autoplay-interval"})],nh.prototype,"autoplayInterval",2),tS([eJ({type:Number,attribute:"slides-per-page"})],nh.prototype,"slidesPerPage",2),tS([eJ({type:Number,attribute:"slides-per-move"})],nh.prototype,"slidesPerMove",2),tS([eJ()],nh.prototype,"orientation",2),tS([eJ({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],nh.prototype,"mouseDragging",2),tS([e6(".carousel__slides")],nh.prototype,"scrollContainer",2),tS([e6(".carousel__pagination")],nh.prototype,"paginationContainer",2),tS([e2()],nh.prototype,"activeSlide",2),tS([e2()],nh.prototype,"scrolling",2),tS([e2()],nh.prototype,"dragging",2),tS([e5({passive:!0})],nh.prototype,"handleScroll",1),tS([eX("loop",{waitUntilFirstUpdate:!0}),eX("slidesPerPage",{waitUntilFirstUpdate:!0})],nh.prototype,"initializeSlides",1),tS([eX("activeSlide")],nh.prototype,"handleSlideChange",1),tS([eX("slidesPerMove")],nh.prototype,"updateSlidesSnap",1),tS([eX("autoplay")],nh.prototype,"handleAutoplayChange",1),nh.define("sl-carousel");var nu=(t,e,i)=>{let o=t[e];t[e]=function(...t){o.call(this,...t),i.call(this,o,...t)}};if("undefined"!=typeof window&&!("onscrollend"in window)){let t=new Set,e=new WeakMap,i=e=>{for(let i of e.changedTouches)t.delete(i.identifier)};document.addEventListener("touchstart",e=>{for(let i of e.changedTouches)t.add(i.identifier)},!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),nu(EventTarget.prototype,"addEventListener",function(i,o){var r;let a;if("scrollend"!==o)return;let s=(r=()=>{t.size?s():this.dispatchEvent(new Event("scrollend"))},a=0,function(...t){window.clearTimeout(a),a=window.setTimeout(()=>{r.call(this,...t)},100)});i.call(this,"scroll",s,{passive:!0}),e.set(this,s)}),nu(EventTarget.prototype,"removeEventListener",function(t,i){if("scrollend"!==i)return;let o=e.get(this);o&&t.call(this,"scroll",o,{passive:!0})})}var np=tV(Y||(Y=(t=>t)`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`));let nf=t=>t,nm;var ng=class extends e4{connectedCallback(){super.connectedCallback()}render(){return eg(nm||(nm=nf` <slot></slot> `))}};ng.styles=[eQ,np],ng.define("sl-carousel-item");var nb=tV(X||(X=(t=>t)`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`));let nv=t=>t,ny,nw,n_,nx;var nk=class extends e4{setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>"sl-dropdown"===t.tagName.toLowerCase()).length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return eg(nx||(nx=nv`
      <div
        part="base"
        class=${0}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${0}
        ${0}
        ${0}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `),id({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")}),"link"===this.renderType?eg(ny||(ny=nv`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${0}"
                target="${0}"
                rel=${0}
              >
                <slot @slotchange=${0}></slot>
              </a>
            `),this.href,ic(this.target?this.target:void 0),ic(this.target?this.rel:void 0),this.handleSlotChange):"","button"===this.renderType?eg(nw||(nw=nv`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${0}></slot>
              </button>
            `),this.handleSlotChange):"","dropdown"===this.renderType?eg(n_||(n_=nv`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${0}></slot>
              </div>
            `),this.handleSlotChange):"")}constructor(){super(...arguments),this.hasSlotController=new eV(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}};nk.styles=[eQ,nb],tS([e6("slot:not([name])")],nk.prototype,"defaultSlot",2),tS([e2()],nk.prototype,"renderType",2),tS([eJ()],nk.prototype,"href",2),tS([eJ()],nk.prototype,"target",2),tS([eJ()],nk.prototype,"rel",2),tS([eX("href",{waitUntilFirstUpdate:!0})],nk.prototype,"hrefChanged",1),nk.define("sl-breadcrumb-item"),aO.define("sl-button-group");var nC=tV(Q||(Q=(t=>t)`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`));let n$=t=>t,nS,nz,nA,nE,nT;var nD=class extends e4{handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=eg(nS||(nS=n$`
      <img
        part="image"
        class="avatar__image"
        src="${0}"
        loading="${0}"
        alt=""
        @error="${0}"
      />
    `),this.image,this.loading,this.handleImageLoadError),e=eg(nz||(nz=n$``));return e=this.initials?eg(nA||(nA=n$`<div part="initials" class="avatar__initials">${0}</div>`),this.initials):eg(nE||(nE=n$`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `)),eg(nT||(nT=n$`
      <div
        part="base"
        class=${0}
        role="img"
        aria-label=${0}
      >
        ${0}
      </div>
    `),id({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape}),this.label,this.image&&!this.hasError?t:e)}constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}};nD.styles=[eQ,nC],nD.dependencies={"sl-icon":ir},tS([e2()],nD.prototype,"hasError",2),tS([eJ()],nD.prototype,"image",2),tS([eJ()],nD.prototype,"label",2),tS([eJ()],nD.prototype,"initials",2),tS([eJ()],nD.prototype,"loading",2),tS([eJ({reflect:!0})],nD.prototype,"shape",2),tS([eX("image")],nD.prototype,"handleImageChange",1),nD.define("sl-avatar");var nI=tV(Z||(Z=(t=>t)`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`));let nL=t=>t,nO;var nP=class extends e4{getSeparator(){let t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>"sl-breadcrumb-item"===t.tagName.toLowerCase());t.forEach((e,i)=>{let o=e.querySelector('[slot="separator"]');null===o?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),eg(nO||(nO=nL`
      <nav part="base" class="breadcrumb" aria-label=${0}>
        <slot @slotchange=${0}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${0} library="system"></sl-icon>
        </slot>
      </span>
    `),this.label,this.handleSlotChange,"rtl"===this.localize.dir()?"chevron-left":"chevron-right")}constructor(){super(...arguments),this.localize=new iA(this),this.separatorDir=this.localize.dir(),this.label=""}};nP.styles=[eQ,nI],nP.dependencies={"sl-icon":ir},tS([e6("slot")],nP.prototype,"defaultSlot",2),tS([e6('slot[name="separator"]')],nP.prototype,"separatorSlot",2),tS([eJ()],nP.prototype,"label",2),nP.define("sl-breadcrumb"),lO.define("sl-button");var nM=tV(J||(J=(t=>t)`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`));let nN=t=>t,nR,nF;var nB=class extends e4{handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return eg(nF||(nF=nN`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${0}
          alt=${0}
          crossorigin="anonymous"
          aria-hidden=${0}
          @click=${0}
          @load=${0}
          @error=${0}
        />

        ${0}
      </div>
    `),this.src,this.alt,this.play?"false":"true",this.handleClick,this.handleLoad,this.handleError,this.isLoaded?eg(nR||(nR=nN`
              <img
                class="animated-image__frozen"
                src=${0}
                alt=${0}
                aria-hidden=${0}
                @click=${0}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `),this.frozenFrame,this.alt,this.play?"true":"false",this.handleClick):"")}constructor(){super(...arguments),this.isLoaded=!1}};nB.styles=[eQ,nM],nB.dependencies={"sl-icon":ir},tS([e6(".animated-image__animated")],nB.prototype,"animatedImage",2),tS([e2()],nB.prototype,"frozenFrame",2),tS([e2()],nB.prototype,"isLoaded",2),tS([eJ()],nB.prototype,"src",2),tS([eJ()],nB.prototype,"alt",2),tS([eJ({type:Boolean,reflect:!0})],nB.prototype,"play",2),tS([eX("play",{waitUntilFirstUpdate:!0})],nB.prototype,"handlePlayChange",1),tS([eX("src")],nB.prototype,"handleSrcChange",1),nB.define("sl-animated-image");var nU=tV(tt||(tt=(t=>t)`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`));let nH=t=>t,nV;var nq=class extends e4{render(){return eg(nV||(nV=nH`
      <span
        part="base"
        class=${0}
        role="status"
      >
        <slot></slot>
      </span>
    `),id({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse}))}constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}};nq.styles=[eQ,nU],tS([eJ({reflect:!0})],nq.prototype,"variant",2),tS([eJ({type:Boolean,reflect:!0})],nq.prototype,"pill",2),tS([eJ({type:Boolean,reflect:!0})],nq.prototype,"pulse",2),nq.define("sl-badge");var nj=tV(te||(te=(t=>t)`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`));let nW=t=>t,nK,nG,nY;var nX=class t extends e4{static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:t}=this;this.countdownAnimation=t.animate([{width:"100%"},{width:"0"}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await iB(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=iM(this,"alert.show",{dir:this.localize.dir()});await iN(this.base,t,e),this.emit("sl-after-show")}else{lr(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await iB(this.base);let{keyframes:t,options:e}=iM(this,"alert.hide",{dir:this.localize.dir()});await iN(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,oG(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oG(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()},{once:!0})})}render(){return eg(nY||(nY=nW`
      <div
        part="base"
        class=${0}
        role="alert"
        aria-hidden=${0}
        @mouseenter=${0}
        @mouseleave=${0}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${0}

        <div role="timer" class="alert__timer">${0}</div>

        ${0}
      </div>
    `),id({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant}),this.open?"false":"true",this.pauseAutoHide,this.resumeAutoHide,this.closable?eg(nK||(nK=nW`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${0}
                @click=${0}
              ></sl-icon-button>
            `),this.localize.term("close"),this.handleCloseClick):"",this.remainingTime,this.countdown?eg(nG||(nG=nW`
              <div
                class=${0}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `),id({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})):"")}constructor(){super(...arguments),this.hasSlotController=new eV(this,"icon","suffix"),this.localize=new iA(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}};nX.styles=[eQ,nj],nX.dependencies={"sl-icon-button":rm},tS([e6('[part~="base"]')],nX.prototype,"base",2),tS([e6(".alert__countdown-elapsed")],nX.prototype,"countdownElement",2),tS([eJ({type:Boolean,reflect:!0})],nX.prototype,"open",2),tS([eJ({type:Boolean,reflect:!0})],nX.prototype,"closable",2),tS([eJ({reflect:!0})],nX.prototype,"variant",2),tS([eJ({type:Number})],nX.prototype,"duration",2),tS([eJ({type:String,reflect:!0})],nX.prototype,"countdown",2),tS([e2()],nX.prototype,"remainingTime",2),tS([eX("open",{waitUntilFirstUpdate:!0})],nX.prototype,"handleOpenChange",1),tS([eX("duration")],nX.prototype,"handleDurationChange",1),iP("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),iP("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),nX.define("sl-alert");var nQ={};tr(nQ,"easings",function(){return h5});var nZ={};tr(nZ,"bounce",function(){return nJ});let nJ=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var n0={};tr(n0,"flash",function(){return n1});let n1=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var n2={};tr(n2,"headShake",function(){return n5});let n5=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var n3={};tr(n3,"heartBeat",function(){return n6});let n6=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var n4={};tr(n4,"jello",function(){return n7});let n7=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var n8={};tr(n8,"pulse",function(){return n9});let n9=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var dt={};tr(dt,"rubberBand",function(){return de});let de=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var di={};tr(di,"shake",function(){return dr});let dr=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var da={};tr(da,"shakeX",function(){return ds});let ds=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var dl={};tr(dl,"shakeY",function(){return dn});let dn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var dd={};tr(dd,"swing",function(){return dc});let dc=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var dh={};tr(dh,"tada",function(){return du});let du=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var dp={};tr(dp,"wobble",function(){return df});let df=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var dm={};tr(dm,"backInDown",function(){return dg});let dg=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var db={};tr(db,"backInLeft",function(){return dv});let dv=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var dy={};tr(dy,"backInRight",function(){return dw});let dw=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var d_={};tr(d_,"backInUp",function(){return dx});let dx=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var dk={};tr(dk,"backOutDown",function(){return dC});let dC=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var d$={};tr(d$,"backOutLeft",function(){return dS});let dS=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var dz={};tr(dz,"backOutRight",function(){return dA});let dA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var dE={};tr(dE,"backOutUp",function(){return dT});let dT=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var dD={};tr(dD,"bounceIn",function(){return dI});let dI=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var dL={};tr(dL,"bounceInDown",function(){return dO});let dO=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var dP={};tr(dP,"bounceInLeft",function(){return dM});let dM=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var dN={};tr(dN,"bounceInRight",function(){return dR});let dR=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var dF={};tr(dF,"bounceInUp",function(){return dB});let dB=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var dU={};tr(dU,"bounceOut",function(){return dH});let dH=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var dV={};tr(dV,"bounceOutDown",function(){return dq});let dq=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var dj={};tr(dj,"bounceOutLeft",function(){return dW});let dW=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var dK={};tr(dK,"bounceOutRight",function(){return dG});let dG=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var dY={};tr(dY,"bounceOutUp",function(){return dX});let dX=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var dQ={};tr(dQ,"fadeIn",function(){return dZ});let dZ=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var dJ={};tr(dJ,"fadeInBottomLeft",function(){return d0});let d0=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var d1={};tr(d1,"fadeInBottomRight",function(){return d2});let d2=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var d5={};tr(d5,"fadeInDown",function(){return d3});let d3=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var d6={};tr(d6,"fadeInDownBig",function(){return d4});let d4=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var d7={};tr(d7,"fadeInLeft",function(){return d8});let d8=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var d9={};tr(d9,"fadeInLeftBig",function(){return ct});let ct=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ce={};tr(ce,"fadeInRight",function(){return ci});let ci=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var co={};tr(co,"fadeInRightBig",function(){return cr});let cr=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ca={};tr(ca,"fadeInTopLeft",function(){return cs});let cs=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var cl={};tr(cl,"fadeInTopRight",function(){return cn});let cn=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var cd={};tr(cd,"fadeInUp",function(){return cc});let cc=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ch={};tr(ch,"fadeInUpBig",function(){return cu});let cu=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var cp={};tr(cp,"fadeOut",function(){return cf});let cf=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var cm={};tr(cm,"fadeOutBottomLeft",function(){return cg});let cg=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var cb={};tr(cb,"fadeOutBottomRight",function(){return cv});let cv=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var cy={};tr(cy,"fadeOutDown",function(){return cw});let cw=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var c_={};tr(c_,"fadeOutDownBig",function(){return cx});let cx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var ck={};tr(ck,"fadeOutLeft",function(){return cC});let cC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var c$={};tr(c$,"fadeOutLeftBig",function(){return cS});let cS=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var cz={};tr(cz,"fadeOutRight",function(){return cA});let cA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var cE={};tr(cE,"fadeOutRightBig",function(){return cT});let cT=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var cD={};tr(cD,"fadeOutTopLeft",function(){return cI});let cI=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var cL={};tr(cL,"fadeOutTopRight",function(){return cO});let cO=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var cP={};tr(cP,"fadeOutUp",function(){return cM});let cM=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var cN={};tr(cN,"fadeOutUpBig",function(){return cR});let cR=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var cF={};tr(cF,"flip",function(){return cB});let cB=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var cU={};tr(cU,"flipInX",function(){return cH});let cH=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var cV={};tr(cV,"flipInY",function(){return cq});let cq=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var cj={};tr(cj,"flipOutX",function(){return cW});let cW=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var cK={};tr(cK,"flipOutY",function(){return cG});let cG=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var cY={};tr(cY,"lightSpeedInLeft",function(){return cX});let cX=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var cQ={};tr(cQ,"lightSpeedInRight",function(){return cZ});let cZ=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var cJ={};tr(cJ,"lightSpeedOutLeft",function(){return c0});let c0=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var c1={};tr(c1,"lightSpeedOutRight",function(){return c2});let c2=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var c5={};tr(c5,"rotateIn",function(){return c3});let c3=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var c6={};tr(c6,"rotateInDownLeft",function(){return c4});let c4=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var c7={};tr(c7,"rotateInDownRight",function(){return c8});let c8=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var c9={};tr(c9,"rotateInUpLeft",function(){return ht});let ht=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var he={};tr(he,"rotateInUpRight",function(){return hi});let hi=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var ho={};tr(ho,"rotateOut",function(){return hr});let hr=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var ha={};tr(ha,"rotateOutDownLeft",function(){return hs});let hs=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var hl={};tr(hl,"rotateOutDownRight",function(){return hn});let hn=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var hd={};tr(hd,"rotateOutUpLeft",function(){return hc});let hc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var hh={};tr(hh,"rotateOutUpRight",function(){return hu});let hu=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var hp={};tr(hp,"slideInDown",function(){return hf});let hf=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var hm={};tr(hm,"slideInLeft",function(){return hg});let hg=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var hb={};tr(hb,"slideInRight",function(){return hv});let hv=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var hy={};tr(hy,"slideInUp",function(){return hw});let hw=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var h_={};tr(h_,"slideOutDown",function(){return hx});let hx=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var hk={};tr(hk,"slideOutLeft",function(){return hC});let hC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var h$={};tr(h$,"slideOutRight",function(){return hS});let hS=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var hz={};tr(hz,"slideOutUp",function(){return hA});let hA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var hE={};tr(hE,"hinge",function(){return hT});let hT=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var hD={};tr(hD,"jackInTheBox",function(){return hI});let hI=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var hL={};tr(hL,"rollIn",function(){return hO});let hO=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var hP={};tr(hP,"rollOut",function(){return hM});let hM=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var hN={};tr(hN,"zoomIn",function(){return hR});let hR=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var hF={};tr(hF,"zoomInDown",function(){return hB});let hB=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var hU={};tr(hU,"zoomInLeft",function(){return hH});let hH=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var hV={};tr(hV,"zoomInRight",function(){return hq});let hq=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var hj={};tr(hj,"zoomInUp",function(){return hW});let hW=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var hK={};tr(hK,"zoomOut",function(){return hG});let hG=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var hY={};tr(hY,"zoomOutDown",function(){return hX});let hX=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var hQ={};tr(hQ,"zoomOutLeft",function(){return hZ});let hZ=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var hJ={};tr(hJ,"zoomOutRight",function(){return h0});let h0=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var h1={};tr(h1,"zoomOutUp",function(){return h2});let h2=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],h5={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};to(nQ,nZ),to(nQ,n0),to(nQ,n2),to(nQ,n3),to(nQ,n4),to(nQ,n8),to(nQ,dt),to(nQ,di),to(nQ,da),to(nQ,dl),to(nQ,dd),to(nQ,dh),to(nQ,dp),to(nQ,dm),to(nQ,db),to(nQ,dy),to(nQ,d_),to(nQ,dk),to(nQ,d$),to(nQ,dz),to(nQ,dE),to(nQ,dD),to(nQ,dL),to(nQ,dP),to(nQ,dN),to(nQ,dF),to(nQ,dU),to(nQ,dV),to(nQ,dj),to(nQ,dK),to(nQ,dY),to(nQ,dQ),to(nQ,dJ),to(nQ,d1),to(nQ,d5),to(nQ,d6),to(nQ,d7),to(nQ,d9),to(nQ,ce),to(nQ,co),to(nQ,ca),to(nQ,cl),to(nQ,cd),to(nQ,ch),to(nQ,cp),to(nQ,cm),to(nQ,cb),to(nQ,cy),to(nQ,c_),to(nQ,ck),to(nQ,c$),to(nQ,cz),to(nQ,cE),to(nQ,cD),to(nQ,cL),to(nQ,cP),to(nQ,cN),to(nQ,cF),to(nQ,cU),to(nQ,cV),to(nQ,cj),to(nQ,cK),to(nQ,cY),to(nQ,cQ),to(nQ,cJ),to(nQ,c1),to(nQ,c5),to(nQ,c6),to(nQ,c7),to(nQ,c9),to(nQ,he),to(nQ,ho),to(nQ,ha),to(nQ,hl),to(nQ,hd),to(nQ,hh),to(nQ,hp),to(nQ,hm),to(nQ,hb),to(nQ,hy),to(nQ,h_),to(nQ,hk),to(nQ,h$),to(nQ,hz),to(nQ,hE),to(nQ,hD),to(nQ,hL),to(nQ,hP),to(nQ,hN),to(nQ,hF),to(nQ,hU),to(nQ,hV),to(nQ,hj),to(nQ,hK),to(nQ,hY),to(nQ,hQ),to(nQ,hJ),to(nQ,h1);var h3=tV(ti||(ti=(t=>t)`
  :host {
    display: contents;
  }
`));let h6=t=>t,h4;var h7=class extends e4{get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;let i=null!=(t=nQ.easings[this.easing])?t:this.easing,o=null!=(e=this.keyframes)?e:nQ[this.name],r=(await this.defaultSlot).assignedElements()[0];return!!r&&!!o&&(this.destroyAnimation(),this.animation=r.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:i,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return eg(h4||(h4=h6` <slot @slotchange=${0}></slot> `),this.handleSlotChange)}constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}};h7.styles=[eQ,h3],tS([(ts="slot",(t,e)=>e3(t,e,{async get(){var t,e;return await this.updateComplete,null!=(e=null==(t=this.renderRoot)?void 0:t.querySelector(ts))?e:null}}))],h7.prototype,"defaultSlot",2),tS([eJ()],h7.prototype,"name",2),tS([eJ({type:Boolean,reflect:!0})],h7.prototype,"play",2),tS([eJ({type:Number})],h7.prototype,"delay",2),tS([eJ()],h7.prototype,"direction",2),tS([eJ({type:Number})],h7.prototype,"duration",2),tS([eJ()],h7.prototype,"easing",2),tS([eJ({attribute:"end-delay",type:Number})],h7.prototype,"endDelay",2),tS([eJ()],h7.prototype,"fill",2),tS([eJ({type:Number})],h7.prototype,"iterations",2),tS([eJ({attribute:"iteration-start",type:Number})],h7.prototype,"iterationStart",2),tS([eJ({attribute:!1})],h7.prototype,"keyframes",2),tS([eJ({attribute:"playback-rate",type:Number})],h7.prototype,"playbackRate",2),tS([eX(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],h7.prototype,"handleAnimationChange",1),tS([eX("play")],h7.prototype,"handlePlayChange",1),tS([eX("playbackRate")],h7.prototype,"handlePlaybackRateChange",1),h7.define("sl-animation");let h8=t=>t,h9;var ut={show(t,e="primary",i=3e3){let o=document.getElementById("toast-container");o||((o=document.createElement("div")).id="toast-container",document.body.appendChild(o));let r=document.createElement("div");r.className="toast-wrapper",eP(eg(h9||(h9=h8`
      <sl-alert
        variant="${0}"
        duration="${0}"
        closable
        class="toast"
      >
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        ${0}
      </sl-alert>
    `),e,i,t),r),o.appendChild(r),setTimeout(()=>{r.remove()},i+300)}},ue={currentUser:null,async signIn({email:t,password:e}){try{let i=await fetch(`${uQ.apiBase}/auth/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})});if(!i.ok){let t=await i.json();throw Error(t.message||"Sign-in failed")}let{accessToken:o,user:r}=await i.json();localStorage.setItem("token",o),this.currentUser=r,ut.show(`Welcome back, ${r.firstName}!`);let a=r.isFirstLogin?1===r.accessLevel?"/guest-guide":"/host-guide":1===r.accessLevel?"/guest-home":"/host-home";uX(a)}catch(t){throw ut.show(t.message||"Failed to sign in. Please check your connection."),console.error("[Auth] signIn failed:",t),t}},async signUp({firstName:t,lastName:e,email:i,password:o,accessLevel:r}){try{let a=await fetch(`${uQ.apiBase}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t,lastName:e,email:i,password:o,accessLevel:r})});if(!a.ok){let t=await a.json();throw Error(t.message||"Sign-up failed")}ut.show("Account created! Please sign in."),uX("/signin")}catch(t){throw ut.show(t.message||"Failed to sign up. Please check your connection."),console.error("[Auth] signUp failed:",t),t}},async check(){let t=localStorage.getItem("token");if(!t)return this.currentUser=null,!1;try{let e=await fetch(`${uQ.apiBase}/auth/validate`,{headers:{Authorization:`Bearer ${t}`}});if(!e.ok)throw Error("Invalid token");return this.currentUser=(await e.json()).user,!0}catch(t){return console.warn("[Auth] Session check failed:",t.message),localStorage.removeItem("token"),this.currentUser=null,!1}},signOut(){localStorage.removeItem("token"),this.currentUser=null,ut.show("Signed out successfully"),uX("/signin")}};let ui=t=>t,uo;var ur=new class{init(){document.title="Sign In - Chinwag",this.render()}async submitHandler(t){if(t.preventDefault(),this.loading)return;this.loading=!0,this.render();let e=t.target,i=e.querySelector('[name="email"]').value.trim(),o=e.querySelector('[name="password"]').value;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){ut.show("Please enter a valid email address.","warning"),this.loading=!1,this.render();return}try{await ue.signIn({email:i,password:o}),this.loading=!1}catch(t){this.loading=!1,t.message.includes("User doesn't exist")?(ut.show("No account found. Redirecting to Sign Up...","warning"),setTimeout(()=>uX("/signup"),2e3)):t.message.includes("Password or email is incorrect")?ut.show("Incorrect email or password.","warning"):ut.show(`Login failed: ${t.message}`,"danger"),this.render()}}render(){eP(eg(uo||(uo=ui`
      <div class="page-content page-centered" role="main">
        <h1>Sign In</h1>
        <div class="form-wrapper" aria-label="Sign In Form">
          <form @submit=${0}>
            <sl-input
              name="email"
              type="email"
              label="Email"
              required
              autocomplete="email"
              aria-required="true"
            ></sl-input>
            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              autocomplete="current-password"
              aria-required="true"
            ></sl-input>
            <sl-button
              type="submit"
              variant="primary"
              ?disabled=${0}
              ?loading=${0}
              aria-label="Submit Sign In"
            >
              Sign In
            </sl-button>
          </form>
          <p>
            Don't have an account?
            <a
              href="/signup"
              @click=${0}
              aria-label="Go to Sign Up"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    `),this.submitHandler.bind(this),this.loading,this.loading,t=>{t.preventDefault(),uX("/signup")}),uQ.rootEl)}constructor(){this.loading=!1}},ua={};ua=function(){"use strict";let{entries:t,setPrototypeOf:e,isFrozen:i,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object,{freeze:a,seal:s,create:l}=Object,{apply:n,construct:d}="undefined"!=typeof Reflect&&Reflect;a||(a=function(t){return t}),s||(s=function(t){return t}),n||(n=function(t,e,i){return t.apply(e,i)}),d||(d=function(t,e){return new t(...e)});let c=C(Array.prototype.forEach),h=C(Array.prototype.lastIndexOf),u=C(Array.prototype.pop),p=C(Array.prototype.push),f=C(Array.prototype.splice),m=C(String.prototype.toLowerCase),g=C(String.prototype.toString),b=C(String.prototype.match),v=C(String.prototype.replace),y=C(String.prototype.indexOf),w=C(String.prototype.trim),_=C(Object.prototype.hasOwnProperty),x=C(RegExp.prototype.test),k=(G=TypeError,function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return d(G,e)});function C(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];return n(t,e,o)}}function $(t,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m;e&&e(t,null);let a=o.length;for(;a--;){let e=o[a];if("string"==typeof e){let t=r(e);t!==e&&(i(o)||(o[a]=t),e=t)}t[e]=!0}return t}function S(e){let i=l(null);for(let[o,r]of t(e))_(e,o)&&(Array.isArray(r)?i[o]=function(t){for(let e=0;e<t.length;e++)_(t,e)||(t[e]=null);return t}(r):r&&"object"==typeof r&&r.constructor===Object?i[o]=S(r):i[o]=r);return i}function z(t,e){for(;null!==t;){let i=r(t,e);if(i){if(i.get)return C(i.get);if("function"==typeof i.value)return C(i.value)}t=o(t)}return function(){return null}}let A=a(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),E=a(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),T=a(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=a(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),I=a(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),L=a(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),O=a(["#text"]),P=a(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),M=a(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),N=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),R=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),F=s(/\{\{[\w\W]*|[\w\W]*\}\}/gm),B=s(/<%[\w\W]*|[\w\W]*%>/gm),U=s(/\$\{[\w\W]*/gm),H=s(/^data-[\-\w.\u00B7-\uFFFF]+$/),V=s(/^aria-[\-\w]+$/),q=s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),j=s(/^(?:\w+script|data):/i),W=s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),K=s(/^html$/i);var G,Y=Object.freeze({__proto__:null,ARIA_ATTR:V,ATTR_WHITESPACE:W,CUSTOM_ELEMENT:s(/^[a-z][.\w]*(-[.\w]+)+$/i),DATA_ATTR:H,DOCTYPE_NAME:K,ERB_EXPR:B,IS_ALLOWED_URI:q,IS_SCRIPT_OR_DATA:j,MUSTACHE_EXPR:F,TMPLIT_EXPR:U});let X={element:1,text:3,progressingInstruction:7,comment:8,document:9},Q=function(t,e){if("object"!=typeof t||"function"!=typeof t.createPolicy)return null;let i=null,o="data-tt-policy-suffix";e&&e.hasAttribute(o)&&(i=e.getAttribute(o));let r="dompurify"+(i?"#"+i:"");try{return t.createPolicy(r,{createHTML:t=>t,createScriptURL:t=>t})}catch(t){return console.warn("TrustedTypes policy "+r+" could not be created."),null}},Z=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};return function e(){let i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,r=t=>e(t);if(r.version="3.2.6",r.removed=[],!o||!o.document||o.document.nodeType!==X.document||!o.Element)return r.isSupported=!1,r;let{document:s}=o,n=s,d=n.currentScript,{DocumentFragment:C,HTMLTemplateElement:F,Node:B,Element:U,NodeFilter:H,NamedNodeMap:V=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement:j,DOMParser:W,trustedTypes:G}=o,J=U.prototype,tt=z(J,"cloneNode"),te=z(J,"remove"),ti=z(J,"nextSibling"),to=z(J,"childNodes"),tr=z(J,"parentNode");if("function"==typeof F){let t=s.createElement("template");t.content&&t.content.ownerDocument&&(s=t.content.ownerDocument)}let ta="",{implementation:ts,createNodeIterator:tl,createDocumentFragment:tn,getElementsByTagName:td}=s,{importNode:tc}=n,th=Z();r.isSupported="function"==typeof t&&"function"==typeof tr&&ts&&void 0!==ts.createHTMLDocument;let{MUSTACHE_EXPR:tu,ERB_EXPR:tp,TMPLIT_EXPR:tf,DATA_ATTR:tm,ARIA_ATTR:tg,IS_SCRIPT_OR_DATA:tb,ATTR_WHITESPACE:tv,CUSTOM_ELEMENT:ty}=Y,{IS_ALLOWED_URI:tw}=Y,t_=null,tx=$({},[...A,...E,...T,...I,...O]),tk=null,tC=$({},[...P,...M,...N,...R]),t$=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),tS=null,tz=null,tA=!0,tE=!0,tT=!1,tD=!0,tI=!1,tL=!0,tO=!1,tP=!1,tM=!1,tN=!1,tR=!1,tF=!1,tB=!0,tU=!1,tH=!0,tV=!1,tq={},tj=null,tW=$({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tK=null,tG=$({},["audio","video","img","source","image","track"]),tY=null,tX=$({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tQ="http://www.w3.org/1998/Math/MathML",tZ="http://www.w3.org/2000/svg",tJ="http://www.w3.org/1999/xhtml",t0=tJ,t1=!1,t2=null,t5=$({},[tQ,tZ,tJ],g),t3=$({},["mi","mo","mn","ms","mtext"]),t6=$({},["annotation-xml"]),t4=$({},["title","style","font","a","script"]),t7=null,t8=["application/xhtml+xml","text/html"],t9=null,et=null,ee=s.createElement("form"),ei=function(t){return t instanceof RegExp||t instanceof Function},eo=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!et||et!==t){if(t&&"object"==typeof t||(t={}),t=S(t),t9="application/xhtml+xml"===(t7=-1===t8.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE)?g:m,t_=_(t,"ALLOWED_TAGS")?$({},t.ALLOWED_TAGS,t9):tx,tk=_(t,"ALLOWED_ATTR")?$({},t.ALLOWED_ATTR,t9):tC,t2=_(t,"ALLOWED_NAMESPACES")?$({},t.ALLOWED_NAMESPACES,g):t5,tY=_(t,"ADD_URI_SAFE_ATTR")?$(S(tX),t.ADD_URI_SAFE_ATTR,t9):tX,tK=_(t,"ADD_DATA_URI_TAGS")?$(S(tG),t.ADD_DATA_URI_TAGS,t9):tG,tj=_(t,"FORBID_CONTENTS")?$({},t.FORBID_CONTENTS,t9):tW,tS=_(t,"FORBID_TAGS")?$({},t.FORBID_TAGS,t9):S({}),tz=_(t,"FORBID_ATTR")?$({},t.FORBID_ATTR,t9):S({}),tq=!!_(t,"USE_PROFILES")&&t.USE_PROFILES,tA=!1!==t.ALLOW_ARIA_ATTR,tE=!1!==t.ALLOW_DATA_ATTR,tT=t.ALLOW_UNKNOWN_PROTOCOLS||!1,tD=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,tI=t.SAFE_FOR_TEMPLATES||!1,tL=!1!==t.SAFE_FOR_XML,tO=t.WHOLE_DOCUMENT||!1,tN=t.RETURN_DOM||!1,tR=t.RETURN_DOM_FRAGMENT||!1,tF=t.RETURN_TRUSTED_TYPE||!1,tM=t.FORCE_BODY||!1,tB=!1!==t.SANITIZE_DOM,tU=t.SANITIZE_NAMED_PROPS||!1,tH=!1!==t.KEEP_CONTENT,tV=t.IN_PLACE||!1,tw=t.ALLOWED_URI_REGEXP||q,t0=t.NAMESPACE||tJ,t3=t.MATHML_TEXT_INTEGRATION_POINTS||t3,t6=t.HTML_INTEGRATION_POINTS||t6,t$=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ei(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(t$.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ei(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(t$.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(t$.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),tI&&(tE=!1),tR&&(tN=!0),tq&&(t_=$({},O),tk=[],!0===tq.html&&($(t_,A),$(tk,P)),!0===tq.svg&&($(t_,E),$(tk,M),$(tk,R)),!0===tq.svgFilters&&($(t_,T),$(tk,M),$(tk,R)),!0===tq.mathMl&&($(t_,I),$(tk,N),$(tk,R))),t.ADD_TAGS&&(t_===tx&&(t_=S(t_)),$(t_,t.ADD_TAGS,t9)),t.ADD_ATTR&&(tk===tC&&(tk=S(tk)),$(tk,t.ADD_ATTR,t9)),t.ADD_URI_SAFE_ATTR&&$(tY,t.ADD_URI_SAFE_ATTR,t9),t.FORBID_CONTENTS&&(tj===tW&&(tj=S(tj)),$(tj,t.FORBID_CONTENTS,t9)),tH&&(t_["#text"]=!0),tO&&$(t_,["html","head","body"]),t_.table&&($(t_,["tbody"]),delete tS.tbody),t.TRUSTED_TYPES_POLICY){if("function"!=typeof t.TRUSTED_TYPES_POLICY.createHTML)throw k('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof t.TRUSTED_TYPES_POLICY.createScriptURL)throw k('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ta=(i=t.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===i&&(i=Q(G,d)),null!==i&&"string"==typeof ta&&(ta=i.createHTML(""));a&&a(t),et=t}},er=$({},[...E,...T,...D]),ea=$({},[...I,...L]),es=function(t){let e=tr(t);e&&e.tagName||(e={namespaceURI:t0,tagName:"template"});let i=m(t.tagName),o=m(e.tagName);return!!t2[t.namespaceURI]&&(t.namespaceURI===tZ?e.namespaceURI===tJ?"svg"===i:e.namespaceURI===tQ?"svg"===i&&("annotation-xml"===o||t3[o]):!!er[i]:t.namespaceURI===tQ?e.namespaceURI===tJ?"math"===i:e.namespaceURI===tZ?"math"===i&&t6[o]:!!ea[i]:t.namespaceURI===tJ?(e.namespaceURI!==tZ||!!t6[o])&&(e.namespaceURI!==tQ||!!t3[o])&&!ea[i]&&(t4[i]||!er[i]):"application/xhtml+xml"===t7&&!!t2[t.namespaceURI])},el=function(t){p(r.removed,{element:t});try{tr(t).removeChild(t)}catch(e){te(t)}},en=function(t,e){try{p(r.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){p(r.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t)if(tN||tR)try{el(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},ed=function(t){let e=null,o=null;if(tM)t="<remove></remove>"+t;else{let e=b(t,/^[\r\n\t ]+/);o=e&&e[0]}"application/xhtml+xml"===t7&&t0===tJ&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");let r=i?i.createHTML(t):t;if(t0===tJ)try{e=new W().parseFromString(r,t7)}catch(t){}if(!e||!e.documentElement){e=ts.createDocument(t0,"template",null);try{e.documentElement.innerHTML=t1?ta:r}catch(t){}}let a=e.body||e.documentElement;return(t&&o&&a.insertBefore(s.createTextNode(o),a.childNodes[0]||null),t0===tJ)?td.call(e,tO?"html":"body")[0]:tO?e.documentElement:a},ec=function(t){return tl.call(t.ownerDocument||t,t,H.SHOW_ELEMENT|H.SHOW_COMMENT|H.SHOW_TEXT|H.SHOW_PROCESSING_INSTRUCTION|H.SHOW_CDATA_SECTION,null)},eh=function(t){return t instanceof j&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof V)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore||"function"!=typeof t.hasChildNodes)},eu=function(t){return"function"==typeof B&&t instanceof B};function ep(t,e,i){c(t,t=>{t.call(r,e,i,et)})}let ef=function(t){let e=null;if(ep(th.beforeSanitizeElements,t,null),eh(t))return el(t),!0;let i=t9(t.nodeName);if(ep(th.uponSanitizeElement,t,{tagName:i,allowedTags:t_}),tL&&t.hasChildNodes()&&!eu(t.firstElementChild)&&x(/<[/\w!]/g,t.innerHTML)&&x(/<[/\w!]/g,t.textContent)||t.nodeType===X.progressingInstruction||tL&&t.nodeType===X.comment&&x(/<[/\w]/g,t.data))return el(t),!0;if(!t_[i]||tS[i]){if(!tS[i]&&eg(i)&&(t$.tagNameCheck instanceof RegExp&&x(t$.tagNameCheck,i)||t$.tagNameCheck instanceof Function&&t$.tagNameCheck(i)))return!1;if(tH&&!tj[i]){let e=tr(t)||t.parentNode,i=to(t)||t.childNodes;if(i&&e){let o=i.length;for(let r=o-1;r>=0;--r){let o=tt(i[r],!0);o.__removalCount=(t.__removalCount||0)+1,e.insertBefore(o,ti(t))}}}return el(t),!0}return t instanceof U&&!es(t)||("noscript"===i||"noembed"===i||"noframes"===i)&&x(/<\/no(script|embed|frames)/i,t.innerHTML)?(el(t),!0):(tI&&t.nodeType===X.text&&(e=t.textContent,c([tu,tp,tf],t=>{e=v(e,t," ")}),t.textContent!==e&&(p(r.removed,{element:t.cloneNode()}),t.textContent=e)),ep(th.afterSanitizeElements,t,null),!1)},em=function(t,e,i){if(tB&&("id"===e||"name"===e)&&(i in s||i in ee))return!1;if(tE&&!tz[e]&&x(tm,e));else if(tA&&x(tg,e));else if(!tk[e]||tz[e]){if(!(eg(t)&&(t$.tagNameCheck instanceof RegExp&&x(t$.tagNameCheck,t)||t$.tagNameCheck instanceof Function&&t$.tagNameCheck(t))&&(t$.attributeNameCheck instanceof RegExp&&x(t$.attributeNameCheck,e)||t$.attributeNameCheck instanceof Function&&t$.attributeNameCheck(e))||"is"===e&&t$.allowCustomizedBuiltInElements&&(t$.tagNameCheck instanceof RegExp&&x(t$.tagNameCheck,i)||t$.tagNameCheck instanceof Function&&t$.tagNameCheck(i))))return!1}else if(tY[e]);else if(x(tw,v(i,tv,"")));else if(("src"===e||"xlink:href"===e||"href"===e)&&"script"!==t&&0===y(i,"data:")&&tK[t]);else if(tT&&!x(tb,v(i,tv,"")));else if(i)return!1;return!0},eg=function(t){return"annotation-xml"!==t&&b(t,ty)},eb=function(t){ep(th.beforeSanitizeAttributes,t,null);let{attributes:e}=t;if(!e||eh(t))return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:tk,forceKeepAttr:void 0},a=e.length;for(;a--;){let{name:s,namespaceURI:l,value:n}=e[a],d=t9(s),h="value"===s?n:w(n);if(o.attrName=d,o.attrValue=h,o.keepAttr=!0,o.forceKeepAttr=void 0,ep(th.uponSanitizeAttribute,t,o),h=o.attrValue,tU&&("id"===d||"name"===d)&&(en(s,t),h="user-content-"+h),tL&&x(/((--!?|])>)|<\/(style|title)/i,h)){en(s,t);continue}if(o.forceKeepAttr)continue;if(!o.keepAttr||!tD&&x(/\/>/i,h)){en(s,t);continue}tI&&c([tu,tp,tf],t=>{h=v(h,t," ")});let p=t9(t.nodeName);if(!em(p,d,h)){en(s,t);continue}if(i&&"object"==typeof G&&"function"==typeof G.getAttributeType)if(l);else switch(G.getAttributeType(p,d)){case"TrustedHTML":h=i.createHTML(h);break;case"TrustedScriptURL":h=i.createScriptURL(h)}if(h!==n)try{l?t.setAttributeNS(l,s,h):t.setAttribute(s,h),eh(t)?el(t):u(r.removed)}catch(e){en(s,t)}}ep(th.afterSanitizeAttributes,t,null)},ev=function t(e){let i=null,o=ec(e);for(ep(th.beforeSanitizeShadowDOM,e,null);i=o.nextNode();)ep(th.uponSanitizeShadowNode,i,null),ef(i),eb(i),i.content instanceof C&&t(i.content);ep(th.afterSanitizeShadowDOM,e,null)};return r.sanitize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,a=null,s=null,l=null;if((t1=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!eu(t))if("function"==typeof t.toString){if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}else throw k("toString is not a function");if(!r.isSupported)return t;if(tP||eo(e),r.removed=[],"string"==typeof t&&(tV=!1),tV){if(t.nodeName){let e=t9(t.nodeName);if(!t_[e]||tS[e])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof B)(a=(o=ed("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType===X.element&&"BODY"===a.nodeName||"HTML"===a.nodeName?o=a:o.appendChild(a);else{if(!tN&&!tI&&!tO&&-1===t.indexOf("<"))return i&&tF?i.createHTML(t):t;if(!(o=ed(t)))return tN?null:tF?ta:""}o&&tM&&el(o.firstChild);let d=ec(tV?t:o);for(;s=d.nextNode();)ef(s),eb(s),s.content instanceof C&&ev(s.content);if(tV)return t;if(tN){if(tR)for(l=tn.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return(tk.shadowroot||tk.shadowrootmode)&&(l=tc.call(n,l,!0)),l}let h=tO?o.outerHTML:o.innerHTML;return tO&&t_["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&x(K,o.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+h),tI&&c([tu,tp,tf],t=>{h=v(h,t," ")}),i&&tF?i.createHTML(h):h},r.setConfig=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};eo(t),tP=!0},r.clearConfig=function(){et=null,tP=!1},r.isValidAttribute=function(t,e,i){return et||eo({}),em(t9(t),t9(e),i)},r.addHook=function(t,e){"function"==typeof e&&p(th[t],e)},r.removeHook=function(t,e){if(void 0!==e){let i=h(th[t],e);return -1===i?void 0:f(th[t],i,1)[0]}return u(th[t])},r.removeHooks=function(t){th[t]=[]},r.removeAllHooks=function(){th=Z()},r}()}();let us=t=>t,ul;var un=new class{init(){document.title="Sign Up - Chinwag",this.render()}async submitHandler(t){if(t.preventDefault(),this.loading)return;this.loading=!0,this.passwordMismatch=!1;let e=t.target,i=ta(ua).sanitize(e.querySelector('[name="firstName"]').value.trim()),o=ta(ua).sanitize(e.querySelector('[name="lastName"]').value.trim()),r=ta(ua).sanitize(e.querySelector('[name="email"]').value.trim()),a=e.querySelector('[name="password"]').value,s=e.querySelector('[name="confirmPassword"]').value,l=parseInt(e.querySelector('[name="accessLevel"]').value);if(a!==s){this.passwordMismatch=!0,this.loading=!1,this.render(),ut.show("Passwords do not match");return}try{await ue.signUp({firstName:i,lastName:o,email:r,password:a,accessLevel:l}),this.loading=!1,this.render()}catch(t){this.loading=!1,this.render()}}render(){eP(eg(ul||(ul=us`
      <div class="page-content page-centered" role="main">
        <h1>Create Your Account</h1>
        <div class="form-wrapper" aria-label="Sign Up Form">
          <form @submit=${0}>
            <sl-input
              name="firstName"
              label="First Name"
              required
              aria-required="true"
              autocomplete="given-name"
            ></sl-input>
            <sl-input
              name="lastName"
              label="Last Name"
              required
              aria-required="true"
              autocomplete="family-name"
            ></sl-input>
            <sl-input
              name="email"
              type="email"
              label="Email"
              required
              aria-required="true"
              autocomplete="email"
            ></sl-input>
            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              aria-required="true"
              autocomplete="new-password"
              help-text=${0}
              ?invalid=${0}
            ></sl-input>
            <sl-input
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              required
              aria-required="true"
              autocomplete="new-password"
              help-text=${0}
              ?invalid=${0}
            ></sl-input>
            <sl-radio-group
              name="accessLevel"
              label="Register as"
              required
              aria-required="true"
              value="1"
            >
              <sl-radio value="1">Guest</sl-radio>
              <sl-radio value="2">Host</sl-radio>
            </sl-radio-group>
            <sl-button
              type="submit"
              variant="primary"
              ?disabled=${0}
              ?loading=${0}
            >
              Sign Up
            </sl-button>
          </form>
          <p>
            Already have an account?
            <a
              href="/signin"
              @click=${0}
              aria-label="Go to Sign In"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    `),this.submitHandler.bind(this),this.passwordMismatch?"Passwords do not match":"",this.passwordMismatch,this.passwordMismatch?"Passwords do not match":"",this.passwordMismatch,this.loading,this.loading,t=>{t.preventDefault(),uX("/signin")}),uQ.rootEl)}constructor(){this.loading=!1,this.passwordMismatch=!1}};let ud=t=>t,uc;var uh=new class{async init(){if(document.title="Welcome to Chinwag - Guest",!ue.currentUser||1!==ue.currentUser.accessLevel)return void uX("/signin");this.render()}async handleGetStarted(){try{let t=localStorage.getItem("token");if(!(await fetch(`${uQ.apiBase}/users/${ue.currentUser.id}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({isFirstLogin:!1})})).ok)throw Error("Failed to update user");ue.currentUser.isFirstLogin=!1,uX("/guest-home")}catch(t){ut.show("Error getting started"),console.error(t)}}render(){eP(eg(uc||(uc=ud`
      <div class="guide-page">
        <div
          class="guide-header"
          style="background-image: url('/images/guide-header.png')"
        ></div>
        <div class="guide-content">
          <div class="guide-text-block">
            <h1 class="guide-title">Welcome!</h1>
            <p class="guide-subtitle">
              ${0}
            </p>
            <h2 class="guide-heading">What is Chinwag?</h2>
            <p class="guide-text">
              ${0}
            </p>
          </div>
          <div class="guide-features">
            <sl-card class="guide-card">
              <h4>🍽️ Meet new people</h4>
              <p>No planning, no pressure — just show up.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>🗓️ Spontaneous plans</h4>
              <p>Join an event tonight or this weekend.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>🧭 The unexpected</h4>
              <p>Discover great venues and better convo.</p>
            </sl-card>
          </div>
          <div class="guide-cta">
            <sl-button
              variant="primary"
              size="large"
              @click=${0}
              aria-label="Get Started as a Guest"
            >
              Get Started
            </sl-button>
          </div>
        </div>
        <div
          class="guide-footer"
          style="background-image: url('/images/guide-footer.png')"
        ></div>
      </div>
    `),ta(ua).sanitize("We’re so glad you’re here. Chinwag connects people who crave meaningful, in-person experiences over a shared meal — no awkward planning or group chats required."),ta(ua).sanitize("Chinwag helps you find and join communal dining tables hosted at local cafes and restaurants. Whether you’re new in town or just want to shake up your social routine, Chinwag makes it easy to connect — no algorithms or matching required."),this.handleGetStarted.bind(this)),uQ.rootEl)}};let uu=t=>t,up;var uf=new class{async init(){if(document.title="Welcome to Chinwag - Host",!ue.currentUser||2!==ue.currentUser.accessLevel)return void uX("/signin");this.render()}async handleGetStarted(){try{let t=localStorage.getItem("token");if(!(await fetch(`${uQ.apiBase}/users/${ue.currentUser.id}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({isFirstLogin:!1})})).ok)throw Error("Failed to update user");ue.currentUser.isFirstLogin=!1,uX("/host-home")}catch(t){ut.show("Error getting started"),console.error(t)}}render(){eP(eg(up||(up=uu`
      <div class="guide-page">
        <div
          class="guide-header"
          style="background-image: url('/images/guide-header.png')"
        ></div>
        <div class="guide-content">
          <div class="guide-text-block">
            <h1 class="guide-title">Welcome!</h1>
            <p class="guide-subtitle">
              ${0}
            </p>
            <h2 class="guide-heading">What is Chinwag?</h2>
            <p class="guide-text">
              ${0}
            </p>
          </div>
          <div class="guide-features">
            <sl-card class="guide-card">
              <h4>📅 Fill seats</h4>
              <p>Boost off-peak bookings with communal tables.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>🛠️ List in seconds</h4>
              <p>Duplicate past events to post in seconds.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>📊 Reach a new audience</h4>
              <p>Attract spontaneous diners and social groups.</p>
            </sl-card>
          </div>
          <div class="guide-cta">
            <sl-button
              variant="primary"
              size="large"
              @click=${0}
              aria-label="Get Started as a Host"
            >
              Get Started
            </sl-button>
          </div>
        </div>
        <div
          class="guide-footer"
          style="background-image: url('/images/guide-footer.png')"
        ></div>
      </div>
    `),ta(ua).sanitize("We’re thrilled to have your venue on board. Chinwag is here to help you turn underused tables into new revenue — and make your space a destination for community."),ta(ua).sanitize("Chinwag is a social dining platform where people join communal tables at local venues. For you, it’s a low-effort way to increase bookings, especially during quiet periods."),this.handleGetStarted.bind(this)),uQ.rootEl)}};let um=t=>t,ug;var ub={render(){var t;let e=(null==(t=ue.currentUser)?void 0:t.accessLevel)===2;return eg(ug||(ug=um`
      <header class="site-header">
        <div class="header-content">
          <h1
            class="logo"
            @click=${0}
          >
            Chinwag
          </h1>
          <sl-tab-group class="nav-tabs">
            <sl-tab
              slot="nav"
              panel="home"
              @click=${0}
            >
              Home
            </sl-tab>
            <sl-tab
              slot="nav"
              panel="bookings"
              @click=${0}
            >
              Bookings
            </sl-tab>
            <sl-tab
              slot="nav"
              panel="profile"
              @click=${0}
            >
              Profile
            </sl-tab>
            <sl-tab slot="nav" panel="logout" @click=${0}>
              Logout
            </sl-tab>
          </sl-tab-group>
        </div>
      </header>
    `),()=>uX(e?"/host-home":"/guest-home"),()=>uX(e?"/host-home":"/guest-home"),()=>uX(e?"/host-bookings":"/guest-bookings"),()=>uX("/profile"),()=>ue.signOut())}};let uv=t=>t,uy,uw,u_,ux;var uk=new class{init(){document.title="Profile - Chinwag",this.fetchUser()}async fetchUser(){try{let t=localStorage.getItem("token"),e=await fetch(`${uQ.apiBase}/users/${ue.currentUser.id}`,{headers:{Authorization:`Bearer ${t}`}});if(!e.ok)throw Error("Failed to fetch profile");this.user=await e.json(),this.avatarPreview=this.user.avatar.startsWith("/uploads")?`${uQ.apiBase}${this.user.avatar}`:"/images/default-avatar.png",this.loading=!1,this.render()}catch(t){this.loading=!1,ut.show("Error fetching profile"),console.error(t),this.render()}}handleAvatarChange(t){let e=t.target.files[0];e&&(this.avatarPreview=URL.createObjectURL(e),this.render())}async submitHandler(t){if(t.preventDefault(),this.saving)return;this.saving=!0,this.render();let e=t.target,i=ta(ua).sanitize(e.querySelector('[name="firstName"]').value.trim()),o=ta(ua).sanitize(e.querySelector('[name="lastName"]').value.trim()),r=ta(ua).sanitize(e.querySelector('[name="email"]').value.trim()),a=ta(ua).sanitize(e.querySelector('[name="bio"]').value.trim()),s=e.querySelector('[name="avatar"]').files[0];try{let t=localStorage.getItem("token"),e=new FormData;e.append("firstName",i),e.append("lastName",o),e.append("email",r),e.append("bio",a),s&&e.append("avatar",s);let l=await fetch(`${uQ.apiBase}/users/${ue.currentUser.id}`,{method:"PUT",headers:{Authorization:`Bearer ${t}`},body:e});if(!l.ok)throw Error((await l.json()).message);let n=await l.json();ue.currentUser=e0({},ue.currentUser,n),this.user=n,this.avatarPreview=n.avatar.startsWith("/uploads")?`${uQ.apiBase}${n.avatar}`:"/images/default-avatar.png",this.saving=!1,ut.show("Profile updated"),this.render()}catch(t){this.saving=!1,ut.show(t.message||"Failed to update profile"),this.render()}}async submitPasswordHandler(t){t.preventDefault(),this.passwordMismatch=!1;let e=t.target,i=e.querySelector('[name="currentPassword"]').value,o=e.querySelector('[name="newPassword"]').value;if(o!==e.querySelector('[name="confirmPassword"]').value){this.passwordMismatch=!0,this.render();return}try{let t=localStorage.getItem("token"),e=await fetch(`${uQ.apiBase}/users/${ue.currentUser.id}/password`,{method:"PUT",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify({currentPassword:i,newPassword:o})});if(!e.ok)throw Error((await e.json()).message);this.showPasswordDialog=!1,ut.show("Password updated"),this.render()}catch(t){ut.show(t.message||"Failed to update password"),this.render()}}render(){eP(eg(ux||(ux=uv`
      <div>
        ${0}
        <div class="page-content">
          ${0}
        </div>
      </div>
    `),ub.render(),this.loading?eg(uy||(uy=uv`<sl-spinner></sl-spinner>`)):eg(u_||(u_=uv`
                <h1>Your Profile</h1>
                <div class="form-wrapper">
                  <form @submit=${0}>
                    <div class="avatar-section">
                      <img
                        src="${0}"
                        alt="Profile avatar"
                        class="avatar-preview"
                        @error=${0}
                        loading="lazy"
                      />
                      <sl-input
                        name="avatar"
                        type="file"
                        accept="image/*"
                        @change=${0}
                        label="Upload Avatar"
                      ></sl-input>
                    </div>
                    <sl-input
                      name="firstName"
                      label="First Name"
                      value="${0}"
                      required
                      autocomplete="given-name"
                    ></sl-input>
                    <sl-input
                      name="lastName"
                      label="Last Name"
                      value="${0}"
                      required
                      autocomplete="family-name"
                    ></sl-input>
                    <sl-input
                      name="email"
                      type="email"
                      label="Email"
                      value="${0}"
                      required
                      autocomplete="email"
                    ></sl-input>
                    <sl-textarea
                      name="bio"
                      label="Bio"
                      value="${0}"
                    ></sl-textarea>
                    <sl-button
                      type="submit"
                      variant="primary"
                      ?disabled=${0}
                      ?loading=${0}
                    >
                      Save Profile
                    </sl-button>
                    <sl-button
                      variant="default"
                      @click=${0}
                    >
                      Change Password
                    </sl-button>
                  </form>
                </div>
                ${0}
              `),this.submitHandler.bind(this),ta(ua).sanitize(this.avatarPreview),t=>t.target.src="/images/default-avatar.png",this.handleAvatarChange.bind(this),ta(ua).sanitize(this.user.firstName),ta(ua).sanitize(this.user.lastName),ta(ua).sanitize(this.user.email),ta(ua).sanitize(this.user.bio),this.saving,this.saving,()=>{this.showPasswordDialog=!0,this.render()},this.showPasswordDialog?eg(uw||(uw=uv`
                      <sl-dialog
                        label="Change Password"
                        open
                        @sl-request-close=${0}
                      >
                        <form @submit=${0}>
                          <sl-input
                            name="currentPassword"
                            type="password"
                            label="Current Password"
                            required
                            autocomplete="current-password"
                          ></sl-input>
                          <sl-input
                            name="newPassword"
                            type="password"
                            label="New Password"
                            required
                            autocomplete="new-password"
                            help-text=${0}
                            ?invalid=${0}
                          ></sl-input>
                          <sl-input
                            name="confirmPassword"
                            type="password"
                            label="Confirm New Password"
                            required
                            autocomplete="new-password"
                            help-text=${0}
                            ?invalid=${0}
                          ></sl-input>
                          <sl-button
                            slot="footer"
                            type="submit"
                            variant="primary"
                          >
                            Update Password
                          </sl-button>
                          <sl-button
                            slot="footer"
                            variant="default"
                            @click=${0}
                          >
                            Cancel
                          </sl-button>
                        </form>
                      </sl-dialog>
                    `),()=>{this.showPasswordDialog=!1,this.render()},this.submitPasswordHandler.bind(this),this.passwordMismatch?"Passwords do not match":"",this.passwordMismatch,this.passwordMismatch?"Passwords do not match":"",this.passwordMismatch,()=>{this.showPasswordDialog=!1,this.render()}):"")),uQ.rootEl)}constructor(){this.user=null,this.loading=!0,this.saving=!1,this.passwordMismatch=!1,this.showPasswordDialog=!1,this.avatarPreview=null}};let uC=t=>t,u$,uS;var uz=new class{init(){document.title="Guest Home",this.fetchEvents(),this.handleTabChange=this.handleTabChange.bind(this)}async fetchEvents(){try{let t="all"===this.filter?"":`?dateRange=${this.filter}`,e=await fetch(`${uQ.apiBase}/events${t}`);if(!e.ok)throw Error("Failed to fetch events");this.events=await e.json(),this.render()}catch(t){ut.show("Error fetching events"),console.error(t)}}handleTabChange(t){this.filter=t.target.panel,this.fetchEvents()}async bookEvent(t){try{let e=localStorage.getItem("token"),i=await fetch(`${uQ.apiBase}/bookings`,{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({eventId:t})});if(!i.ok)throw Error((await i.json()).message);ut.show("Event booked!"),this.fetchEvents()}catch(t){ut.show(t.message||"Booking failed"),console.error(t)}}render(){eP(eg(uS||(uS=uC`
      <div>
        ${0}
        <div class="page-content">
          <h1>Available Events</h1>
          <div class="carousel-container">
            <sl-tab-group @sl-tab-show=${0}>
              <sl-tab slot="nav" panel="all" active>All</sl-tab>
              <sl-tab slot="nav" panel="weekend">This Weekend</sl-tab>
              <sl-tab slot="nav" panel="nextWeek">Next Week</sl-tab>
            </sl-tab-group>
            <sl-carousel navigation pagination>
              ${0}
            </sl-carousel>
          </div>
        </div>
      </div>
    `),ub.render(),this.handleTabChange,this.events.map(t=>eg(u$||(u$=uC`
                  <sl-carousel-item>
                    <div class="event-card">
                      <img
                        src="${0}"
                        alt="${0}"
                        width="300"
                      />
                      <h2>${0}</h2>
                      <p>${0}</p>
                      <p>Date: ${0}</p>
                      <p>Location: ${0}</p>
                      <p>Seats Available: ${0}</p>
                      <p>
                        Host: ${0}
                        ${0}
                      </p>
                      <sl-button
                        @click=${0}
                        variant="primary"
                        ?disabled=${0}
                      >
                        Book Event
                      </sl-button>
                    </div>
                  </sl-carousel-item>
                `),ta(ua).sanitize(t.image),ta(ua).sanitize(t.title),ta(ua).sanitize(t.title),ta(ua).sanitize(t.description),new Date(t.date).toLocaleString(),ta(ua).sanitize(t.location),t.seatsAvailable,ta(ua).sanitize(t.host.firstName),ta(ua).sanitize(t.host.lastName),()=>this.bookEvent(t._id),0===t.seatsAvailable))),uQ.rootEl)}constructor(){this.events=[],this.filter="all"}};let uA=t=>t,uE,uT;var uD=new class{init(){document.title="Host Home",this.fetchEvents(),this.submitHandler=this.submitHandler.bind(this),this.imageHandler=this.imageHandler.bind(this)}async fetchEvents(){try{let t=await fetch(`${uQ.apiBase}/events?host=${ue.currentUser.id}`);if(!t.ok)throw Error("Failed to fetch events");this.events=await t.json(),this.render()}catch(t){ut.show("Error fetching events"),console.error(t)}}async submitHandler(t){t.preventDefault();let e=t.target,i=ta(ua).sanitize(e.querySelector('[name="title"]').value),o=ta(ua).sanitize(e.querySelector('[name="description"]').value),r=ta(ua).sanitize(e.querySelector('[name="date"]').value),a=ta(ua).sanitize(e.querySelector('[name="location"]').value),s=e.querySelector('[name="image"]').files[0];try{let t=localStorage.getItem("token"),e=new FormData;e.append("title",i),e.append("description",o),e.append("date",r),e.append("location",a),s&&e.append("image",s);let l=await fetch(`${uQ.apiBase}/events`,{method:"POST",headers:{Authorization:`Bearer ${t}`},body:e});if(!l.ok)throw Error(await l.json().message);ut.show("Event created!"),this.fetchEvents()}catch(t){ut.show(t.message||"Event creation failed"),console.error(t)}}async deleteEvent(t){try{let e=localStorage.getItem("token"),i=await fetch(`${uQ.apiBase}/events/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}});if(!i.ok)throw Error(await i.json().message);ut.show("Event deleted"),this.fetchEvents()}catch(t){ut.show(t.message||"Deletion failed"),console.error(t)}}render(){eP(eg(uT||(uT=uA`
      <div class="page-content">
        <h1>Your Events</h1>
        <form @submit=${0}>
          <sl-input name="title" label="Event Title" required></sl-input>
          <sl-textarea
            name="description"
            label="Description"
            required
          ></sl-textarea>
          <sl-input
            name="date"
            type="datetime-local"
            label="Date and Time"
            required
          ></sl-input>
          <sl-input name="location" label="Location" required></sl-input>
          <input type="file" name="image" accept="image/*" />
          <sl-button type="submit" variant="primary">Create Event</sl-button>
        </form>
        <h2>Existing Events</h2>
        ${0}
      </div>
    `),this.submitHandler,this.events.map(t=>eg(uE||(uE=uA`
            <div class="event-card">
              <img
                src="${0}"
                alt="${0}"
                width="300"
              />
              <h3>${0}</h3>
              <p>${0}</p>
              <p>Date: ${0}</p>
              <p>Location: ${0}</p>
              <sl-button
                @click=${0}
                variant="danger"
                >Delete</sl-button
              >
            </div>
          `),ta(ua).sanitize(t.image),t.title,ta(ua).sanitize(t.title),ta(ua).sanitize(t.description),new Date(t.date).toLocaleString(),ta(ua).sanitize(t.location),()=>this.deleteEvent(t._id)))),uQ.rootEl)}constructor(){this.events=[]}};let uI=t=>t,uL,uO,uP,uM,uN,uR,uF;var uB=new class{init(){document.title="Your Bookings - Chinwag",this.fetchBookings()}async fetchBookings(){try{let t=localStorage.getItem("token"),e=await fetch(`${uQ.apiBase}/bookings/guest`,{headers:{Authorization:`Bearer ${t}`}});if(!e.ok)throw Error("Failed to fetch bookings");this.bookings=await e.json(),this.loading=!1,this.render()}catch(t){this.loading=!1,ut.show("Error fetching bookings"),console.error(t),this.render()}}handleTabClick(t){this.activeFilter=t.target.panel,this.render()}async cancelBooking(t){this.cancellingBookingId=t,this.render()}async confirmCancel(t){try{let e=localStorage.getItem("token");if(!(await fetch(`${uQ.apiBase}/bookings/${t}/cancel`,{method:"PUT",headers:{Authorization:`Bearer ${e}`}})).ok)throw Error("Failed to cancel booking");ut.show("Booking cancelled"),this.cancellingBookingId=null,this.fetchBookings()}catch(t){ut.show(t.message||"Failed to cancel booking"),console.error(t),this.cancellingBookingId=null,this.render()}}getFilteredBookings(){let t=new Date;return this.bookings.filter(e=>"Upcoming"===this.activeFilter?new Date(e.event.date)>=t&&"confirmed"===e.status:new Date(e.event.date)<t||"cancelled"===e.status)}render(){let t=this.getFilteredBookings();eP(eg(uF||(uF=uI`
      <div>
        ${0}
        <div class="page-content">
          <h1>Your Bookings</h1>
          <sl-tab-group @sl-tab-show=${0}>
            <sl-tab slot="nav" panel="Upcoming" active>Upcoming</sl-tab>
            <sl-tab slot="nav" panel="Past">Past</sl-tab>
          </sl-tab-group>
          ${0}
          ${0}
        </div>
      </div>
    `),ub.render(),this.handleTabClick.bind(this),this.loading?eg(uL||(uL=uI`<sl-spinner></sl-spinner>`)):0===t.length?eg(uO||(uO=uI`<p>No ${0} bookings found.</p>`),this.activeFilter.toLowerCase()):eg(uN||(uN=uI`
                <div class="booking-grid">
                  ${0}
                </div>
              `),t.map(t=>eg(uM||(uM=uI`
                      <sl-card class="booking-card">
                        <img
                          slot="image"
                          src="${0}"
                          alt="${0}"
                          @error=${0}
                          loading="lazy"
                        />
                        <h3>${0}</h3>
                        <p>
                          <strong>Date:</strong>
                          ${0}
                        </p>
                        <p>
                          <strong>Location:</strong>
                          ${0}
                        </p>
                        <p>
                          <strong>Status:</strong>
                          ${0}
                        </p>
                        <p>
                          <strong>Host:</strong>
                          ${0}
                        </p>
                        <p>
                          <strong>Host Email:</strong>
                          ${0}
                        </p>
                        <div slot="footer">
                          <sl-button
                            variant="primary"
                            @click=${0}
                            aria-label="Contact Host"
                          >
                            Contact Host
                          </sl-button>
                          ${0}
                        </div>
                      </sl-card>
                    `),ta(ua).sanitize(t.event.image.startsWith("/uploads")?`${uQ.apiBase}${t.event.image}`:"/images/default-event.png"),ta(ua).sanitize(t.event.title),t=>t.target.src="/images/default-event.png",ta(ua).sanitize(t.event.title),new Date(t.event.date).toLocaleString(),ta(ua).sanitize(t.event.location),ta(ua).sanitize(t.status),ta(ua).sanitize(`${t.event.host.firstName} ${t.event.host.lastName}`),ta(ua).sanitize(t.event.host.email),()=>window.open(`mailto:${t.event.host.email}`),"confirmed"===t.status?eg(uP||(uP=uI`
                                <sl-button
                                  variant="danger"
                                  @click=${0}
                                  aria-label="Cancel Booking"
                                >
                                  Cancel Booking
                                </sl-button>
                              `),()=>this.cancelBooking(t._id)):""))),this.cancellingBookingId?eg(uR||(uR=uI`
                <sl-dialog label="Confirm Cancellation" open>
                  <p>Are you sure you want to cancel this booking?</p>
                  <sl-button
                    slot="footer"
                    variant="primary"
                    @click=${0}
                  >
                    Confirm
                  </sl-button>
                  <sl-button
                    slot="footer"
                    variant="default"
                    @click=${0}
                  >
                    Cancel
                  </sl-button>
                </sl-dialog>
              `),()=>this.confirmCancel(this.cancellingBookingId),()=>{this.cancellingBookingId=null,this.render()}):""),uQ.rootEl)}constructor(){this.bookings=[],this.loading=!0,this.activeFilter="Upcoming",this.cancellingBookingId=null}};let uU=t=>t,uH,uV,uq,uj,uW,uK;var uG=new class{init(){document.title="Host Bookings - Chinwag",this.fetchBookings()}async fetchBookings(){try{let t=localStorage.getItem("token"),e=await fetch(`${uQ.apiBase}/bookings/host`,{headers:{Authorization:`Bearer ${t}`}});if(!e.ok)throw Error("Failed to fetch bookings");this.bookings=await e.json(),this.loading=!1,this.render()}catch(t){this.loading=!1,ut.show("Error fetching bookings"),console.error(t),this.render()}}async updateNote(t,e){try{let i=localStorage.getItem("token");if(!(await fetch(`${uQ.apiBase}/bookings/${t}/notes`,{method:"PUT",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({notes:ta(ua).sanitize(e)})})).ok)throw Error("Failed to update notes");ut.show("Notes updated"),this.fetchBookings()}catch(t){ut.show(t.message||"Failed to update notes"),console.error(t)}}async removeBooking(t){this.removingBookingId=t,this.render()}async confirmRemove(t){try{let e=localStorage.getItem("token");if(!(await fetch(`${uQ.apiBase}/bookings/${t}/cancel`,{method:"PUT",headers:{Authorization:`Bearer ${e}`}})).ok)throw Error("Failed to remove booking");ut.show("Booking removed"),this.removingBookingId=null,this.fetchBookings()}catch(t){ut.show(t.message||"Failed to remove booking"),console.error(t),this.removingBookingId=null,this.render()}}groupBookingsByEvent(){let t={};return this.bookings.forEach(e=>{let i=e.event._id;t[i]||(t[i]={event:e.event,bookings:[]}),t[i].bookings.push(e)}),Object.values(t)}render(){let t=this.groupBookingsByEvent();eP(eg(uK||(uK=uU`
      <div>
        ${0}
        <div class="page-content">
          <h1>Your Event Bookings</h1>
          ${0}
          ${0}
        </div>
      </div>
    `),ub.render(),this.loading?eg(uH||(uH=uU`<sl-spinner></sl-spinner>`)):0===t.length?eg(uV||(uV=uU`<p>No bookings found for your events.</p>`)):t.map(({event:t,bookings:e})=>eg(uj||(uj=uU`
                  <div class="event-section">
                    <h2>${0}</h2>
                    <div class="booking-grid">
                      ${0}
                    </div>
                  </div>
                `),ta(ua).sanitize(t.title),e.map(t=>eg(uq||(uq=uU`
                          <sl-card class="booking-card">
                            <div slot="header">
                              <img
                                src="${0}"
                                alt="Avatar for ${0}"
                                class="avatar"
                                @error=${0}
                                loading="lazy"
                              />
                              <span
                                >${0}</span
                              >
                            </div>
                            <div>
                              <strong>Email:</strong>
                              ${0}
                            </div>
                            <div>
                              <strong>Notes:</strong>
                              <sl-input
                                value="${0}"
                                @sl-change=${0}
                              ></sl-input>
                            </div>
                            <div slot="footer">
                              <sl-button
                                variant="danger"
                                @click=${0}
                                aria-label="Remove ${0}"
                              >
                                Remove
                              </sl-button>
                            </div>
                          </sl-card>
                        `),ta(ua).sanitize(t.guest.avatar.startsWith("/uploads")?`${uQ.apiBase}${t.guest.avatar}`:"/images/default-avatar.png"),ta(ua).sanitize(t.guest.firstName),t=>t.target.src="/images/default-avatar.png",ta(ua).sanitize(`${t.guest.firstName} ${t.guest.lastName}`),ta(ua).sanitize(t.guest.email),ta(ua).sanitize(t.hostNotes||""),e=>this.updateNote(t._id,e.target.value),()=>this.removeBooking(t._id),ta(ua).sanitize(t.guest.firstName))))),this.removingBookingId?eg(uW||(uW=uU`
                <sl-dialog label="Confirm Removal" open>
                  <p>Are you sure you want to remove this guest?</p>
                  <sl-button
                    slot="footer"
                    variant="primary"
                    @click=${0}
                  >
                    Confirm
                  </sl-button>
                  <sl-button
                    slot="footer"
                    variant="default"
                    @click=${0}
                  >
                    Cancel
                  </sl-button>
                </sl-dialog>
              `),()=>this.confirmRemove(this.removingBookingId),()=>{this.removingBookingId=null,this.render()}):""),uQ.rootEl)}constructor(){this.bookings=[],this.loading=!0,this.removingBookingId=null}};let uY={routes:{"/signin":ur,"/signup":un,"/guest-guide":uh,"/host-guide":uf,"/profile":uk,"/guest-home":uz,"/host-home":uD,"/guest-bookings":uB,"/host-bookings":uG},async init(){window.addEventListener("popstate",()=>this.route()),await this.route()},async route(){let t=window.location.pathname;console.log("[Router] Routing to:",t);let e=this.routes[t]||ur,i=await ue.check();if(!i&&!["/signin","/signup"].includes(t))return void uX("/signin");if(i){let{accessLevel:e}=ue.currentUser;if("/guest-guide"===t&&1!==e)return void uX("/host-home");if("/host-guide"===t&&2!==e)return void uX("/guest-home");if("/guest-home"===t&&1!==e)return void uX("/host-home");if("/host-home"===t&&2!==e)return void uX("/guest-home");if("/guest-bookings"===t&&1!==e)return void uX("/host-home");if("/host-bookings"===t&&2!==e)return void uX("/guest-home")}e.init(),e.render()}};function uX(t){history.pushState({},"",t),uY.route()}var uQ={apiBase:"https://chinwag-backend.onrender.com/api",rootEl:null,async init(){if(this.rootEl=document.getElementById("root"),!this.rootEl)throw Error("Root element #root not found");console.log("[App] Initialising..."),await uY.init()}};console.log("[main.js] Clearing root element");let uZ=document.getElementById("root");uZ.innerHTML="",console.log("[main.js] Initializing App"),uQ.init().catch(t=>{uZ.innerHTML=`<p style="color:red;">App failed to load: ${t.message}</p>`,console.error("[main.js] App init failed:",t)})}();
//# sourceMappingURL=frontend.5eb52c86.js.map
