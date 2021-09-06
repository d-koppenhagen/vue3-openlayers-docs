import{r as n,d as a,o as s,c as t,h as p,v as o,e,k as c,w as l,f as u,F as i,j as r,a as k}from"./app.0b7afbe4.js";const d={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0),drawEnable:n(!0),drawType:n("Point"),drawstart:n=>{console.log(n)},drawend:n=>{console.log(n)}})},g=e("label",{for:"checkbox"},"Draw Enable",-1),h=e("option",{value:"Point"},"Point",-1),m=e("option",{value:"LineString"},"LineString",-1),q=e("option",{value:"Polygon"},"Polygon",-1),f=e("option",{value:"Circle"},"Circle",-1);d.render=function(n,r,k,d,y,v){const w=a("ol-view"),b=a("ol-source-osm"),T=a("ol-tile-layer"),x=a("ol-interaction-draw"),P=a("ol-source-vector"),_=a("ol-style-stroke"),j=a("ol-style-fill"),D=a("ol-style-circle"),E=a("ol-style"),S=a("ol-vector-layer"),C=a("ol-map");return s(),t(i,null,[p(e("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":r[1]||(r[1]=n=>d.drawEnable=n)},null,512),[[o,d.drawEnable]]),g,p(e("select",{id:"type","onUpdate:modelValue":r[2]||(r[2]=n=>d.drawType=n)},[h,m,q,f],512),[[c,d.drawType]]),e(C,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:l((()=>[e(w,{ref:"view",center:d.center,rotation:d.rotation,zoom:d.zoom,projection:d.projection},null,8,["center","rotation","zoom","projection"]),e(T,null,{default:l((()=>[e(b)])),_:1}),e(S,null,{default:l((()=>[e(P,{projection:d.projection},{default:l((()=>[d.drawEnable?(s(),t(x,{key:0,type:d.drawType,onDrawend:d.drawend,onDrawstart:d.drawstart},null,8,["type","onDrawend","onDrawstart"])):u("v-if",!0)])),_:1},8,["projection"]),e(E,null,{default:l((()=>[e(_,{color:"red",width:2}),e(j,{color:"rgba(255,255,255,0.1)"}),e(D,{radius:7},{default:l((()=>[e(j,{color:"blue"})])),_:1})])),_:1})])),_:1})])),_:1})],64)};const y=e("h1",{id:"ol-interaction-draw"},[e("a",{class:"header-anchor",href:"#ol-interaction-draw","aria-hidden":"true"},"#"),r(" ol-interaction-draw")],-1),v=e("blockquote",null,[e("p",null,"Interaction for drawing feature geometries.")],-1),w=e("p",null,"ol-interaction-draw handles click events on the map and makes easier to draw geometries.",-1),b=k('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawEnable<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Draw Enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Point<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Point<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LineString<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>LineString<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Polygon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Polygon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Circle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-draw</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawEnable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawType<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@drawend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawend<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@drawstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawstart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-interaction-draw</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-stroke</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-stroke</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-fill</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(255,255,255,0.1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-fill</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-circle</span> <span class="token attr-name">:radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>7<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-fill</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-fill</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-circle</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref<span class="token punctuation">,</span>\n    inject\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> drawEnable <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> drawType <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;Point&quot;</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> <span class="token function-variable function">drawstart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>\n\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">const</span> <span class="token function-variable function">drawend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            drawEnable<span class="token punctuation">,</span>\n            drawType<span class="token punctuation">,</span>\n            drawstart<span class="token punctuation">,</span>\n            drawend\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="type"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="clicktolerance"><a class="header-anchor" href="#clicktolerance" aria-hidden="true">#</a> clickTolerance</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>6</code></li></ul><h1 id="dragvertexdelay"><a class="header-anchor" href="#dragvertexdelay" aria-hidden="true">#</a> dragVertexDelay</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>500</code></li></ul><h1 id="snaptolerance"><a class="header-anchor" href="#snaptolerance" aria-hidden="true">#</a> snapTolerance</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>12</code></li></ul><h1 id="stopclick"><a class="header-anchor" href="#stopclick" aria-hidden="true">#</a> stopClick</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="maxpoints"><a class="header-anchor" href="#maxpoints" aria-hidden="true">#</a> maxPoints</h1><ul><li><strong>Type</strong>: <code>Number</code></li></ul><h1 id="minpoints"><a class="header-anchor" href="#minpoints" aria-hidden="true">#</a> minPoints</h1><ul><li><strong>Type</strong>: <code>Number</code></li></ul><h1 id="finishcondition"><a class="header-anchor" href="#finishcondition" aria-hidden="true">#</a> finishCondition</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="geometryfunction"><a class="header-anchor" href="#geometryfunction" aria-hidden="true">#</a> geometryFunction</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="geometryname"><a class="header-anchor" href="#geometryname" aria-hidden="true">#</a> geometryName</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="condition"><a class="header-anchor" href="#condition" aria-hidden="true">#</a> condition</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="freehand"><a class="header-anchor" href="#freehand" aria-hidden="true">#</a> freehand</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="freehandcondition"><a class="header-anchor" href="#freehandcondition" aria-hidden="true">#</a> freehandCondition</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="wrapx"><a class="header-anchor" href="#wrapx" aria-hidden="true">#</a> wrapX</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul>',32),T='{"title":"ol-interaction-draw","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/interactions/draw/index.md","lastUpdated":1628604340588}',x={};const P=Object.assign(x,{expose:[],setup:function(n){return(n,p)=>{const o=a("ClientOnly");return s(),t("div",null,[y,v,w,e(o,null,{default:l((()=>[e(d)])),_:1}),b])}}});export default P;export{T as __pageData};
