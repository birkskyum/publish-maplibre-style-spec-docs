import{P as L,o as N,S as q}from"./property-c54d3cb9.js";import{c as f,b as n,g as r,i as u,s as y,m as A,t as a,a as p,d as J}from"./entry-client-9d25f4a5.js";import{S as j}from"./subtitle-e7688640.js";import{M as C}from"./markdown-e5577b03.js";const R=a('<span> <a href="/maplibre-gl-style-spec/style-spec/light/">light</a></span>',4),w=a('<span> <a href="/maplibre-gl-style-spec/style-spec/transition/">transition</a></span>',4),M=a('<span> object with <a href="/maplibre-gl-style-spec/style-spec/sources/">source</a> values</span>',4),P=a('<span> <a href="/maplibre-gl-style-spec/style-spec/layers/">layer<!#><!/></a></span>',6),D=a('<span> <a href="/maplibre-gl-style-spec/style-spec/types/#array">array</a><!#><!/></span>',6),I=a("<span> of <!#><!/></span>",4),E=a('<span> <a href="/maplibre-gl-style-spec/style-spec/expressions/">expression<!#><!/></a></span>',6),T=a('<span> <a href="/maplibre-gl-style-spec/style-spec/layers/#layout-property">layout</a></span>',4),K=a('<span> <a href="/maplibre-gl-style-spec/style-spec/layers/#paint-property">paint</a></span>',4),U=a("<span> <a><!#><!/><!#><!/></a></span>",8),z=a("<span><em>Requires</em> <var></var>. </span>",6),B=a("<span><em>Disabled by</em> <var></var>. </span>",6),F=a("<span><em>Requires</em> <var></var> to be <!#><!/>. </span>",8),O=a("<code></code>",2),G=a("<span><em>Requires</em> <var></var> to be <code></code>. </span>",8),H=a('<a href="/maplibre-gl-style-spec/style-spec/layers/#paint-property">Paint</a>',2),Q=a('<a href="/maplibre-gl-style-spec/style-spec/layers/#layout-property">Layout</a>',2),V=a("<span> between <code></code> and <code></code> inclusive</span>",6),W=a("<span> greater than or equal to <code></code></span>",4),X=a("<span> less than or equal to <code></code></span>",4),Y=a("<var></var>",2),Z=a('<em class="color-gray"><a href="/maplibre-gl-style-spec/style-spec/expressions/#feature-state"><code>feature-state</code></a></em>',6),ee=a('<a href="/maplibre-gl-style-spec/style-spec/expressions/#interpolate"><code>interpolate</code></a>',4),te=a('<div class="mb12 style-spec-item-doc"></div>',2),ne=a('<div class="my12 style-spec-item-dl"><dl></dl></div>',4),le=a("<dt><code></code>:</dt>",4),ie=a('<dd class="mb12"></dd>',2),re=a('<div class="mt12"></div>',2);function se(e){function g(t=e,i=!1){switch(t.type){case null:case"*":return;case"light":return r(R);case"transition":return r(w);case"sources":return r(M);case"layer":return(()=>{const l=r(P),c=l.firstChild,s=c.nextSibling,$=s.firstChild,_=$.nextSibling,[m,o]=p(_.nextSibling);return u(s,i&&"s",m,o),l})();case"array":return(()=>{const l=r(D),c=l.firstChild,s=c.nextSibling,$=s.nextSibling,[_,m]=p($.nextSibling);return u(l,(()=>{const o=n(()=>!!t.value);return()=>o()&&(()=>{const d=r(I),b=d.firstChild,v=b.nextSibling,[x,S]=p(v.nextSibling);return u(d,()=>g(typeof t.value=="string"?{type:t.value}:t.value,!0),x,S),d})()})(),_,m),l})();case"filter":return(()=>{const l=r(E),c=l.firstChild,s=c.nextSibling,$=s.firstChild,_=$.nextSibling,[m,o]=p(_.nextSibling);return u(s,i&&"s",m,o),l})();case"layout":return r(T);case"paint":return r(K);default:return(()=>{const l=r(U),c=l.firstChild,s=c.nextSibling,$=s.firstChild,[_,m]=p($.nextSibling),o=_.nextSibling,[d,b]=p(o.nextSibling);return u(s,()=>t.type,_,m),u(s,i&&"s",d,b),J(()=>y(s,"href",`/maplibre-gl-style-spec/style-spec/types/#${t.type}`)),l})()}}function h(t,i){if(typeof t=="string")return(()=>{const l=r(z),c=l.firstChild,s=c.nextSibling,$=s.nextSibling;return y(l,"key",i),u($,t),l})();if(t["!"])return(()=>{const l=r(B),c=l.firstChild,s=c.nextSibling,$=s.nextSibling;return y(l,"key",i),u($,()=>t["!"]),l})();{const[l,c]=N(t)[0];return Array.isArray(c)?(()=>{const s=r(F),$=s.firstChild,_=$.nextSibling,m=_.nextSibling,o=m.nextSibling,d=o.nextSibling,[b,v]=p(d.nextSibling);return b.nextSibling,y(s,"key",i),u(m,l),u(s,()=>c.map((x,S)=>(()=>{const k=r(O);return y(k,"key",S),u(k,()=>JSON.stringify(x)),k})()).reduce((x,S)=>[x,", or ",S]),b,v),s})():(()=>{const s=r(G),$=s.firstChild,_=$.nextSibling,m=_.nextSibling,o=m.nextSibling,d=o.nextSibling;return y(s,"key",i),u(m,l),u(d,()=>JSON.stringify(c)),s})()}}return[f(L,{get headingLevel(){return e.headingLevel},get id(){return e.id},get children(){return e.name}}),f(j,{get children(){return[n(()=>n(()=>e.kind==="paint")()&&[r(H)," ","<!>","property.","<!>"," "]),n(()=>n(()=>e.kind==="layout")()&&[r(Q)," ","<!>","property.","<!>"," "]),[n(()=>e.required?"Required":"Optional"),"<!>",n(g),"<!>",n((()=>{const t=n(()=>"minimum"in e&&"maximum"in e);return()=>t()&&(()=>{const i=r(V),l=i.firstChild,c=l.nextSibling,s=c.nextSibling,$=s.nextSibling;return u(c,()=>e.minimum),u($,()=>e.maximum),i})()})()),"<!>",n((()=>{const t=n(()=>"minimum"in e&&!("maximum"in e));return()=>t()&&(()=>{const i=r(W),l=i.firstChild,c=l.nextSibling;return u(c,()=>e.minimum),i})()})()),"<!>",n((()=>{const t=n(()=>!("minimum"in e)&&"maximum"in e);return()=>t()&&(()=>{const i=r(X),l=i.firstChild,c=l.nextSibling;return u(c,()=>e.minimum),i})()})()),"<!>",".","<!>"," "],n(()=>n(()=>!!(e.values&&!Array.isArray(e.values)))()&&["One of","<!>"," ","<!>",n(()=>Object.keys(e.values).map((t,i)=>(()=>{const l=r(O);return y(l,"key",i),u(l,()=>JSON.stringify(t)),l})()).reduce((t,i)=>[t,", ",i])),"<!>",".","<!>"," "]),n(()=>n(()=>!!e.units)()&&["Units in ","<!>",(()=>{const t=r(Y);return u(t,()=>e.units),t})(),".","<!>"," "]),n(()=>n(()=>e.default!==void 0)()&&["Defaults to","<!>"," ","<!>",(()=>{const t=r(O);return u(t,()=>JSON.stringify(e.default)),t})(),".","<!>"," "]),n(()=>n(()=>!!e.requires)()&&[n(()=>e.requires.map((t,i)=>h(t,i))),"<!>"," "]),n(()=>n(()=>!!(e.expression&&(e.expression.interpolated||e.expression.parameters.includes("feature-state"))))()&&["Supports","<!>"," ","<!>",n((()=>{const t=n(()=>!!e.expression.parameters.includes("feature-state"));return()=>t()&&r(Z)})()),"<!>",n(()=>e.expression.interpolated&&e.expression.parameters.includes("feature-state")&&" and "),"<!>",n((()=>{const t=n(()=>!!e.expression.interpolated);return()=>t()&&r(ee)})()),"<!>","expressions.","<!>"," "]),n(()=>n(()=>!!e.transition)()&&["Transitionable.","<!>"," "])]}}),n((()=>{const t=n(()=>!!e.doc);return()=>t()&&(()=>{const i=r(te);return u(i,f(C,{get content(){return e.doc}})),i})()})()),"<!>",n((()=>{const t=n(()=>!!(e.values&&!Array.isArray(e.values)));return()=>t()&&(()=>{const i=r(ne),l=i.firstChild;return u(l,()=>N(e.values).map(([c,{doc:s}],$)=>[(()=>{const _=r(le),m=_.firstChild;return y(_,"key",`${$}-dt`),u(m,()=>JSON.stringify(c)),_})(),(()=>{const _=r(ie);return y(_,"key",`${$}-dd`),u(_,f(C,{content:s})),_})()])),i})()})()),"<!>",n((()=>{const t=n(()=>!!e.example);return()=>t()&&f(C,{get content(){return`
\`\`\`json
"${e.name}": ${JSON.stringify(e.example,null,2)}
\`\`\`
`}})})()),"<!>",n((()=>{const t=n(()=>!!e["sdk-support"]);return()=>t()&&(()=>{const i=r(re);return u(i,f(q,A(()=>e["sdk-support"]))),i})()})())]}function _e(e){return n(()=>N(e.entry).sort().map(([g,h])=>{const t=e.entry[g],i=t.section||e.section,l=t.kind||e.kind,c=t.headingLevel||e.headingLevel;return["vector","raster","raster-dem","geojson","image","video"].indexOf(e.section)>-1&&(g==="*"||g==="type")?[]:f(se,A({id:`${i?`${i}-`:""}${g}`,name:g},h,{kind:l,headingLevel:c}))}))}export{_e as I};
