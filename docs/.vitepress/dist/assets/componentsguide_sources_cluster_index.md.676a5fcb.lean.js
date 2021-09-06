import{r as n,d as a,o as s,c as t,w as p,e as o,F as e,g as c,j as l,a as u}from"./app.0b7afbe4.js";const i={setup:()=>({center:n([34,39.13]),projection:n("EPSG:4326"),zoom:n(6.8),rotation:n(0),overrideStyleFunction:(n,a)=>{let s=n.get("features").length;a.getText().setText(s.toString())},getRandomInRange:(n,a,s)=>1*(Math.random()*(a-n)+n).toFixed(s)})};i.render=function(n,l,u,i,r,k){const g=a("ol-view"),d=a("ol-source-osm"),f=a("ol-tile-layer"),m=a("ol-geom-point"),h=a("ol-feature"),y=a("ol-source-vector"),q=a("ol-source-cluster"),v=a("ol-style-stroke"),w=a("ol-style-fill"),x=a("ol-style-circle"),b=a("ol-style-text"),_=a("ol-style"),T=a("ol-vector-layer"),F=a("ol-map");return s(),t(F,{ref:"map",loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"800px"}},{default:p((()=>[o(g,{ref:"view",center:i.center,rotation:i.rotation,zoom:i.zoom,projection:i.projection},null,8,["center","rotation","zoom","projection"]),o(f,null,{default:p((()=>[o(d)])),_:1}),o(T,null,{default:p((()=>[o(q,{distance:40},{default:p((()=>[o(y,null,{default:p((()=>[(s(),t(e,null,c(300,(n=>o(h,{key:n},{default:p((()=>[o(m,{coordinates:[i.getRandomInRange(24,45,3),i.getRandomInRange(35,41,3)]},null,8,["coordinates"])])),_:2},1024))),64))])),_:1})])),_:1}),o(_,{overrideStyleFunction:i.overrideStyleFunction},{default:p((()=>[o(v,{color:"red",width:2}),o(w,{color:"rgba(255,255,255,0.1)"}),o(x,{radius:10},{default:p((()=>[o(w,{color:"#3399CC"}),o(v,{color:"#fff",width:1})])),_:1}),o(b,null,{default:p((()=>[o(w,{color:"#fff"})])),_:1})])),_:1},8,["overrideStyleFunction"])])),_:1})])),_:1},512)};const r=o("h1",{id:"ol-source-cluster"},[o("a",{class:"header-anchor",href:"#ol-source-cluster","aria-hidden":"true"},"#"),l(" ol-source-cluster")],-1),k=o("p",null,"Layer source to cluster vector data. Works out of the box with point geometries. For other geometry types, or if not all geometries should be considered for clustering, a custom geometryFunction can be defined.",-1),g=u('',18),d='{"title":"ol-source-cluster","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/cluster/index.md","lastUpdated":1628604595819}',f={};const m=Object.assign(f,{expose:[],setup:function(n){return(n,e)=>{const c=a("ClientOnly");return s(),t("div",null,[r,k,o(c,null,{default:p((()=>[o(i)])),_:1}),g])}}});export default m;export{d as __pageData};
