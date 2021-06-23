import{o as n,c as s,a}from"./app.d978c72f.js";const e='{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Usage","slug":"usage"}],"relativePath":"index.md","lastUpdated":1624469645727}',p={},t=a('<h2 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Vue3 OpenLayers works with Vue.js <strong>^3.0</strong> and OpenLayers <strong>^6.5.0</strong></p><h1 id="npm"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h1><p>Install current <strong>stable version</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vue3-openlayers\n</code></pre></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>To use Vue3 OpenLayers in your application, you can import all components or just what you really need.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token keyword">import</span> OpenLayersMap <span class="token keyword">from</span> <span class="token string">&#39;vue3-openlayers&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vue3-openlayers/dist/vue3-openlayers.css&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>OpenLayersMap<span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div>',8);p.render=function(a,e,p,o,r,l){return n(),s("div",null,[t])};export default p;export{e as __pageData};
