var G=Object.defineProperty;var M=(t,e,s)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>(M(t,typeof e!="symbol"?e+"":e,s),s),q=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(q(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},a=(t,e,s,c)=>(q(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s);import{a as N,i as L,S as T}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const S="44398563-cf059515c803c5aba714f6295",H="https://pixabay.com/api/";async function R(t,e=1,s=40){const c={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s},{data:i}=await N.get(`${H}?key=${S}`,{params:c});return i}function W(t){const{webformatURL:e,tags:s,largeImageURL:c,likes:i,views:o,comments:v,downloads:E}=t;return`
    <div class="photo-card">
      <a class='gallery__link' href=${c}>
        <img src=${e} alt=${s} loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${i}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${o}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${v}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${E}
        </p>
      </div>
    </div>`}class j{constructor(e){L.settings({position:e})}warning(e){L.warning({message:e})}success(e){L.success({message:e})}error(e){L.error({message:e})}}var d,I;class z{constructor(e,s){n(this,d,void 0);n(this,I,void 0);x(this,"createGalleryItem");a(this,d,document.querySelector(e)),a(this,I,new T(`${e} a`,{})),this.createGalleryItem=s}clear(){r(this,d).innerHTML=""}addItems(e){r(this,d).insertAdjacentHTML("beforeend",e.map(this.createGalleryItem).join("")),r(this,I).refresh()}}d=new WeakMap,I=new WeakMap;var m,f,g,y;class U{constructor(e){n(this,m,void 0);n(this,f,void 0);n(this,g,void 0);n(this,y,!1);a(this,g,e),a(this,m,new IntersectionObserver(s=>this.observeEntries(s),{root:null,rootMargin:"300px",threshold:1}))}start(e){a(this,f,e),r(this,m).observe(r(this,g))}stop(){r(this,m).unobserve(r(this,g)),a(this,f,void 0)}async observeEntries([e]){e.isIntersecting&&!r(this,y)&&(a(this,y,!0),await r(this,f).call(this),a(this,y,!1))}}m=new WeakMap,f=new WeakMap,g=new WeakMap,y=new WeakMap;var l,u,p,b;class B{constructor(e){n(this,l,1);n(this,u,0);n(this,p,0);n(this,b,void 0);a(this,b,e)}reset(){a(this,l,1),a(this,u,0),a(this,p,0)}init(e,s){a(this,l,e),a(this,u,Math.ceil(s/r(this,b))),a(this,p,s)}get page(){return r(this,l)}get itemsPerPage(){return r(this,b)}get isActive(){return r(this,u)>0}get hasNextPage(){return r(this,u)>r(this,l)}get nextPage(){return r(this,l)+1}get totalItems(){return r(this,p)}}l=new WeakMap,u=new WeakMap,p=new WeakMap,b=new WeakMap;var w;class D{constructor(e){n(this,w,void 0);a(this,w,e)}show(){r(this,w).classList.remove("hidden")}hide(){r(this,w).classList.add("hidden")}}w=new WeakMap;const F=document.querySelector(".search-form"),A=new D(document.querySelector(".loader")),P=new j("topRight"),_=new z(".gallery",W),h=new B(40),$=new U(document.querySelector(".js-guard"));F.addEventListener("submit",K);async function O(t,e){A.show();try{const{hits:s,totalHits:c}=await R(t,e,h.itemsPerPage);_.addItems(s),h.init(e,c)}catch(s){P.error(s.message)}finally{A.hide()}}async function K(t){t.preventDefault(),$.stop(),h.reset(),_.clear();const e=t.currentTarget.searchQuery.value.trim();if(!e){P.warning("Write the search query!");return}if(await O(e,1),!h.isActive){P.warning("We're sorry, but there are no images matching your search query.");return}P.success(`Hooray! We found ${h.totalItems} images.`),$.start(async()=>{if(!h.hasNextPage){$.stop(),P.warning("We're sorry, but you've reached the end of search results.");return}await O(e,h.nextPage)})}
//# sourceMappingURL=commonHelpers.js.map
