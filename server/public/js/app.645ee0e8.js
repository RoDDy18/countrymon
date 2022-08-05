(function(){"use strict";var n={5537:function(n,e){const t="api/country",r="api/bookmark",o=async(n=null)=>{if(null!=n)try{const e=await fetch(t+`/${n}`),r=await e.json();return r.map((n=>({...n})))}catch(e){console.error(e)}else try{const n=await fetch(t),e=await n.json();return e.map((n=>({...n})))}catch(e){console.error(e)}},i=async n=>{try{const e=await fetch(t+`/lang/${n}`),r=await e.json();return r.map((n=>({...n})))}catch(e){console.error(e)}},a=async n=>{try{const e=await fetch(t+`/currency/${n}`),r=await e.json();return r.map((n=>({...n})))}catch(e){console.error(e)}},u=async()=>{try{const n=await fetch(r),e=await n.json();return e.map((n=>({...n})))}catch(n){console.error(n)}},c=async(n,e,t,o,i,a,u,c,l,s)=>{try{const m={countryImg:n,countryName:e,independent:t,countryLanguage:o,countryCurrency:i,countryContinent:a,countryRegion:u,countrySubregion:c,countryPopulation:l,countryTimezone:s};var d=new Headers;d.append("Content-Type","application/json");var g={method:"POST",headers:d,body:JSON.stringify(m),redirect:"follow"};return void await fetch(r,g)}catch(m){console.error(m)}},l=async n=>{try{return void await fetch(r+`/${n}`,{method:"DELETE"})}catch(e){console.error(e)}},s={getCountry:o,getCountryByLang:i,getCountryByCurrency:a,getBookmarks:u,addBookmarks:c,deleteBookmarks:l};e["Z"]=s},1586:function(n,e,t){var r=t(9963),o=t(6252);const i={href:"",role:"button",class:"outline"},a=(0,o.Uk)("Home"),u=(0,o.Uk)("Bookmarks");function c(n,e){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("nav",null,[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",i,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((()=>[a])),_:1})])]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"/bookmarks"},{default:(0,o.w5)((()=>[u])),_:1})])])]),(0,o.Wm)(r)])}var l=t(3744);const s={},d=(0,l.Z)(s,[["render",c]]);var g=d,m=t(2201);t(2087);const p=n=>((0,o.dD)("data-v-32185954"),n=n(),(0,o.Cn)(),n),f={class:"home"},h={class:"search"},y=p((()=>(0,o._)("i",{class:"fas fa-search"},null,-1))),b={key:1,class:"prompt"},k={key:2,"aria-busy":"true",class:"load"},v={class:"grid1"};function w(n,e,t,i,a,u){const c=(0,o.up)("countryCard"),l=(0,o.up)("countryCardIndex");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",h,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>a.search=n),onKeyup:e[1]||(e[1]=(0,r.D2)((n=>u.updateCountry(a.search)),["enter"])),placeholder:"search a country"},null,544),[[r.nr,a.search]]),y]),a.showDetails?((0,o.wg)(),(0,o.j4)(c,{key:0,img:a.img,name:a.name,independent:a.independent,lang:a.lang,currency:a.currency,continent:a.continent,region:a.region,subregion:a.subregion,population:a.population,timezone:a.timezone},null,8,["img","name","independent","lang","currency","continent","region","subregion","population","timezone"])):(0,o.kq)("",!0),a.clickCountryPrompt&&0==a.load?((0,o.wg)(),(0,o.iD)("h4",b,"CLICK A COUNTRY")):(0,o.kq)("",!0),a.load?((0,o.wg)(),(0,o.iD)("h1",k)):(0,o.kq)("",!0),(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.allcountries,(n=>((0,o.wg)(),(0,o.j4)(l,{img:n.flags.png,name:n.name.common,region:n.region,subregion:n.subregion,key:n.altSpellings[0],onClick:e=>u.loadDetails(n.flags.png,n.name.common,n.independent,n.languages[Object.keys(n.languages)[0]],n.currencies[Object.keys(n.currencies)[0]].name,n.continents[0],n.region,n.subregion,n.population,n.timezones[0])},null,8,["img","name","region","subregion","onClick"])))),128))])])}var _=t(3577);const C=n=>((0,o.dD)("data-v-3dcf4f7b"),n=n(),(0,o.Cn)(),n),S={class:"side"},z=["src","alt"],j={key:0,class:"green"},D={key:1,class:"red"},O=C((()=>(0,o._)("hr",null,null,-1))),T=C((()=>(0,o._)("b",null,"Language:",-1))),U=C((()=>(0,o._)("b",null,"Currency:",-1))),E=C((()=>(0,o._)("hr",null,null,-1))),P=C((()=>(0,o._)("b",null,"Continent:",-1))),B=C((()=>(0,o._)("b",null,"Region:",-1))),I=C((()=>(0,o._)("b",null,"Subregion:",-1))),A=C((()=>(0,o._)("hr",null,null,-1))),L=C((()=>(0,o._)("b",null,"Population:",-1))),N=C((()=>(0,o._)("b",null,"Timezone:",-1))),x=C((()=>(0,o._)("i",{class:"fas fa-bookmark"},null,-1))),Z=(0,o.Uk)(" Bookmark"),W=[x,Z];function q(n,e,t,r,i,a){const u=(0,o.up)("hgroup");return(0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("img",{src:t.img,alt:t.name+"img"},null,8,z),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("h2",null,(0,_.zw)(t.name),1),t.independent?((0,o.wg)(),(0,o.iD)("p",j,"Independent: "+(0,_.zw)(t.independent),1)):((0,o.wg)(),(0,o.iD)("p",D,"Independent: "+(0,_.zw)(t.independent),1)),O])),_:1}),(0,o._)("p",null,[T,(0,o.Uk)(" "+(0,_.zw)(t.lang),1)]),(0,o._)("p",null,[U,(0,o.Uk)(" "+(0,_.zw)(t.currency),1)]),E,(0,o._)("p",null,[P,(0,o.Uk)(" "+(0,_.zw)(t.continent),1)]),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("h5",null,[B,(0,o.Uk)(" "+(0,_.zw)(t.region),1)]),(0,o._)("p",null,[I,(0,o.Uk)(" "+(0,_.zw)(t.subregion),1)])])),_:1}),A,(0,o._)("p",null,[L,(0,o.Uk)(" "+(0,_.zw)(t.population),1)]),(0,o._)("p",null,[N,(0,o.Uk)(" "+(0,_.zw)(t.timezone),1)]),(0,o._)("button",{onClick:e[0]||(e[0]=n=>a.bookmark())},W)])}var H=t(5537),F={name:"countryCard",props:{img:String,name:String,independent:String,lang:String,currency:String,continent:String,region:String,subregion:String,population:String,timezone:String},methods:{async bookmark(){await H.Z.addBookmarks(this.img,this.name,this.independent,this.lang,this.currency,this.continent,this.region,this.subregion,this.population,this.timezone),alert("Country Bookmarked")}}};const K=(0,l.Z)(F,[["render",q],["__scopeId","data-v-3dcf4f7b"]]);var R=K;const $=n=>((0,o.dD)("data-v-3bcb3c1b"),n=n(),(0,o.Cn)(),n),M={class:"grid"},Y=["src","alt"],V={class:"region"},J=$((()=>(0,o._)("b",null,"Region:",-1))),G=$((()=>(0,o._)("b",null,"Subregion:",-1)));function Q(n,e,t,r,i,a){const u=(0,o.up)("hgroup");return(0,o.wg)(),(0,o.iD)("article",{onClick:e[0]||(e[0]=n=>a.viewCountry()),class:"side"},[(0,o._)("div",M,[(0,o._)("img",{src:t.img,alt:t.name+"img",class:"img"},null,8,Y),(0,o.Wm)(u,{class:"hgroup"},{default:(0,o.w5)((()=>[(0,o._)("h2",null,(0,_.zw)(t.name),1),(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o._)("p",V,[J,(0,o.Uk)(" "+(0,_.zw)(t.region),1)]),(0,o._)("p",null,[G,(0,o.Uk)(" "+(0,_.zw)(t.subregion),1)])])),_:1})])),_:1})])])}var X={name:"countryCardIndex",props:{img:String,name:String,region:String,subregion:String},methods:{viewCountry(){console.log("You clicked me")}}};const nn=(0,l.Z)(X,[["render",Q],["__scopeId","data-v-3bcb3c1b"]]);var en=nn,tn={name:"HomeView",data(){return{allcountries:[],load:!0,search:"",showDetails:!1,clickCountryPrompt:!0,img:"",name:"",independent:!1,lang:"",currency:"",continent:"",region:"",subregion:"",population:0,timezone:""}},components:{countryCard:R,countryCardIndex:en},async created(){this.allcountries=await H.Z.getCountry(),this.load=!1},methods:{loadDetails(n,e,t,r,o,i,a,u,c,l){this.img=n,this.name=e,this.independent=t,this.lang=r,this.currency=o,this.continent=i,this.region=a,this.subregion=u,this.population=c,this.timezone=l,this.showDetails=!0,this.clickCountryPrompt=!1},async updateCountry(n){this.allcountries=[],this.load=!0,this.allcountries=await H.Z.getCountry(n),this.load=!1}}};const rn=(0,l.Z)(tn,[["render",w],["__scopeId","data-v-32185954"]]);var on=rn;const an=[{path:"/",name:"home",component:on},{path:"/bookmarks",name:"bookmark",component:()=>t.e(443).then(t.bind(t,6782))}],un=(0,m.p7)({history:(0,m.r5)(),routes:an});var cn=un,ln=t(3907),sn=(0,ln.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(g).use(sn).use(cn).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var a=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.c78a63d3.js"}}(),function(){t.miniCssF=function(n){return"css/about.26ec475a.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="countrymon:";t.l=function(r,o,i,a){if(n[r])n[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+i),u.src=r),n[r]=[o];var g=function(e,t){u.onerror=u.onload=null,clearTimeout(m);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(t)})),e)return e(t)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=g.bind(null,u.onerror),u.onload=g.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n=function(n,e,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===n||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===n||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(e(a,u))return o();n(r,u,o,i)}))},o={143:0};t.f.miniCss=function(n,e){var t={443:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(e&&e(r);l<a.length;l++)i=a[l],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunkcountrymon"]=self["webpackChunkcountrymon"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1586)}));r=t.O(r)})();
//# sourceMappingURL=app.645ee0e8.js.map