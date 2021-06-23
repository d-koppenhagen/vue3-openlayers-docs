import{d as n,r as a,o as t,c as s,e as o,v as p,b as e,w as l,f as c,F as u,a as r}from"./app.d978c72f.js";const i={setup(){const a=n([40,40]),t=n("EPSG:4326"),s=n(8),o=n(0);return n("a"),{center:a,projection:t,zoom:s,rotation:o}},data:()=>({fullscreencontrol:!0,attributioncontrol:!0,zoomcontrol:!0,zoomslidercontrol:!0,zoomtoextentcontrol:!0,scalelinecontrol:!0,overviewmapcontrol:!0,mousepositioncontrol:!0,rotatecontrol:!0})},k=e("label",{for:"fullscreencontrol"},"fullscreencontrol",-1),m=e("label",{for:"attribution"},"attributioncontrol",-1),d=e("label",{for:"zoom"},"zoomcontrol",-1),g=e("label",{for:"zoomtoextent"},"zoomtoextentcontrol",-1),q=e("label",{for:"zoomslider"},"zoomslidercontrol",-1),v=e("label",{for:"scaleline"},"scalelinecontrol",-1),h=e("label",{for:"overviewmap"},"overviewmapcontrol",-1),f=e("label",{for:"mousepositioncontrol"},"mousepositioncontrol",-1),b=e("label",{for:"rotatecontrol"},"rotatecontrol",-1);i.render=function(n,r,i,_,y,z){const x=a("ol-view"),w=a("ol-fullscreen-control"),P=a("ol-mouseposition-control"),S=a("ol-attribution-control"),C=a("ol-source-osm"),T=a("ol-tile-layer"),Z=a("ol-overviewmap-control"),M=a("ol-scaleline-control"),A=a("ol-rotate-control"),V=a("ol-zoom-control"),U=a("ol-zoomslider-control"),j=a("ol-zoomtoextent-control"),O=a("ol-map");return t(),s(u,null,[o(e("input",{type:"checkbox",id:"fullscreencontrol","onUpdate:modelValue":r[1]||(r[1]=n=>y.fullscreencontrol=n)},null,512),[[p,y.fullscreencontrol]]),k,o(e("input",{type:"checkbox",id:"attribution","onUpdate:modelValue":r[2]||(r[2]=n=>y.attributioncontrol=n)},null,512),[[p,y.attributioncontrol]]),m,o(e("input",{type:"checkbox",id:"zoom","onUpdate:modelValue":r[3]||(r[3]=n=>y.zoomcontrol=n)},null,512),[[p,y.zoomcontrol]]),d,o(e("input",{type:"checkbox",id:"zoomtoextent","onUpdate:modelValue":r[4]||(r[4]=n=>y.zoomtoextentcontrol=n)},null,512),[[p,y.zoomtoextentcontrol]]),g,o(e("input",{type:"checkbox",id:"zoomslider","onUpdate:modelValue":r[5]||(r[5]=n=>y.zoomslidercontrol=n)},null,512),[[p,y.zoomslidercontrol]]),q,o(e("input",{type:"checkbox",id:"scaleline","onUpdate:modelValue":r[6]||(r[6]=n=>y.scalelinecontrol=n)},null,512),[[p,y.scalelinecontrol]]),v,o(e("input",{type:"checkbox",id:"overviewmap","onUpdate:modelValue":r[7]||(r[7]=n=>y.overviewmapcontrol=n)},null,512),[[p,y.overviewmapcontrol]]),h,o(e("input",{type:"checkbox",id:"mousepositioncontrol","onUpdate:modelValue":r[8]||(r[8]=n=>y.mousepositioncontrol=n)},null,512),[[p,y.mousepositioncontrol]]),f,o(e("input",{type:"checkbox",id:"rotatecontrol","onUpdate:modelValue":r[9]||(r[9]=n=>y.rotatecontrol=n)},null,512),[[p,y.rotatecontrol]]),b,e(O,{ref:"map",loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:l((()=>[e(x,{ref:"view",center:_.center,rotation:_.rotation,zoom:_.zoom,projection:_.projection},null,8,["center","rotation","zoom","projection"]),y.fullscreencontrol?(t(),s(w,{key:0})):c("v-if",!0),y.mousepositioncontrol?(t(),s(P,{key:1})):c("v-if",!0),y.attributioncontrol?(t(),s(S,{key:2})):c("v-if",!0),y.overviewmapcontrol?(t(),s(Z,{key:3},{default:l((()=>[e(T,null,{default:l((()=>[e(C)])),_:1})])),_:1})):c("v-if",!0),y.scalelinecontrol?(t(),s(M,{key:4})):c("v-if",!0),y.rotatecontrol?(t(),s(A,{key:5})):c("v-if",!0),y.zoomcontrol?(t(),s(V,{key:6})):c("v-if",!0),y.zoomslidercontrol?(t(),s(U,{key:7})):c("v-if",!0),y.zoomtoextentcontrol?(t(),s(j,{key:8,extent:[23.906,42.812,46.934,34.597],tipLabel:"Fit to Turkey"},null,8,["extent"])):c("v-if",!0),e(T,null,{default:l((()=>[e(C)])),_:1})])),_:1},512)],64)};const _=r('',8),y=r('',18),z='{"title":"Map Controls","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"AttributionControl Properties","slug":"attributioncontrol-properties"},{"level":2,"title":"FullScreenControl Properties","slug":"fullscreencontrol-properties"},{"level":2,"title":"MousePosition Properties","slug":"mouseposition-properties"},{"level":2,"title":"OverviewMapControl Properties","slug":"overviewmapcontrol-properties"},{"level":2,"title":"RotateControl Properties","slug":"rotatecontrol-properties"},{"level":2,"title":"ScaleLineControl Properties","slug":"scalelinecontrol-properties"},{"level":2,"title":"ZoomSliderControl Properties","slug":"zoomslidercontrol-properties"},{"level":2,"title":"ZoomToExtentControl Properties","slug":"zoomtoextentcontrol-properties"},{"level":2,"title":"ZoomControl Properties","slug":"zoomcontrol-properties"}],"relativePath":"componentsguide/mapcontrols/index.md","lastUpdated":1624465655385}',x={};const w=Object.assign(x,{expose:[],setup:function(n){return(n,o)=>{const p=a("ClientOnly");return t(),s("div",null,[_,e(p,null,{default:l((()=>[e(i)])),_:1}),y])}}});export default w;export{z as __pageData};
