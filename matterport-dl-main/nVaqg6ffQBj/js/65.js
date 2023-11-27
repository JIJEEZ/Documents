"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[65],{84366:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(98010);class o extends s.v0{constructor(e,t,i){super(),this.size=e,this.sweepId=t,this.renderTarget=i}}},10777:(e,t,i)=>{i.d(t,{F:()=>o});var s=i(19663);class o extends s.m{constructor(e){super(),this.id="SET_NAV_PANO_SIZE",this.payload={navSize:e}}}},62065:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ue});var s=i(69170),o=i(71239),r=i(56692),a=i(2224);class n extends a.y{constructor(e){super(e),this.name="PanoTilingError"}}var l=i(97998),d=i(81396),u=i(70903),h=i(90304);var c;!function(e){e[e.PreOrder=0]="PreOrder",e[e.PostOrder=1]="PostOrder"}(c||(c={}));class p{constructor(e,t){this.tree=e,this.parent=t,this.children=[],this.id=++p._id,this.extra={},this.level=-1}}p._id=0;class g{constructor(e,t){this.levels=t,this.tileSize=e,this.root=null,this.allNodes=[],f(this)}getSizeForLevel(e,t){return Math.pow(2,t)*e}getSubNode(e,t,i){(!t||e<this.tileSize)&&(t=0),(!i||e<this.tileSize)&&(i=0),e<this.tileSize&&(e=this.tileSize);const s=w(this.tileSize,e);return m(this.root,0,s,t,i)}deleteAllNodes(){this.depthFirst(function(e,t,i,s,o){for(let t=0;t<e.children.length;t++){const i=e.children[t];i&&(i.parent=null,i.tree=null),e.children[t]=null}e.children.length=0}.bind(this),null,c.PostOrder);for(let e=0;e<this.allNodes.length;e++){const t=this.allNodes[e];t&&(t.parent=null,t.tree=null),this.allNodes[e]=null}this.allNodes.length=0,this.root=null}breadthFirst(e){const t=!!(e=e||{}).nullLevelEnd,i=e.maxLevel,s=e.minLevel,o=e.callback,r=e.saveVisited,a=[],n=new p(this,null);let l=0;if(this.root)for(a.push(this.root),a.push(n);a.length>0&&!(i&&l>i);){const e=a.shift();if(e)if(e===n)(!s||l>=s)&&(o&&t&&o(),r&&t&&r.push(null)),a.length>0&&a.push(n),l++;else{if(e.children)for(const t of e.children)t&&a.push(t);const t=this.getFaceIndexFromNode(e);(!s||l>=s)&&(o&&o(e,l,t),r&&r.push(e))}}}getFaceIndexFromNode(e){if(!e)return-1;let t=1,i=e,s=0,o=0;for(;;){const e=i.parent;if(!e)break;let r=-1;for(let t=0;t<e.children.length;t++)e.children[t]===i&&(r=t);s=r%2*t+s,o=Math.floor(r/2)*t+o,t*=2,i=e}return o*t+s}depthFirst(e,t,i){T(this.root,0,0,0,e,t,i,this.tileSize)}}const w=function(e,t){let i=0;for(t<e&&(t=e);!((t/=2)<e);)i++;return i},T=function(e,t,i,s,o,r,a,n){if(!e)return;const l=2*s+i;if((a=a||c.PreOrder)===c.PreOrder&&(o&&o(e,t,l,i,s),r&&r.push(e)),!e.children||0===e.children.length)return;const d=2*s,u=2*i;for(let i=0;i<2;i++)for(let s=0;s<2;s++)T(e.children[2*s+i],t+1,u+i,d+s,o,r,a,n);a===c.PostOrder&&(o&&o(e,t,l,i,s),r&&r.push(e))},f=e=>{e.root=S(e,null,0)},S=(e,t,i)=>{if(i>e.levels)return null;const s=new p(e,t);s.level=i,e.allNodes.push(s);for(let t=0;t<4;t++){const o=S(e,s,i+1);o&&(s.children[t]=o)}return s},m=(e,t,i,s,o)=>{if(!e)return null;if(0===i)return e;{if(!e.children||0===e.children.length)return null;const r=Math.pow(2,i)/2,a=s%r,n=o%r,l=2*Math.floor(o/r)+Math.floor(s/r),d=e.children[l];return m(d,t+1,i-1,a,n)}};var D=i(55084),y=i(63252),z=i(48917);const P=class{constructor(e){this.textureUsageCounter={},this.sweepList=e;const t=new z.Z((e=>e.id));for(let e of this.sweepList)e.isObservableProxy&&(e=(new y.ZP).copy(e)),t.add(e);this.sweepListMap=t}init(){}dispose(){}activate(e){}deactivate(e){}beforeRender(){}render(){}_activateSweep(e){this.initTextureUsage(e)}_useTexture(e){this.incrementTextureUsage(e)}freeTexture(e,t=!1){t?this.setTextureUsage(e,0):this.decrementTextureUsage(e)}initTextureUsage(e){this.textureUsageCounter[e]||(this.textureUsageCounter[e]=0)}setTextureUsage(e,t){this.textureUsageCounter[e]=t}freeUnusedTextures(){for(const e of Object.keys(this.textureUsageCounter))0===this.textureUsageCounter[e]&&this.freeTexture(e)}incrementTextureUsage(e){this.textureUsageCounter[e]++}decrementTextureUsage(e){this.textureUsageCounter[e]>0&&this.textureUsageCounter[e]--}};var v,R=i(27646),Q=i(14766),b=i(76609),x=i(54730);!function(e){e[e.Base=0]="Base",e[e.Remaining=1]="Remaining"}(v||(v={}));class U{constructor(e){this.tilePrioritizer=e,this.forceQueue=[],this.uploadQueues={},this.panoLODDescriptors={}}addToForceQueue(e){this.forceQueue.push(e)}addToPanoQueue(e,t){this.getUploadQueueForPano(e).push(t)}insertSortedIntoPanoQueue(e,t,i){const s=this.getUploadQueueForPano(t.id);this.tilePrioritizer.insertSortedPanoTile(s,e,t,i)}sortQueue(e,t){const i=this.getUploadQueueForPano(e.id);this.tilePrioritizer.sortTiles(i,e,t)}getUploadQueueForPano(e){let t=this.uploadQueues[e];return t||(t=[],this.uploadQueues[e]=t),t}hasQueuedTiles(){if(this.forceQueue.length>0)return!0;for(const e in this.uploadQueues){const t=this.getUploadQueueForSweep(e);if(t&&t.length>0)return!0}return!1}getUploadQueueForSweep(e){let t=this.uploadQueues[e];return t||(t=[],this.uploadQueues[e]=t),t}getTopUploadQueue(e){let t=null;for(let i=v.Base;i<=v.Remaining;i++)for(const s of e)if(t=this.getUploadQueueForSweep(s.id),t.length>0)switch(i){case v.Base:if(0===t[0].level)return t;break;case v.Remaining:return t}return null}processNextQueueItem(e){const t=e.shift();return t?(t.uploadQueued=!1,t):null}getNextFromUploadQueue(e){if(this.forceQueue.length>0)return this.processNextQueueItem(this.forceQueue);const t=this.getTopUploadQueue(e);return t&&t.length>0?this.processNextQueueItem(t):null}peekNextFromUploadQueue(e){if(this.forceQueue.length>0)return this.forceQueue[0];const t=this.getTopUploadQueue(e);return t&&t.length>0?t[0]:null}clearAllQueuedUploads(){this.clearAllUploadQueues(null,0)}clearAllUploadQueues(e,t=0){if(e)this.clearUploadQueue(this.getUploadQueueForSweep(e),t),this.clearUploadQueue(this.forceQueue,t,e);else{for(const e in this.uploadQueues)this.clearUploadQueue(this.getUploadQueueForSweep(e),t);this.clearUploadQueue(this.forceQueue,t)}}clearUploadQueue(e,t=0,i){let s=0;for(;s<e.length;){const o=e[s];(!i||i&&i===o.sweepId)&&o.level>=t?(o.uploadQueued=!1,e.splice(s,1)):s++}}resetPanoLODDescriptors(e){const t=this.getPanoLODDescriptors(e);for(const e in t)if(t.hasOwnProperty(e)){const i=t[e];i.uploadCount=0,i.uploadAttempts=0}}getPanoLODDescriptor(e,t){const i=this.getPanoLODDescriptors(e);let s=i[t];return s||(s={uploadCount:0,uploadAttempts:0},i[t]=s),s}getPanoLODDescriptors(e){let t=this.panoLODDescriptors[e];return t||(t={},this.panoLODDescriptors[e]=t),t}}var F=i(84366),A=i(39880),I=i(60047),L=i(40505),M=i(947);const C=new l.Z("tiles"),Z=o.Xd.uploadIntervalDelay;class N extends P{constructor(e,t,i,s,o,r,a,n){super(o.getSweepList()),this.cwfRenderer=e,this.panoQualityManager=t,this.tileDownloader=i,this.tilePrioritizer=s,this.sweepData=o,this.cameraData=r,this.tilingSettings=a,this.broadcast=n,this.persistentStorage=new x.a,this.activeSweeps=[],this.sweepLoadHistory=[],this.activeRenderTargetDescriptors={},this.panoLoadPromises={},this.panoLoadResolvers={},this.panoLoadTimers={},this.tileTrees={},this.tileDirectory={},this.zoomSweepRenderingDisabled=!1,this.zoomingActive=!1,this.zoomSweepId=null,this.usingTileOverlay=!1,this.overlayTilesLoaded=!1,this.overlayTilesBasic={},this.overlayTilesEnhanced={},this.tileUploadQueue=new U(this.tilePrioritizer),this.currentState={direction:new d.Vector3,position:new d.Vector3,rotation:new d.Quaternion},this.renderTargetPool=new u.L(this.rtCompare),this.tileDownloader.setLoadCallbacks(this.onTileDownLoaded.bind(this))}activate(e){this.engine=e}rtCompare(e,t){return e.object.height===t.size&&e.object.width===t.size}getActivePanos(){const e=[];for(const t of Object.keys(this.activeRenderTargetDescriptors)){this.activeRenderTargetDescriptors[t]&&e.push(t)}return e}init(){super.init(),this.loadOverlayTiles()}highResRenderTarget(e,t){if(e){if(!t)throw new n("Cannot activate zooming without sweepId!");this.zoomingActive=!0,this.zoomSweepId=t,this.copyTargetToZoom(t)}else this.zoomingActive=!1,this.zoomSweepId=null;if(t){const e=this.getRenderTargetDescriptorForSweep(t);if(!e)throw new n("Zooming at a null render target!");const i=this.zoomingActive?this.zoomRenderTarget:e.object,s=i.width;this.broadcast(new F.Z(s,t,i))}}getCurrentPanoResolution(){const e=this.zoomingActive?this.panoQualityManager.getZoomPanoSize():this.panoQualityManager.getNavPanoSize();return R.Z.getPanoSizeClass(e)}beforeRender(){const e=this.sweepData.currentSweep,t=this.sweepData.transition.to;this.updateState(this.cameraData.pose.position,this.cameraData.pose.rotation,e,t),this.updateUploadQueueProcessing()}activateSweep(e){const t=this.sweepListMap.get(e);if(!t)throw C.error(e,t),new n("Invalid sweepId passed to TiledPanoRenderer.activate()");let i=this.panoLoadPromises[e];return i||(this.panoLoadTimers[e]=window.setTimeout((()=>{this.engine.broadcast(new L.Z_(!0))}),o.Xd.loadIndicatorDelay),i=new Promise(((i,s)=>{this.panoLoadResolvers[e]=i,this.updateSweepState(e),this.activatePano(t),this.queueUploadForAllTiles(e,!0),this.tileDownloader.forceQueueTiles(t,R.Z.getPanoSize(b.SL.BASE),this.currentState.direction,!0)})),this.panoLoadPromises[e]=i),super._activateSweep(e),i}useTexture(e){const t=this.getRenderTargetDescriptorForSweep(e);if(!t)throw C.error(e),new n("Texture for sweep not activated before using");const i=t.object.texture;return super._useTexture(e),this.freeUnusedTextures(),this.zoomingActive?this.zoomRenderTarget.texture:i}freeTexture(e,t=!1){super.freeTexture(e,t),0===this.textureUsageCounter[e]&&(this.panoLoadPromises[e]=null,this.deactivatePano(e))}freeAllTextures(e=[]){const t=(0,A.ow)(e),i=this.getActivePanos();for(const e of i)t[e]||this.freeTexture(e,!0)}enableUltraHighQualityMode(e){this.setupZoomRenderTarget(),this.zoomSweepId&&this.broadcast(new F.Z(this.zoomRenderTarget.width,this.zoomSweepId,this.zoomRenderTarget))}resetRenderStatus(e,t,i,s){let o;s&&(o=w(D.I_,s)+1);const r=(e,s,o,r)=>{i&&(s.extra.tile.zoomUploaded=!1),t&&(s.extra.tile.uploaded=!1)};for(let t=0;t<D.Hq;t++){this.getTileTree(e,t).breadthFirst({callback:r.bind(this,t),minLevel:o})}}copyBaseRenderStatusToZoomed(e){const t=w(D.I_,this.panoQualityManager.getNavPanoSize()),i=(e,t,i,s)=>{t.extra.tile.zoomUploaded=t.extra.tile.uploaded,t.extra.zoomCovered=t.extra.covered};for(let s=0;s<D.Hq;s++){this.getTileTree(e,s).breadthFirst({callback:i.bind(this,s),maxLevel:t})}}renderPanoTiles(e,t,i,s){const o=[];this.zoomRenderTarget&&this.zoomRenderTarget.width===this.panoQualityManager.getZoomPanoSize()||this.zoomSweepRenderingDisabled||this.setupZoomRenderTarget(),t=t||this.currentState.direction||h.fU.FORWARD;const r=this.getRenderTargetDescriptorForSweep(e);if(!this.isRenderTargetDescriptorValid(r))throw new n("PanoRenderer.renderPanoTiles() -> Cannot render to a pano that is not activated.");for(let t=0;t<D.Hq;t++){const r=this.getTileTree(e,t);o.length=0,r.breadthFirst({saveVisited:o});for(let e=0;e<o.length;e++){const t=o[e];this.queueUploadForTile(t.extra.tile,!1,s||0===e&&i)}}}renderAllActivePanos(){for(const e of this.getActivePanos())this.resetUploadState(e,!0,!0),this.clearAllQueuedUploadsForPano(e),this.renderPanoTiles(e,null,!0,!0)}clearAllQueuedUploads(){this.tileUploadQueue.clearAllUploadQueues(null,0)}clearAllQueuedUploadsForPano(e){this.tileUploadQueue.clearAllUploadQueues(e,0)}updateState(e,t,i,s){const o=s||i||this.currentState.sweepId,r=o?this.sweepListMap.get(o):null;this.updatePositionState(e),this.updateRotationState(t),o&&this.updateSweepState(o),r&&this.tileDownloader.tilePrioritizer&&this.tileDownloader.tilePrioritizer.updateCriteria(r,e,this.currentState.direction,this.currentState.rotation)}updatePositionState(e){this.currentState.position.copy(e)}updateRotationState(e){if(this.currentState.rotation.copy(e),this.currentState.direction.copy(h.fU.FORWARD).applyQuaternion(e),this.tileUploadQueue.hasQueuedTiles())for(const e of this.activeSweeps)this.tileUploadQueue.sortQueue(e,this.currentState.direction)}updateSweepState(e){this.currentState.sweepId=e}activatePano(e){this.tileUploadQueue.clearAllQueuedUploads();const t=this.panoQualityManager.getMaxPossiblePanoSize();for(let i=0;i<D.Hq;i++)this.initTileTree(e.id,i,t);this.linkAllTilesAndNodes(e);let i=this.getRenderTargetDescriptorForSweep(e.id);if(!i){const t=this.panoQualityManager.getNavPanoSize();if(i=this.renderTargetPool.get({size:t}),!i){const e=this.cwfRenderer.initRenderTargetCube(t);i=this.renderTargetPool.add(e),i.extra={},i.extra.size=e.width}i.extra.sweep=e,i.extra.sweepindex=e.index,this.setRenderTargetDescriptorForSweep(e.id,i),this.tileUploadQueue.resetPanoLODDescriptors(e.id),this.resetUploadState(e.id,!0,!0)}return this.updateActiveSweeps(e),i.object}deactivatePano(e){const t=this.getRenderTargetDescriptorForSweep(e);t&&this.isRenderTargetDescriptorValid(t)&&(this.renderTargetPool.free(t.object),this.setRenderTargetDescriptorForSweep(e,null),this.updateActiveSweeps(),this.tileUploadQueue.clearAllUploadQueues(e),this.tileUploadQueue.resetPanoLODDescriptors(e),this.clearCachedTileData())}clearCachedTileData(){for(let e=this.sweepLoadHistory.length-1;e>=0;e--){let t=!1;const i=this.sweepLoadHistory[e];if(i){for(const e of this.activeSweeps)if(i===e.id){t=!0;break}t||(this.checkTileTreeInitialized(i)&&(this.clearTileState(i,!0,!0),this.deleteTileTrees(i)),this.deleteTileDirectoryEntries(i),this.tileDownloader.deleteAllTileDownloadDescriptors(i),this.sweepLoadHistory[e]=null)}}this.updateSweepLoadHistory()}updateActiveSweeps(e){const t=this.persistentStorage.getArray("updateActiveSweeps:tempSweeps");t.length=0;for(const i of this.activeSweeps){const s=this.getRenderTargetDescriptorForSweep(i.id);e&&i.id===e.id||!this.isRenderTargetDescriptorValid(s)||t.push(i)}e&&t.unshift(e),this.activeSweeps.length=0,this.activeSweeps.push(...t)}queueUploadForAllTiles(e,t=!0){this.zoomRenderTarget&&this.zoomRenderTarget.width===this.panoQualityManager.getZoomPanoSize()||this.zoomSweepRenderingDisabled||this.setupZoomRenderTarget();const i=this.getRenderTargetDescriptorForSweep(e);if(!this.isRenderTargetDescriptorValid(i))throw new n("queueUploadForAllTiles() -> Cannot render to a pano that is not activated.");const s=this.persistentStorage.getArray("queueUploadForAllTiles:nodeList");for(let i=0;i<D.Hq;i++){const o=this.getTileTree(e,i);s.length=0,o.breadthFirst({saveVisited:s});for(const e of s)this.queueUploadForTile(e.extra.tile,!1,0===e.level&&t)}}onTileDownLoaded(e){if(!e.sweep)return;const t=w(D.I_,e.panoSize),i=this.getTileDirectoryEntry(e.sweep.id,e.face,t,e.faceTileIndex);this.updateUploadDescriptorFromDownloadDescriptor(i,e),this.updateSweepLoadHistory(i.sweepId);const s=this.getRenderTargetDescriptorForSweep(i.sweepId);if(this.isRenderTargetDescriptorValid(s)){const e=this.getTileTree(i.sweepId,i.face).getSubNode(i.panoSize,i.tileX,i.tileY);e&&(this.linkTileAndNode(i,e),this.queueUploadForTile(i,!0))}}updateUploadDescriptorFromDownloadDescriptor(e,t){e.downloaded=!0,e.image=t.image,e.panoSize=t.panoSize,e.tileX=t.tileX,e.tileY=t.tileY,e.totalTiles=t.totalTiles,e.tileIndex=t.tileIndex,e.faceTileIndex=t.faceTileIndex,e.face=t.face,e.cubeFace=Q.m(t.face),t.sweep&&(e.sweepId=t.sweep.id),e.tileSize=t.tileSize,e.direction.copy(t.direction),e.node=null,e.level=w(D.I_,e.panoSize)}updateSweepLoadHistory(e){const t=this.persistentStorage.getArray("updateSweepLoadHistory:tempHistory");t.length=0;for(const i of this.sweepLoadHistory)i&&(!e||e&&e!==i)&&t.push(i);this.sweepLoadHistory.length=0,e&&this.sweepLoadHistory.push(e),this.sweepLoadHistory.push(...t)}onPanoRendered(e,t,i,s){clearTimeout(this.panoLoadTimers[e]),this.engine.broadcast(new L.Z_(!1));const o=this.panoLoadResolvers[e],r=this.activeRenderTargetDescriptors[e];r&&r.object&&o(r.object.texture),this.clearTileState(e,!1,!0)}getRenderTargetDescriptorForSweep(e){return this.activeRenderTargetDescriptors[e]}setRenderTargetDescriptorForSweep(e,t){this.activeRenderTargetDescriptors[e]=t}isRenderTargetDescriptorValid(e){return!!e&&!!e.object}isSweepZoomed(e){return this.zoomingActive&&this.zoomSweepId===e}initTileTree(e,t,i){let s=this.tileTrees[e];s||(s=[],this.tileTrees[e]=s);let o=s[t];if(!o){const e=w(D.I_,i);o=new g(D.I_,e),s[t]=o}}getTileTrees(e){const t=this.tileTrees[e];if(!t)throw new n("TiledPanoRenderer.getTileTrees() -> Tree array not yet initialized!");return t}checkTileTreeInitialized(e){return!!this.tileTrees[e]}getTileTree(e,t){const i=this.getTileTrees(e)[t];if(!i)throw new n("TiledPanoRenderer.getTileTree() -> Tree not yet initialized!");return i}deleteTileTrees(e){const t=this.getTileTrees(e);for(let e=0;e<D.Hq;e++){const i=t[e];i&&i.deleteAllNodes()}this.tileTrees[e]=null,delete this.tileTrees[e]}clearTileState(e,t=!1,i=!1){const s=(e,s,o,r)=>{var a,n;i&&(null===(n=null===(a=s.extra.tile.image)||void 0===a?void 0:a.close)||void 0===n||n.call(a),s.extra.tile.image=null),t&&(s.extra.tile.uploaded=!1,s.extra.tile.downloaded=!1,s.extra.tile.zoomUploaded=!1,s.extra.tile.uploadAttempted=!1)};for(let t=0;t<D.Hq;t++){const i=this.getTileTree(e,t);i&&i.breadthFirst({callback:s.bind(this,t),maxLevel:w(D.I_,this.panoQualityManager.getZoomPanoSize())})}}resetUploadState(e,t,i){const s=(e,s,o,r)=>{s.extra.tile.zoomUploaded=!i&&s.extra.tile.zoomUploaded,s.extra.tile.uploaded=!t&&s.extra.tile.uploaded};for(let t=0;t<D.Hq;t++){this.getTileTree(e,t).breadthFirst({callback:s.bind(this,t),minLevel:0})}}anyUploaded(e){if(!e)return!1;if(e.extra.tile&&this.isTileUploaded(e.extra.tile))return!0;if(e.children)for(const t of e.children)if(this.anyUploaded(t))return!0;return!1}linkTileAndNode(e,t){t.extra.tile=e,e.node=t}linkAllTilesAndNodes(e){const t=(t,i,s,o,r)=>{const a=this.getTileDirectoryEntry(e.id,i,o,r);this.linkTileAndNode(a,s)};for(let i=0;i<D.Hq;i++){const s=this.getTileTree(e.id,i);s.breadthFirst({callback:t.bind(this,s,i)})}}getTileDirectoryEntry(e,t,i,s){let o=this.tileDirectory[e];o||(o={},this.tileDirectory[e]=o);const r=16384*t+1024*i+s;let a=o[r];return a||(a={downloaded:!1,uploaded:!1,uploadAttempted:!1,zoomUploaded:!1,uploadQueued:!1,image:null,panoSize:-1,tileX:-1,tileY:-1,totalTiles:-1,tileIndex:s,faceTileIndex:-1,face:t,cubeFace:-1,sweepId:e,tileSize:-1,direction:new d.Vector3,node:null,level:i},o[r]=a),a._tileKey=r,a}deleteTileDirectoryEntries(e){var t,i;const s=this.tileDirectory[e];if(s)for(const e of Object.values(s))e.image&&(null===(i=(t=e.image).close)||void 0===i||i.call(t),e.image=null);delete this.tileDirectory[e]}isTileUploaded(e){return this.isSweepZoomed(e.sweepId)?e.zoomUploaded:e.uploaded}setUploaded(e,t){this.isSweepZoomed(e.sweepId)?e.zoomUploaded=t:e.uploaded=t}queueUploadForTile(e,t,i){const s=!e.downloaded||e.uploadQueued&&!i||this.isTileUploaded(e)||e.panoSize>this.panoQualityManager.getNavPanoSize()&&!this.zoomingActive,o=this.getRenderTargetDescriptorForSweep(e.sweepId);!s&&o&&this.isRenderTargetDescriptorValid(o)&&(i?this.uploadTile(e):(0===w(D.I_,e.panoSize)?this.tileUploadQueue.addToForceQueue(e):t&&this.currentState.direction?this.tileUploadQueue.insertSortedIntoPanoQueue(e,o.extra.sweep,this.currentState.direction):this.tileUploadQueue.addToPanoQueue(e.sweepId,e),e.uploadQueued=!0))}uploadTile(e){const t=this.persistentStorage.get("uploadTile:tempTileTexture",(()=>({}))),i=this.tileUploadQueue.getPanoLODDescriptor(e.sweepId,e.panoSize),s=this.getRenderTargetDescriptorForSweep(e.sweepId);if(!s||!e.image||!this.isRenderTargetDescriptorValid(s))return;let r=s.object,a=s.extra.size;if(this.isSweepZoomed(e.sweepId)&&(r=this.zoomRenderTarget,a=this.panoQualityManager.getZoomPanoSize()),this.isTileUploaded(e)||this.anyUploaded(e.node))this.setUploaded(e,!1);else{const s=e.tileX*e.tileSize,n=e.tileY*e.tileSize,l=e.tileSize/e.panoSize*a,u=s/e.panoSize*a,h=n/e.panoSize*a;let c=t[e.tileSize];if(t[e.tileSize]||(c=this.cwfRenderer.initSizedTexture2D(e.tileSize,{generateMipmaps:!1,minFilter:d.LinearFilter,flipY:!1}),t[e.tileSize]=c),this.cwfRenderer.uploadTexture2D(e.image,c,0,0),this.cwfRenderer.renderToCubeMap(c,r,e.tileSize,e.tileSize,0,0,e.tileSize,e.tileSize,u,h,l,l,e.cubeFace),o.Xd.overlayStyle>0){const t=1===o.Xd.overlayStyle?this.overlayTilesBasic:this.overlayTilesEnhanced;this.cwfRenderer.renderToCubeMap(t[e.panoSize],r,e.tileSize,e.tileSize,0,0,e.tileSize,e.tileSize,u,h,l,l,e.cubeFace,d.NormalBlending,!0,.5)}i.uploadCount++,this.setUploaded(e,!0)}e.uploadAttempted||i.uploadAttempts++,e.uploadAttempted=!0,i.uploadAttempts===e.totalTiles&&this.onPanoRendered(e.sweepId,e.panoSize,e.totalTiles)}updateUploadQueueProcessing(){if(!this.currentUploadPromise&&(this.overlayTilesLoaded||!this.usingTileOverlay)){const e=new I._("pano/tiling/upload",(()=>this.engine.after(M.A.End).then((()=>this.processUploadQueue(this.tilingSettings.highResUploadsPerFrame,this.tilingSettings.uploadsPerFrame)))),Z);this.currentUploadPromise=this.engine.commandBinder.issueCommand(e).then((async e=>{await e.promise,this.currentUploadPromise=null}))}}processUploadQueue(e=1,t){let i=0,s=0,o=null;for(;o=this.tileUploadQueue.getNextFromUploadQueue(this.activeSweeps);){const r=this.getRenderTargetDescriptorForSweep(o.sweepId);if(!(o.panoSize>this.panoQualityManager.getNavPanoSize()&&!this.zoomingActive||!this.isRenderTargetDescriptorValid(r))&&(this.uploadTile(o),i+=0!==o.level?1:0,s+=0===o.level?1:0,s>=t||i>=e))break}}loadOverlayTiles(){if(0!==o.Xd.overlayStyle){let e=0;const t=[],s=(i,s,o)=>{const r=i[s]=this.cwfRenderer.initSizedTexture2D(D.I_,{generateMipmaps:!1,minFilter:d.LinearFilter,flipY:!1});this.cwfRenderer.uploadTexture2D(o,r,0,0),e++,e>=t.length&&(this.overlayTilesLoaded=!0)};switch(o.Xd.overlayStyle){case 1:t.push([i(95405),this.overlayTilesBasic,256]),t.push([i(95405),this.overlayTilesBasic,512]),t.push([i(43890),this.overlayTilesBasic,1024]),t.push([i(75183),this.overlayTilesBasic,2048]),t.push([i(94326),this.overlayTilesBasic,4096]);break;case 2:t.push([i(21742),this.overlayTilesEnhanced,256]),t.push([i(21742),this.overlayTilesEnhanced,512]),t.push([i(20699),this.overlayTilesEnhanced,1024]),t.push([i(5793),this.overlayTilesEnhanced,2048]),t.push([i(94991),this.overlayTilesEnhanced,4096])}t.forEach((e=>{const t=document.createElement("img");t.crossOrigin="anonymous",t.src=e[0],t.onload=()=>{s.call(this,e[1],e[2],t)}})),this.usingTileOverlay=!0}else this.usingTileOverlay=!1}copyTargetToZoom(e){if(!this.zoomingActive)return;const t=this.getRenderTargetDescriptorForSweep(e);if(!t)throw new n("Error in copying a null render target to a zoomed target");const i=t.object;this.cwfRenderer.copyCubemap(i.texture,this.zoomRenderTarget),this.copyBaseRenderStatusToZoomed(e)}setupZoomRenderTarget(){if(this.panoQualityManager.getZoomPanoSize()>=this.panoQualityManager.getNavPanoSize()){if(this.zoomRenderTarget&&this.zoomRenderTarget.width===this.panoQualityManager.getZoomPanoSize())return;const e=this.zoomRenderTarget;this.zoomRenderTarget=this.cwfRenderer.initRenderTargetCube(this.panoQualityManager.getZoomPanoSize()),e&&(this.cwfRenderer.copyCubemap(e.texture,this.zoomRenderTarget),e.texture.dispose(),e.texture.version=0,e.texture=null),this.zoomSweepRenderingDisabled=!1}else this.zoomSweepRenderingDisabled=!0}}var H=i(20573),O=i(53261),q=i(55721),E=i(77382),B=i(74789);const k=new l.Z("tile-downloader");class V{constructor(e,t,i,s){this.sweepData=e,this.urls=t,this.tilePrioritizer=i,this.settings=s,this.persistentStorage=new x.a,this.downloadDescriptors={},this.priorityQueue=[],this.forceQueue=[],this.activeDownloads=[],this.lastPrioritizedTime=Date.now(),this.processPriorityQueue=!0,this.sweepListMap=new z.Z((e=>e.id)),this.sweepData.getSweepList().forEach((e=>{this.sweepListMap.add(e)}))}init(){}render(){this.update()}update(){this.processQueue(this.forceQueue,!1),this.processPriorityQueue&&(!this.processQueuePromise&&this.sweepListMap&&this.activeDownloads.length<this.settings.concurrentDownloads&&Date.now()-this.lastPrioritizedTime>200&&(this.processQueuePromise=this.engine.commandBinder.issueCommand(new I._("pano/tiling/queue-download",(()=>{this.queuePrioritizedTiles(this.sweepListMap),this.lastPrioritizedTime=Date.now()}),100)).then((async e=>{await e.promise,this.processQueuePromise=null}))),this.processQueue(this.priorityQueue,!1))}dispose(){}activate(e){this.engine=e}deactivate(e){}setRestrictedSweeps(e){if(this.sweepListMap&&this.tilePrioritizer){const t=[];for(const i of e)t.push(this.sweepListMap.get(i));this.tilePrioritizer.setUpcomingSweeps(t),this.clearFromAllQueuesBySweep(e)}}clearRestrictedSweeps(){this.tilePrioritizer.clearUpcomingSweeps()}setLoadCallbacks(e,t){this.onTileDownloaded=e,this.onPanoDownloaded=t}getNonDownloadedTiles(e,t,i){i.length=0;const s=this.getTileDownloadDescriptors(e,t);for(const e of s)!e||e.status!==q.Z.None&&e.status!==q.Z.Queued||i.push(e)}forceQueueTiles(e,t,i,s){const o=this.persistentStorage.getArray("forceQueueTiles:remaining"),r=this.persistentStorage.getArray("forceQueueTiles:matching"),a=this.persistentStorage.getArray("forceQueueTiles:toDownload");if(this.getNonDownloadedTiles(e,t,o),a.length=0,o.length>0){this.tilePrioritizer.sortTiles(o,e,i),r.length=0,D.oU(e,t,i,r,!0);for(const e of o)for(const t of r)e.face===t.face&&e.faceTileIndex===t.faceTileIndex&&a.push(e);this.forceQueue.push(...a),this.setStatusForAllDescriptors(this.forceQueue,q.Z.ForceQueued),this.clearFromQueue(this.priorityQueue,q.Z.ForceQueued,!1),s&&this.processQueue(this.forceQueue,!0)}}clearForceQueue(){this.clearQueue(this.forceQueue)}queuePrioritizedTiles(e){this.clearQueue(this.priorityQueue),this.tilePrioritizer.filterAndPrioritize(this.priorityQueue,e,this),this.invalidateDuplicateEntries(this.priorityQueue),this.clearFromQueue(this.priorityQueue,q.Z.None,!0),this.setStatusForAllDescriptors(this.priorityQueue,q.Z.Queued),this.lastPrioritizedTime=Date.now()}clearQueue(e){this.setStatusForAllDescriptors(e,q.Z.None),e.length=0}clearFromQueue(e,t,i){for(let s=0;s<e.length;s++){const o=e[s];o&&(t===o.status&&!i||t!==o.status&&i)&&(e[s]=null)}}clearFromAllQueuesBySweep(e){this.clearFromQueueBySweep(this.forceQueue,e),this.clearFromQueueBySweep(this.priorityQueue,e)}clearFromQueueBySweep(e,t){const i=(0,A.ow)(t);for(let t=0;t<e.length;t++){const s=e[t];s&&s.sweep&&(i[s.sweep.id]||(e[t]=null))}}setStatusForAllDescriptors(e,t){for(const i of e)i&&(i.status=t)}invalidateDuplicateEntries(e){for(const t of e)t&&(t.queuedCount=0);for(let t=0;t<e.length;t++){const i=e[t];i&&(i.queuedCount++,i.queuedCount>1&&(e[t]=null))}}getTileDownloadDescriptors(e,t){const i=this.getAllTileDownloadDescriptors(e.id);let s=i[t];return s||(s=this.buildDownloadDescriptorArray(t),i[t]=s,this.initTileDownloadDescriptors(s,e,t)),s}getAllTileDownloadDescriptors(e){let t=this.downloadDescriptors[e];return t||(t={},this.downloadDescriptors[e]=t),t}deleteAllTileDownloadDescriptors(e){this.downloadDescriptors[e]=null,delete this.downloadDescriptors[e]}processQueue(e,t){if(this.cleanupActiveDownloads(),this.activeDownloads.length<this.settings.concurrentDownloads||t){const i=t?e.length:this.settings.concurrentDownloads-this.activeDownloads.length;let s=0;for(let t=0;s<i&&e.length>0;t++){const t=e.shift();t&&(this.startDownload(t),s++)}}}async startDownload(e){if(!this.urls)throw new Error("Can't call startDownload without signed urls");if(e.sweep){const t=e.status===q.Z.ForceQueued?O.ru.HIGHEST:O.ru.MEDIUM;e.status=q.Z.Downloading;this.checkRestrictedSweep(e.sweep.id)||k.warn("Downloading a tile that is not in restricted list"),this.activeDownloads.push(e);const i=await this.getTileUrl(e.sweep,e.panoSize,e.tileSize,e.tileIndex);this.urls.getImageBitmap(i,e.tileSize,e.tileSize,{maxRetries:3,priority:t}).then(this.downloadComplete.bind(this,e),this.downloadFailed.bind(this,e))}}checkRestrictedSweep(e){const t=this.tilePrioritizer.priorityCriteria.upcomingSweeps;if(t){let i=!1;for(const s of t)s&&s.id===e&&(i=!0);return i}return!0}downloadFailed(e,t){e.status=q.Z.DownloadFailed}downloadComplete(e,t){if(e.sweep&&(e.status=q.Z.Downloaded,e.image=t,this.onTileDownloaded&&this.onTileDownloaded(e),this.engine.broadcast(new B.o),this.isPanoDownloaded(e.sweep,e.panoSize))){const t={sweep:e.sweep,tileSize:e.tileSize,panoSize:e.panoSize};this.onPanoDownloaded&&this.onPanoDownloaded(t)}}cleanupActiveDownloads(){const e=this.persistentStorage.getArray("cleanupActiveDownloads:temp");e.length=0;for(const t of this.activeDownloads)t.status!==q.Z.Downloaded&&t.status!==q.Z.DownloadFailed&&e.push(t);this.activeDownloads.length=0,this.activeDownloads.push(...e)}isPanoDownloaded(e,t){const i=this.getTileDownloadDescriptors(e,t);if(!i||i.length<=0)return!1;for(const e of i)if(e&&e.status!==q.Z.Downloaded)return!1;return!0}buildDownloadDescriptorArray(e){const t=D.Tu(e),i=[];for(let e=0;e<t;e++){const e=this.buildDownloadDescriptor();i.push(e)}return i}buildDownloadDescriptor(){return{sweep:null,panoSize:-1,tileSize:-1,tileIndex:-1,totalTiles:-1,faceTileIndex:-1,status:q.Z.None,url:null,image:null,direction:new d.Vector3,face:-1,cubeFace:-1,tileX:-1,tileY:-1,queuedCount:-1}}initTileDownloadDescriptors(e,t,i){for(let s=0;s<e.length;s++){const o=e[s];o&&this.initTileDownloadDescriptor(o,t,i,s)}}initTileDownloadDescriptor(e,t,i,s){const o=i>=D.I_?D.I_:i;e.face=D.R5(i,s),e.cubeFace=(0,Q.m)(e.face),e.sweep=t,e.panoSize=i,e.tileSize=o,e.tileIndex=s,e.totalTiles=D.Tu(i),e.status=q.Z.None,e.image=null,D.Tp(e.panoSize,e.tileIndex,e),D.P6(e.panoSize,e.tileSize,e.cubeFace,e.tileX,e.tileY,E.Z.Center,0,e.direction)}getTileUrl(e,t,i,s){const o=this.persistentStorage.get("getTileUrl:locationInfo",(()=>({face:-1,faceTileIndex:-1,tileX:-1,tileY:-1})));D.Tp(t,s,o);const r=Math.floor(t/i),a=r*r,n=Math.floor(s/a),l=R.Z.getPanoSizeClass(t);return e.getTileUrl(l,n,o.tileX,o.tileY)}}var _=i(46368),j=i(9699),X=i(97542);class Y extends X.Y{constructor(){super(...arguments),this.name="sweep-pano-base",this.panoSizeClass=b.SL}getRenderer(){return this.panoRenderer}}var G=i(20387),W=i(69505),$=i(46950),K=i(9037),J=i(85992),ee=i(34029),te=i(53954),ie=i(18930),se=i(61948),oe=i(79596),re=i(2032),ae=i(90365),ne=i(92901),le=i(10777),de=i(31362);class ue extends Y{constructor(){super(...arguments),this.name="sweep-pano-tiling",this.preloadQuality=null,this.preloadResolution=null,this.handleResolutionChange=e=>{const t=this.panoRenderer.getCurrentPanoResolution();this.qualityManager.setResolution(this.getVerticalResolution());t!==this.panoRenderer.getCurrentPanoResolution()&&e&&this.resetPano(e)}}setPreloadQuality(e){this.settingsData.setProperty(o.YS,e)}async init(e,t){const{market:i}=t,[a,n,l]=await Promise.all([t.getModuleBySymbol(s.y.MODEL_DATA),t.getModuleBySymbol(s.y.WEBGL_RENDERER),i.waitForData(J.P)]);[this.cameraData,this.settingsData,this.sweepData]=await Promise.all([i.waitForData(K.M),i.waitForData(ee.e),i.waitForData(te.Z)]);const d=this.cwfRenderer=n.cwfRenderer,u=a.getSignedUrls(),h=n.maxCubemapSize,{navPanoSize:c,zoomPanoSize:p}=function(e){let t=b.AB.STANDARD,i=b.AB.HIGH;return(0,de.tq)()?(0,de.tq)()&&e&&(t=b.AB.STANDARD,i=b.AB.HIGH):(t=b.AB.HIGH,i=b.AB.ULTRAHIGH),{navPanoSize:t,zoomPanoSize:i}}(n.isHighPerformanceMobileGPU());this.settings=new o.k4,this.qualityManager=new R.Z(u,h,c,p,this.getVerticalResolution()),this.tilePrioritizer=new H.a(this.qualityManager,this.settings,this.sweepData,l),t.getModuleBySymbol(s.y.MESH_QUERY).then((e=>this.tilePrioritizer.meshQuery=e)),this.tileDownloader=new V(this.sweepData,u,this.tilePrioritizer,this.settings),this.panoRenderer=new N(d,this.qualityManager,this.tileDownloader,this.tilePrioritizer,this.sweepData,this.cameraData,this.settings,(e=>t.broadcast(e))),t.addComponent(this,this.tileDownloader),t.addComponent(this,this.panoRenderer),this.bindings.push(t.commandBinder.addBinding(le.F,(async({navSize:e})=>{this.overrideNavPanoResolutionMax(e)}))),this.bindings.push(t.subscribe(se.Z,(e=>{this.setTilingFOV()})),t.subscribe(r.a,(()=>{this.handleResolutionChange(this.sweepData.currentSweep),this.setTilingFOV()})),t.subscribe(ne.Vx,(()=>{this.handleResolutionChange(this.sweepData.currentSweep),this.setTilingFOV()})),t.subscribe(_.Z,(e=>{this.tileDownloader.setRestrictedSweeps(e.sweepIds)})),t.subscribe(j.Z,(e=>{this.tileDownloader.clearRestrictedSweeps()})),t.subscribe(ie.Z,(e=>{const t=this.sweepData.getSweep(e.sweepId);this.setHoverPreloadSweep(e.hovered?t:void 0)})),t.subscribe(oe.a,(e=>{this.tilePrioritizer.priorityCriteria.viewMode=e.toMode})),this.sweepData.onPropertyChanged("transitionActive",(()=>{if(this.sweepData.transition.to){const e=this.sweepData.getSweep(this.sweepData.transition.to);this.handlePreloadQualityChange(e)}})),this.settingsData.onPropertyChanged(o.YS,(()=>{this.preloadQuality=this.settingsData.tryGetProperty(o.YS,null),this.qualityManager.overrideWindowMaximums(null!==this.preloadQuality),this.sweepData.currentSweepObject&&this.handlePreloadQualityChange(this.sweepData.currentSweepObject)})),t.subscribe(ne.zq,(()=>{this.panoRenderer.clearAllQueuedUploads()})),t.subscribe(ne.Xq,(()=>{this.panoRenderer.renderAllActivePanos()}))),this.setTilingFOV(),t.broadcast(new re.em(ae.Y.PanoTiles))}getVerticalResolution(){return this.cwfRenderer.getSize().height*this.cwfRenderer.getPixelRatio()}overrideNavPanoResolutionMax(e){const t=b.eE[null!=e?e:this.panoRenderer.getCurrentPanoResolution()],i=null!==this.settingsData.tryGetProperty(o.YS,null);this.qualityManager.overrideWindowMaximums(i),this.qualityManager.overrideNavPanoSize(t)}setTilingFOV(){const e=this.cameraData.fovX(),t=this.cameraData.fovY(),i=Math.max(e,t)*W.MN;return this.tilePrioritizer.setDownloadFOV(i),i}getRenderer(){return this.panoRenderer}setHoverPreloadSweep(e){this.tilePrioritizer&&this.tilePrioritizer.setHoveredSweep(e)}handlePreloadQualityChange(e){if(null!==this.preloadQuality){const t=e.availableResolution(this.preloadQuality);this.preloadResolution=R.Z.getPanoSize(t)}else this.preloadResolution=null;this.enableHighRes(!1)}enableHighRes(e=!0,t){const i=null!==this.preloadResolution?this.preloadResolution:e?this.qualityManager.getZoomPanoSize():this.qualityManager.getNavPanoSize();this.tilePrioritizer.maxResolution!==i&&this.log.debug(`Setting max resolution: ${i}`),this.tilePrioritizer.maxResolution=i,this.panoRenderer.highResRenderTarget(e,t)}async enableZooming(e,t){if(e){const e=R.Z.getPanoSizeClass(this.qualityManager.getZoomPanoSize());return await this.requestResolution(t,e)>=e}return this.enableHighRes(!1,t.id),this.resetPano(t.id),Promise.resolve(!1)}async requestResolution(e,t,i=G.v.CurrentView,s=!1){this.settings.highResUploadsPerFrame=s?o.Xd.maxHighResUploadsPerFrame:o.Xd.highResUploadsPerFrame,this.settings.concurrentDownloads=s?o.Xd.maxConcurrentDownloads:o.Xd.concurrentDownloads,this.settings.downloadFullPano=i===G.v.FullPanorama;const r=e.availableResolution(t),a=b.eE[r];a>b.AB.HIGH&&(this.qualityManager.overrideWindowMaximums(!0),this.panoRenderer.enableUltraHighQualityMode(e.id));return(a>b.eE[this.panoRenderer.getCurrentPanoResolution()]||a>this.qualityManager.getNavPanoSize())&&(this.enableHighRes(!0,e.id),this.resetPano(e.id)),r}waitForQueue(e,t,i=1e3){const s=new $.Q,o=()=>{n.cancel(),s.notify(1),s.resolve()};let r=this.tilePrioritizer.getQualityQueueSize(e,t),a=window.setTimeout((()=>{this.log.debug(`Download queue ${e} timed out from inactivity after ${i}ms`),o()}),i);const n=this.tilePrioritizer.makeQueueSubscription(e,t,(e=>{if(a&&(window.clearTimeout(a),a=0,r=e),e>0){const t=(r-e)/Math.max(r,1);s.notify(t)}else o()}));return s.promise()}resetSweep(e){this.enableHighRes(!1,e),this.resetPano(e),this.settings.reset()}resetPano(e){this.panoRenderer.resetRenderStatus(e,!1,!0,this.panoRenderer.panoQualityManager.getNavPanoSize()),this.panoRenderer.clearAllQueuedUploadsForPano(e),this.panoRenderer.renderPanoTiles(e,null,!1,!1)}}},20387:(e,t,i)=>{var s;i.d(t,{v:()=>s}),function(e){e[e.CurrentView=0]="CurrentView",e[e.FullPanorama=1]="FullPanorama"}(s||(s={}))},9699:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(98010);class o extends s.v0{constructor(){super()}}},46368:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(98010);class o extends s.v0{constructor(e){super(),this.sweepIds=e}}},70903:(e,t,i)=>{i.d(t,{L:()=>s});class s{constructor(e){this.comparer=e||this.defaultComparer,this.poolArray=[]}add(e){const t=this.createObjectDescriptor(e);return t.object=e,t.inUse=!0,this.addObjectDescriptorToPool(t),t}get(e){for(const t of this.poolArray)if(!t.inUse&&this.comparer(t,e))return t.inUse=!0,t;return null}free(e){for(const t of this.poolArray)if(t.object===e)return t.inUse=!1,!0;return!1}all(){return this.poolArray}remove(e){const t=this.poolArray.findIndex((t=>t.object===e));return-1!==t&&(this.poolArray.splice(t,1),!0)}defaultComparer(e,t){return!0}createObjectDescriptor(e){return{object:e,inUse:!1}}addObjectDescriptorToPool(e){this.poolArray.push(e)}}},43890:(e,t,i)=>{e.exports=i.p+"images/outlineBasic1024.png"},75183:(e,t,i)=>{e.exports=i.p+"images/outlineBasic2048.png"},94326:(e,t,i)=>{e.exports=i.p+"images/outlineBasic4096.png"},95405:(e,t,i)=>{e.exports=i.p+"images/outlineBasic512.png"},20699:(e,t,i)=>{e.exports=i.p+"images/outlineEnhanced1024.png"},5793:(e,t,i)=>{e.exports=i.p+"images/outlineEnhanced2048.png"},94991:(e,t,i)=>{e.exports=i.p+"images/outlineEnhanced4096.png"},21742:(e,t,i)=>{e.exports=i.p+"images/outlineEnhanced512.png"}}]);