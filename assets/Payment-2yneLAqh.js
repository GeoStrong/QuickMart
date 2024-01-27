import{o as T,r as D,q as Se,n as we,m as Ie,f as je,s as Ae,t as Ee,v as G,w as Fe,j as b,g as ke,i as De,F as k,B as ne,x as Oe,b as Pe,h as Re}from"./index-nL0kgY8s.js";import{u as Be}from"./useLocalStorageData-zUuNDl68.js";function oe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function R(){}function Te(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(f,d){return f===t[d]})||(t=n,r=e.apply(void 0,n)),r}}function $(e){return!!(e||"").match(/\d/)}function z(e){return e==null}function Le(e){return typeof e=="number"&&isNaN(e)}function _e(e){return z(e)||Le(e)||typeof e=="number"&&!isFinite(e)}function Me(e){var t=D.useRef(e);t.current=e;var r=D.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function ie(e,t){return Array(t+1).join(e)}function $e(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],f=n[1];if(f=Number(f),!f)return r+a;a=a.replace(".","");var d=1+f,u=a.length;return d<0?a="0."+ie("0",Math.abs(d))+a:d>=u?a=a+ie("0",d-u):a=(a.substring(0,d)||"0")+"."+a.substring(d),r+a}function Z(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Ke=Te(function(e,t){for(var r=0,n=0,a=e.length,f=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[f-1-n]&&f-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:f-n}}});function qe(e,t,r){return Math.min(Math.max(e,t),r)}function X(e){return Math.max(e.selectionStart,e.selectionEnd)}function Ue(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Ge(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function se(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function Ye(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function ze(e,t,r,n,a,f,d){d===void 0&&(d=Ye);var u=a.findIndex(function(A){return A}),h=e.slice(0,u);!t&&!r.startsWith(h)&&(t=h,r=h+r,n=n+h.length);for(var x=r.length,g=e.length,C={},s=new Array(x),m=0;m<x;m++){s[m]=-1;for(var l=0,N=g;l<N;l++){var p=d({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:m,formattedValueIndex:l});if(p&&C[l]!==!0){s[m]=l,C[l]=!0;break}}}for(var v=n;v<x&&(s[v]===-1||!f(r[v]));)v++;var F=v===x||s[v]===-1?g:s[v];for(v=n-1;v>0&&s[v]===-1;)v--;var y=v===-1||s[v]===-1?0:s[v]+1;return y>F?F:n-y<F-n?y:F}function H(e,t,r,n){var a=e.length;if(t=qe(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function He(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!($(e[r])||$(e[r-1]));return t}function We(e,t,r,n,a,f){f===void 0&&(f=R);var d=Me(function(l,N){var p,v;return _e(l)?(v="",p=""):typeof l=="number"||N?(v=typeof l=="number"?$e(l):l,p=n(v)):(v=a(l,void 0),p=n(v)),{formattedValue:p,numAsString:v}}),u=D.useState(function(){return d(z(e)?t:e,r)}),h=u[0],x=u[1],g=function(l,N){l.formattedValue!==h.formattedValue&&x({formattedValue:l.formattedValue,numAsString:l.value}),f(l,N)},C=e,s=r;z(e)&&(C=h.numAsString,s=!0);var m=d(C,s);return D.useMemo(function(){x(m)},[m.formattedValue]),[h,g]}function Je(e){return e.replace(/[^0-9]/g,"")}function Qe(e){return e}function Xe(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,f=e.getInputRef,d=e.format;d===void 0&&(d=Qe);var u=e.removeFormatting;u===void 0&&(u=Je);var h=e.defaultValue,x=e.valueIsNumericString,g=e.onValueChange,C=e.isAllowed,s=e.onChange;s===void 0&&(s=R);var m=e.onKeyDown;m===void 0&&(m=R);var l=e.onMouseUp;l===void 0&&(l=R);var N=e.onFocus;N===void 0&&(N=R);var p=e.onBlur;p===void 0&&(p=R);var v=e.value,F=e.getCaretBoundary;F===void 0&&(F=He);var y=e.isValidInputCharacter;y===void 0&&(y=$);var A=e.isCharacterSame,O=oe(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),K=We(v,h,!!x,d,u,g),ee=K[0],S=ee.formattedValue,q=ee.numAsString,le=K[1],U=D.useRef({formattedValue:S,numAsString:q}),te=function(i,o){U.current={formattedValue:i.formattedValue,numAsString:i.value},le(i,o)},re=D.useState(!1),fe=re[0],ce=re[1],L=D.useRef(null),B=D.useRef({setCaretTimeout:null,focusTimeout:null});D.useEffect(function(){return ce(!0),function(){clearTimeout(B.current.setCaretTimeout),clearTimeout(B.current.focusTimeout)}},[]);var de=d,W=function(i,o){var c=parseFloat(o);return{formattedValue:i,value:o,floatValue:isNaN(c)?void 0:c}},P=function(i,o,c){i.selectionStart===0&&i.selectionEnd===i.value.length||(Z(i,o),B.current.setCaretTimeout=setTimeout(function(){i.value===c&&i.selectionStart!==i.selectionEnd&&Z(i,o)},0))},_=function(i,o,c){return H(i,o,F(i),c)},J=function(i,o,c){var w=F(o),I=ze(o,S,i,c,w,y,A);return I=H(o,I,w),I},ve=function(i){var o=i.formattedValue;o===void 0&&(o="");var c=i.input,w=i.setCaretPosition;w===void 0&&(w=!0);var I=i.source,V=i.event,j=i.numAsString,E=i.caretPos;if(c){if(E===void 0&&w){var M=i.inputValue||c.value,Q=X(c);c.value=o,E=J(M,o,Q)}c.value=o,w&&E!==void 0&&P(c,E,o)}o!==S&&te(W(o,j),{event:V,source:I})};D.useEffect(function(){var i=U.current,o=i.formattedValue,c=i.numAsString;S!==o&&(S!==q||o!==c)&&te(W(S,q),{event:void 0,source:Y.props})},[S,q]);var me=L.current?X(L.current):void 0,ge=typeof window<"u"?D.useLayoutEffect:D.useEffect;ge(function(){var i=L.current;if(S!==U.current.formattedValue&&i){var o=J(U.current.formattedValue,S,me);i.value=S,P(i,o,S)}},[S]);var he=function(i,o,c){var w=Ke(S,i),I=Object.assign(Object.assign({},w),{lastValue:S}),V=u(i,I),j=de(V);if(V=u(j,void 0),C&&!C(W(j,V))){var E=o.target,M=X(E),Q=J(i,S,M);return E.value=S,P(E,Q,S),!1}return ve({formattedValue:j,numAsString:V,inputValue:i,event:o,source:c,setCaretPosition:!0,input:o.target}),!0},xe=function(i){var o=i.target,c=o.value,w=he(c,i,Y.event);w&&s(i)},pe=function(i){var o=i.target,c=i.key,w=o.selectionStart,I=o.selectionEnd,V=o.value;V===void 0&&(V="");var j;if(c==="ArrowLeft"||c==="Backspace"?j=Math.max(w-1,0):c==="ArrowRight"?j=Math.min(w+1,V.length):c==="Delete"&&(j=w),j===void 0||w!==I){m(i);return}var E=j;if(c==="ArrowLeft"||c==="ArrowRight"){var M=c==="ArrowLeft"?"left":"right";E=_(V,j,M),E!==j&&i.preventDefault()}else c==="Delete"&&!y(V[j])?E=_(V,j,"right"):c==="Backspace"&&!y(V[j])&&(E=_(V,j,"left"));E!==j&&P(o,E,V),i.isUnitTestRun&&P(o,E,V),m(i)},Ce=function(i){var o=i.target,c=o.selectionStart,w=o.selectionEnd,I=o.value;if(I===void 0&&(I=""),c===w){var V=_(I,c);V!==c&&P(o,V,I)}l(i)},be=function(i){i.persist&&i.persist();var o=i.target;L.current=o,B.current.focusTimeout=setTimeout(function(){var c=o.selectionStart,w=o.selectionEnd,I=o.value;I===void 0&&(I="");var V=_(I,c);V!==c&&!(c===0&&w===I.length)&&P(o,V,I),N(i)},0)},Ve=function(i){L.current=null,clearTimeout(B.current.focusTimeout),clearTimeout(B.current.setCaretTimeout),p(i)},Ne=fe&&Ue()?"numeric":void 0,ae=Object.assign({inputMode:Ne},O,{type:t,value:S,onChange:xe,onKeyDown:pe,onMouseUp:Ce,onFocus:be,onBlur:Ve});if(r==="text")return a?T.createElement(T.Fragment,null,a(S,O)||null):T.createElement("span",Object.assign({},O,{ref:f}),S);if(n){var ye=n;return T.createElement(ye,Object.assign({},ae,{ref:f}))}return T.createElement("input",Object.assign({},ae,{ref:f}))}function Ze(e,t){var r=t.format,n=t.allowEmptyFormatting,a=t.mask,f=t.patternChar;if(f===void 0&&(f="#"),e===""&&!n)return"";for(var d=0,u=r.split(""),h=0,x=r.length;h<x;h++)r[h]===f&&(u[h]=e[d]||se(a,d),d+=1);return u.join("")}function et(e,t,r){t===void 0&&(t=Ge(e));var n=r.format,a=r.patternChar;a===void 0&&(a="#");var f=t.from,d=t.to,u=t.lastValue;u===void 0&&(u="");var h=function(p){return n[p]===a},x=function(p,v){for(var F="",y=0;y<p.length;y++)h(v+y)&&$(p[y])&&(F+=p[y]);return F},g=function(p){return p.replace(/[^0-9]/g,"")};if(!n.match(/\d/))return g(e);if(u===""&&e.length===n.length){for(var C="",s=0;s<e.length;s++)if(h(s))$(e[s])&&(C+=e[s]);else if(e[s]!==n[s])return g(e);return C}var m=u.substring(0,f.start),l=e.substring(d.start,d.end),N=u.substring(f.end);return""+x(m,0)+g(l)+x(N,f.end)}function tt(e,t){var r=t.format,n=t.mask,a=t.patternChar;a===void 0&&(a="#");var f=Array.from({length:e.length+1}).map(function(){return!0}),d=0,u=-1,h={};r.split("").forEach(function(s,m){var l=void 0;s===a&&(d++,l=se(n,d-1),u===-1&&e[m]===l&&(u=m)),h[m]=l});for(var x=function(s){return r[s]===a&&e[s]!==h[s]},g=0,C=f.length;g<C;g++)f[g]=g===u||x(g)||x(g-1);return f[r.indexOf(a)]=!0,f}function rt(e){var t=e.mask;if(t){var r=t==="string"?t:t.toString();if(r.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function at(e,t){return e===""?!0:!(t!=null&&t.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function nt(e){e.mask,e.allowEmptyFormatting;var t=e.format,r=e.inputMode;r===void 0&&(r="numeric");var n=e.onKeyDown;n===void 0&&(n=R);var a=e.patternChar;a===void 0&&(a="#");var f=e.value,d=e.defaultValue,u=e.valueIsNumericString,h=oe(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);rt(e);var x=function(l){return tt(l,e)},g=function(l){var N=l.key,p=l.target,v=p.selectionStart,F=p.selectionEnd,y=p.value;if(v!==F){n(l);return}var A=v;if(N==="Backspace"||N==="Delete"){var O="right";if(N==="Backspace"){for(;A>0&&t[A-1]!==a;)A--;O="left"}else{for(var K=t.length;A<K&&t[A]!==a;)A++;O="right"}A=H(y,A,x(y),O)}else t[A]!==a&&N!=="ArrowLeft"&&N!=="ArrowRight"&&(A=H(y,A+1,x(y),"right"));A!==v&&Z(p,A),n(l)},C=z(f)?d:f,s=u??at(C,t),m=Object.assign(Object.assign({},e),{valueIsNumericString:s});return Object.assign(Object.assign({},h),{value:f,defaultValue:d,valueIsNumericString:s,inputMode:r,format:function(l){return Ze(l,m)},removeFormatting:function(l,N){return et(l,N,m)},getCaretBoundary:x,onKeyDown:g})}function ue(e){var t=nt(e);return T.createElement(Xe,Object.assign({},t))}const ot=()=>{const e=Se(),[t,r]=D.useState(!1),n=we(),{isScreenMobile:a}=Re(),{mergeDataWithLocalStorage:f,getDataFromLocalStorage:d}=Be(),u=d("paymentMethod"),{originPath:h}=Ie();je(()=>{n(!0)});const x=(s=0)=>{const m=new Date,l=m.getFullYear(),N=m.getMonth()+1,p=m.getDate()<10?`0${m.getDate()}`:`${m.getDate()}`;return`${+l+s}-0${N}-${p}`},g=Ae({initialValues:{cardName:u!=null&&u.cardName?u==null?void 0:u.cardName:"",cardNumber:u!=null&&u.cardNumber?u==null?void 0:u.cardNumber:"",expiration:u!=null&&u.expiration?u==null?void 0:u.expiration:"",CVV:u!=null&&u.CVV?u==null?void 0:u.CVV:""},validationSchema:Ee({cardName:G().required("Required").min(3,"Must be 3 characters or more").max(20,"Must be 20 characters or less"),cardNumber:G().required("Required").test("cardNumber","Card number must be 16 characters",s=>s.split(" ").join("").length===16),expiration:G().required("Required").test("expiration","Card expiration date must be greater than today",s=>s>x()),CVV:G().required("Required")}),onSubmit:s=>{e(Fe.setPaymentMethod(s)),f(s,"paymentMethod"),r(!0)}}),C=s=>g.errors[s]&&g.touched[s];return b.jsxs(ke,{children:[a&&b.jsx(De,{page:"Payment Method"}),b.jsxs(k,{className:"d-flex flex-column  mt-3",onSubmit:g.handleSubmit,children:[b.jsxs(k.Group,{className:"mb-2",children:[b.jsxs(k.Label,{className:"fw-medium",children:["Card Holder Name"," ",C("cardName")&&b.jsx("span",{className:"text-danger",children:" * "})]}),b.jsx(k.Control,{className:`p-3 ${C("cardName")?"border-danger":""}`,type:"text",id:"cardName",placeholder:"Enter card holder name",...g.getFieldProps("cardName")})]}),b.jsxs(k.Group,{className:"mb-2",children:[b.jsxs(k.Label,{className:"fw-medium",children:["Card Number"," ",C("cardNumber")&&b.jsx("span",{className:"text-danger",children:" * "})]}),b.jsx(ue,{id:"cardNumber",className:`p-3 ${C("cardNumber")?"border-danger":""}`,format:"#### #### #### ####",placeholder:"4111 1111 1111 1111",customInput:k.Control,...g.getFieldProps("cardNumber")})]}),b.jsxs("div",{className:"d-flex gap-2",children:[b.jsxs(k.Group,{className:"w-50",children:[b.jsxs(k.Label,{className:"fw-medium",children:["Expiration"," ",C("expiration")&&b.jsx("span",{className:"text-danger",children:" * "})]}),b.jsx(k.Control,{id:"expiration",className:`p-3 ${C("expiration")?"border-danger":""}`,type:"date",placeholder:"DD/MM/YY",min:x(),max:x(5),...g.getFieldProps("expiration")})]}),b.jsxs(k.Group,{className:"mb-3 w-50",children:[b.jsxs(k.Label,{className:"fw-medium",children:["CVV"," ",C("CVV")&&b.jsx("span",{className:"text-danger",children:" * "})]}),b.jsx(ue,{id:"CVV",className:`p-3 ${C("CVV")?"border-danger":""}`,format:"###",placeholder:"123",customInput:k.Control,...g.getFieldProps("CVV")})]})]}),b.jsx(ne,{variant:"dark",className:"p-3 align-self-md-end px-md-5 rounded-3",type:"submit",children:"Save"})]}),b.jsxs(Oe,{title:"Your payment method has been saved",show:t,onClose:()=>r(!1),children:[b.jsx(ne,{variant:"white",onClick:()=>r(!1),children:"Close"}),b.jsx(Pe,{to:`/${h}/profile`,className:"btn btn-dark",children:"Go to profile"})]})]})};export{ot as default};
