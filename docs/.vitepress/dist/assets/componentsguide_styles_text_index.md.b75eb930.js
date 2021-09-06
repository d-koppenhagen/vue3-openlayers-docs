import{r as n,d as a,o as s,c as t,w as o,e,j as p,a as l}from"./app.0b7afbe4.js";const c={setup:()=>({center:n([-98.8449,19.6869]),projection:n("EPSG:4326"),zoom:n(15),rotation:n(0),radius:n(40),strokeWidth:n(10),strokeColor:n("red")})};c.render=function(n,p,l,c,u,r){const i=a("ol-view"),k=a("ol-source-osm"),d=a("ol-tile-layer"),g=a("ol-geom-polygon"),h=a("ol-style-stroke"),f=a("ol-style-fill"),y=a("ol-style-text"),m=a("ol-style"),q=a("ol-feature"),v=a("ol-source-vector"),w=a("ol-vector-layer"),x=a("ol-map");return s(),t(x,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:o((()=>[e(i,{ref:"view",center:c.center,rotation:c.rotation,zoom:c.zoom,projection:c.projection},null,8,["center","rotation","zoom","projection"]),e(d,null,{default:o((()=>[e(k)])),_:1}),e(w,null,{default:o((()=>[e(v,null,{default:o((()=>[e(q,null,{default:o((()=>[e(g,{coordinates:[[[-98.844959,19.691586],[-98.842749,19.69098],[-98.84217,19.693122],[-98.844358,19.693667],[-98.844959,19.691586]]]},null,8,["coordinates"]),e(m,null,{default:o((()=>[e(h,{color:c.strokeColor,width:c.strokeWidth},null,8,["color","width"]),e(f,{color:"white",width:c.strokeWidth},null,8,["width"]),e(y,{text:"Hellooooo"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})};const u=e("h1",{id:"ol-style-text"},[e("a",{class:"header-anchor",href:"#ol-style-text","aria-hidden":"true"},"#"),p(" ol-style-text")],-1),r=e("blockquote",null,[e("p",null,"Style the text of a shape")],-1),i=l('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Add text to shapes</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-feature</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-geom-polygon</span> <span class="token attr-name">:coordinates</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[[[-98.844959,19.691586],[-98.842749,19.690980],[-98.842170,19.693122],[-98.844358,19.693667],[-98.844959,19.691586]]]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-geom-polygon</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-stroke</span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeWidth<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-stroke</span><span class="token punctuation">&gt;</span></span>\n                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-fill</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>white<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strokeWidth<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-fill</span><span class="token punctuation">&gt;</span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-style-text</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hellooooo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style-text</span><span class="token punctuation">&gt;</span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-style</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-feature</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-vector</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-vector-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">98.8449</span><span class="token punctuation">,</span><span class="token number">19.6869</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> radius <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> strokeWidth <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> strokeColor <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n            radius<span class="token punctuation">,</span>\n            strokeWidth<span class="token punctuation">,</span>\n            strokeColor<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="font"><a class="header-anchor" href="#font" aria-hidden="true">#</a> font</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="maxangle"><a class="header-anchor" href="#maxangle" aria-hidden="true">#</a> maxAngle</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>Math.PI / 4</code></li></ul><h1 id="offsetx"><a class="header-anchor" href="#offsetx" aria-hidden="true">#</a> offsetX</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><h1 id="offsety"><a class="header-anchor" href="#offsety" aria-hidden="true">#</a> offsetY</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><h1 id="overflow"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> overflow</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="placement"><a class="header-anchor" href="#placement" aria-hidden="true">#</a> placement</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>point</code></li></ul><h1 id="scale"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> scale</h1><ul><li><strong>Type</strong>: <code>Number</code></li></ul><h1 id="rotatewithview"><a class="header-anchor" href="#rotatewithview" aria-hidden="true">#</a> rotateWithView</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="rotation"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> rotation</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>0</code></li></ul><h1 id="text"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="textalign"><a class="header-anchor" href="#textalign" aria-hidden="true">#</a> textAlign</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="textbaseline"><a class="header-anchor" href="#textbaseline" aria-hidden="true">#</a> textBaseline</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>middle</code></li></ul><h1 id="padding"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h1><ul><li><strong>Type</strong>: <code>Array</code></li><li><strong>Default</strong>: <code>() =&gt; [0, 0, 0, 0]</code></li></ul>',31),k='{"title":"ol-style-text","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/styles/text/index.md","lastUpdated":1628604761756}',d={};const g=Object.assign(d,{expose:[],setup:function(n){return(n,p)=>{const l=a("ClientOnly");return s(),t("div",null,[u,r,e(l,null,{default:o((()=>[e(c)])),_:1}),i])}}});export default g;export{k as __pageData};
