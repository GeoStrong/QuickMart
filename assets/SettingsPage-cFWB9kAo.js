import{v as i,b as l,i as u,a as x,s as d,j as e,r as p,g,A as f,O as j}from"./index-kJarJC0y.js";const h=()=>{const{setDisplayProfilePanel:n}=i(),{getGeoData:r,getProfileSettings:s}=l(),{id:a}=u(t=>t.account),{currentPath:o}=x();d(()=>{n(!0)});const c=o==="payment"?s(a,"payment method"):s(a,"shipping address");return e.jsx(e.Fragment,{children:e.jsx(p.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(f,{resolve:c,children:t=>e.jsx(e.Fragment,{children:e.jsx(j,{context:{getGeoData:r,profileSettings:t}})})})})})};export{h as default};
