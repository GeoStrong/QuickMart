import{r as f,E as C,b as O,i as b,j as e,d as h,V as S,s as a}from"./index-k63RGkMX.js";import{e as s}from"./empty-cart-oAuYeZCa.js";import{S as i}from"./ShoppingContainer-ySOxBRoR.js";import{a as j}from"./ButtonToolbar-6f10pfIe.js";import"./Alert-CYWiX11k.js";import"./Anchor-hzIcsELx.js";import"./Card-bgZX73_U.js";import"./RedirectionPage-XZMBCA21.js";const c="/QuickMart/assets/order-2q2MX0_x.png",W=()=>{const[o,t]=f.useState("ongoing"),{setDisplayProfilePanel:d}=C(),{isScreenMobile:m}=O();b(()=>{d(!0)});const r=o==="ongoing",n=o==="completed",p=[{id:33,title:"Loop Silicone Strong Magnetic Watch",price:20.25,image:s,quantity:2},{id:99,title:"Loop Silicone Strong Magnetic Watch",price:15.25,image:s,quantity:1}],l=[],g="No ongoing order",u="We currently don't have any active orders in progress. Feel free to explore our products and place a new order.",y="No completed order",x="We currently don't have any completed orders. Feel free to explore our products and place a new order.";return e.jsxs(h,{children:[m&&e.jsx(S,{page:"Order History"}),e.jsxs(j,{className:"mb-3 mt-6 mt-md-3 w-100 gap-2 bg-secondary",children:[e.jsx(a,{variant:`${r?"dark":"secondary"}`,onClick:()=>{t("ongoing")},className:"rounded-3 fw-semibold py-3",children:"Ongoing"}),e.jsx(a,{variant:`${n?"dark":"secondary"}`,onClick:()=>{t("completed")},className:"rounded-3 fw-semibold py-3",children:"Completed"})]}),r&&e.jsx(i,{randomData:p,emptyItemInfo:[g,u,c],element:"order"}),n&&e.jsx(i,{randomData:l,emptyItemInfo:[y,x,c],element:"order"})]})};export{W as default};
