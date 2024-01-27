import{r as n,G as Me,I as $e,u as W,j as o,c as j,J as De,K as Ae,M as Le,N as Oe,O as ae,Q as _e,E as oe,T as Xe,U as Ue}from"./index-nL0kgY8s.js";import{A as le}from"./Anchor-49eYwtFE.js";function He(r,s){const l=n.useRef(!0);n.useEffect(()=>{if(l.current){l.current=!1;return}return r()},s)}const P=2**31-1;function ie(r,s,l){const c=l-Date.now();r.current=c<=P?setTimeout(s,c):setTimeout(()=>ie(r,s,l),P)}function Ke(){const r=Me(),s=n.useRef();return $e(()=>clearTimeout(s.current)),n.useMemo(()=>{const l=()=>clearTimeout(s.current);function c(h,i=0){r()&&(l(),i<=P?s.current=setTimeout(h,i):ie(s,h,Date.now()+i))}return{set:c,clear:l,handleRef:s}},[])}const ce=n.forwardRef(({className:r,bsPrefix:s,as:l="div",...c},h)=>(s=W(s,"carousel-caption"),o.jsx(l,{ref:h,className:j(r,s),...c})));ce.displayName="CarouselCaption";const Pe=ce,ue=n.forwardRef(({as:r="div",bsPrefix:s,className:l,...c},h)=>{const i=j(l,W(s,"carousel-item"));return o.jsx(r,{ref:h,...c,className:i})});ue.displayName="CarouselItem";const We=ue,Fe=40;function Be(r){if(!r||!r.style||!r.parentNode||!r.parentNode.style)return!1;const s=getComputedStyle(r);return s.display!=="none"&&s.visibility!=="hidden"&&getComputedStyle(r.parentNode).display!=="none"}const de=n.forwardRef(({defaultActiveIndex:r=0,...s},l)=>{const{as:c="div",bsPrefix:h,slide:i=!0,fade:fe=!1,controls:me=!0,indicators:M=!0,indicatorLabels:$=[],activeIndex:p,onSelect:v,onSlide:I,onSlid:S,interval:T=5e3,keyboard:F=!0,onKeyDown:D,pause:N="hover",onMouseOver:A,onMouseOut:L,wrap:y=!0,touch:B=!0,onTouchStart:O,onTouchMove:_,onTouchEnd:X,prevIcon:he=o.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:V="Previous",nextIcon:pe=o.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:G="Next",variant:J,className:ve,children:U,...Ce}=De({defaultActiveIndex:r,...s},{activeIndex:"onSelect"}),f=W(h,"carousel"),R=Ae(),E=n.useRef(null),[Q,Y]=n.useState("next"),[xe,k]=n.useState(!1),[b,q]=n.useState(!1),[a,Ne]=n.useState(p||0);n.useEffect(()=>{!b&&p!==a&&(E.current?Y(E.current):Y((p||0)>a?"next":"prev"),i&&q(!0),Ne(p||0))},[p,b,a,i]),n.useEffect(()=>{E.current&&(E.current=null)});let C=0,z;Le(U,(e,t)=>{++C,t===p&&(z=e.props.interval)});const Z=Oe(z),u=n.useCallback(e=>{if(b)return;let t=a-1;if(t<0){if(!y)return;t=C-1}E.current="prev",v==null||v(t,e)},[b,a,v,y,C]),d=ae(e=>{if(b)return;let t=a+1;if(t>=C){if(!y)return;t=0}E.current="next",v==null||v(t,e)}),H=n.useRef();n.useImperativeHandle(l,()=>({element:H.current,prev:u,next:d}));const ee=ae(()=>{!document.hidden&&Be(H.current)&&(R?u():d())}),x=Q==="next"?"start":"end";He(()=>{i||(I==null||I(a,x),S==null||S(a,x))},[a]);const Re=`${f}-item-${Q}`,Ee=`${f}-item-${x}`,be=n.useCallback(e=>{_e(e),I==null||I(a,x)},[I,a,x]),Ie=n.useCallback(()=>{q(!1),S==null||S(a,x)},[S,a,x]),Se=n.useCallback(e=>{if(F&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),R?d(e):u(e);return;case"ArrowRight":e.preventDefault(),R?u(e):d(e);return}D==null||D(e)},[F,D,u,d,R]),Te=n.useCallback(e=>{N==="hover"&&k(!0),A==null||A(e)},[N,A]),ye=n.useCallback(e=>{k(!1),L==null||L(e)},[L]),ne=n.useRef(0),w=n.useRef(0),te=Ke(),ge=n.useCallback(e=>{ne.current=e.touches[0].clientX,w.current=0,N==="hover"&&k(!0),O==null||O(e)},[N,O]),je=n.useCallback(e=>{e.touches&&e.touches.length>1?w.current=0:w.current=e.touches[0].clientX-ne.current,_==null||_(e)},[_]),ke=n.useCallback(e=>{if(B){const t=w.current;Math.abs(t)>Fe&&(t>0?u(e):d(e))}N==="hover"&&te.set(()=>{k(!1)},T||void 0),X==null||X(e)},[B,N,u,d,te,T,X]),se=T!=null&&!xe&&!b,K=n.useRef();n.useEffect(()=>{var e,t;if(!se)return;const m=R?u:d;return K.current=window.setInterval(document.visibilityState?ee:m,(e=(t=Z.current)!=null?t:T)!=null?e:void 0),()=>{K.current!==null&&clearInterval(K.current)}},[se,u,d,Z,T,ee,R]);const re=n.useMemo(()=>M&&Array.from({length:C},(e,t)=>m=>{v==null||v(t,m)}),[M,C,v]);return o.jsxs(c,{ref:H,...Ce,onKeyDown:Se,onMouseOver:Te,onMouseOut:ye,onTouchStart:ge,onTouchMove:je,onTouchEnd:ke,className:j(ve,f,i&&"slide",fe&&`${f}-fade`,J&&`${f}-${J}`),children:[M&&o.jsx("div",{className:`${f}-indicators`,children:oe(U,(e,t)=>o.jsx("button",{type:"button","data-bs-target":"","aria-label":$!=null&&$.length?$[t]:`Slide ${t+1}`,className:t===a?"active":void 0,onClick:re?re[t]:void 0,"aria-current":t===a},t))}),o.jsx("div",{className:`${f}-inner`,children:oe(U,(e,t)=>{const m=t===a;return i?o.jsx(Xe,{in:m,onEnter:m?be:void 0,onEntered:m?Ie:void 0,addEndListener:Ue,children:(g,we)=>n.cloneElement(e,{...we,className:j(e.props.className,m&&g!=="entered"&&Re,(g==="entered"||g==="exiting")&&"active",(g==="entering"||g==="exiting")&&Ee)})}):n.cloneElement(e,{className:j(e.props.className,m&&"active")})})}),me&&o.jsxs(o.Fragment,{children:[(y||p!==0)&&o.jsxs(le,{className:`${f}-control-prev`,onClick:u,children:[he,V&&o.jsx("span",{className:"visually-hidden",children:V})]}),(y||p!==C-1)&&o.jsxs(le,{className:`${f}-control-next`,onClick:d,children:[pe,G&&o.jsx("span",{className:"visually-hidden",children:G})]})]})]})});de.displayName="Carousel";const Je=Object.assign(de,{Caption:Pe,Item:We});export{Je as C};
