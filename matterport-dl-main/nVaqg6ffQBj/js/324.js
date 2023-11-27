"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[324],{41375:(t,i,e)=>{e.d(i,{i:()=>r});var n=e(10385),s=e(15637),o=e(67992),a=e(59279);class r extends o.V{constructor(){super(...arguments),this.name="available-plugin-data",this.availablePlugins=new s.v,this.lastSavedConfiguration=new n.d,this.strict=(0,a.eY)("sesStrict",null,"boolean"),this.disabled=(0,a.eY)("noPlugins",!1)||(0,a.eY)("mls",0)>=1,this.manifestUrl=(0,a.eY)("manifestUrl"),this.preventLiveEdit=(0,a.eY)("preventWorkshopPluginPreview",!1)}add(t){this.availablePlugins.set(t.name,t)}}},14057:(t,i,e)=>{e.r(i),e.d(i,{PluginConfigData:()=>n.i,default:()=>w,getPluginMetadataUrl:()=>f,getPluginUrl:()=>p});var n=e(41375),s=e(97542),o=e(69170),a=e(3907);const r="0.0";function c(t){if(!t)return[];const i={[r]:l}["0.0"];if(!i)throw new Error(`[PluginConfigDeserializer] Data with version "${t.version}": not recognized.`);return i(t)}function l(t){return t["0.0"]}const u="0.0";function g(t){const i={[u]:h};if(!t)throw new Error("[PluginConfigSerializer] no data to serialize.");const e=i["0.0"];if(!e)throw new Error('[PluginConfigSerializer] Version "0.0" not recognized.');return e(t)}function h(t){return{[u]:t}}class d extends a.MU{constructor(t,i,e){super({queue:t,path:`${i}/api/v1/jsonstore/model/plugins/${e}`,batchUpdate:!0,deserialize:c,serialize:g})}}function p(t,i,e){return e+`${t}/${i}/${t}.js`}function f(t,i,e){return e+`${t}/${i}/plugin.json`}var m=e(44443),v=e(8807),y=e(7162),b=e(36625);const P="unknown-app-key";class w extends s.Y{constructor(){super(...arguments),this.name="plugin-config",this._registryLoaded=!1}get serviceSdkKey(){if(!this._applicationKey)throw new Error("[PluginConfigData] service key has not yet been set.");return this._applicationKey}get canOverrideStrict(){var t,i;return null===(i=null===(t=this._config)||void 0===t?void 0:t.pluginPolicies)||void 0===i?void 0:i.canDebug}get registryLoaded(){return this._registryLoaded}async init(t,i){if(this.queue=t.queue,this.pluginConfigData=new n.i,this._config=t,this._policyData=await i.market.waitForData(v.n),t.pluginPolicies.enabled){const e=(await i.getModuleBySymbol(o.y.API)).getApi(),n=await e.getAppKey("showcase","plugin");if(n instanceof Object){const i=n;await this.initializePluginRegistry(i,t),await this.setupConfigStore(t.baseUrl,t.modelId),this._registryLoaded=!0}}i.market.register(this,n.i,this.pluginConfigData)}saveConfig(t,i){const e=this.pluginConfigData.lastSavedConfiguration.values();this.log.debugInfo(`configuration for ${t.id} updated. ${JSON.stringify(e,void 0,2)}`),this.currentStore.update(e)}setupConfigStore(t,i){this.currentStore=new d(this.queue,t,i);return this.currentStore.read().then((t=>{t||(t=[]),this.log.debugInfo(`Saved configuration data loaded for ${t.length} plugin(s). ${JSON.stringify(t,void 0,2)}`),this.pluginConfigData.lastSavedConfiguration.replace(t),this.pluginConfigData.lastSavedConfiguration.onElementChanged({onAdded:this.saveConfig.bind(this),onUpdated:this.saveConfig.bind(this)})})).catch((t=>this.log.error("Failed to load configured plugins: ",t)))}getAutoUpgradedVersion(t,i){var e;const n=Object.keys(i.versions).sort(((t,i)=>y.o.compare(i,t))).filter((t=>this.hasRequiredPolicies(i.versions[t].requiredPolicies))),s=null!==(e=b.maxSatisfying(n,`~${t}`))&&void 0!==e?e:t,o=i.currentVersion;let a=s;return b.gt(s,o)&&(a=o),a}dispose(t){super.dispose(t),t.market.unregister(this,n.i),this.pluginConfigData=void 0}async initializePluginRegistry(t,i){const{manifestUrl:e,applicationKey:n}=this.getManifestUrl(t,i);this._applicationKey=n;const s=await this.queue.get(e,{responseType:"json"}).catch((t=>(this.log.error(t),null)));null!==s?(this._manifest=s,await this.populateFromManifest(s,t,n)):this.log.error("Plugin manifest could not be found, please contact support.")}getManifestUrl(t,i,e=!0){let n=t.manifestUrl,s=t.applicationKey;return this.pluginConfigData.manifestUrl&&((0,m.mM)(this.pluginConfigData.manifestUrl)||i.pluginPolicies.canDebug)&&(n=this.pluginConfigData.manifestUrl),n.match(/localhost/)&&e&&(i.pluginPolicies.canDebug||(s=P)),{manifestUrl:n,applicationKey:s}}async populateFromManifest(t,i,e){const n=[];for(const s of t)n.push(this.registerManifestEntry(s,i,e));await Promise.all(n)}async registerManifestEntry(t,i,e){const n=this.findLatestPermittedVersion(t.versions,t.currentVersion);if(!n)return;t.currentVersion=n;const s=Object.assign(Object.assign({},t),{src:t.src||p(t.name,t.currentVersion,i.baseUrl),meta:t.meta||f(t.name,t.currentVersion,i.baseUrl),applicationKey:t.applicationKey||e||P});if(!(0,m.mM)(s.src)||!(0,m.mM)(s.meta))return;const o=await this.queue.get(s.meta,{responseType:"json"}).catch((t=>{this.log.error(t)}));null!==o&&this.pluginConfigData.add({name:s.name,description:o.description,version:s.currentVersion,config:o.config||{},applicationKey:s.applicationKey,src:s.src,meta:s.meta,icon:o.icon,enabled:!1,strict:this.canOverrideStrict&&null!==this.pluginConfigData.strict?this.pluginConfigData.strict:s.sesStrict})}findLatestPermittedVersion(t,i){const e=Object.keys(t).sort(((t,i)=>y.o.compare(i,t)));for(const n of e){const e=t[n].requiredPolicies;if(!y.o.gt(n,i)&&this.hasRequiredPolicies(e))return n}return null}hasRequiredPolicies(t){return!t||0===t.length||t.reduce(((t,i)=>{if(!t)return t;if(i instanceof Object){if("or"===i.operator)return i.policies.some((t=>this._policyData.hasPolicy(t)));if("xor"===i.operator){let t=0;return i.policies.forEach((i=>{t+=this._policyData.hasPolicy(i)?1:0})),1===t}return this.log.warn(`unrecognized required policy entry, operator: <${i.operator}> - plugin disabled`),!1}return this._policyData.hasPolicy(i)}),!0)}async getConfiguredPlugins(){const t=await this.currentStore.read()||[],i=[];return t.forEach((t=>{var e;if(t.enabled){const n=this.pluginConfigData.availablePlugins.get(t.id);let s=!(n&&(!n||void 0!==n.strict))||n.strict;if(!n)return this.log.warn(`"${t.id}" plugin not found in current plugin manifest -- was it configured with a different one?`),void this.log.warn(`Unrecognized plugin disallowed "${null==t?void 0:t.id}" cannot load from ${null==t?void 0:t.src}`);const o={config:t.config||{},src:t.src||n.src,meta:t.meta||n.meta,id:t.id||n.name,strict:s,applicationKey:(null==n?void 0:n.applicationKey)||"FAKE_APP_KEY"};{const t=(t=>{var i,e,n;return null!==(n=null===(e=null===(i=null==t?void 0:t.src)||void 0===i?void 0:i.match(/(\d+\.\d+\.\d+)\/[^\/]*\.js$/))||void 0===e?void 0:e[1])&&void 0!==n?n:null})(o),i=this._manifest.find((t=>t.name===o.id));if(t&&i){const n=this.getAutoUpgradedVersion(t,i);null!==n&&n!==t&&(this.log.debugInfo(`Replacing ${i.name} version ${t} with version ${n}`),o.src=o.src.replace(t,n),o.meta=null===(e=o.meta)||void 0===e?void 0:e.replace(t,n))}else this.log.debugInfo(`Missing config version or manifest entry for ${o.id}. Not auto-updating patch for this plugin.`)}i.push(o)}})),i}}},3907:(t,i,e)=>{e.d(i,{MU:()=>r});var n,s=e(39880),o=e(44584);!function(t){t.GET="GET",t.POST="POST",t.PATCH="PATCH",t.PUT="PUT",t.DELETE="DELETE",t.OPTIONS="OPTIONS"}(n||(n={}));class a extends class{constructor(){this._options={responseType:"json"}}get options(){const t=this._options;return t.headers=(0,o.m)(this.url,this._options.headers||{}),t}}{constructor(t){super(),this.config=t,this.url=t.path}async read(){const{deserialize:t}=this.config;let i=null;return this.config.cachedData&&this.config.cachedData.data?i=this.config.cachedData.data:(i=await this.config.queue.get(this.config.path,this.options),this.config.cachedData&&(this.config.cachedData.data=i)),t(i)}clearCache(){this.config.cachedData&&(this.config.cachedData.data=null)}}class r extends a{constructor(t){super(t),this.config=t,this.acceptsPartial=!1,this.config.batchUpdate="batchUpdate"in this.config&&this.config.batchUpdate}async create(t){throw Error("Not implemented")}updateBatch(t,i){const{serialize:e}=this.config,s=[],o=[...new Set([...Object.keys(t),...Object.keys(i)])];for(const e of o){t[e]||i[e]||s.push(this.config.queue.delete(`${this.config.path}/${e}`,this.options))}const a=e(t,i),r=Object.assign(Object.assign({},this.options),{body:a});return s.push(this.config.queue.request(this.config.httpMethod||n.POST,this.config.path,r)),Promise.all(s)}updateInternal(t,i){const{serialize:e}=this.config,o=[],a=Object.assign({},this.options),r=Object.keys(t),c=Object.keys(i),l=(0,s.XN)(r.concat(c));for(const s in l){const r=l[s],c=t[r]||i[r];if(c){const t={};t[r]=c;const s={},l=i[r];l&&(s[r]=l);const u=e(t,s);a.body=u,o.push(this.config.queue.request(this.config.httpMethod||n.POST,this.config.path,a))}else o.push(this.config.queue.delete(`${this.config.path}/${r}`,this.options))}return Promise.all(o)}async update(t,i){this.clearCache(),await(this.config.batchUpdate?this.updateBatch(t,i||{}):this.updateInternal(t,i||{}))}async delete(t){throw Error("Not implemented")}}}}]);