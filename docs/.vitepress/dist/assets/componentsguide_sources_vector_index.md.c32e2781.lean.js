import{d as n,i as a,r as s,o as t,c as p,w as o,b as e,a as c}from"./app.d978c72f.js";import{_ as l}from"./GeomPoint.6b46ada5.js";import{_ as u}from"./VectorSourceDemo1.fe7fead4.js";const k={setup(){const s=n([-8908887.277395891,5381918.072437216]),t=n("EPSG:3857"),p=n(14),o=n(0),e=a("ol-loadingstrategy").bbox;console.log(e);return{center:s,projection:t,zoom:p,rotation:o,urlFunction:(n,a,s)=>{var t=s.getCode();return"https://ahocevar.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=osm:water_areas&outputFormat=application/json&srsname="+t+"&bbox="+n.join(",")+","+t},bbox:e,GeoJSON:new(a("ol-format").GeoJSON)}}};k.render=function(n,a,c,l,u,k){const r=s("ol-view"),i=s("ol-source-osm"),g=s("ol-tile-layer"),d=s("ol-source-vector"),m=s("ol-style-stroke"),f=s("ol-style"),y=s("ol-vector-layer"),h=s("ol-map");return t(),p(h,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[e(r,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),e(g,null,{default:o((()=>[e(i)])),_:1}),e(y,null,{default:o((()=>[e(d,{url:l.urlFunction,strategy:l.bbox,format:l.GeoJSON,projection:l.projection},null,8,["url","strategy","format","projection"]),e(f,null,{default:o((()=>[e(m,{color:"red",width:5})])),_:1})])),_:1})])),_:1})};const r=c('',6),i=c('',3),g=c('',3),d=c('',23),m='{"title":"ol-source-vector","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/vector/index.md","lastUpdated":1624465744217}',f={};const y=Object.assign(f,{expose:[],setup:function(n){return(n,a)=>{const c=s("ClientOnly");return t(),p("div",null,[r,e(c,null,{default:o((()=>[e(l)])),_:1}),i,e(c,null,{default:o((()=>[e(u)])),_:1}),g,e(c,null,{default:o((()=>[e(k)])),_:1}),d])}}});export default y;export{m as __pageData};
