import{u as b,a as I,c as P,r as d,j as e,B as C,L as S,R as u,C as x,b as h,d as B,S as L,e as v,f as T,g as $,H as F,A as E,h as R}from"./index-2uLOTj64.js";import{C as j}from"./Carousel-peCH2hpb.js";import{C as s,a as k}from"./Card-3fqyQAs0.js";import{C as A}from"./CategoryList-tT7Zcxld.js";import"./Anchor-o5kWQAnj.js";function p({animation:c,bg:r,bsPrefix:a,size:n,...o}){a=b(a,"placeholder");const[{className:t,...m}]=I(o);return{...m,className:P(t,c?`${a}-${c}`:a,n&&`${a}-${n}`,r&&`bg-${r}`)}}const g=d.forwardRef((c,r)=>{const a=p(c);return e.jsx(C,{...a,ref:r,disabled:!0,tabIndex:-1})});g.displayName="PlaceholderButton";const O=g,f=d.forwardRef(({as:c="span",...r},a)=>{const n=p(r);return e.jsx(c,{...n,ref:a})});f.displayName="Placeholder";const l=Object.assign(f,{Button:O}),N=()=>{const c=e.jsxs(j.Item,{className:"main__carousel-item main__carousel-item--placeholder rounded-5 d-flex flex-column justify-content-end pb-3 ps-3",children:[e.jsx(l,{xs:2}),e.jsxs(l,{as:s.Text,animation:"glow",className:"m-0",children:[e.jsx(l,{xs:4})," ",e.jsx(l,{xs:6})," "]}),e.jsx(l,{as:s.Title,animation:"glow",children:e.jsx(l,{xs:6})})]}),r=e.jsx(e.Fragment,{children:e.jsxs(l,{as:S.Item,animation:"glow",className:"categories__placeholder p-2 d-flex flex-column align-items-center justify-content-end gap-2",children:[e.jsx(l,{xs:6}),e.jsx(l,{xs:12})]})}),a=e.jsxs(u,{className:"mt-3 products mt-md-5",children:[e.jsx(x,{xs:6,lg:4,className:"mb-md-7 pb-xxl-5",children:e.jsx(s,{className:"products__card products__card--placeholder",children:e.jsxs(s.Body,{className:"w-100 d-flex flex-column justify-content-end",children:[e.jsx(l,{as:s.Title,animation:"glow",children:e.jsx(l,{xs:10})}),e.jsx(l,{as:s.Text,animation:"glow",children:e.jsx(l,{xs:3})})]})})}),e.jsx(x,{xs:6,lg:4,className:"mb-md-7 pb-xxl-5",children:e.jsx(s,{className:"products__card products__card--placeholder",children:e.jsxs(s.Body,{className:"w-100 d-flex flex-column justify-content-end",children:[e.jsx(l,{as:s.Title,animation:"glow",children:e.jsx(l,{xs:10})}),e.jsx(l,{as:s.Text,animation:"glow",children:e.jsx(l,{xs:3})})]})})})]});return{carouselItemPlaceholder:c,listItemPlaceholder:r,productsRowPlaceholder:a}},H=({categoryList:c,children:r,discountProducts:a})=>{const{carouselItemPlaceholder:n,listItemPlaceholder:o}=N(),[t,m]=d.useState(0),[_,w]=d.useState(!1);d.useEffect(()=>{w(!0)},[c]);const y=i=>{m(i)};return e.jsxs("main",{className:"main mt-4",children:[e.jsxs(u,{className:"main__start d-flex",children:[e.jsx(x,{xs:12,lg:6,children:e.jsx(j,{activeIndex:t,onSelect:y,className:"main__carousel h-100",children:a.length>0?a.map(i=>e.jsx(j.Item,{id:i.id,className:"main__carousel-item h-100",children:e.jsx(h,{children:e.jsxs(s,{className:"h-100 flex-row bg-secondary bg-opacity-10",children:[e.jsx(s.Img,{src:i.image,className:"main__carousel-img rounded-3"}),e.jsx(k,{children:e.jsx(s.Body,{className:"h-100 p-0 pb-4 d-flex flex-column justify-content-end gap-1 gap-md-3",children:e.jsxs("div",{className:"bg-dark bg-opacity-50 p-1 rounded-3",children:[e.jsxs(B,{bg:"dark",className:"main__card-badge align-self-start py-2 small",children:[Math.floor(Math.random()*60+20),"% OFF"]}),e.jsxs(s.Text,{className:"mb-0 fw-normal text-white small",children:["On ",i.title]}),e.jsx(s.Title,{className:"text-white",children:"Exclusive Sales"})]})})})]})})},i.id)):n})}),e.jsxs(x,{xs:12,lg:6,className:"categories",children:[e.jsxs("div",{className:"categories__headline d-flex justify-content-between align-items-center",children:[e.jsx("h2",{className:"fw-bold",children:"Categories"}),e.jsx(h,{to:"categories",className:"text-primary z-2",children:"See All"})]}),_?e.jsx(A,{categories:c}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex gap-3",children:[o,o,o,o]})})]})]}),r]})},M=({productList:c})=>{const{productsRowPlaceholder:r}=N(),[a,n]=d.useState(!1);d.useEffect(()=>{n(!0)},[c]);const o=t=>(["[","]",'"'].forEach(m=>{t=t.replaceAll(m,"")}),t);return e.jsxs(d.Fragment,{children:[e.jsxs(u,{className:"mt-3 products mt-md-5 mb-5 pb-4",children:[e.jsx("h1",{className:"h1 fw-bold",children:"Latest Products"}),a&&c.map(t=>e.jsx(x,{id:t.id,xs:6,lg:4,className:"",children:e.jsx(h,{children:e.jsxs(s,{className:"products__card",children:[e.jsx(s.Img,{variant:"top",src:o(t.images[0])}),e.jsxs(s.Body,{className:"w-100",children:[e.jsx(s.Title,{className:"h6",children:t.title}),e.jsxs(s.Text,{className:"small fw-semibold",children:["$ ",t.price]})]})]})})},t.id))]}),!a&&r]})},z=()=>e.jsx("div",{className:"mt-3 w-100 d-flex justify-content-center align-items-center",children:e.jsx(L,{animation:"border",variant:"primary"})}),Q=({onIdChange:c})=>{const{renderFooter:r}=R(),{products:a,categories:n,discountProducts:o}=v();return T(()=>{c(localStorage.getItem("localAccountId"))}),e.jsxs(e.Fragment,{children:[e.jsxs($,{className:"mt-3",children:[e.jsx(F,{}),e.jsx(H,{categoryList:n,discountProducts:o,children:e.jsx(d.Suspense,{fallback:e.jsx(z,{}),children:e.jsx(E,{resolve:a,children:t=>e.jsx(M,{productList:t})})})})]}),r]})};export{Q as default};