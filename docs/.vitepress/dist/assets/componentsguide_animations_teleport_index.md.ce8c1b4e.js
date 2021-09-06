import{r as n,d as a,o as s,c as t,w as o,e as p,F as e,g as c,j as l,a as u}from"./app.0b7afbe4.js";import{s as i}from"./star.309f7afc.js";const r={setup:()=>({center:n([40,40]),projection:n("EPSG:4326"),zoom:n(6),rotation:n(0),getRandomInRange:(n,a,s)=>1*(Math.random()*(a-n)+n).toFixed(s),starIcon:i})};r.render=function(n,l,u,i,r,k){const d=a("ol-view"),g=a("ol-source-osm"),m=a("ol-tile-layer"),f=a("ol-geom-point"),h=a("ol-style-icon"),q=a("ol-style"),y=a("ol-feature"),v=a("ol-animation-teleport"),w=a("ol-source-vector"),_=a("ol-vector-layer"),I=a("ol-map");return s(),t(I,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"700px"}},{default:o((()=>[p(d,{ref:"view",center:i.center,rotation:i.rotation,zoom:i.zoom,projection:i.projection},null,8,["center","rotation","zoom","projection"]),p(m,null,{default:o((()=>[p(g)])),_:1}),p(_,{updateWhileAnimating:!0,updateWhileInteracting:!0},{default:o((()=>[p(w,{ref:"vectorsource"},{default:o((()=>[p(v,{duration:2e3},{default:o((()=>[(s(),t(e,null,c(20,(n=>p(y,{key:n},{default:o((()=>[p(f,{coordinates:[i.getRandomInRange(24,45,3),i.getRandomInRange(35,41,3)]},null,8,["coordinates"]),p(q,null,{default:o((()=>[p(h,{src:i.starIcon,scale:.1},null,8,["src","scale"])])),_:1})])),_:2},1024))),64))])),_:1})])),_:1},512)])),_:1})])),_:1})};const k=p("h1",{id:"ol-animation-teleport"},[p("a",{class:"header-anchor",href:"#ol-animation-teleport","aria-hidden":"true"},"#"),l(" ol-animation-teleport")],-1),d=p("blockquote",null,[p("p",null,"Teleport animation for feature")],-1),g=u('<div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>700px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span> <span class="token attr-name">:updateWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:updateWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vectorsource<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-animation-teleport</span> <span class="token attr-name">:duration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-feature</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index in 20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-geom-point</span> <span class="token attr-name">:coordinates</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[getRandomInRange(24,45,3),getRandomInRange(35,41,3)]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-geom-point</span><span class="token punctuation">&gt;</span></span>\n\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-icon</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>starIcon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-icon</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-feature</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-animation-teleport</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> starIcon <span class="token keyword">from</span> <span class="token string">&#39;@/assets/star.png&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> <span class="token function-variable function">getRandomInRange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> fixed</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>to <span class="token operator">-</span> <span class="token keyword">from</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>fixed<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            getRandomInRange<span class="token punctuation">,</span>\n            starIcon\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="duration"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> duration</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>1000</code></li></ul><p>duration of the animation in ms, default 1000</p><h1 id="revers"><a class="header-anchor" href="#revers" aria-hidden="true">#</a> revers</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><p>revers the animation direction</p><h1 id="repeat"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><p>number of time to repeat the animation, default 0</p><h1 id="hiddenstyle"><a class="header-anchor" href="#hiddenstyle" aria-hidden="true">#</a> hiddenStyle</h1><ul><li><strong>Type</strong>: <code>ol.style.Style</code></li></ul><p>a style to display the feature when playing the animation to be used to make the feature selectable when playing animation , default the feature will be hidden when playing (and not selectable)</p><h1 id="fade"><a class="header-anchor" href="#fade" aria-hidden="true">#</a> fade</h1><ul><li><strong>Type</strong>: <code>function</code></li><li><strong>Default</strong>: <code>none</code></li></ul><p>an easing function used to fade in the feature, default none</p><h1 id="easing"><a class="header-anchor" href="#easing" aria-hidden="true">#</a> easing</h1><ul><li><strong>Type</strong>: <code>function</code></li><li><strong>Default</strong>: <code>0</code></li></ul><p>an easing function for the animation, default ol.easing.linear</p>',21),m='{"title":"ol-animation-teleport","description":"","frontmatter":{},"headers":[{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/animations/teleport/index.md","lastUpdated":1628662093494}',f={};const h=Object.assign(f,{expose:[],setup:function(n){return(n,e)=>{const c=a("ClientOnly");return s(),t("div",null,[k,d,p(c,null,{default:o((()=>[p(r)])),_:1}),g])}}});export default h;export{m as __pageData};
