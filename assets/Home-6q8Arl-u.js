import{r as n,j as e,R as f,C as d,L as m,B as N,S as C,u as y,a as b,H as S,A as _,b as v}from"./index-a3F86kwn.js";import{u as w,P as L}from"./ProductsList-ndqM-hs-.js";import{C as I}from"./CategoryList-9NRoe43m.js";import{C as x}from"./Carousel-Iev3POP9.js";import{C as t,a as k}from"./Card-lKRhq4Mm.js";import"./Anchor-CHXTm2Sg.js";const F=({categoryList:i,children:c,discountProducts:l})=>{const{carouselItemPlaceholder:o,listItemPlaceholder:s}=w(),[r,h]=n.useState(0),[j,g]=n.useState(!1),u=i.slice(0,8);n.useEffect(()=>{g(!0)},[i]);const p=a=>{h(a)};return e.jsxs("main",{className:"main mt-4",children:[e.jsxs(f,{className:"main__start d-flex",children:[e.jsx(d,{xs:12,lg:6,children:e.jsx(x,{activeIndex:r,onSelect:p,className:"main__carousel h-100",children:l.length>0?l.map(a=>e.jsx(x.Item,{id:a.id,className:"main__carousel-item h-100",children:e.jsx(m,{children:e.jsxs(t,{className:"h-100 flex-row bg-secondary bg-opacity-10",children:[e.jsx(t.Img,{src:a.image,className:"main__carousel-img rounded-3"}),e.jsx(k,{children:e.jsx(t.Body,{className:"h-100 p-0 pb-4 d-flex flex-column justify-content-end gap-1 gap-md-3",children:e.jsxs("div",{className:"bg-dark bg-opacity-50 p-1 rounded-3",children:[e.jsxs(N,{bg:"dark",className:"main__card-badge align-self-start py-2 small",children:[Math.floor(Math.random()*60+20),"% OFF"]}),e.jsxs(t.Text,{className:"mb-0 fw-normal text-white small",children:["On ",a.title]}),e.jsx(t.Title,{className:"text-white",children:"Exclusive Sales"})]})})})]})})},a.id)):o})}),e.jsxs(d,{xs:12,lg:6,className:"categories",children:[e.jsxs("div",{className:"categories__headline d-flex justify-content-between align-items-center",children:[e.jsx("h2",{className:"fw-bold",children:"Categories"}),e.jsx(m,{to:"categories",className:"text-primary z-2",children:"See All"})]}),j?e.jsx(I,{categories:u}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex gap-3",children:[s,s,s,s]})})]})]}),c]})},P=()=>e.jsx("div",{className:"mt-3 w-100 d-flex justify-content-center align-items-center",children:e.jsx(C,{animation:"border",variant:"primary"})}),R=()=>{const{renderFooter:i}=v(),{categories:c,discountProducts:l,products:o}=y(),s=Promise.all([c,l,o]);return e.jsxs(e.Fragment,{children:[e.jsxs(b,{className:"mt-3",children:[e.jsx(S,{}),e.jsx(n.Suspense,{fallback:e.jsx(P,{}),children:e.jsx(_,{resolve:s,children:r=>e.jsx(F,{categoryList:r[0],discountProducts:r[1],children:e.jsx(L,{productList:r[2]})})})})]}),i]})};export{R as default};