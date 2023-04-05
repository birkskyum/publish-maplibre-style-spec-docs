import{g as h,a as i,i as r,c as o,t as u}from"./entry-client-9d25f4a5.js";import{M as c}from"./markdown-e5577b03.js";import{s}from"./v8-31fa6040.js";import{I as y}from"./items-70992cad.js";import"./property-c54d3cb9.js";import"./subtitle-e7688640.js";const d=u("<div><!#><!/><!#><!/></div>",6);function S(){const l=`# Light
    
A style's \`light\` property provides a global light source for that style. Since this property is the light used to light extruded features, you will only see visible changes to your map style when modifying this property if you are using extrusions.

\`\`\`json
"light": ${JSON.stringify(s.$root.light.example,null,2)}
\`\`\`
`;return(()=>{const t=h(d),n=t.firstChild,[e,a]=i(n.nextSibling),g=e.nextSibling,[p,m]=i(g.nextSibling);return r(t,o(c,{content:l}),e,a),r(t,o(y,{headingLevel:"2",get entry(){return s.light}}),p,m),t})()}export{S as default};
