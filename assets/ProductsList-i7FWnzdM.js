import{y as _,z as C,D as $,r as n,j as s,s as B,g as T,R as g,C as x,u as h,a as b,p as j,L as I}from"./index-imR5RE01.js";import{C as R}from"./Carousel-JvP4AZU1.js";import{C as t}from"./Card-E4Y9A27q.js";function p({animation:c,bg:o,bsPrefix:l,size:r,...i}){l=_(l,"placeholder");const[{className:m,...d}]=C(i);return{...d,className:$(m,c?`${l}-${c}`:l,r&&`${l}-${r}`,o&&`bg-${o}`)}}const f=n.forwardRef((c,o)=>{const l=p(c);return s.jsx(B,{...l,ref:o,disabled:!0,tabIndex:-1})});f.displayName="PlaceholderButton";const L=f,y=n.forwardRef(({as:c="span",...o},l)=>{const r=p(o);return s.jsx(c,{...r,ref:l})});y.displayName="Placeholder";const a=Object.assign(y,{Button:L}),v=()=>{const c=s.jsxs(R.Item,{className:"main__carousel-item main__carousel-item--placeholder rounded-5 d-flex flex-column justify-content-end pb-3 ps-3",children:[s.jsx(a,{xs:2}),s.jsxs(a,{as:t.Text,animation:"glow",className:"m-0",children:[s.jsx(a,{xs:4})," ",s.jsx(a,{xs:6})," "]}),s.jsx(a,{as:t.Title,animation:"glow",children:s.jsx(a,{xs:6})})]}),o=s.jsx(s.Fragment,{children:s.jsxs(a,{as:T.Item,animation:"glow",className:"categories__placeholder p-2 d-flex flex-column align-items-center justify-content-end gap-2",children:[s.jsx(a,{xs:6}),s.jsx(a,{xs:12})]})}),l=s.jsxs(g,{className:"mt-3 products mt-md-5",children:[s.jsx(x,{xs:6,lg:4,className:"mb-md-7 pb-xxl-5",children:s.jsx(t,{className:"products__card products__card--placeholder",children:s.jsxs(t.Body,{className:"w-100 d-flex flex-column justify-content-end",children:[s.jsx(a,{as:t.Title,animation:"glow",children:s.jsx(a,{xs:10})}),s.jsx(a,{as:t.Text,animation:"glow",children:s.jsx(a,{xs:3})})]})})}),s.jsx(x,{xs:6,lg:4,className:"mb-md-7 pb-xxl-5",children:s.jsx(t,{className:"products__card products__card--placeholder",children:s.jsxs(t.Body,{className:"w-100 d-flex flex-column justify-content-end",children:[s.jsx(a,{as:t.Title,animation:"glow",children:s.jsx(a,{xs:10})}),s.jsx(a,{as:t.Text,animation:"glow",children:s.jsx(a,{xs:3})})]})})})]});return{carouselItemPlaceholder:c,listItemPlaceholder:o,productsRowPlaceholder:l}},k=({productList:c})=>{const[o,l]=n.useState(!1),{productsRowPlaceholder:r}=v(),{setCustomStorageValue:i}=h("activeCategory"),{setCustomStorageValue:m}=h("activeProduct"),{originPath:d,currentPath:P}=b();n.useEffect(()=>{l(!0)},[c]);const N=e=>(["[","]",'"'].forEach(w=>{e=e.replaceAll(w,"")}),e),u=e=>typeof e=="object";return s.jsxs(n.Fragment,{children:[s.jsx(g,{className:`mt-0 products mb-5 ${P!==d&&"pt-1 pt-lg-4"} pb-4`,children:o&&c.map(e=>s.jsx(x,{id:e.id,xs:6,lg:4,onClick:()=>{m(e,j.setActiveProduct),i(u(e.category)?e.category:{id:e.category,name:e.category},j.setActiveCategory)},children:s.jsx(I,{to:`/${d}/categories/${u(e.category)?e.category.id:e.category}/product/${e.id}`,children:s.jsxs(t,{className:"products__card",children:[s.jsx(t.Img,{variant:"top",src:e.images?N(e.images[0]):e.image}),s.jsxs(t.Body,{className:"w-100",children:[s.jsx(t.Title,{className:"h6",children:e.title}),s.jsxs(t.Text,{className:"small fw-semibold",children:["$ ",e.price]})]})]})})},e.id))}),!o&&r]})};export{k as P,v as u};