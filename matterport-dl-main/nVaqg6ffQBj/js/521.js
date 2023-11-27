"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[521],{1158:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(53613),i=n(69170),a=n(53203),l=n(14564),s=n(64210),o=n(26544);const u=async function(e){const t=await e.getModuleBySymbol(i.y.SETTINGS),n=t.addPanel(r.s.TITLE,r.s.HOTKEYS,{width:350});await t.loadPromise.then((()=>{const r="meshtextures";[{panel:n,header:r,setting:"disableTextureStreamBelowLod",initialValue:()=>-1,onChange:e=>{e>-1&&(0,o.qT)().limitStreamingBelow(e)},urlParam:!0,rangePrecision:0,range:[-1,7]},{panel:n,header:r,setting:"textureStreamPause",initialValue:()=>a.ZP.debugPauseTexStream,onChange:e=>{a.ZP.debugPauseTexStream=e},urlParam:!0},{panel:n,header:r,setting:"textureStreamRaycastHits",initialValue:()=>a.ZP.debugLOD,onChange:e=>{a.ZP.debugLOD=e,e||(0,s.d)()},urlParam:!0},{panel:n,header:r,setting:"debugRTTQuality",initialValue:()=>a.ZP.debugRttQuality,onChange:t=>{a.ZP.debugRttQuality=t,t||e.commandBinder.issueCommand(new l.u({color:null},{style:l.u.selectBy.all}))},urlParam:!0},{panel:n,header:r,setting:"debugRTTScores",initialValue:()=>a.ZP.debugRttScores,onChange:t=>{a.ZP.debugRttScores=t,t||e.commandBinder.issueCommand(new l.u({color:null},{style:l.u.selectBy.all}))},urlParam:!0}].forEach((e=>t.registerMenuEntry(e)))}))}},50447:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O,tiledMeshDebugMenu:()=>S});var r=n(81396),i=n(97998),a=n(69170),l=n(53613),s=n(35895);function o(e,t=16){let n;const r=(0,s.k1)((()=>n=window.setInterval((()=>e()),t)),(()=>{n&&clearInterval(n)}));return r.cancel(),r}var u=n(59279),d=n(39880),c=n(92558),g=n(69984),h=n(947),m=n(51524),p=n(53203),y=n(26544);const x=new i.Z("tiled-mesh"),M={hideMenu:"1"!==(0,u.eY)("dmenu","0"),debug:"1"===(0,u.eY)("debugTiles","0")||"1"===(0,u.eY)("debug-tiles","0"),statsTiles:!1,statsTileset:!0,statsTextures:!0,statsTextureStream:!0};let T=null;function b(e,t,n,r){T||(T=document.createElement("div"),T.style.color="#FFFFFF",T.style.fontFamily="Roboto",T.style.fontWeight="300",T.style.fontSize="12px",T.style.position="absolute",T.style.top="85px",T.style.width="500px",T.style.pointerEvents="none",T.style.whiteSpace="pre",T.style.zIndex="99999",T.style.textShadow="0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",document.body.appendChild(T));let i=M.statsTileset?function(e,t){var n,r,i;const a=e.tilesRenderer,l=Object.values(null!==(n=a.tileSets)&&void 0!==n?n:[])[0];return`\ntileset: preset: ${null===(r=null==l?void 0:l.asset.extras)||void 0===r?void 0:r.preset}, depth: ${null===(i=null==l?void 0:l.asset.extras)||void 0===i?void 0:i.depth}, version: ${null==l?void 0:l.asset.tilesetVersion}\nview: errorTarget: ${a.errorTarget}, maxLOD: ${m.t.maxLOD}, detail: '${t.detail}'\n`}(e,r):"";i+=M.statsTiles?function(e,t,n){const r=e.tilesRenderer,i=r.visibleTiles,a={};i.forEach((e=>{var t;const n=`lod${null===(t=e.extras)||void 0===t?void 0:t.level}`,r=a[n]||0;a[n]=r+1}));const l=t.threeRenderer.info,{stats:s,downloadQueue:o,parseQueue:u,lruCache:d}=r,{active:c,downloading:g,inFrustum:h,parsing:p,used:y,visible:x}=s;return`\nthree:\n    drawCalls: ${l.render.calls}\n    geometries: ${l.memory.geometries}\n    textures: ${l.memory.textures}\n    triangles: ${l.render.triangles}\n    memory allocated (megs): ${Math.floor(t.estimatedGPUMemoryAllocated()/2**20)}\ntiles:\n    detail (per mode): ${n.detail}\n    maxLOD (current): ${m.t.maxLOD}\n    errorTarget: ${m.t.errorTarget}\n    tiles in frustum: ${h}\n    visible: ${x}`+Object.keys(a).sort().map((e=>`\n     ${e} tiles: ${a[e]||0}`)).join()+`\n    downloading gltf: ${g}\n    parsing gltf: ${p}\n    active: ${c}\n    used: ${y}\n    queues:\n      download: ${o.currJobs} running, ${o.items.length} waiting\n      parse: ${u.currJobs} running, ${u.items.length} waiting\n    lruCache: ${d.itemSet.size}\n`}(e,n,r):"",i+=M.statsTextureStream?function(e){const t="downloaded:\n"+Object.keys(e.totalTextures).map((t=>`    ${t}: ${e.totalTextures[t]} `)).join("\n")+"\n";return`textureStreaming:\n    downloadingTiles: ${e.downloadingTiles} / ${e.totalTiles}\n    downloadingTextures: ${e.loadingTextures}\n`+t}(t):"",T.textContent=i}let v=null;async function S(e){if(!M.debug)return;const t=await e.getModuleBySymbol(a.y.SETTINGS),n=await e.getModuleBySymbol(a.y.INPUT),r=await e.getModuleBySymbol(a.y.WEBGL_RENDERER),i=r.getScene(),s=await e.getModuleBySymbol(a.y.MODEL_MESH),u=s.modelTextureLoader,h=s.modelMesh,T=s.modelMesh.tileLoader,S=t.tryGetProperty(p.iT,!1);function f(){v||(v=setInterval((()=>b(T,u,r,h)),150))}const O=t.addPanel(l.s.TITLE,l.s.HOTKEYS,{width:350}),C={viz:"visualize",stats:"stats",tile:"tileset",log:"log"},V=function(e,t,n,r,i){const a=w(n,i,((e,t)=>e.setWireframe(t))),l=function(e,t){const n={scale:1},r=(t,r)=>{if(!t)return;const i=e.container.tilesByChunkId.get(t.id),a=(null==i?void 0:i.__error)||1e-4,l=t.lod!==m.t.maxLOD&&a>m.t.errorTarget?1:.5,s=Math.max(0,Math.min(1,1-n.scale/a)),o=r?P(t.lod,s,l):null;t.setColorOverlay(o)},i=w(e,t,r),a=o((()=>i.colorize(e.container.chunks)));return{toggle:e=>{e?a.renew():a.cancel(),i.toggle(e)},colorize:i.colorize,subscription:a,config:n}}(n,i),s=w(n,i,((e,t)=>{e.setColorOverlay(t?P(e.lod,1,.5):null)})),u=w(n,i,((e,t)=>{e.setColorOverlay(t?(0,g.G1)(.5,e.id||0):null)})),d=w(n,i,((e,t)=>{var r;const i=n.container.tilesByChunkId.get(e.id);e.setColorOverlay(t?(0,g.G1)(.5,(0,c.un)((null===(r=null==i?void 0:i.content)||void 0===r?void 0:r.uri)||"missing")||0):null)})),h=w(n,i,((e,t)=>{e.setColorOverlay(t?(0,g.G1)(.5,(e.meshGroup<<16)+e.meshSubgroup||0):null)})),p=w(n,i,((e,t)=>{e.setColorOverlay(t?(0,g.G1)(.5,e.meshSubgroup||0):null)})),M=w(n,i,((e,t)=>{e.setColorOverlay(t?(0,g.G1)(.5,e.meshGroup||0):null)})),T=w(n,i,((e,t)=>{e.setColorOverlay(t?(0,g.G1)(.5,(0,c.un)(e.textureName)||0):null)})),b=w(n,i,((e,t)=>{const r=n.container.tilesByChunkId.get(e.id);e.setColorOverlay(t?(0,g.G1)(.5,(null==r?void 0:r.geometricError)||0):null)})),v=r.slots,S=(0,y.qT)(),f=w(n,i,((e,t)=>{const n=v.find((t=>t.textureName===e.textureName));if(n){const r=n.loading?1:n.quality>S.min(e.lod)?.7:.3,i=S.maxTexelSize/S.get(n.quality).texelSize;e.setColorOverlay(t?P(e.lod,i,r):null)}})),O=o((()=>f.colorize(n.container.chunks)));let C="none";const V={none:void 0,byError:l,byGeometricError:b,byTile:d,bySubgroup:p,byMeshgroup:M,bySubAndMeshgroup:h,byTexture:T,byStreamedTextures:{subscription:O,toggle:e=>{e?O.renew():O.cancel(),e&&x.info("colorize=byStreamedTextures solid color: loading, dark color: streamed, light color: basis"),f.toggle(e)}},byChunk:u,byLod:s};return[{panel:e,header:t.viz,setting:"disableTileUpdates",initialValue:()=>m.t.disableTileUpdates,onChange:e=>{m.t.disableTileUpdates=e},urlParam:!0},{panel:e,header:t.viz,setting:"wireframe",initialValue:()=>!1,onChange:a.toggle,urlParam:!0},{panel:e,header:t.viz,setting:"colorize",initialValue:()=>"none",onChange:e=>{var t,n;null===(t=V[C])||void 0===t||t.toggle(!1),null===(n=V[e])||void 0===n||n.toggle(!0),C=e},options:Object.keys(V),urlParam:!0},{panel:e,header:t.viz,setting:"colorizeByErrorScale",initialValue:()=>1,onChange:e=>{l.config.scale=e},range:[0,6],rangePrecision:3,urlParam:!0}]}(O,C,T,u,e),E=[{panel:O,header:C.stats,setting:"tilesetStatsOverlay",initialValue:()=>M.statsTileset,onChange:e=>{M.statsTileset=e,e&&f()},urlParam:!0},{panel:O,header:C.stats,setting:"tileStatsOverlay",initialValue:()=>M.statsTiles,onChange:e=>{M.statsTiles=e,e&&f()},urlParam:!0},{panel:O,header:C.stats,setting:"textureStatsOverlay",initialValue:()=>M.statsTextures,onChange:e=>{M.statsTextures=e,e&&f()},urlParam:!0},{panel:O,header:C.stats,setting:"textureStreamingOverlay",initialValue:()=>M.statsTextureStream,onChange:e=>{M.statsTextureStream=e,e&&f()},urlParam:!0}],L=[{panel:O,header:C.log,buttonName:"Log: App State",callback:()=>{x.warn(s),x.warn(n),x.warn(i),x.warn(t)}}];S&&(M.hideMenu||await(0,d.gw)(1e3).then((()=>{t.getSettingsGui().loadGuiPackage().then((()=>{t.getSettingsGui().toggle(t.getMainPanelId()),t.getSettingsGui().toggle(t.getMainPanelId())}))})),await(0,d.gw)(16),V.forEach((e=>t.registerMenuEntry(e))),await(0,d.gw)(16),function(e,t){return[{panel:e,header:t.tile,setting:"maxLOD",initialValue:()=>m.t.maxLOD,onChange:e=>{m.t.maxLOD=e},range:[0,4],rangePrecision:0,urlParam:!0},{panel:e,header:t.tile,setting:"nonMeshMaxLOD",initialValue:()=>m.t.nonMeshMaxLOD,onChange:e=>{m.t.nonMeshMaxLOD=e},range:[0,4],rangePrecision:0,urlParam:!0},{panel:e,header:t.tile,setting:"minLOD",initialValue:()=>m.t.minLOD,onChange:e=>{m.t.minLOD=e},range:[0,4],rangePrecision:0,urlParam:!0},{panel:e,header:t.tile,setting:"smallMeshThreshold",initialValue:()=>m.t.smallMeshThreshold,onChange:e=>{m.t.smallMeshThreshold=e},range:[0,100],rangePrecision:1,urlParam:!0},{panel:e,header:t.tile,setting:"errorTarget",initialValue:()=>m.t.errorTarget,onChange:e=>{m.t.errorTarget=e},range:[0,20],rangePrecision:1,urlParam:!0},{panel:e,header:t.tile,setting:"smallMeshErrorMultiplier",initialValue:()=>m.t.smallMeshErrorMultiplier,onChange:e=>{m.t.smallMeshErrorMultiplier=e},range:[.01,2],rangePrecision:2,urlParam:!0},{panel:e,header:t.tile,setting:"displayActiveTiles",initialValue:()=>m.t.displayActiveTiles,onChange:e=>{m.t.displayActiveTiles=e},urlParam:!0},{panel:e,header:t.tile,setting:"loadSiblings",initialValue:()=>m.t.loadSiblings,onChange:e=>{m.t.loadSiblings=e},urlParam:!0},{panel:e,header:t.tile,setting:"autoDisableRendererCulling",initialValue:()=>m.t.autoDisableRendererCulling,onChange:e=>{m.t.autoDisableRendererCulling=e},urlParam:!0},{panel:e,header:t.tile,setting:"stopAtEmptyTiles",initialValue:()=>m.t.stopAtEmptyTiles,onChange:e=>{m.t.stopAtEmptyTiles=e},urlParam:!0},{panel:e,header:t.tile,setting:"disableTileUpdates",initialValue:()=>m.t.disableTileUpdates,onChange:e=>{m.t.disableTileUpdates=e},urlParam:!0},{panel:e,header:t.tile,setting:"disposeModel",initialValue:()=>m.t.disposeModel,onChange:e=>{m.t.disposeModel=e},urlParam:!0},{panel:e,header:t.tile,setting:"limitMemoryUsage",initialValue:()=>m.t.limitMemoryUsage,onChange:e=>{m.t.limitMemoryUsage=e},urlParam:!0},{panel:e,header:t.tile,setting:"allocatedMegsBeforeLimitingLod",initialValue:()=>m.t.allocatedMegsBeforeLimitingLod,onChange:e=>{m.t.allocatedMegsBeforeLimitingLod=e},urlParam:!0,range:[100,1e3]},{panel:e,header:t.tile,setting:"lruMinExtraTiles",initialValue:()=>m.t.lruMinExtraTiles,onChange:e=>{m.t.lruMinExtraTiles=e},urlParam:!0,range:[0,2e3]},{panel:e,header:t.tile,setting:"lruMaxTiles",initialValue:()=>m.t.lruMaxTiles,onChange:e=>{m.t.lruMaxTiles=e},urlParam:!0,range:[0,2e3]},{panel:e,header:t.tile,setting:"lruUnloadPercent",initialValue:()=>m.t.lruUnloadPercent,onChange:e=>{m.t.lruUnloadPercent=e},urlParam:!0,range:[0,1]},{panel:e,header:"Priority",setting:"errorMultiplierRaycastOcclusion",initialValue:()=>m.t.errorMultiplierRaycastOcclusion,onChange:e=>{m.t.errorMultiplierRaycastOcclusion=e},urlParam:!0,range:[.001,1],rangePrecision:2},{panel:e,header:"Priority",setting:"errorMultiplierHiddenFloors",initialValue:()=>m.t.errorMultiplierHiddenFloors,onChange:e=>{m.t.errorMultiplierHiddenFloors=e},urlParam:!0,range:[.001,1],rangePrecision:2}]}(O,C).forEach((e=>t.registerMenuEntry(e))),E.forEach((e=>t.registerMenuEntry(e))),L.forEach((e=>t.registerMenuButton(e))))}function w(e,t,n){let r=!1;const i=e=>{t.after(h.A.End).then((()=>{e.forEach((e=>{e&&n(e,r)}))}))},a=e.notifyOnChunksLoaded(i);a.cancel();return{toggle:t=>{t?a.renew():a.cancel(),t!==r&&(r=t,i([...e.container.chunks]))},colorize:i,subscription:a}}const f={0:new r.Vector4(1,0,0,1),1:new r.Vector4(0,1,0,1),2:new r.Vector4(0,0,1,1),3:new r.Vector4(1,1,1,1),4:new r.Vector4(1,0,1,1),5:new r.Vector4(0,1,1,1),6:new r.Vector4(1,1,0,1),7:new r.Vector4(0,0,0,1)};function P(e,t,n){var i,a;const l=null!==(a=null===(i=f[e])||void 0===i?void 0:i.clone())&&void 0!==a?a:new r.Vector4;return l.multiplyScalar(t),l.setW(n),l}const O=S},53613:(e,t,n)=>{n.d(t,{s:()=>r});const r={TITLE:"streamed-mesh (T)",HOTKEYS:[n(32597).R.T]}},14564:(e,t,n)=>{n.d(t,{u:()=>l});var r,i,a=n(19663);!function(e){e.all="all",e.byMeshGroup="byMeshGroup",e.byMeshSubGroup="byMeshSubGroup"}(r||(r={})),function(e){e.explicit="explicit",e.random="random"}(i||(i={}));class l extends a.m{constructor(e,t){super(),this.id="SET_MESH_OVERLAY_COLOR",this.payload={selectBy:(null==t?void 0:t.style)||r.all,colorStyle:(null==e?void 0:e.style)||i.explicit,color:(null==e?void 0:e.color)||null,alpha:(null==e?void 0:e.alpha)||.5,index:null==t?void 0:t.index}}}l.selectBy=r,l.colorBy=i,l.COLOR_DIM={x:0,y:0,z:0,w:.3}},21270:(e,t,n)=>{var r;n.d(t,{V:()=>r}),function(e){e[e.Min=0]="Min",e[e.Standard=1]="Standard",e[e.High=2]="High",e[e.Detail=3]="Detail"}(r||(r={}))},51524:(e,t,n)=>{n.d(t,{t:()=>s});var r=n(59279),i=n(53261),a=n(31362),l=n(21270);const s={urlTemplateToken:"<file>",initialMaxLOD:l.V.Min,nonMeshMaxLOD:l.V.Standard,maxLOD:l.V.High,minLOD:l.V.Min,loadSiblings:!0,displayActiveTiles:!1,autoDisableRendererCulling:!0,optimizeRaycast:!1,stopAtEmptyTiles:!1,disableTileUpdates:!1,disposeModel:!1,limitMemoryUsage:(0,a.tq)(),allocatedMegsBeforeLimitingLod:350,lruMinExtraTiles:(0,a.tq)()?0:100,lruMaxTiles:800,lruUnloadPercent:.05,tileAssetRequestPriority:i.ru.MEDIUM,downloadQueueConcurrency:8,parseQueueConcurrency:10,snappingMaxLOD:l.V.Standard,errorTarget:Number((0,r.eY)("errorTarget",(0,a.tq)()?6:4)),errorMultiplierHiddenFloors:.01,errorMultiplierRaycastOcclusion:.1,smallMeshThreshold:Number((0,r.eY)("smallMeshThreshold",40)),smallMeshErrorMultiplier:Number((0,r.eY)("smallMeshErrorMultiplier",.1))}},26544:(e,t,n)=>{n.d(t,{O7:()=>h,qT:()=>g});var r=n(69984),i=n(81396),a=n(21270),l=n(2569),s=n(53203);class o{constructor(){this._configs={},this._orders={},this._maxLod=-1/0,this._maxTs=1/0,this._streamAbove=0,this.resetOnNextRegisterOnce=!1,this.dynamic=!1}static encodeKey(e,t){return e-t}get maxLod(){return this._maxLod}get maxTexelSize(){return this._maxTs}limitStreamingBelow(e){this._streamAbove=e}order(e,t=!1){return t&&!this._orders[e]&&(this._orders[e]=[]),this._orders[e]}reset(){this._configs={},this._orders={},this.dynamic=!1,this._maxTs=1/0,this._maxLod=-1/0}get isDynamic(){return this.dynamic}valid(e){return e in this._configs}get(e){if(!this.valid(e))throw new Error("invalid quality level "+e);return this._configs[e]}max(e){return e<this._streamAbove?this.min(e):this.order(e)[this.order(e).length-1]}min(e){return this.order(e)[0]}fromPixelSize(e,t){const n=this.order(e),r=this.min(e);let i=this.max(e);for(let e=n.length-1;e>=0;e--)t>this.get(n[e]).texelSize&&n.indexOf(i)>n.indexOf(r)&&(i=n[e]);return i}moreDetailed(e,t){let n=this.min(e);const r=this.max(e),i=this.order(e),a=i.indexOf(t);return a+1===i.length?r:(-1!==a&&(n=Math.min(r,i[a+1%i.length])),n)}lessDetailed(e,t){const n=this.order(e),r=n.indexOf(t);let i=t;return-1!==r&&(i=n[Math.max(0,r-1)]),i}minSize(){return Object.values(this._configs).sort(u)[0]}maxSize(){const e=Object.values(this._configs).sort(u);return e[e.length-1]}nearestQuality(e,t){const n=this.order(e),r=this.max(e),i=(0,l.et)(t,1,4,0,n.length-1);return Math.min(r,n[Math.round(i)])}registerQualities(e,t,n,r,i="max"){this.dynamic=!0,this.resetOnNextRegisterOnce&&(this.reset(),this.resetOnNextRegisterOnce=!1);const a=this._configs,l=this.order(e,!0),u=t*r;for(let r=t,d=n;r>=u;r*=.5,d*=2){const n=o.encodeKey(e,d),u=a[n];(!u||u&&u.assetSize<t)&&(this._maxTs=Math.min(this._maxTs,d),this._maxLod=Math.max(this._maxLod,e),a[n]={key:n,lod:e,texelSize:d,textureSize:r,assetSize:t,assetType:i,tileSize:Math.min(r,s.ZP.textureTileSize)}),-1===l.indexOf(n)&&l.push(n)}l.sort(((e,t)=>a[t].texelSize-a[e].texelSize))}}function u(e,t){return e.textureSize>t.textureSize?1:-1}const d=new o;var c;(c=d).reset(),c.registerQualities(a.V.Standard,512,.048,.5,"low"),c.registerQualities(a.V.Standard,2048,.012,.5,"high"),c.dynamic=!1,c.resetOnNextRegisterOnce=!0;const g=()=>d;function h(e){const t=g(),n=t.get(e);if(n.lod in m){if(!(e in m)){const r=m[n.lod],a=.3+.6*Math.max(0,t.order(n.lod,!1).indexOf(e));m[e]=new i.Vector4(r.x,r.y,r.z,a)}return m[e]}return(0,r.G1)(.5,e)}const m={0:new i.Vector4(1,0,0,1),1:new i.Vector4(0,1,0,1),2:new i.Vector4(0,0,1,1),3:new i.Vector4(1,1,0,1),4:new i.Vector4(1,0,1,1),5:new i.Vector4(1,1,1,1),6:new i.Vector4(0,1,1,1),7:new i.Vector4(0,0,0,1)}},64210:(e,t,n)=>{n.d(t,{d:()=>u,e:()=>o});var r=n(81396);const i=n(53203).ZP.sightingMaxAge,a=new r.Color;let l,s=-1;const o=(e,t)=>{l||(l=new r.InstancedMesh(new r.SphereGeometry(.005,8,4),new r.MeshBasicMaterial,i),d(l));const n=new r.Matrix4;return({point:r,distance:o})=>{n.makeScale(o,o,o).setPosition(r),l.setMatrixAt(++s%i,n),l.instanceMatrix.needsUpdate=!0;for(let t=i;t--;)l.setColorAt((s-t+i)%i,a.set(e).multiplyScalar(1-t/i));l.instanceColor&&(l.instanceColor.needsUpdate=!0),l.parent||t.scene.add(l)}},u=()=>{var e;l&&(null===(e=l.parent)||void 0===e||e.remove(l),d(l))};function d(e){const t=(new r.Matrix4).makeScale(0,0,0);for(let n=0;n<i;n++)e.setMatrixAt(n,t)}},69984:(e,t,n)=>{n.d(t,{D5:()=>u,Ex:()=>d,G1:()=>s,rn:()=>o});var r=n(81396),i=n(39880);const a=()=>Math.random(),l={},s=(e,t=a())=>(l[t]||(l[t]=new r.Vector4(a(),a(),a(),e)),l[t]),o=()=>new r.Color(a(),a(),a()),u=e=>e instanceof Object&&"r"in e&&"g"in e&&"b"in e;function d(e){return`#${(0,i.Q_)(255*e.r,2,"0",16)}${(0,i.Q_)(255*e.g,2,"0",16)}${(0,i.Q_)(255*e.b,2,"0",16)}`}}}]);