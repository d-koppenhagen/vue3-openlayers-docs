import{r as e,d as t,o as r,c as a,w as o,e as i}from"./app.0b7afbe4.js";const s={setup:()=>({center:e([-90,50]),zoom:e(2),rotation:e(0),url:e("https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/"),layerName:e("0"),matrixSet:e("EPSG:3857"),format:e("image/png"),styleName:e("default"),attribution:e('Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>')})};s.render=function(e,s,l,n,m,c){const u=t("ol-view"),p=t("ol-source-osm"),f=t("ol-tile-layer"),y=t("ol-source-wmts"),g=t("ol-map");return r(),a(g,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[i(u,{ref:"view",center:n.center,rotation:n.rotation,zoom:n.zoom},null,8,["center","rotation","zoom"]),i(f,null,{default:o((()=>[i(p)])),_:1}),i(f,null,{default:o((()=>[i(y,{attributions:n.attribution,url:n.url,matrixSet:n.matrixSet,format:n.format,layer:n.layerName,style:n.styleName},null,8,["attributions","url","matrixSet","format","layer","style"])])),_:1})])),_:1})};export{s as _};
