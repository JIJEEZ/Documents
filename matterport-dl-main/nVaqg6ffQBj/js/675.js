"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[675],{14766:(e,t,o)=>{o.d(t,{m:()=>r});var n=o(88977),i=o(7689);const s={0:n.Z.GL_TEXTURE_CUBE_MAP_POSITIVE_Y,1:n.Z.GL_TEXTURE_CUBE_MAP_POSITIVE_Z,2:n.Z.GL_TEXTURE_CUBE_MAP_POSITIVE_X,3:n.Z.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,4:n.Z.GL_TEXTURE_CUBE_MAP_NEGATIVE_X,5:n.Z.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y},r=e=>{if(e<0||e>5)throw new i.Z("mapFaceToCubemapFace() -> face must be in the range [0, 5]");return s[e]}},81248:(e,t,o)=>{o.d(t,{Bv:()=>d,Dv:()=>l,TE:()=>u,l0:()=>h,o7:()=>c});var n=o(81396);const i=-1,s=10,r=5,a=-5,l=(e,t=i)=>o=>e.distanceToSquared(o.position)*t,u=(e,t=i)=>o=>e.distanceTo(o.position)*t,c=(e,t,o=s)=>{const i=new n.Vector3;return n=>i.copy(n.position).sub(e).normalize().dot(t)*o},h=(e,t=i)=>o=>e.distanceToSquared(o.floorPosition)*t,d=(e,t=r,o=a)=>n=>e===n.floorId?t:o},77382:(e,t,o)=>{var n;o.d(t,{Z:()=>i}),function(e){e[e.Center=0]="Center",e[e.UpperLeft=1]="UpperLeft",e[e.UpperRight=2]="UpperRight",e[e.LowerRight=3]="LowerRight",e[e.LowerLeft=4]="LowerLeft"}(n||(n={}));const i=n},27646:(e,t,o)=>{o.d(t,{S:()=>u,Z:()=>c});var n=o(76609),i=o(71239),s=o(54730),r=o(55084),a=o(46950);const l=new(o(97998).Z)("panoqualitymanager");var u;!function(e){e[e.Untested=0]="Untested",e[e.Testing=1]="Testing",e[e.Success=2]="Success",e[e.Fail=3]="Fail"}(u||(u={}));class c{constructor(e,t,o,n,r){this.urls=e,this.maxCubemapSize=t,this.maxNavPanoSize=o,this.maxZoomPanoSize=n,this.overrideWindow=!1,this.navPanoSize=-1,this.zoomPanoSize=-1,this.resolution=r,this.highQualityThreshold=i.Xd.windowHeightHighQualityThresholdOverride||i.Xd.windowHeightHighQualityThreshold,this.persistentStorage=new s.a,this.downloadTestResults={},this.updateMaximums()}setResolution(e){this.resolution=e,this.updateMaximums()}overrideWindowMaximums(e){this.overrideWindow=e,this.updateMaximums()}overrideNavPanoSize(e){this.maxNavPanoSize=e,this.updateMaximums()}getTestResults(e,t){const o=this.downloadTestResults[e];if(o){const e=o[t];if(e)return e}return u.Untested}ultraHighQualityModeEnabled(e){const t=n.Qf[this.getZoomPanoSize()],o=this.downloadTestResults[e];return!(!o||!o[t])&&o[t]===u.Success}updateMaximums(){this.resolution<this.highQualityThreshold&&!this.overrideWindow?(this.navPanoSize=Math.min(c.getPanoSize(n.SL.STANDARD),this.maxNavPanoSize),this.zoomPanoSize=Math.min(c.getPanoSize(n.SL.HIGH),this.maxZoomPanoSize)):(this.navPanoSize=this.maxNavPanoSize,this.zoomPanoSize=this.maxZoomPanoSize),this.zoomPanoSize<this.navPanoSize&&(this.navPanoSize=this.zoomPanoSize),this.zoomPanoSize=Math.min(this.maxCubemapSize,this.zoomPanoSize),this.navPanoSize=Math.min(this.maxCubemapSize,this.navPanoSize)}static getPanoSize(e){if(e in n.eE)return n.eE[e];throw new Error(`Not a panoSizeClass: ${e}`)}static getPanoSizeClass(e){if(e in n.Qf)return n.Qf[e];throw new Error(`Not a valid pano resolution: ${e}`)}getMaxPossiblePanoSize(){return c.getPanoSize(n.SL.ULTRAHIGH)}getNavPanoSize(){return this.navPanoSize}getZoomPanoSize(){return this.zoomPanoSize}availableResolution(e,t){const o=new a.Q;if(!t)return o.reject(0);if(e.resolutions)return e.resolutions.includes(t)?o.resolve(t):this.availableResolution(e,this.getLowerResolution(t));switch(this.getTestResults(e.id,t)){case u.Success:o.resolve(t);break;case u.Fail:return this.availableResolution(e,this.getLowerResolution(t));case u.Untested:this.testDownload(e,t,r.I_).then((n=>{n?o.resolve(t):this.availableResolution(e,this.getLowerResolution(t)).then((e=>o.resolve(e)))}));break;case u.Testing:l.warn("resolution is already testing, do we need to handle this?")}return o}getLowerResolution(e){switch(e){case n.SL.ULTRAHIGH:return n.SL.HIGH;case n.SL.HIGH:return n.SL.STANDARD;case n.SL.STANDARD:return n.SL.BASE}return null}testDownload(e,t,o){if(!this.urls)throw new Error("Can't call testDownload without signed urls");const n=c.getPanoSize(t),i=new a.Q,s=e.id;this.downloadTestResults[s]||(this.downloadTestResults[s]={});const r=this.downloadTestResults[s]&&this.downloadTestResults[s][t];if(r)r===u.Success?i.resolve(!0):r===u.Fail&&i.resolve(!1);else{this.downloadTestResults[s][t]=u.Testing;const r=e=>{var o,n;this.downloadTestResults[s][t]=u.Success,null===(n=(o=e).close)||void 0===n||n.call(o),i.resolve(!0)},a=()=>{this.downloadTestResults[s][t]=u.Fail,i.resolve(!1)};this.getTileUrl(e,n,o,0).then((e=>{this.urls.getImageBitmap(e,1,1).then(r,a)}))}return i}getTileUrl(e,t,o,n){const i=this.persistentStorage.get("getTileUrl:locationInfo",(()=>({face:-1,faceTileIndex:-1,tileX:-1,tileY:-1})));r.Tp(t,n,i);const s=Math.floor(t/o),a=s*s,l=Math.floor(n/a),u=c.getPanoSizeClass(t);return e.getTileUrl(u,l,i.tileX,i.tileY)}}},55084:(e,t,o)=>{o.d(t,{Hq:()=>u,I_:()=>l,P6:()=>c,R5:()=>h,Tp:()=>d,Tu:()=>T,eO:()=>g,oU:()=>S,ym:()=>w});var n=o(88977),i=o(81396),s=o(77382),r=o(14766),a=o(69505);const l=512,u=6,c=(e,t,o,i,r,a,l,u)=>{const c=e/t,h=2*(t/e),d=h/2;let T=2*(i/c)-1+d,w=2*((r=c-1-r)/c)-1+d;switch(a=a||s.Z.Center){case s.Z.UpperLeft:T-=d,w+=d,T+=l*h;break;case s.Z.UpperRight:T+=d,w+=d,w-=l*h;break;case s.Z.LowerRight:T+=d,w-=d,T-=l*h;break;case s.Z.LowerLeft:T-=d,w-=d,w+=l*h;break;case s.Z.Center:}switch(o){case n.Z.GL_TEXTURE_CUBE_MAP_POSITIVE_X:u.set(-1,w,-T);break;case n.Z.GL_TEXTURE_CUBE_MAP_NEGATIVE_X:u.set(1,w,T);break;case n.Z.GL_TEXTURE_CUBE_MAP_POSITIVE_Y:u.set(-T,1,-w);break;case n.Z.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y:u.set(-T,-1,w);break;case n.Z.GL_TEXTURE_CUBE_MAP_POSITIVE_Z:u.set(-T,w,1);break;case n.Z.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z:u.set(T,w,-1)}u.normalize()},h=(e,t)=>{let o=l;e<l&&(o=e);const n=Math.floor(e/o),i=n*n;return Math.floor(t/i)},d=(e,t,o)=>{let n=l;e<l&&(n=e);const i=h(e,t),s=Math.floor(e/n),r=t-i*(s*s);o.tileX=r%s,o.tileY=Math.floor(r/s),o.face=i,o.faceTileIndex=r},T=function(e){if(e<=l)return u;const t=Math.floor(e/l);return t*t*u},w=function(){const e=new i.Matrix4,t=new i.Quaternion;return(o,n)=>{t.copy(o),t.invert(),e.makeRotationFromQuaternion(t),n.applyMatrix4(e),n.normalize()}}(),S=function(){const e=new i.Vector3,t=new i.Vector3(0,0,-1),o=new i.Quaternion,n=function(e,t){e.push({face:t.face,faceTileIndex:t.faceTileIndex,tileX:t.tileX,tileY:t.tileY})},s=function(){const e={face:-1,faceTileIndex:-1,tileX:-1,tileY:-1};return(t,o,i)=>{const s=T(t);let r=0;for(let a=0;a<s;a++)d(t,a,e),o&&!o(e)||(r++,i&&n(i,e));return r}}();return(n,r,a,u,c=!1,h,d)=>{u.length=c?0:u.length;const T=r<l?r:l;if(!h&&!d)return s(r,null,u);const S=!!d;h=h||0,d=d||h,d=Math.max(0,Math.min(d,360)),h=Math.max(0,Math.min(h,360)),e.copy(a);const m=n.rotation||new i.Quaternion;if(w(m,e),S){o.setFromUnitVectors(e,t);return s(r,(function(e){return f(r,T,e.face,e.tileX,e.tileY,o,h||0,d||0)}),u)}return s(r,(function(t){return g(r,T,t.face,t.tileX,t.tileY,e,h||0)}),u)}}(),f=function(){const e=new i.Vector3;return(t,o,n,i,l,u,h,d)=>{const T=Math.tan(.5*d*a.Ue),w=-T,S=Math.tan(.5*h*a.Ue),f=-S,g=(0,r.m)(n);let m=0,_=0,E=0,P=0,z=0;for(let n=s.Z.Center;n<=s.Z.LowerLeft;n++){if(c(t,o,g,i,l,n,0,e),e.applyQuaternion(u),e.z>=-1e-5)continue;const s=-1/e.z,r=e.x*s,a=e.y*s;a>T?m++:a<w&&_++,r>S?E++:r<f&&P++,z++}return _!==z&&m!==z&&E!==z&&P!==z}}(),g=function(){const e=new i.Vector3,t=new i.Vector3(0,1,0),o=new i.Vector3(1,0,0);return(n,i,a,l,u,h,d)=>{const T=(0,r.m)(a);if(o.copy(h).cross(t),c(n,i,T,l,u,s.Z.Center,0,e),m(e,h,d))return!0;const w=d/360,S=Math.floor(1/w);let f=0;for(let t=0;t<S;t++){for(let t=s.Z.UpperLeft;t<=s.Z.LowerLeft;t++)if(c(n,i,T,l,u,t,f,e),m(e,h,d))return!0;f+=w}return!1}}(),m=function(){const e=new i.Vector3,t=new i.Vector3;return(o,n,i,s)=>{if(t.copy(o),s){e.copy(s),e.normalize();const n=e.dot(o);e.x*=n,e.y*=n,e.z*=n,t.sub(e)}const r=i/2*a.Ue,l=Math.cos(r);return t.dot(n)>=l}}()},54730:(e,t,o)=>{o.d(t,{a:()=>i});class n{constructor(e){this._value=e}value(){return this._value}set(e){this._value=e}}class i{constructor(){this.storage={}}get(e,t){let o=this.storage[e];return o||(o=t(),this.storage[e]=o),o}getNumber(e){return this.get(e,(()=>new n(0)))}getString(e){return this.get(e,(()=>new n("")))}getArray(e){return this.get(e,(()=>[]))}getNumberMap(e){return this.get(e,(()=>({})))}getStringMap(e){return this.get(e,(()=>({})))}}}}]);