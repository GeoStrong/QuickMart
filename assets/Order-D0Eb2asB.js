import{r as t,n as O,f as h,j as e,g as j,i as I,B as s,h as b}from"./index-nL0kgY8s.js";import{e as i}from"./empty-cart-oAuYeZCa.js";import{B as v,S as c}from"./ShoppingContainer-Dqaxm4SH.js";import"./Alert-czrFZ-UI.js";import"./Anchor-49eYwtFE.js";import"./Card-AcKiD0f3.js";import"./RedirectionPage-l8mJtOzv.js";const d="/QuickMart/assets/order-2q2MX0_x.png",q=()=>{const[o,n]=t.useState("ongoing"),m=O(),{isScreenMobile:p}=b();h(()=>{m(!0)});const r=o==="ongoing",a=o==="completed",[l,g]=t.useState([{id:33,name:"Loop Silicone Strong Magnetic Watch",price:20.25,img:i,quantity:2},{id:99,name:"Loop Silicone Strong Magnetic Watch",price:15.25,img:i,quantity:1}]),[u,y]=t.useState([]),x="No ongoing order",C="We currently don't have any active orders in progress. Feel free to explore our products and place a new order.",f="No completed order",S="We currently don't have any completed orders. Feel free to explore our products and place a new order.";return e.jsxs(j,{children:[p&&e.jsx(I,{page:"Order History"}),e.jsxs(v,{className:"my-3 w-100 gap-2 bg-secondary",children:[e.jsx(s,{variant:`${r?"dark":"secondary"}`,onClick:()=>{n("ongoing")},className:"rounded-3 fw-semibold py-3",children:"Ongoing"}),e.jsx(s,{variant:`${a?"dark":"secondary"}`,onClick:()=>{n("completed")},className:"rounded-3 fw-semibold py-3",children:"Completed"})]}),r&&e.jsx(c,{itemsContainerState:[l,g],emptyItemInfo:[x,C,d],element:"order"}),a&&e.jsx(c,{itemsContainerState:[u,y],emptyItemInfo:[f,S,d],element:"order"})]})};export{q as default};
