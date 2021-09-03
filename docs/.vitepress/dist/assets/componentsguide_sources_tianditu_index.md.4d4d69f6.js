import{r as n,d as a,o as s,c as t,w as e,e as o,j as p,a as l}from"./app.4ad2e452.js";const c={setup:()=>({center:n([116.41124529391394,39.953530444730816]),projection:n("EPSG:4326"),zoom:n(8),rotation:n(0)})};c.render=function(n,p,l,c,r,i){const u=a("ol-view"),d=a("ol-source-tianditu"),h=a("ol-tile-layer"),k=a("ol-map");return s(),t(k,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:e((()=>[o(u,{ref:"view",center:c.center,rotation:c.rotation,zoom:c.zoom,projection:c.projection},null,8,["center","rotation","zoom","projection"]),o(h,null,{default:e((()=>[o(d,{layerType:"vec",projection:"EPSG:4326",tk:"dbed7e0f96194affd82763e159de4c50",hidpi:!0})])),_:1}),o(h,null,{default:e((()=>[o(d,{isLabel:!0,layerType:"vec",projection:"EPSG:4326",tk:"dbed7e0f96194affd82763e159de4c50",hidpi:!0})])),_:1})])),_:1})};const r=o("h1",{id:"ol-source-tianditu"},[o("a",{class:"header-anchor",href:"#ol-source-tianditu","aria-hidden":"true"},"#"),p(" ol-source-tianditu")],-1),i=o("blockquote",null,[o("p",null,[p("Layer source for "),o("a",{href:"https://www.tianditu.gov.cn/",target:"_blank",rel:"noopener noreferrer"},"Tianditu")])],-1),u=o("p",null,[o("code",null,"ol-source-tianditu"),p(" adds ability to display tile data from Tianditu Maps. To use this source you should get "),o("strong",null,"API key"),p(" at "),o("a",{href:"https://console.tianditu.gov.cn/",target:"_blank",rel:"noopener noreferrer"},"https://console.tianditu.gov.cn/"),p(".")],-1),d=l('<h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Example of <code>ol-source-tianditu</code> usage</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-map</span> <span class="token attr-name">:loadTilesWhileAnimating</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadTilesWhileInteracting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span>400px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-view</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rotation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rotation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:projection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>projection<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n      &lt;ol-source-tianditu\n        layerType=&quot;vec&quot;\n        projection=&quot;EPSG:4326&quot;\n        tk=&quot;************************&quot; //your key\n        :hidpi=&quot;true&quot;\n      &gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-tianditu</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n      &lt;ol-source-tianditu\n        :isLabel=&quot;true&quot;\n        layerType=&quot;vec&quot;\n        projection=&quot;EPSG:4326&quot;\n        tk=&quot;********************************&quot; //your key\n        :hidpi=&quot;true&quot;\n      &gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-source-tianditu</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-tile-layer</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol-map</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n    ref\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> center <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">116.41124529391394</span><span class="token punctuation">,</span> <span class="token number">39.953530444730816</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">const</span> projection <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;EPSG:4326&#39;</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n        <span class="token keyword">const</span> rotation <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            center<span class="token punctuation">,</span>\n            projection<span class="token punctuation">,</span>\n            zoom<span class="token punctuation">,</span>\n            rotation<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h1 id="layertype"><a class="header-anchor" href="#layertype" aria-hidden="true">#</a> layerType</h1><ul><li><strong>Type</strong>: <code>string</code></li><li><strong>Default</strong>: <code>img</code></li></ul><p>options: img, vec, ter, eia, cta</p><h1 id="tk"><a class="header-anchor" href="#tk" aria-hidden="true">#</a> tk</h1><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>api key</p><h1 id="islabel"><a class="header-anchor" href="#islabel" aria-hidden="true">#</a> isLabel</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="cachesize"><a class="header-anchor" href="#cachesize" aria-hidden="true">#</a> cacheSize</h1><ul><li><strong>Type</strong>: <code>Number</code></li></ul><h1 id="crossorigin"><a class="header-anchor" href="#crossorigin" aria-hidden="true">#</a> crossOrigin</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="projection"><a class="header-anchor" href="#projection" aria-hidden="true">#</a> projection</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>EPSG:3857</code></li></ul><h1 id="hidpi"><a class="header-anchor" href="#hidpi" aria-hidden="true">#</a> hidpi</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>false</code></li></ul><h1 id="requestencoding"><a class="header-anchor" href="#requestencoding" aria-hidden="true">#</a> requestEncoding</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>KVP</code></li></ul><h1 id="format"><a class="header-anchor" href="#format" aria-hidden="true">#</a> format</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="version"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>1.0.0</code></li></ul><h1 id="culture"><a class="header-anchor" href="#culture" aria-hidden="true">#</a> culture</h1><ul><li><strong>Type</strong>: <code>String</code></li><li><strong>Default</strong>: <code>en-us</code></li></ul><h1 id="matrixset"><a class="header-anchor" href="#matrixset" aria-hidden="true">#</a> matrixSet</h1><ul><li><strong>Type</strong>: <code>String</code></li></ul><h1 id="dimensions"><a class="header-anchor" href="#dimensions" aria-hidden="true">#</a> dimensions</h1><ul><li><strong>Type</strong>: <code>Object</code></li></ul><h1 id="imagesmoothing"><a class="header-anchor" href="#imagesmoothing" aria-hidden="true">#</a> imageSmoothing</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><h1 id="maxzoom"><a class="header-anchor" href="#maxzoom" aria-hidden="true">#</a> maxZoom</h1><ul><li><strong>Type</strong>: <code>Number</code></li><li><strong>Default</strong>: <code>21</code></li></ul><h1 id="reprojectionerrorthreshold"><a class="header-anchor" href="#reprojectionerrorthreshold" aria-hidden="true">#</a> reprojectionErrorThreshold</h1><ul><li><strong>Type</strong>: <code>Number</code></li></ul><h1 id="tileloadfunction"><a class="header-anchor" href="#tileloadfunction" aria-hidden="true">#</a> tileLoadFunction</h1><ul><li><strong>Type</strong>: <code>Function</code></li></ul><h1 id="wrapx"><a class="header-anchor" href="#wrapx" aria-hidden="true">#</a> wrapX</h1><ul><li><strong>Type</strong>: <code>Boolean</code></li><li><strong>Default</strong>: <code>true</code></li></ul><h1 id="transition"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h1><ul><li><strong>Type</strong>: <code>Number</code></li></ul>',45),h='{"title":"ol-source-tianditu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/tianditu/index.md","lastUpdated":1630650770422}',k={};const g=Object.assign(k,{expose:[],setup:function(n){return(n,p)=>{const l=a("ClientOnly");return s(),t("div",null,[r,i,u,o(l,null,{default:e((()=>[o(c)])),_:1}),d])}}});export default g;export{h as __pageData};
