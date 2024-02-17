import{w as T,r as F,D as we,q as Ie,v as je,a as Ae,F as ae,G as Ee,I as Me,J as G,j as x,c as Fe,e as ke,K as k,o as ie,M as Oe,L as Pe,d as Re}from"./index-kJarJC0y.js";function se(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function R(){}function De(e){var t,r=void 0;return function(){for(var a=[],n=arguments.length;n--;)a[n]=arguments[n];return t&&a.length===t.length&&a.every(function(s,f){return s===t[f]})||(t=a,r=e.apply(void 0,a)),r}}function $(e){return!!(e||"").match(/\d/)}function H(e){return e==null}function Te(e){return typeof e=="number"&&isNaN(e)}function Be(e){return H(e)||Te(e)||typeof e=="number"&&!isFinite(e)}function _e(e){var t=F.useRef(e);t.current=e;var r=F.useRef(function(){for(var a=[],n=arguments.length;n--;)a[n]=arguments[n];return t.current.apply(t,a)});return r.current}function ue(e,t){return Array(t+1).join(e)}function Le(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var a=t.split(/[eE]/g),n=a[0],s=a[1];if(s=Number(s),!s)return r+n;n=n.replace(".","");var f=1+s,c=n.length;return f<0?n="0."+ue("0",Math.abs(f))+n:f>=c?n=n+ue("0",f-c):n=(n.substring(0,f)||"0")+"."+n.substring(f),r+n}function Z(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var $e=De(function(e,t){for(var r=0,a=0,n=e.length,s=t.length;e[r]===t[r]&&r<n;)r++;for(;e[n-1-a]===t[s-1-a]&&s-a>r&&n-a>r;)a++;return{from:{start:r,end:n-a},to:{start:r,end:s-a}}});function Ke(e,t,r){return Math.min(Math.max(e,t),r)}function X(e){return Math.max(e.selectionStart,e.selectionEnd)}function qe(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Ue(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function le(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function Ge(e){var t=e.currentValue,r=e.formattedValue,a=e.currentValueIndex,n=e.formattedValueIndex;return t[a]===r[n]}function Ye(e,t,r,a,n,s,f){f===void 0&&(f=Ge);var c=n.findIndex(function(A){return A}),v=e.slice(0,c);!t&&!r.startsWith(v)&&(t=v,r=v+r,a=a+v.length);for(var g=r.length,m=e.length,b={},d=new Array(g),p=0;p<g;p++){d[p]=-1;for(var o=0,I=m;o<I;o++){var y=f({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:p,formattedValueIndex:o});if(y&&b[o]!==!0){d[p]=o,b[o]=!0;break}}}for(var h=a;h<g&&(d[h]===-1||!s(r[h]));)h++;var M=h===g||d[h]===-1?m:d[h];for(h=a-1;h>0&&d[h]===-1;)h--;var V=h===-1||d[h]===-1?0:d[h]+1;return V>M?M:a-V<M-a?V:M}function z(e,t,r,a){var n=e.length;if(t=Ke(t,0,n),a==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=n&&!r[t];)t++;t>n&&(t=r.lastIndexOf(!0))}return t===-1&&(t=n),t}function He(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,a=t.length;r<a;r++)t[r]=!!($(e[r])||$(e[r-1]));return t}function ze(e,t,r,a,n,s){s===void 0&&(s=R);var f=_e(function(o,I){var y,h;return Be(o)?(h="",y=""):typeof o=="number"||I?(h=typeof o=="number"?Le(o):o,y=a(h)):(h=n(o,void 0),y=a(h)),{formattedValue:y,numAsString:h}}),c=F.useState(function(){return f(H(e)?t:e,r)}),v=c[0],g=c[1],m=function(o,I){o.formattedValue!==v.formattedValue&&g({formattedValue:o.formattedValue,numAsString:o.value}),s(o,I)},b=e,d=r;H(e)&&(b=v.numAsString,d=!0);var p=f(b,d);return F.useMemo(function(){g(p)},[p.formattedValue]),[v,m]}function Je(e){return e.replace(/[^0-9]/g,"")}function We(e){return e}function Qe(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var a=e.customInput,n=e.renderText,s=e.getInputRef,f=e.format;f===void 0&&(f=We);var c=e.removeFormatting;c===void 0&&(c=Je);var v=e.defaultValue,g=e.valueIsNumericString,m=e.onValueChange,b=e.isAllowed,d=e.onChange;d===void 0&&(d=R);var p=e.onKeyDown;p===void 0&&(p=R);var o=e.onMouseUp;o===void 0&&(o=R);var I=e.onFocus;I===void 0&&(I=R);var y=e.onBlur;y===void 0&&(y=R);var h=e.value,M=e.getCaretBoundary;M===void 0&&(M=He);var V=e.isValidInputCharacter;V===void 0&&(V=$);var A=e.isCharacterSame,O=se(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),K=ze(h,v,!!g,f,c,m),ee=K[0],N=ee.formattedValue,q=ee.numAsString,fe=K[1],U=F.useRef({formattedValue:N,numAsString:q}),te=function(i,u){U.current={formattedValue:i.formattedValue,numAsString:i.value},fe(i,u)},re=F.useState(!1),ce=re[0],de=re[1],B=F.useRef(null),D=F.useRef({setCaretTimeout:null,focusTimeout:null});F.useEffect(function(){return de(!0),function(){clearTimeout(D.current.setCaretTimeout),clearTimeout(D.current.focusTimeout)}},[]);var ve=f,J=function(i,u){var l=parseFloat(u);return{formattedValue:i,value:u,floatValue:isNaN(l)?void 0:l}},P=function(i,u,l){i.selectionStart===0&&i.selectionEnd===i.value.length||(Z(i,u),D.current.setCaretTimeout=setTimeout(function(){i.value===l&&i.selectionStart!==i.selectionEnd&&Z(i,u)},0))},_=function(i,u,l){return z(i,u,M(i),l)},W=function(i,u,l){var S=M(u),w=Ye(u,N,i,l,S,V,A);return w=z(u,w,S),w},me=function(i){var u=i.formattedValue;u===void 0&&(u="");var l=i.input,S=i.setCaretPosition;S===void 0&&(S=!0);var w=i.source,C=i.event,j=i.numAsString,E=i.caretPos;if(l){if(E===void 0&&S){var L=i.inputValue||l.value,Q=X(l);l.value=u,E=W(L,u,Q)}l.value=u,S&&E!==void 0&&P(l,E,u)}u!==N&&te(J(u,j),{event:C,source:w})};F.useEffect(function(){var i=U.current,u=i.formattedValue,l=i.numAsString;N!==u&&(N!==q||u!==l)&&te(J(N,q),{event:void 0,source:Y.props})},[N,q]);var ge=B.current?X(B.current):void 0,he=typeof window<"u"?F.useLayoutEffect:F.useEffect;he(function(){var i=B.current;if(N!==U.current.formattedValue&&i){var u=W(U.current.formattedValue,N,ge);i.value=N,P(i,u,N)}},[N]);var pe=function(i,u,l){var S=$e(N,i),w=Object.assign(Object.assign({},S),{lastValue:N}),C=c(i,w),j=ve(C);if(C=c(j,void 0),b&&!b(J(j,C))){var E=u.target,L=X(E),Q=W(i,N,L);return E.value=N,P(E,Q,N),!1}return me({formattedValue:j,numAsString:C,inputValue:i,event:u,source:l,setCaretPosition:!0,input:u.target}),!0},xe=function(i){var u=i.target,l=u.value,S=pe(l,i,Y.event);S&&d(i)},ye=function(i){var u=i.target,l=i.key,S=u.selectionStart,w=u.selectionEnd,C=u.value;C===void 0&&(C="");var j;if(l==="ArrowLeft"||l==="Backspace"?j=Math.max(S-1,0):l==="ArrowRight"?j=Math.min(S+1,C.length):l==="Delete"&&(j=S),j===void 0||S!==w){p(i);return}var E=j;if(l==="ArrowLeft"||l==="ArrowRight"){var L=l==="ArrowLeft"?"left":"right";E=_(C,j,L),E!==j&&i.preventDefault()}else l==="Delete"&&!V(C[j])?E=_(C,j,"right"):l==="Backspace"&&!V(C[j])&&(E=_(C,j,"left"));E!==j&&P(u,E,C),i.isUnitTestRun&&P(u,E,C),p(i)},Ce=function(i){var u=i.target,l=u.selectionStart,S=u.selectionEnd,w=u.value;if(w===void 0&&(w=""),l===S){var C=_(w,l);C!==l&&P(u,C,w)}o(i)},be=function(i){i.persist&&i.persist();var u=i.target;B.current=u,D.current.focusTimeout=setTimeout(function(){var l=u.selectionStart,S=u.selectionEnd,w=u.value;w===void 0&&(w="");var C=_(w,l);C!==l&&!(l===0&&S===w.length)&&P(u,C,w),I(i)},0)},Ve=function(i){B.current=null,clearTimeout(D.current.focusTimeout),clearTimeout(D.current.setCaretTimeout),y(i)},Ne=ce&&qe()?"numeric":void 0,ne=Object.assign({inputMode:Ne},O,{type:t,value:N,onChange:xe,onKeyDown:ye,onMouseUp:Ce,onFocus:be,onBlur:Ve});if(r==="text")return n?T.createElement(T.Fragment,null,n(N,O)||null):T.createElement("span",Object.assign({},O,{ref:s}),N);if(a){var Se=a;return T.createElement(Se,Object.assign({},ne,{ref:s}))}return T.createElement("input",Object.assign({},ne,{ref:s}))}function Xe(e,t){var r=t.format,a=t.allowEmptyFormatting,n=t.mask,s=t.patternChar;if(s===void 0&&(s="#"),e===""&&!a)return"";for(var f=0,c=r.split(""),v=0,g=r.length;v<g;v++)r[v]===s&&(c[v]=e[f]||le(n,f),f+=1);return c.join("")}function Ze(e,t,r){t===void 0&&(t=Ue(e));var a=r.format,n=r.patternChar;n===void 0&&(n="#");var s=t.from,f=t.to,c=t.lastValue;c===void 0&&(c="");var v=function(y){return a[y]===n},g=function(y,h){for(var M="",V=0;V<y.length;V++)v(h+V)&&$(y[V])&&(M+=y[V]);return M},m=function(y){return y.replace(/[^0-9]/g,"")};if(!a.match(/\d/))return m(e);if(c===""&&e.length===a.length){for(var b="",d=0;d<e.length;d++)if(v(d))$(e[d])&&(b+=e[d]);else if(e[d]!==a[d])return m(e);return b}var p=c.substring(0,s.start),o=e.substring(f.start,f.end),I=c.substring(s.end);return""+g(p,0)+m(o)+g(I,s.end)}function et(e,t){var r=t.format,a=t.mask,n=t.patternChar;n===void 0&&(n="#");var s=Array.from({length:e.length+1}).map(function(){return!0}),f=0,c=-1,v={};r.split("").forEach(function(d,p){var o=void 0;d===n&&(f++,o=le(a,f-1),c===-1&&e[p]===o&&(c=p)),v[p]=o});for(var g=function(d){return r[d]===n&&e[d]!==v[d]},m=0,b=s.length;m<b;m++)s[m]=m===c||g(m)||g(m-1);return s[r.indexOf(n)]=!0,s}function tt(e){var t=e.mask;if(t){var r=t==="string"?t:t.toString();if(r.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function rt(e,t){return e===""?!0:!(t!=null&&t.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function nt(e){e.mask,e.allowEmptyFormatting;var t=e.format,r=e.inputMode;r===void 0&&(r="numeric");var a=e.onKeyDown;a===void 0&&(a=R);var n=e.patternChar;n===void 0&&(n="#");var s=e.value,f=e.defaultValue,c=e.valueIsNumericString,v=se(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);tt(e);var g=function(o){return et(o,e)},m=function(o){var I=o.key,y=o.target,h=y.selectionStart,M=y.selectionEnd,V=y.value;if(h!==M){a(o);return}var A=h;if(I==="Backspace"||I==="Delete"){var O="right";if(I==="Backspace"){for(;A>0&&t[A-1]!==n;)A--;O="left"}else{for(var K=t.length;A<K&&t[A]!==n;)A++;O="right"}A=z(V,A,g(V),O)}else t[A]!==n&&I!=="ArrowLeft"&&I!=="ArrowRight"&&(A=z(V,A+1,g(V),"right"));A!==h&&Z(y,A),a(o)},b=H(s)?f:s,d=c??rt(b,t),p=Object.assign(Object.assign({},e),{valueIsNumericString:d});return Object.assign(Object.assign({},v),{value:s,defaultValue:f,valueIsNumericString:d,inputMode:r,format:function(o){return Xe(o,p)},removeFormatting:function(o,I){return Ze(o,I,p)},getCaretBoundary:g,onKeyDown:m})}function oe(e){var t=nt(e);return T.createElement(Qe,Object.assign({},t))}const it=()=>{const e=we(),t=Ie(),[r,a]=F.useState(!1),{profileSettings:n}=je(),{isScreenMobile:s}=Re(),{originPath:f}=Ae();F.useEffect(()=>{e(ae.setPaymentMethod(n))},[e,n]);const c=(m=0)=>{const b=new Date,d=b.getFullYear(),p=b.getMonth()+1,o=b.getDate()<10?`0${b.getDate()}`:`${b.getDate()}`;return`${+d+m}-0${p}-${o}`},v=Ee({initialValues:{cardName:n.cardName,cardNumber:n.cardNumber,expiration:n.expiration,CVV:n.CVV},validationSchema:Me({cardName:G().required("Required").min(3,"Must be 3 characters or more").max(20,"Must be 20 characters or less"),cardNumber:G().required("Required").test("cardNumber","Card number must be 16 characters",m=>m.split(" ").join("").length===16),expiration:G().required("Required").test("expiration","Card expiration date must be greater than today",m=>m>c()),CVV:G().required("Required")}),onSubmit:m=>{t.submit(m,{method:"PATCH"}),e(ae.setPaymentMethod(m)),a(!0)}}),g=m=>v.errors[m]&&v.touched[m];return x.jsxs(Fe,{children:[s&&x.jsx(ke,{page:"Payment Method"}),x.jsxs(k,{className:"d-flex flex-column mt-6",onSubmit:v.handleSubmit,children:[x.jsxs(k.Group,{className:"mb-2",children:[x.jsxs(k.Label,{className:"fw-medium",children:["Card Holder Name"," ",g("cardName")&&x.jsx("span",{className:"text-danger",children:" * "})]}),x.jsx(k.Control,{className:`p-3 ${g("cardName")?"border-danger":""}`,type:"text",id:"cardName",placeholder:"Enter card holder name",...v.getFieldProps("cardName")})]}),x.jsxs(k.Group,{className:"mb-2",children:[x.jsxs(k.Label,{className:"fw-medium",children:["Card Number"," ",g("cardNumber")&&x.jsx("span",{className:"text-danger",children:" * "})]}),x.jsx(oe,{id:"cardNumber",className:`p-3 ${g("cardNumber")?"border-danger":""}`,format:"#### #### #### ####",placeholder:"4111 1111 1111 1111",customInput:k.Control,...v.getFieldProps("cardNumber")})]}),x.jsxs("div",{className:"d-flex gap-2",children:[x.jsxs(k.Group,{className:"w-50",children:[x.jsxs(k.Label,{className:"fw-medium",children:["Expiration"," ",g("expiration")&&x.jsx("span",{className:"text-danger",children:" * "})]}),x.jsx(k.Control,{id:"expiration",className:`p-3 ${g("expiration")?"border-danger":""}`,type:"date",placeholder:"DD/MM/YY",min:c(),max:c(5),...v.getFieldProps("expiration")})]}),x.jsxs(k.Group,{className:"mb-3 w-50",children:[x.jsxs(k.Label,{className:"fw-medium",children:["CVV"," ",g("CVV")&&x.jsx("span",{className:"text-danger",children:" * "})]}),x.jsx(oe,{id:"CVV",className:`p-3 ${g("CVV")?"border-danger":""}`,format:"###",placeholder:"123",customInput:k.Control,...v.getFieldProps("CVV")})]})]}),x.jsx(ie,{variant:"dark",className:"p-3 align-self-md-end px-md-5 rounded-3 py-3 d-flex align-items-center justify-content-center gap-2",type:"submit",onClick:()=>v.setFieldValue("intent","payment"),children:"Save"})]}),x.jsxs(Oe,{title:"Your payment method has been saved",show:r,onClose:()=>a(!1),children:[x.jsx(ie,{variant:"white",onClick:()=>a(!1),children:"Close"}),x.jsx(Pe,{to:`/${f}/profile`,className:"btn btn-dark",children:"Go to profile"})]})]})};export{it as default};
