import{a4 as l,a3 as A}from"./index-W6B9srZp.js";const i="https://quickmart-21bf3-default-rtdb.firebaseio.com/users",r="?auth=LqYQArvL3uTpuLrsicJHxuDbzsXH2DfsXZosxsi2",c=async(e,a)=>{const t={};return a.forEach(n=>t[n]=e.get(n)),t},m=async(e,a)=>{const t=await fetch(e,a);if(!t.ok)throw A({message:"Something went wrong"},{status:500});return{data:await t.json()}},u=(e,a,t)=>e?a:[{message:t},{status:401}],P=(e,a)=>Object.values(e.data).filter(t=>{if(t.email===a.email&&t.password===a.password)return localStorage.setItem("localAccountId",t.id),t}),N=(e,a)=>Object.values(e).filter(t=>{if(t.email===a.email)return localStorage.setItem("localAccountId",t.id),t}),v=async(e,a,t)=>(await m(`${i}/user_${e}.json${r}`,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),l("/QuickMart/authentication/login/success")),S=e=>async({request:a})=>{const t=await a.formData(),n=t.get("intent"),p=n==="login",f=n==="reset",g=n==="new password",h=n==="signup",w=n==="address",y=n==="payment";let s,o=[`${i}.json${r}`],d;const $=await m(o);if((p||f)&&(s=await c(t,["email","password"])),g&&(s=await c(t,["password"]),o=[`${i}/user_${e}.json${r}`]),h){const b=Math.floor(Math.random()*100);s=await c(t,["fullName","email","password"]),!N($.data,s).length>0?o=[`${i}/user_${b}.json${r}`,{method:a.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({id:b,...s})}]:d="Account already exist"}w&&(s=await c(t,["fullName","province","city","street","postalCode","phoneNumber"]),o=[`${i}/user_${e}.json${r}`,{method:a.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({"shipping address":s})}]),y&&(s=await c(t,["cardName","cardNumber","expiration","CVV"]),o=[`${i}/user_${e}.json${r}`,{method:a.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({"payment method":s})}]);const{data:j}=await m(...o);return p?u(P($,s).length>0,l("/QuickMart"),"Invalid email or password"):f?u(N(j,s).length!==0,l("/QuickMart/authentication/login/email verification"),"Invalid email"):g?u(j.password!==s.password,v(e,a.method,s),"New password cannot be the same as your old password"):h?d?[{message:d},{status:401}]:l("/QuickMart/authentication/signup/email verification"):w||y?!0:[{message:"Something went wrong"},{status:500}]};export{S as action};
