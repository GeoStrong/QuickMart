import{r as o,k as c,j as n,n as d,a4 as w,U as L,Y as E,a5 as R,a6 as N}from"./index-kBEPsdM1.js";import{A as b}from"./Anchor-2G-trGGR.js";const x=w("h4");x.displayName="DivStyledAsH4";const j=o.forwardRef(({className:a,bsPrefix:e,as:r=x,...s},t)=>(e=c(e,"alert-heading"),n.jsx(r,{ref:t,className:d(a,e),...s})));j.displayName="AlertHeading";const B=j,k=o.forwardRef(({className:a,bsPrefix:e,as:r=b,...s},t)=>(e=c(e,"alert-link"),n.jsx(r,{ref:t,className:d(a,e),...s})));k.displayName="AlertLink";const D=k,C=o.forwardRef((a,e)=>{const{bsPrefix:r,show:s=!0,closeLabel:t="Close alert",closeVariant:v,className:y,children:g,variant:m="primary",onClose:u,dismissible:f,transition:p=N,...A}=L(a,{show:"onClose"}),l=c(r,"alert"),H=E($=>{u&&u(!1,$)}),i=p===!0?N:p,h=n.jsxs("div",{role:"alert",...i?void 0:A,ref:e,className:d(y,l,m&&`${l}-${m}`,f&&`${l}-dismissible`),children:[f&&n.jsx(R,{onClick:H,"aria-label":t,variant:v}),g]});return i?n.jsx(i,{unmountOnExit:!0,...A,ref:void 0,in:s,children:h}):s?h:null});C.displayName="Alert";const U=Object.assign(C,{Link:D,Heading:B});export{U as A};
