import{b as a,o as n,c as s,d as t,w as e,a as o}from"./app.3cdf7d30.js";import{_ as p}from"./MapDemo.48b904eb.js";const l=o('<h1 id="ol-source-osm"><a class="header-anchor" href="#ol-source-osm" aria-hidden="true">#</a> ol-source-osm</h1><p>Source layer ready to load OpenStreetMaps tiles</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Loading a simple OSM base layer.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-source-osm</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n        \n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h1 id="output"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h1>',7),r=o('<h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="attributions"><a class="header-anchor" href="#attributions" aria-hidden="true">#</a> attributions</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>Attributions.</p><h1 id="cachesize"><a class="header-anchor" href="#cachesize" aria-hidden="true">#</a> cacheSize</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: <code>2048</code></li></ul><p>Initial tile cache size. Will auto-grow to hold at least the number of tiles in the viewport.</p><h1 id="crossorigin"><a class="header-anchor" href="#crossorigin" aria-hidden="true">#</a> crossOrigin</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>anonymous</code></li></ul><p>The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you want to access pixel data with the Canvas renderer.</p><h1 id="imagesmoothing"><a class="header-anchor" href="#imagesmoothing" aria-hidden="true">#</a> imageSmoothing</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: <code>true</code> Enable image smoothing.</li></ul><h1 id="maxzoom"><a class="header-anchor" href="#maxzoom" aria-hidden="true">#</a> maxZoom</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: 19 Max zoom.</li></ul><h1 id="minzoom"><a class="header-anchor" href="#minzoom" aria-hidden="true">#</a> minZoom</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: 0 Min zoom.</li></ul><h1 id="opaque"><a class="header-anchor" href="#opaque" aria-hidden="true">#</a> opaque</h1><ul><li><strong>Type</strong>: <code>boolean</code></li><li><strong>Default</strong>: true Whether the layer is opaque.</li></ul><h1 id="reprojectionerrorthreshold"><a class="header-anchor" href="#reprojectionerrorthreshold" aria-hidden="true">#</a> reprojectionErrorThreshold</h1><ul><li><strong>Type</strong>: <code>number </code></li><li><strong>Default</strong>: 0.5 Maximum allowed reprojection error (in pixels). Higher values can increase reprojection performance, but decrease precision.</li></ul><h1 id="transition"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h1><ul><li><strong>Type</strong>: <code>number</code></li><li><strong>Default</strong>: 250 Duration of the opacity transition for rendering. To disable the opacity transition, pass transition: 0.</li></ul><h1 id="url"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png</code> URL template. Must include {x}, {y} or {-y}, and {z} placeholders.</li></ul><h1 id="wrapx"><a class="header-anchor" href="#wrapx" aria-hidden="true">#</a> wrapX</h1><ul><li><strong>Type</strong>: <code>boolean </code></li><li><strong>Default</strong>: true Whether to wrap the world horizontally.</li></ul>',26),c='{"title":"ol-source-osm","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/osm/index.md","lastUpdated":1624465755420}',i={};const u=Object.assign(i,{expose:[],setup:function(o){return(o,c)=>{const i=a("ClientOnly");return n(),s("div",null,[l,t(i,null,{default:e((()=>[t(p)])),_:1}),r])}}});export default u;export{c as __pageData};