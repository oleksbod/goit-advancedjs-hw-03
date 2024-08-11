import{S as m,i as u}from"./assets/vendor-f33cd494.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="45384085-93240435f28f8173a532fd559",f=o=>{const e=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(e).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},c=o=>{u.error({position:"topRight",icon:"icon-bi_x-octagon",title:"",progressBarColor:"rgb(181, 27, 27)",message:o})},h=document.querySelector(".gallery"),y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g=o=>o.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}">
        <div class="gallery-footer">
            <div class="item-block">
                <span class="item-title">Likes</span>
                <span class="item-count">${e.likes}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Views</span>
                <span class="item-count">${e.views}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Comments</span>
                <span class="item-count">${e.comments}</span>
            </div>
            <div class="item-block">
                <span class="item-title">Downloads</span>
                <span class="item-count">${e.downloads}</span>
            </div>
        </div>
      </a>
     </li>`).join(""),l=o=>{h.innerHTML=g(o),y.refresh()},i=document.querySelector(".search-form"),d=document.querySelector(".loader"),v=o=>{o.preventDefault();const e=o.target.elements.user_query.value.trim();if(e===""){c("Fill out the search field!"),i.reset();return}d.classList.remove("is-hidden"),l([]),f(e).finally(()=>{d.classList.add("is-hidden"),i.reset()}).then(s=>{var a;if(s&&((a=s==null?void 0:s.hits)==null?void 0:a.length)===0){c("Sorry, there are no images matching your search query. Please try again!"),i.reset();return}l(s.hits)}).catch(s=>{console.log(s)})};i.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
