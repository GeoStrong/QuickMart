import{e as l,f as m,g as c,h as d,r as p,i as e,j as f,A as g}from"./index-hgA-IiKE.js";const q=()=>{const i=l(),s=m(),t=c(),{customError:a}=d(s),o={fullName:"",email:"",password:""};p.useEffect(()=>{if(a===null)t("email verification");else return},[a,t]);const n={fullName:e().min(2,"Too Short!").max(25,"Too Long!").required("Required"),email:e().email("Invalid email").required("Required"),password:e().min(8,"Too Short!").matches(/[A-Za-z -]/,"Password can only contain Latin letters.").required("Required")},r=u=>{i(u,{method:"PUT"})};return f.jsx(g,{page:"signup",initialValues:o,validation:n,customError:a,submitHandler:r})};export{q as default};