import{r as t,q as O,s as b,j as e,a as h,c as j,o as s,b as I}from"./index-kBEPsdM1.js";import{e as i}from"./empty-cart-oAuYeZCa.js";import{B as v,S as c}from"./ShoppingContainer-yEEBP6Rj.js";import"./Alert-QN-3SadB.js";import"./Anchor-2G-trGGR.js";import"./Card--7Li3_k0.js";import"./RedirectionPage-_FC4wHa0.js";const d="/QuickMart/assets/order-2q2MX0_x.png",B=()=>{const[o,n]=t.useState("ongoing"),m=O(),{isScreenMobile:p}=I();b(()=>{m(!0)});const r=o==="ongoing",a=o==="completed",[l,g]=t.useState([{id:33,name:"Loop Silicone Strong Magnetic Watch",price:20.25,img:i,quantity:2},{id:99,name:"Loop Silicone Strong Magnetic Watch",price:15.25,img:i,quantity:1}]),[u,y]=t.useState([]),x="No ongoing order",C="We currently don't have any active orders in progress. Feel free to explore our products and place a new order.",S="No completed order",f="We currently don't have any completed orders. Feel free to explore our products and place a new order.";return e.jsxs(h,{children:[p&&e.jsx(j,{page:"Order History"}),e.jsxs(v,{className:"mb-3 mt-6 mt-md-3 w-100 gap-2 bg-secondary",children:[e.jsx(s,{variant:`${r?"dark":"secondary"}`,onClick:()=>{n("ongoing")},className:"rounded-3 fw-semibold py-3",children:"Ongoing"}),e.jsx(s,{variant:`${a?"dark":"secondary"}`,onClick:()=>{n("completed")},className:"rounded-3 fw-semibold py-3",children:"Completed"})]}),r&&e.jsx(c,{itemsContainerState:[l,g],emptyItemInfo:[x,C,d],element:"order"}),a&&e.jsx(c,{itemsContainerState:[u,y],emptyItemInfo:[S,f,d],element:"order"})]})};export{B as default};
