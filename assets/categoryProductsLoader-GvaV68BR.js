import{productsFirstUrl as d,productsSecondUrl as u,getData as s}from"./config-S3oXEhB2.js";import{aa as y}from"./index-kBEPsdM1.js";const i=async t=>{let r;const c=isNaN(Number(t.category));c||(r=`${d}products/?categoryId=${t.category}`),c&&(r=`${u}/category/${t.category}`);const o=await s(r);return o.forEach(n=>{var a;(a=n.images)==null||a.forEach(e=>{["[","]",'"'].forEach(g=>(e=e.replaceAll(g,""),e))})}),o},l=async t=>{let r;return r=typeof JSON.parse(localStorage.getItem("activeProduct")).category=="object"?`${d}products/${t.product}`:`${u}/${t.product}`,await s(r)},$=async({params:t})=>y({category:await i(t),product:l(t)});export{$ as categoryProductsLoader};
