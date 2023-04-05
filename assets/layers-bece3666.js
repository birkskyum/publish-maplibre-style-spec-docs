import{g as Q,s as vt,d as wt,e as kt,t as X,a as n,i,c as e}from"./entry-client-815a31e8.js";import{M as a}from"./markdown-d15779de.js";import{s as d}from"./v8-31fa6040.js";import{I as o}from"./items-82346516.js";import{C as s}from"./caption-af427fa3.js";import"./property-8b9ac3cb.js";import"./subtitle-ff2dd8c8.js";const jt="_image_1st6w_1",Tt={image:jt},It=X('<img alt="">',1);function c({imageId:h}){const t=`/img/src/${h}.png`;return(()=>{const y=Q(It);return vt(y,"src",t),wt(()=>kt(y,Tt.image)),y})()}function p(h,t){const u=h.map(l=>({ref:d[`${l}_${t}`],kind:l,section:`${l}-${t}`})).reduce((l,r)=>(Object.keys(r.ref).forEach(g=>{r.ref[g].kind=r.kind,r.ref[g].section=r.section,l[g]=r.ref[g]}),l),{});return Object.keys(u).sort().reduce((l,r)=>(l[r]=u[r],l),{})}const Lt=X('<div><!#><!/><!#><!/><a id="layout-property" class="anchor"></a><a id="paint-property" class="anchor"></a><hr class="my36"><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/><!#><!/></div>',83);function Gt(){const h=["background","fill","line","symbol","raster","circle","fill-extrusion","heatmap","hillshade"];return(()=>{const t=Q(Lt),y=t.firstChild,[u,l]=n(y.nextSibling),r=u.nextSibling,[g,Z]=n(r.nextSibling),ee=g.nextSibling,te=ee.nextSibling,ne=te.nextSibling,ie=ne.nextSibling,[m,ae]=n(ie.nextSibling),le=m.nextSibling,[b,re]=n(le.nextSibling),oe=b.nextSibling,[_,se]=n(oe.nextSibling),ce=_.nextSibling,[$,pe]=n(ce.nextSibling),ge=$.nextSibling,[f,ye]=n(ge.nextSibling),he=f.nextSibling,[x,ue]=n(he.nextSibling),de=x.nextSibling,[S,me]=n(de.nextSibling),be=S.nextSibling,[v,_e]=n(be.nextSibling),$e=v.nextSibling,[w,fe]=n($e.nextSibling),xe=w.nextSibling,[k,Se]=n(xe.nextSibling),ve=k.nextSibling,[j,we]=n(ve.nextSibling),ke=j.nextSibling,[T,je]=n(ke.nextSibling),Te=T.nextSibling,[I,Ie]=n(Te.nextSibling),Le=I.nextSibling,[L,Me]=n(Le.nextSibling),Ae=L.nextSibling,[M,Ce]=n(Ae.nextSibling),Ne=M.nextSibling,[A,De]=n(Ne.nextSibling),Ee=A.nextSibling,[C,Ye]=n(Ee.nextSibling),Ge=C.nextSibling,[N,Oe]=n(Ge.nextSibling),qe=N.nextSibling,[D,ze]=n(qe.nextSibling),Pe=D.nextSibling,[E,Re]=n(Pe.nextSibling),Ve=E.nextSibling,[Y,We]=n(Ve.nextSibling),Je=Y.nextSibling,[G,Ue]=n(Je.nextSibling),Be=G.nextSibling,[O,He]=n(Be.nextSibling),Fe=O.nextSibling,[q,Ke]=n(Fe.nextSibling),Qe=q.nextSibling,[z,Xe]=n(Qe.nextSibling),Ze=z.nextSibling,[P,et]=n(Ze.nextSibling),tt=P.nextSibling,[R,nt]=n(tt.nextSibling),it=R.nextSibling,[V,at]=n(it.nextSibling),lt=V.nextSibling,[W,rt]=n(lt.nextSibling),ot=W.nextSibling,[J,st]=n(ot.nextSibling),ct=J.nextSibling,[U,pt]=n(ct.nextSibling),gt=U.nextSibling,[B,yt]=n(gt.nextSibling),ht=B.nextSibling,[H,ut]=n(ht.nextSibling),dt=H.nextSibling,[F,mt]=n(dt.nextSibling),bt=F.nextSibling,[K,_t]=n(bt.nextSibling),$t=K.nextSibling,[ft,xt]=n($t.nextSibling);return i(t,e(a,{get content(){return`# Layers

A style's \`layers\` property lists all the layers available in that style. The type of layer is specified by the \`"type"\` property, and must be one of ${h.map(St=>`\`${St}\``).join(", ")}.

Except for layers of the \`background\` type, each layer needs to refer to a source. Layers take the data that they get from a source, optionally filter features, and then define how those features are styled.

\`\`\`json
"layers": ${JSON.stringify(d.$root.layers.example,null,2)}
\`\`\`

## Layer properties
`}}),u,l),i(t,e(o,{get entry(){return d.layer}}),g,Z),i(t,e(a,{content:`
Layers have two sub-properties that determine how data from that layer is rendered: \`layout\` and \`paint\` properties.

_Layout properties_ appear in the layer's \`"layout"\` object. They are applied early in the rendering process and define how data for that layer is passed to the GPU. Changes to a layout property require an asynchronous "layout" step.

_Paint properties_ are applied later in the rendering process. Paint properties appear in the layer's \`"paint"\` object. Changes to a paint property are cheap and happen synchronously.

## background

The \`background\` style layer covers the entire map. Use a background style layer to configure a color or pattern to show below all other map content. If the background layer is transparent or omitted from the style, any part of the map view that does not show another style layer is transparent.
`}),m,ae),i(t,e(c,{imageId:"layer-background",alt:"Vintage map style with a brown halftone background pattern."}),b,re),i(t,e(s,{get children(){return e(a,{content:"\nThe [Vintage map style](https://blog.mapbox.com/designing-the-vintage-style-in-mapbox-studio-9da4aa2a627f) uses a custom SVG [`background-pattern`](/maplibre-gl-js-docs/style-spec/layers/#paint-background-background-pattern) to achieve a textured vintage look.\n"})}}),_,se),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"background")}}),$,pe),i(t,e(a,{content:`
## fill

A \`fill\` style layer renders one or more filled (and optionally stroked) polygons on a map. You can use a fill layer to configure the visual appearance of polygon or multipolygon features.
`}),f,ye),i(t,e(c,{imageId:"layer-fill",alt:"Map of Washington, D.C. with a purple isochrone polygon in the center."}),x,ue),i(t,e(s,{get children(){return e(a,{content:"\nThis map of Washington, D.C. uses the [`fill-opacity`](/maplibre-gl-js-docs/style-spec/layers/#paint-fill-fill-opacity) paint property to render a semi-transparent polygon, showing how far a person can walk from the center of the city in ten minutes.\n"})}}),S,me),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"fill")}}),v,_e),i(t,e(a,{content:`
## line

A \`line\` style layer renders one or more stroked polylines on the map. You can use a line layer to configure the visual appearance of polyline or multipolyline features.
`}),w,fe),i(t,e(c,{imageId:"layer-line",alt:"Outdoors style map with a red line showing a hiking path."}),k,Se),i(t,e(s,{get children(){return e(a,{content:"\nThis map of a [Strava](https://blog.mapbox.com/strava-launches-gorgeous-new-outdoor-maps-977c74cf37f9) user's hike through Grand Teton National Park uses the [`line-color`](/maplibre-gl-js-docs/style-spec/layers/#paint-line-line-color) and [`line-width`](/maplibre-gl-js-docs/style-spec/layers/#paint-line-line-width) paint properties to style the strong red line of the user's route.\n"})}}),j,we),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"line")}}),T,je),i(t,e(a,{content:`
## symbol

A \`symbol\` style layer renders icon and text labels at points or along lines on a map. You can use a symbol layer to configure the visual appearance of labels for features in vector tiles.
`}),I,Ie),i(t,e(c,{imageId:"layer-symbol",alt:"Map with thirty shopping bag icons, color-coded red, orange, and green."}),L,Me),i(t,e(s,{get children(){return e(a,{content:"\nThis map of Denver area businesses uses the [`icon-image`](/maplibre-gl-js-docs/style-spec/layers/#layout-symbol-icon-image) layout property to use a custom image as an icon in a symbol layer.\n"})}}),M,Ce),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"symbol")}}),A,De),i(t,e(a,{content:`
## raster

A \`raster\` style layer renders raster tiles on a map. You can use a raster layer to configure the color parameters of raster tiles.
`}),C,Ye),i(t,e(c,{imageId:"layer-raster",alt:"Shortwave infrared imagery of California wildfires overlayed near the city of Morgan Hill."}),N,Oe),i(t,e(s,{get children(){return e(a,{content:"\nThis [interactive SWIR imagery map by Maxar](https://blog.maxar.com/news-events/2020/maxar-and-mapbox-release-interactive-swir-imagery-map-of-california-wildfires?utm_source=mapbox&utm_medium=blog&utm_campaign=ca-wildfires-2020-map) uses the [`visibility`](/maplibre-gl-js-docs/style-spec/layers/#layout-raster-visibility) layout property to show or hide raster layers with shortwave infrared satellite imagery of California wildfires.\n"})}}),D,ze),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"raster")}}),E,Re),i(t,e(a,{content:`
## circle

A \`circle\` style layer renders one or more filled circles on a map. You can use a circle layer to configure the visual appearance of point or point collection features in vector tiles. A circle layer renders circles whose radii are measured in screen units.
`}),Y,We),i(t,e(c,{imageId:"layer-circle",alt:"Map with circles of different sizes and colors."}),G,Ue),i(t,e(s,{get children(){return e(a,{content:"\nThis [cluster map](/maplibre-gl-js-docs/example/cluster/) uses a circle layer with a GeoJSON data source and sets the source's [`cluster`](/maplibre-gl-js-docs/style-spec/sources/#geojson-cluster) property to `true` to visualize points as clusters.\n"})}}),O,He),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"circle")}}),q,Ke),i(t,e(a,{content:`
## fill-extrusion

A \`fill-extrusion\` style layer renders one or more filled (and optionally stroked) extruded (3D) polygons on a map. You can use a fill-extrusion layer to configure the extrusion and visual appearance of polygon or multipolygon features.
`}),z,Xe),i(t,e(c,{imageId:"layer-fill-extrusion",alt:"Map of Europe and North Africa with countries extruded to various heights."}),P,et),i(t,e(s,{get children(){return e(a,{content:"\nThis map uses an external dataset to provide data-driven values for the [`fill-extrusion-height`](/maplibre-gl-js-docs/style-spec/layers/#paint-fill-extrusion-fill-extrusion-height) paint property of various [country polygons](https://blog.mapbox.com/high-resolution-administrative-country-polygons-in-studio-57cf4abb0768) in a fill-extrusion layer.\n"})}}),R,nt),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"fill-extrusion")}}),V,at),i(t,e(a,{content:`
## heatmap

A \`heatmap\` style layer renders a range of colors to represent the density of points in an area.
`}),W,rt),i(t,e(c,{imageId:"layer-heatmap",alt:"Dark map with a heatmap layer glowing red inside and white outside."}),J,st),i(t,e(s,{get children(){return e(a,{content:`
[This visualization of earthquake data](/maplibre-gl-js-docs/example/heatmap-layer/) uses a heatmap layer with carefully defined [paint](/maplibre-gl-js-docs/style-spec/layers/#paint-property) properties to highlight areas where earthquake frequency is high and many points are clustered closely together.
`})}}),U,pt),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"heatmap")}}),B,yt),i(t,e(a,{content:`
## hillshade

A \`hillshade\` style layer renders digital elevation model (DEM) data on the client-side. The implementation only supports Mapbox Terrain RGB and Mapzen Terrarium tiles.
`}),H,ut),i(t,e(c,{imageId:"layer-hillshade",alt:"Map of Mount Shasta rising up with striking texture and shading."}),F,mt),i(t,e(s,{get children(){return e(a,{content:"\nThis map of Mount Shasta uses a high value for the [`hillshade-exaggeration`](/maplibre-gl-js-docs/style-spec/layers/#paint-hillshade-hillshade-exaggeration) paint property to apply an intense shading effect.\n"})}}),K,_t),i(t,e(o,{headingLevel:"3",get entry(){return p(["layout","paint"],"hillshade")}}),ft,xt),t})()}export{Gt as default};