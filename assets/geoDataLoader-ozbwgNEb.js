import{a7 as o,a5 as s}from"./index-nL0kgY8s.js";const r="https://api.countrystatecity.in/v1/countries",n="S2laQWljdUwwVW90MWo4c1JIaGdiM2lnRkFTTmJDU1pCTjcwN3NQOQ==",c=async(e,t="")=>{const a=await fetch(`${r}/${e}/states/${t}/${t&&"cities"}`,{method:"GET",headers:{"X-CSCAPI-KEY":n},redirect:"follow"});return a.ok?await a.json():s({message:"Error loading data"},{status:500})},l=async()=>o({getGeoData:c});export{l as geoDataLoader};
