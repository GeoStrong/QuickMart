import{r as n,u as w,j as t,c as j,m as y,C as E,l as I,L as $}from"./index-cBrRlSE_.js";const x=1e3;function B(e,r,a){const s=(e-r)/(a-r)*100;return Math.round(s*x)/x}function h({min:e,now:r,max:a,label:s,visuallyHidden:l,striped:o,animated:c,className:m,style:p,variant:d,bsPrefix:i,...u},f){return t.jsx("div",{ref:f,...u,role:"progressbar",className:j(m,`${i}-bar`,{[`bg-${d}`]:d,[`${i}-bar-animated`]:c,[`${i}-bar-striped`]:c||o}),style:{width:`${B(r,e,a)}%`,...p},"aria-valuenow":r,"aria-valuemin":e,"aria-valuemax":a,children:l?t.jsx("span",{className:"visually-hidden",children:s}):s})}const v=n.forwardRef(({isChild:e=!1,...r},a)=>{const s={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...r};if(s.bsPrefix=w(s.bsPrefix,"progress"),e)return h(s,a);const{min:l,now:o,max:c,label:m,visuallyHidden:p,striped:d,animated:i,bsPrefix:u,variant:f,className:N,children:g,...b}=s;return t.jsx("div",{ref:a,...b,className:j(N,u),children:g?y(g,P=>n.cloneElement(P,{isChild:!0})):h({min:l,now:o,max:c,label:m,visuallyHidden:p,striped:d,animated:i,bsPrefix:u,variant:f},a)})});v.displayName="ProgressBar";const L=v,R=()=>{const[e,r]=n.useState(0),[a,s]=n.useState(!1);return n.useEffect(()=>{const l=setInterval(()=>{r(o=>o>=100?0:(o+1)*3)},1e3);return e>=100&&clearInterval(l),()=>clearInterval(l)},[e]),n.useEffect(()=>{e>=100&&setTimeout(()=>{s(!0)},1e3)},[e]),t.jsx(n.Fragment,{children:t.jsxs(E,{className:"w-100 splashscreen d-flex justify-content-center align-items-center flex-column gap-3 gap-md-5",children:[t.jsx("img",{src:I,alt:"logo"}),a?t.jsx($,{to:"onboarding",className:"btn btn-dark fs-5",children:"Let's go"}):t.jsx(L,{className:"splashscreen__progress mt-3",animated:!0,now:e})]})})};export{R as default};
