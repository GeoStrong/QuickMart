import{r as i,c as k,j as e,d as L,z as B,D as U,E as D,G as F,I as K,J as E,p as V,g as M,h as O,i as T,v as G,C as Z,y as z,F as r,B as S}from"./index-rwzQzinf.js";const $=B("h4");$.displayName="DivStyledAsH4";const H=i.forwardRef(({className:n,bsPrefix:a,as:c=$,...o},u)=>(a=k(a,"alert-heading"),e.jsx(c,{ref:u,className:L(n,a),...o})));H.displayName="AlertHeading";const P=H,I=i.forwardRef(({className:n,bsPrefix:a,as:c=U,...o},u)=>(a=k(a,"alert-link"),e.jsx(c,{ref:u,className:L(n,a),...o})));I.displayName="AlertLink";const J=I,R=i.forwardRef((n,a)=>{const{bsPrefix:c,show:o=!0,closeLabel:u="Close alert",closeVariant:f,className:N,children:w,variant:g="primary",onClose:b,dismissible:m,transition:s=E,...C}=D(n,{show:"onClose"}),x=k(c,"alert"),v=F(l=>{b&&b(!1,l)}),p=s===!0?E:s,y=e.jsxs("div",{role:"alert",...p?void 0:C,ref:a,className:L(N,x,g&&`${x}-${g}`,m&&`${x}-dismissible`),children:[m&&e.jsx(K,{onClick:v,"aria-label":u,variant:f}),w]});return p?e.jsx(p,{unmountOnExit:!0,...C,ref:void 0,in:o,children:y}):o?y:null});R.displayName="Alert";const A=Object.assign(R,{Link:J,Heading:P}),W="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0001%2018.9582C5.05841%2018.9582%201.04175%2014.9415%201.04175%209.99984C1.04175%205.05817%205.05841%201.0415%2010.0001%201.0415C14.9417%201.0415%2018.9584%205.05817%2018.9584%209.99984C18.9584%2014.9415%2014.9417%2018.9582%2010.0001%2018.9582ZM10.0001%202.2915C5.75008%202.2915%202.29175%205.74984%202.29175%209.99984C2.29175%2014.2498%205.75008%2017.7082%2010.0001%2017.7082C14.2501%2017.7082%2017.7084%2014.2498%2017.7084%209.99984C17.7084%205.74984%2014.2501%202.2915%2010.0001%202.2915Z'%20fill='white'/%3e%3cpath%20d='M8.8167%2012.9832C8.65003%2012.9832%208.4917%2012.9165%208.37503%2012.7998L6.0167%2010.4415C5.77503%2010.1998%205.77503%209.79984%206.0167%209.55817C6.25837%209.3165%206.65837%209.3165%206.90003%209.55817L8.8167%2011.4748L13.1%207.1915C13.3417%206.94984%2013.7417%206.94984%2013.9834%207.1915C14.225%207.43317%2014.225%207.83317%2013.9834%208.07484L9.25837%2012.7998C9.1417%2012.9165%208.98337%2012.9832%208.8167%2012.9832Z'%20fill='white'/%3e%3c/svg%3e",q=()=>{const n=i.useRef(),a=i.useRef(),c=V(),{checkLocation:o,getSiblingLocation:u}=M(3),[f,N]=i.useState(),[w,g]=i.useState(!0),[b,m]=i.useState(!1),[s,C]=i.useState(!1),{checkAuthHandler:x}=O(),v=o("login"),p=()=>N((Math.random()*10).toFixed(5).split(".").join("")),y=()=>{p(),m(!1),setTimeout(()=>{m(!0)},500)},l=h=>{const d=h.target,j=h.target.nextElementSibling,_=h.target.previousElementSibling;if(d.value.length>1){d.value="";return}+d.dataset.index==5&&g(!1),j&&j.hasAttribute("disabled")&&d.value!==""&&(j.removeAttribute("disabled"),d.setAttribute("disabled",!0),j.focus()),h.key==="Backspace"&&+d.dataset.index!=0&&(d.value="",_.removeAttribute("disabled"),d.setAttribute("disabled",!0),_.focus())};T(()=>{p(),v&&x(),n.current.focus()});const t=G({initialValues:{input0:"",input1:"",input2:"",input3:"",input4:"",input5:""},onSubmit:h=>{if(Object.values(h).join("")!==f){C(!0),a.current.focus();return}return c(u(v?"new password":"success"))}});return e.jsxs(Z,{className:"position-relative",children:[e.jsxs(A,{dismissible:!0,onClose:()=>{n.current.focus(),setTimeout(()=>{m(!0)},1e3)},className:"alert mt-3 position-absolute fw-light rounded-4 d-flex gap-2 align-items-center text-center text-dark",children:[e.jsx("div",{className:"alert-img bg-primary",children:e.jsx("img",{src:W,alt:"alert"})}),"Close this modal window to get the 6-digit Verification code."]}),b&&e.jsx(A,{dismissible:!0,onClose:()=>{m(!1)},className:"alert mt-3 alert__code position-absolute rounded-4 text-dark",children:e.jsxs(A.Heading,{className:"text-center h6 ",children:["Your verification code is"," ",e.jsx("span",{className:"fw-bold d-block",children:f})]})}),e.jsx(z,{pageName:"Forgot Password",title:"Email Verification",text:"Enter the 6-digit verification code send to your email address."}),e.jsxs(r,{className:"form d-flex flex-column align-items-stretch align-items-md-center w-100",onSubmit:t.handleSubmit,children:[e.jsxs(r.Group,{className:"d-flex gap-2 gap-md-3 justify-content-center",children:[e.jsx(r.Control,{ref:n,type:"number",id:"input0","data-index":"0",maxLength:"1",className:`form__control text-center border-primary ${s&&"border-danger"}`,onKeyUp:l,onChange:t.handleChange,value:t.values.input0}),e.jsx(r.Control,{type:"number",id:"input1","data-index":"1",maxLength:"1",className:`form__control text-center border-primary ${s&&"border-danger"}`,onKeyUp:l,onChange:t.handleChange,value:t.values.input1,disabled:!0}),e.jsx(r.Control,{type:"number",id:"input2","data-index":"2",maxLength:"1",className:`form__control text-center border-primary ${s&&"border-danger"}`,onKeyUp:l,onChange:t.handleChange,value:t.values.input2,disabled:!0}),e.jsx(r.Control,{type:"number",id:"input3","data-index":"3",maxLength:"1",className:`form__control text-center border-primary ${s&&"border-danger"}`,onKeyUp:l,onChange:t.handleChange,value:t.values.input3,disabled:!0}),e.jsx(r.Control,{type:"number",id:"input4","data-index":"4",maxLength:"1",className:`form__control text-center border-primary ${s&&"border-danger"}`,onKeyUp:l,onChange:t.handleChange,value:t.values.input4,disabled:!0}),e.jsx(r.Control,{ref:a,type:"number",id:"input5","data-index":"5",maxLength:"1",className:`form__control text-center border-primary ${s&&"border-danger"}`,onKeyUp:l,onChange:t.handleChange,value:t.values.input5,disabled:!0})]}),e.jsx(r.Text,{className:"text-danger",children:s&&"Invalid Code"}),e.jsxs("div",{className:"form__buttons mt-3 d-flex flex-column align-items-center",children:[e.jsx(S,{variant:"white",type:"button",className:"text-primary text-center mb-2",onClick:y,children:"Resend code"}),e.jsx(S,{variant:"dark",type:"submit",className:"text-white w-100 py-3",disabled:w,children:"Proceed"})]})]})]})};export{q as default};