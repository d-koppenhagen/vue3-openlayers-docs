import{r as n,d as a,o as s,c as t,w as o,e as p,a as e}from"./app.0b7afbe4.js";const c={setup(){const a=n([40,40]),s=n("EPSG:4326"),t=n(8),o=n(0),p=n(null),e=n(null);return{center:a,projection:s,zoom:t,rotation:o,hereIcon:"/assets/here.976f4cfe.png",view:p,map:e,geoLocChange:n=>{console.log(n),p.value.fit([n[0],n[1],n[0],n[1]],{maxZoom:14})}}}};c.render=function(n,e,c,l,u,i){const k=a("ol-view"),r=a("ol-source-osm"),g=a("ol-tile-layer"),d=a("ol-geom-point"),m=a("ol-style-icon"),h=a("ol-style"),f=a("ol-feature"),q=a("ol-source-vector"),v=a("ol-vector-layer"),y=a("ol-geolocation"),_=a("ol-map");return s(),t(_,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"},ref:"map"},{default:o((()=>[p(k,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),p(g,null,{default:o((()=>[p(r)])),_:1}),p(y,{projection:l.projection,onPositionChanged:l.geoLocChange},{default:o((n=>[p(v,{zIndex:2},{default:o((()=>[p(q,null,{default:o((()=>[p(f,{ref:"positionFeature"},{default:o((()=>[p(d,{coordinates:n.position},null,8,["coordinates"]),p(h,null,{default:o((()=>[p(m,{src:l.hereIcon,scale:.1},null,8,["src","scale"])])),_:1})])),_:2},1536)])),_:2},1024)])),_:2},1024)])),_:1},8,["projection","onPositionChanged"])])),_:1},512)};const l=e('<h1 id="ol-geolocation"><a class="header-anchor" href="#ol-geolocation" aria-hidden="true">#</a> ol-geolocation</h1><blockquote><p>HTML5 Geolocation wrapper</p></blockquote><p><code>ol-geoloc</code> provides HTML5 Geolocation capabilities as a Vue component. The <a href="https://www.w3.org/TR/geolocation-API/" target="_blank" rel="noopener noreferrer">Geolocation API</a> is used to locate a user&#39;s position. You can place it to the <strong>default slot</strong> of <code>ol-map</code> component.</p>',3),u=e('<div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-geolocation</span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@positionChanged</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>geoLocChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span> <span class="token attr-name">:zIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-feature</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>positionFeature<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-geom-point</span> <span class="token attr-name">:coordinates</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps.position<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-geom-point</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-icon</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hereIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-icon</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-feature</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-geolocation</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> hereIcon <span class="token keyword">from</span> <span class="token string">&#39;@/assets/here.png&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">const</span> <span class="token function-variable function">geoLocChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">loc</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>loc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            view<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">fit</span><span class="token punctuation">(</span><span class="token punctuation">[</span>loc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> loc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> loc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> loc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                maxZoom<span class="token operator">:</span> <span class="token number">14</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            hereIcon<span class="token punctuation">,</span>\n            view<span class="token punctuation">,</span>\n            map<span class="token punctuation">,</span>\n            geoLocChange\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="tracking"><a class="header-anchor" href="#tracking" aria-hidden="true">#</a> tracking</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><p>Enables / disables tracking.</p><h1 id="tracking-options"><a class="header-anchor" href="#tracking-options" aria-hidden="true">#</a> tracking-options</h1><ul><li><strong>Type</strong>: <code>Object</code></li><li><strong>Default</strong>: <code>undefined</code></li></ul><p>Tracking options. See <a href="https://www.w3.org/TR/geolocation-API/#position_options_interface" target="_blank" rel="noopener noreferrer">PositionOptions</a> documentation.</p><h1 id="projection"><a class="header-anchor" href="#projection" aria-hidden="true">#</a> projection</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>EPSG:3857</code></li></ul><p>Projection of the current position.</p><h2 id="emits"><a class="header-anchor" href="#emits" aria-hidden="true">#</a> Emits</h2><ul><li><code>positionChanged</code></li><li><code>speedChanged</code></li><li><code>headingChanged</code></li><li><code>altitudeChanged</code></li><li><code>altitudeAccuracyChanged</code></li><li><code>accuracyGeometryChanged</code></li></ul>',14),i='{"title":"ol-geolocation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Emits","slug":"emits"}],"relativePath":"componentsguide/geolocation/index.md","lastUpdated":1628604166968}',k={};const r=Object.assign(k,{expose:[],setup:function(n){return(n,e)=>{const i=a("ClientOnly");return s(),t("div",null,[l,p(i,null,{default:o((()=>[p(c)])),_:1}),u])}}});export default r;export{i as __pageData};
