import{r as n,G as a,d as s,o as t,c as p,e as o,j as e,t as c,w as l,f as u,F as r,a as i}from"./app.ff6312e5.js";const k={setup(){const s=n(""),t=n([-102.13121,40.2436]),p=n("EPSG:4326"),o=n(5),e=n(0),c=n(!1),l=n([]);l.value=(new a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-103.86923852630616,43.45599322423934],[-103.90891107984544,39.34240191087722],[-98.76630637117387,39.558687199211114],[-98.89435771175386,43.945405844902986],[-103.86923852630616,43.45599322423934]]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-103.85636392303468,38.10970692739486],[-103.86770698495866,33.218572724914544],[-98.20654544301988,33.6532810221672],[-98.4408283538437,38.31894739375114],[-103.85636392303468,38.10970692739486]]]}}]});return{map:s,geoJsonFormat:new a,zones:l,center:t,projection:p,zoom:o,rotation:e,drawEnabled:c,drawend:n=>{l.value.push(n.feature),c.value=!1}}}};k.render=function(n,a,i,k,d,g){const h=s("ol-view"),m=s("ol-source-osm"),f=s("ol-tile-layer"),y=s("ol-interaction-draw"),q=s("ol-style-stroke"),w=s("ol-style-fill"),b=s("ol-style"),v=s("ol-source-vector"),T=s("ol-vector-layer"),_=s("ol-interaction-transform"),E=s("ol-map");return t(),p(r,null,[o("button",{onClick:a[1]||(a[1]=n=>k.drawEnabled=!k.drawEnabled)},"Draw"),e(" "+c(k.drawEnabled)+" ",1),o(E,{ref:"map","load-tiles-while-animating":!0,"load-tiles-while-interacting":!0,style:{height:"350px"}},{default:l((()=>[o(h,{ref:"view",center:k.center,rotation:k.rotation,zoom:k.zoom,projection:k.projection},null,8,["center","rotation","zoom","projection"]),o(f,null,{default:l((()=>[o(m)])),_:1}),o(T,null,{default:l((()=>[o(v,{features:k.zones},{default:l((()=>[k.drawEnabled?(t(),p(y,{key:0,stopClick:!0,type:"Polygon",onDrawend:k.drawend},null,8,["onDrawend"])):u("v-if",!0),o(b,null,{default:l((()=>[o(q,{color:"blue",width:2}),o(w,{color:"rgba(255, 0, 0, 0.4)"})])),_:1})])),_:1},8,["features"])])),_:1}),o(_)])),_:1},512)],64)};const d=o("h1",{id:"ol-interaction-transform"},[o("a",{class:"header-anchor",href:"#ol-interaction-transform","aria-hidden":"true"},"#"),e(" ol-interaction-transform")],-1),g=o("blockquote",null,[o("p",null,"Interaction for transform feature geometries.")],-1),h=i('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawEnabled = !drawEnabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Draw<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n{{drawEnabled}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:load-tiles-while-animating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:load-tiles-while-interacting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span> 350px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span> <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span> <span class="token attr-name">:features</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zones<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-draw</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawEnabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:stopClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Polygon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@drawend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawend<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-stroke</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-stroke</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-fill</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(255, 0, 0, 0.4)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-fill</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-interaction-transform</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-interaction-transform</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n    GeoJSON\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ol/format&quot;</span>\n\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">102.13121</span><span class="token punctuation">,</span> <span class="token number">40.2436</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;EPSG:4326&quot;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> drawEnabled <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> geojsonObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n            type<span class="token operator">:</span> <span class="token string">&quot;FeatureCollection&quot;</span><span class="token punctuation">,</span>\n            crs<span class="token operator">:</span> <span class="token punctuation">{</span>\n                type<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n                properties<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    name<span class="token operator">:</span> <span class="token string">&quot;EPSG:4326&quot;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            features<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n                    type<span class="token operator">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>\n                    geometry<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        type<span class="token operator">:</span> <span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span>\n                        coordinates<span class="token operator">:</span> <span class="token punctuation">[</span>\n                            <span class="token punctuation">[</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.86923852630616</span><span class="token punctuation">,</span> <span class="token number">43.45599322423934</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.90891107984544</span><span class="token punctuation">,</span> <span class="token number">39.34240191087722</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.76630637117387</span><span class="token punctuation">,</span> <span class="token number">39.558687199211114</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.89435771175386</span><span class="token punctuation">,</span> <span class="token number">43.945405844902986</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.86923852630616</span><span class="token punctuation">,</span> <span class="token number">43.45599322423934</span><span class="token punctuation">]</span>\n                            <span class="token punctuation">]</span>\n                        <span class="token punctuation">]</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    type<span class="token operator">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>\n                    geometry<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        type<span class="token operator">:</span> <span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span>\n                        coordinates<span class="token operator">:</span> <span class="token punctuation">[</span>\n                            <span class="token punctuation">[</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.85636392303468</span><span class="token punctuation">,</span> <span class="token number">38.10970692739486</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.86770698495866</span><span class="token punctuation">,</span> <span class="token number">33.218572724914544</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.20654544301988</span><span class="token punctuation">,</span> <span class="token number">33.6532810221672</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.4408283538437</span><span class="token punctuation">,</span> <span class="token number">38.31894739375114</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                                <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">103.85636392303468</span><span class="token punctuation">,</span> <span class="token number">38.10970692739486</span><span class="token punctuation">]</span>\n                            <span class="token punctuation">]</span>\n                        <span class="token punctuation">]</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">const</span> zones <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n\n        <span class="token keyword">const</span> <span class="token function-variable function">drawend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\n            zones<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>feature<span class="token punctuation">)</span>\n            drawEnabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>\n\n        <span class="token punctuation">}</span>\n\n        zones<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readFeatures</span><span class="token punctuation">(</span>geojsonObject<span class="token punctuation">)</span>\n\n\n\n        <span class="token keyword">const</span> geoJsonFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            map<span class="token punctuation">,</span>\n            geoJsonFormat<span class="token punctuation">,</span>\n            zones<span class="token punctuation">,</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            drawEnabled<span class="token punctuation">,</span>\n            drawend<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="enablerotatedtransform"><a class="header-anchor" href="#enablerotatedtransform" aria-hidden="true">#</a> enableRotatedTransform</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="condition"><a class="header-anchor" href="#condition" aria-hidden="true">#</a> condition</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="addcondition"><a class="header-anchor" href="#addcondition" aria-hidden="true">#</a> addCondition</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="filter"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="layers"><a class="header-anchor" href="#layers" aria-hidden="true">#</a> layers</h1><ul><li><strong>Type</strong>: <code>Array</code></li></ul><h1 id="hittolerance"><a class="header-anchor" href="#hittolerance" aria-hidden="true">#</a> hitTolerance</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>2</code></li></ul><h1 id="translatefeature"><a class="header-anchor" href="#translatefeature" aria-hidden="true">#</a> translateFeature</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><h1 id="scale"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> scale</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><h1 id="rotate"><a class="header-anchor" href="#rotate" aria-hidden="true">#</a> rotate</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><h1 id="keepaspectratio"><a class="header-anchor" href="#keepaspectratio" aria-hidden="true">#</a> keepAspectRatio</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="translate"><a class="header-anchor" href="#translate" aria-hidden="true">#</a> translate</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><h1 id="stretch"><a class="header-anchor" href="#stretch" aria-hidden="true">#</a> stretch</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul>',28),m='{"title":"ol-interaction-transform","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/interactions/transform/index.md","lastUpdated":1628604416848}',f={};const y=Object.assign(f,{expose:[],setup:function(n){return(n,a)=>{const e=s("ClientOnly");return t(),p("div",null,[d,g,o(e,null,{default:l((()=>[o(k)])),_:1}),h])}}});export default y;export{m as __pageData};