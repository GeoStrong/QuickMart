import{r as n,V as $e,W as De,i as F,j as o,m as j,X as Me,Y as Ae,Z as Le,_ as Oe,$ as ae,a0 as _e,U as oe,a1 as Xe,a2 as Ue}from"./index-m8s50vRk.js";import{A as le}from"./Anchor-RF2kKSiY.js";function We(r,s){const l=n.useRef(!0);n.useEffect(()=>{if(l.current){l.current=!1;return}return r()},s)}const P=2**31-1;function ie(r,s,l){const c=l-Date.now();r.current=c<=P?setTimeout(s,c):setTimeout(()=>ie(r,s,l),P)}function He(){const r=$e(),s=n.useRef();return De(()=>clearTimeout(s.current)),n.useMemo(()=>{const l=()=>clearTimeout(s.current);function c(h,i=0){r()&&(l(),i<=P?s.current=setTimeout(h,i):ie(s,h,Date.now()+i))}return{set:c,clear:l,handleRef:s}},[])}const ce=n.forwardRef(({className:r,bsPrefix:s,as:l="div",...c},h)=>(s=F(s,"carousel-caption"),o.jsx(l,{ref:h,className:j(r,s),...c})));ce.displayName="CarouselCaption";const Pe=ce,ue=n.forwardRef(({as:r="div",bsPrefix:s,className:l,...c},h)=>{const i=j(l,F(s,"carousel-item"));return o.jsx(r,{ref:h,...c,className:i})});ue.displayName="CarouselItem";const Fe=ue,Ke=40;function Ve(r){if(!r||!r.style||!r.parentNode||!r.parentNode.style)return!1;const s=getComputedStyle(r);return s.display!=="none"&&s.visibility!=="hidden"&&getComputedStyle(r.parentNode).display!=="none"}const de=n.forwardRef(({defaultActiveIndex:r=0,...s},l)=>{const{as:c="div",bsPrefix:h,slide:i=!0,fade:fe=!1,controls:me=!0,indicators:$=!0,indicatorLabels:D=[],activeIndex:p,onSelect:v,onSlide:S,onSlid:y,interval:I=5e3,keyboard:K=!0,onKeyDown:M,pause:N="hover",onMouseOver:A,onMouseOut:L,wrap:T=!0,touch:V=!0,onTouchStart:O,onTouchMove:_,onTouchEnd:X,prevIcon:he=o.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:B="Previous",nextIcon:pe=o.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Y="Next",variant:Z,className:ve,children:U,...Ce}=Me({defaultActiveIndex:r,...s},{activeIndex:"onSelect"}),f=F(h,"carousel"),R=Ae(),b=n.useRef(null),[q,z]=n.useState("next"),[xe,k]=n.useState(!1),[E,G]=n.useState(!1),[a,Ne]=n.useState(p||0);n.useEffect(()=>{!E&&p!==a&&(b.current?z(b.current):z((p||0)>a?"next":"prev"),i&&G(!0),Ne(p||0))},[p,E,a,i]),n.useEffect(()=>{b.current&&(b.current=null)});let C=0,J;Le(U,(e,t)=>{++C,t===p&&(J=e.props.interval)});const Q=Oe(J),u=n.useCallback(e=>{if(E)return;let t=a-1;if(t<0){if(!T)return;t=C-1}b.current="prev",v==null||v(t,e)},[E,a,v,T,C]),d=ae(e=>{if(E)return;let t=a+1;if(t>=C){if(!T)return;t=0}b.current="next",v==null||v(t,e)}),W=n.useRef();n.useImperativeHandle(l,()=>({element:W.current,prev:u,next:d}));const ee=ae(()=>{!document.hidden&&Ve(W.current)&&(R?u():d())}),x=q==="next"?"start":"end";We(()=>{i||(S==null||S(a,x),y==null||y(a,x))},[a]);const Re=`${f}-item-${q}`,be=`${f}-item-${x}`,Ee=n.useCallback(e=>{_e(e),S==null||S(a,x)},[S,a,x]),Se=n.useCallback(()=>{G(!1),y==null||y(a,x)},[y,a,x]),ye=n.useCallback(e=>{if(K&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),R?d(e):u(e);return;case"ArrowRight":e.preventDefault(),R?u(e):d(e);return}M==null||M(e)},[K,M,u,d,R]),Ie=n.useCallback(e=>{N==="hover"&&k(!0),A==null||A(e)},[N,A]),Te=n.useCallback(e=>{k(!1),L==null||L(e)},[L]),ne=n.useRef(0),w=n.useRef(0),te=He(),ge=n.useCallback(e=>{ne.current=e.touches[0].clientX,w.current=0,N==="hover"&&k(!0),O==null||O(e)},[N,O]),je=n.useCallback(e=>{e.touches&&e.touches.length>1?w.current=0:w.current=e.touches[0].clientX-ne.current,_==null||_(e)},[_]),ke=n.useCallback(e=>{if(V){const t=w.current;Math.abs(t)>Ke&&(t>0?u(e):d(e))}N==="hover"&&te.set(()=>{k(!1)},I||void 0),X==null||X(e)},[V,N,u,d,te,I,X]),se=I!=null&&!xe&&!E,H=n.useRef();n.useEffect(()=>{var e,t;if(!se)return;const m=R?u:d;return H.current=window.setInterval(document.visibilityState?ee:m,(e=(t=Q.current)!=null?t:I)!=null?e:void 0),()=>{H.current!==null&&clearInterval(H.current)}},[se,u,d,Q,I,ee,R]);const re=n.useMemo(()=>$&&Array.from({length:C},(e,t)=>m=>{v==null||v(t,m)}),[$,C,v]);return o.jsxs(c,{ref:W,...Ce,onKeyDown:ye,onMouseOver:Ie,onMouseOut:Te,onTouchStart:ge,onTouchMove:je,onTouchEnd:ke,className:j(ve,f,i&&"slide",fe&&`${f}-fade`,Z&&`${f}-${Z}`),children:[$&&o.jsx("div",{className:`${f}-indicators`,children:oe(U,(e,t)=>o.jsx("button",{type:"button","data-bs-target":"","aria-label":D!=null&&D.length?D[t]:`Slide ${t+1}`,className:t===a?"active":void 0,onClick:re?re[t]:void 0,"aria-current":t===a},t))}),o.jsx("div",{className:`${f}-inner`,children:oe(U,(e,t)=>{const m=t===a;return i?o.jsx(Xe,{in:m,onEnter:m?Ee:void 0,onEntered:m?Se:void 0,addEndListener:Ue,children:(g,we)=>n.cloneElement(e,{...we,className:j(e.props.className,m&&g!=="entered"&&Re,(g==="entered"||g==="exiting")&&"active",(g==="entering"||g==="exiting")&&be)})}):n.cloneElement(e,{className:j(e.props.className,m&&"active")})})}),me&&o.jsxs(o.Fragment,{children:[(T||p!==0)&&o.jsxs(le,{className:`${f}-control-prev`,onClick:u,children:[he,B&&o.jsx("span",{className:"visually-hidden",children:B})]}),(T||p!==C-1)&&o.jsxs(le,{className:`${f}-control-next`,onClick:d,children:[pe,Y&&o.jsx("span",{className:"visually-hidden",children:Y})]})]})]})});de.displayName="Carousel";const Ze=Object.assign(de,{Caption:Pe,Item:Fe});export{Ze as C};
