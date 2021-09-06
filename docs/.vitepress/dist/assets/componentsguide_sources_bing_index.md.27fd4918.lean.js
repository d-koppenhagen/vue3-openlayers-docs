import{r as a,d as n,o as s,c as t,h as e,k as o,e as p,j as l,t as c,w as u,F as i,a as r}from"./app.0b7afbe4.js";const k={setup:()=>({center:a([40,40]),projection:a("EPSG:4326"),zoom:a(8),rotation:a(0),selected:a("AerialWithLabels")})},d=p("option",{value:"AerialWithLabels"},"AerialWithLabels",-1),g=p("option",{value:"RoadOnDemand"},"RoadOnDemand",-1),h=p("option",{value:"CanvasDark"},"CanvasDark",-1);k.render=function(a,r,k,m,f,y){const v=n("ol-view"),q=n("ol-source-bingmaps"),b=n("ol-tile-layer"),w=n("ol-map");return s(),t(i,null,[e(p("select",{"onUpdate:modelValue":r[1]||(r[1]=a=>m.selected=a)},[d,g,h],512),[[o,m.selected]]),l(" "+c(m.selected)+" ",1),p(w,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:u((()=>[p(v,{ref:"view",center:m.center,rotation:m.rotation,zoom:m.zoom,projection:m.projection},null,8,["center","rotation","zoom","projection"]),p(b,null,{default:u((()=>[p(q,{apiKey:"AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI",imagerySet:m.selected},null,8,["imagerySet"])])),_:1})])),_:1})],64)};const m=p("h1",{id:"ol-source-bingmaps"},[p("a",{class:"header-anchor",href:"#ol-source-bingmaps","aria-hidden":"true"},"#"),l(" ol-source-bingmaps")],-1),f=p("blockquote",null,[p("p",null,[l("Layer source for "),p("a",{href:"https://www.bing.com/maps",target:"_blank",rel:"noopener noreferrer"},"Bing Maps API")])],-1),y=p("p",null,[p("code",null,"ol-source-bingmaps"),l(" adds ability to display tile data from Bing Maps. To use this source you should get "),p("strong",null,"API key"),l(" at "),p("a",{href:"https://www.bingmapsportal.com",target:"_blank",rel:"noopener noreferrer"},"https://www.bingmapsportal.com"),l(".")],-1),v=r('',37),q='{"title":"ol-source-bingmaps","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/bing/index.md","lastUpdated":1628604579455}',b={};const w=Object.assign(b,{expose:[],setup:function(a){return(a,e)=>{const o=n("ClientOnly");return s(),t("div",null,[m,f,y,p(o,null,{default:u((()=>[p(k)])),_:1}),v])}}});export default w;export{q as __pageData};
