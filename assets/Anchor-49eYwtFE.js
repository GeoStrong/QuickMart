import{r as u,a4 as l,O as f,j as i}from"./index-nL0kgY8s.js";const p=["onKeyDown"];function y(n,s){if(n==null)return{};var e={},o=Object.keys(n),t,r;for(r=0;r<o.length;r++)t=o[r],!(s.indexOf(t)>=0)&&(e[t]=n[t]);return e}function j(n){return!n||n.trim()==="#"}const c=u.forwardRef((n,s)=>{let{onKeyDown:e}=n,o=y(n,p);const[t]=l(Object.assign({tagName:"a"},o)),r=f(a=>{t.onKeyDown(a),e==null||e(a)});return j(o.href)||o.role==="button"?i.jsx("a",Object.assign({ref:s},o,t,{onKeyDown:r})):i.jsx("a",Object.assign({ref:s},o,{onKeyDown:e}))});c.displayName="Anchor";const x=c;export{x as A};
