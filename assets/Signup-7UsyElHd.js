import{e as m,f as d,g as p,h as g,a as f,r as h,i as t,j as q,A as v}from"./index-cBrRlSE_.js";const A=()=>{const n=m(),o=d(),e=p(),{customError:a}=g(o),{originPath:i,parentPath:s}=f(3),r={fullName:"",email:"",password:""};h.useEffect(()=>{if(a===null)e(`/${i}/authentication/${s}/email verification`);else return},[a,e,i,s]);const u={fullName:t().min(2,"Too Short!").max(25,"Too Long!").required("Required"),email:t().email("Invalid email").required("Required"),password:t().min(8,"Too Short!").matches(/[A-Za-z -]/,"Password can only contain Latin letters.").required("Required")},l=c=>{n(c,{method:"PUT"})};return q.jsx(v,{page:"signup",initialValues:r,validation:u,customError:a,submitHandler:l})};export{A as default};
