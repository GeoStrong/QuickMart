import{getData as r,accountUrl as o,authToken as a,geoApiKey as n,regionsUrl as s}from"./config-S3oXEhB2.js";import{aa as i}from"./index-kBEPsdM1.js";const c=async(t,e)=>await r(`${o}/user_${t}/${e}.json${a}`),$=async(t,e="")=>await r(`${s}/${t}/states/${e}/${e&&"cities"}`,{method:"GET",headers:{"X-CSCAPI-KEY":n},redirect:"follow"}),l=async()=>i({getGeoData:$,getProfileSettings:c});export{l as profileSettingsLoader};
