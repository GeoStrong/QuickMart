import{r as u,u as v,j as e,c as S,R as E,C as T,F as q,B as C,x as D,m as Z,D as A,f as F}from"./index-2uLOTj64.js";import{A as G}from"./Alert-lTxTomXU.js";import{C as N}from"./Card-3fqyQAs0.js";import{R as O}from"./RedirectionPage-KTISlkf1.js";const H=u.forwardRef(({bsPrefix:o,size:a,vertical:n=!1,className:t,role:l="group",as:r="div",...j},h)=>{const g=v(o,"btn-group");let m=g;return n&&(m=`${g}-vertical`),e.jsx(r,{...j,ref:h,role:l,className:S(t,m,a&&`${g}-${a}`)})});H.displayName="ButtonGroup";const y=H,R=u.forwardRef(({bsPrefix:o,className:a,role:n="toolbar",...t},l)=>{const r=v(o,"btn-toolbar");return e.jsx("div",{...t,ref:l,className:S(a,r),role:n})});R.displayName="ButtonToolbar";const Q=R,U=()=>{const o=u.useRef(),[a,n]=u.useState("#EE4D4D"),t=()=>{n("#fa7e7e")},l=()=>{n("#EE4D4D")};return e.jsxs("svg",{ref:o,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",onMouseOver:t,onMouseLeave:l,children:[e.jsx("path",{d:"M21 6.73046C20.98 6.73046 20.95 6.73046 20.92 6.73046C15.63 6.20046 10.35 6.00046 5.12004 6.53046L3.08004 6.73046C2.66004 6.77046 2.29004 6.47046 2.25004 6.05046C2.21004 5.63046 2.51004 5.27046 2.92004 5.23046L4.96004 5.03046C10.28 4.49046 15.67 4.70046 21.07 5.23046C21.48 5.27046 21.78 5.64046 21.74 6.05046C21.71 6.44046 21.38 6.73046 21 6.73046Z",fill:a}),e.jsx("path",{d:"M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z",fill:a}),e.jsx("path",{d:"M15.21 22.7496H8.79002C5.30002 22.7496 5.16002 20.8196 5.05002 19.2596L4.40002 9.18959C4.37002 8.77959 4.69002 8.41959 5.10002 8.38959C5.52002 8.36959 5.87002 8.67959 5.90002 9.08959L6.55002 19.1596C6.66002 20.6796 6.70002 21.2496 8.79002 21.2496H15.21C17.31 21.2496 17.35 20.6796 17.45 19.1596L18.1 9.08959C18.13 8.67959 18.49 8.36959 18.9 8.38959C19.31 8.41959 19.63 8.76959 19.6 9.18959L18.95 19.2596C18.84 20.8196 18.7 22.7496 15.21 22.7496Z",fill:a}),e.jsx("path",{d:"M13.66 17.25H10.33C9.91996 17.25 9.57996 16.91 9.57996 16.5C9.57996 16.09 9.91996 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z",fill:a}),e.jsx("path",{d:"M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z",fill:a})]})},J=({onItemsModify:o,readyItemsState:a,page:n})=>{const[t,l,r]=o,[j,h]=a,[g,m]=u.useState(!1),[b,I]=u.useState(null),[x,_]=u.useState(t.reduce((s,c)=>({...s,[c.id]:!0}),{})),p=n==="cart",w=n==="order";u.useEffect(()=>{h(t)},[t,h]);const B=(s,c)=>{_({...x,[c]:s.target.checked})},L=s=>{const c=s.target.closest(".shoppingItem__col").id,f=t.find(d=>d.id===+c);j.some(d=>d.id===f.id)||h(d=>[...d,f])},$=s=>{const c=s.target.closest(".shoppingItem__col").id,f=t.find(i=>i.id===+c);h(i=>i.filter(d=>d.id!==f.id))},M=s=>{const c=s.target.closest(".shoppingItem__col").id;m(!0),I(c)},k=s=>{const c=s.target.closest(".shoppingItem__col").id,f=p&&s.target.closest(".shoppingItem__col").querySelector("input").checked,i=t.find(P=>P.id===+c),d=s.target.dataset.action;p&&!f||i.quantity===1&&d==="-"||(d==="-"?r(i,i.quantity-1):r(i,i.quantity+1))};return e.jsxs(e.Fragment,{children:[e.jsx(E,{className:`shoppingItem mt-1 ${!p&&"wishlistPage"}`,children:t.map(s=>e.jsxs(T,{id:s.id,xs:12,md:6,className:"shoppingItem__col mb-2",children:[w&&e.jsxs(G,{className:"shoppingItem__alert mb-2 p-1 alert-danger rounded-3 text-white bg-danger",children:["Estimated time: ",Math.floor(Math.random()*7)+1," working days"]}),e.jsxs(N,{className:"shoppingItem__card w-100 flex-row",children:[e.jsx(N.Img,{className:"shoppingItem__img",src:s.img}),e.jsxs(N.Body,{className:"shoppingItem__body",children:[e.jsxs("div",{className:"shoppingItem__body-header d-flex gap-3",children:[e.jsx(N.Title,{className:"shoppingItem__body-title fw-medium small",children:s.name}),p&&e.jsx(q.Check,{checked:x[s.id],onChange:c=>{B(c,s.id),c.target.checked?L(c):$(c)},id:s.id})]}),e.jsxs(N.Text,{className:"shoppingItem__body-text text-dark fw-medium",children:["$",s.price]}),e.jsxs(Q,{className:"shoppingItem__body-toolbar justify-content-between",children:[e.jsxs(y,{className:"shoppingItem__body-group align-items-center small",children:[e.jsx(C,{onClick:k,"data-action":"-",className:"bg-white",disabled:w,children:"-"}),e.jsx("p",{className:"m-0",children:s.quantity}),e.jsx(C,{onClick:k,"data-action":"+",className:"bg-white",disabled:w,children:"+"})]}),e.jsx(y,{className:"shoppingItem__body-group shoppingItem__body-group--noborder",children:!w&&e.jsx(C,{onClick:M,className:"bg-white p-0",children:e.jsx(U,{})})})]})]})]})]},s.id))}),e.jsxs(D,{title:"Delete product from wishlist",show:g,onClose:()=>{m(!1)},children:[e.jsx(C,{variant:"white",className:"py-3 py-sm-2 rounded-3",onClick:()=>{m(!1)},children:"Cancel"}),e.jsx(C,{variant:"dark",className:"py-3 py-sm-2 rounded-3",onClick:()=>{l(b),m(!1)},children:"Delete product"})]})]})},K=({items:o})=>{const a=o==null?void 0:o.reduce((l,r)=>l+r.price*r.quantity,0),n=0,t=a+n;return e.jsxs("section",{className:"cartCheckout mt-lg-3 d-flex flex-column justify-content-lg-center align-items-center gap-lg-3",children:[e.jsx("h2",{className:"h6",children:"Order info"}),e.jsxs("div",{className:"align-self-start d-lg-flex flex-column gap-1 w-100",children:[e.jsxs("div",{className:"cartCheckout__item d-flex justify-content-between",children:[e.jsx("h3",{className:"cartCheckout__title small fw-normal",children:"Subtotal"}),e.jsxs("span",{className:"cartCheckout__value small fw-normal",children:["$ ",a]})]}),e.jsxs("div",{className:"cartCheckout__item d-flex justify-content-between",children:[e.jsx("h3",{className:"cartCheckout__title small fw-normal",children:"Shipping"}),e.jsxs("span",{className:"cartCheckout__value small fw-normal",children:["$ ",n]})]}),e.jsxs("div",{className:"cartCheckout__item d-flex justify-content-between",children:[e.jsx("h2",{className:"h6 mb-3",children:"Total"}),e.jsxs("span",{className:"fw-normal",children:["$ ",t]})]})]}),e.jsx("div",{className:"align-self-stretch w-100",children:e.jsxs(C,{className:"btn-dark w-100",children:["Checkout (",o==null?void 0:o.length,")"]})})]})},z=({itemsContainerState:o,element:a,emptyItemInfo:n})=>{const[t,l]=o,[r,j]=u.useState(),{originPath:h}=Z(),{checkAuthHandler:g}=A();F(()=>{g(`/${h}/authentication/login`)});const m=a==="cart",b=x=>l(_=>_.filter(p=>p.id!==+x)),I=(x,_)=>{l(p=>(x.quantity=_,[...p]))};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container__content mb-6 d-flex flex-column flex-lg-row gap-5 justify-content-lg-between",children:[t.length>0?e.jsx(J,{onItemsModify:[t,b,I],readyItemsState:[r,j],page:a}):e.jsx(O,{title:n[0],text:n[1],navigateTo:`/${h}/categories`,buttonName:"Explore Categories",img:n[2]}),t.length>0&&m&&e.jsx(K,{items:r})]})})};export{y as B,z as S};