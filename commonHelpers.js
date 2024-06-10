import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function u(t,r){if(t.hits.length!==0){const o=t.hits.map(e=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${e.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${e.webformatURL}"
                            alt="${e.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${e.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${e.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${e.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${e.downloads}</p>
                    </div>
            </li>`).join("");r.innerHTML=o,new m(".gallery-list a",{captionDelay:250,captionsData:"alt"}).refresh()}else l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}function f(t,r,o){const e=`https://pixabay.com/api/?${new URLSearchParams({key:"44207215-6e26e0e4c00d7fc92f72264f5",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(e).then(s=>{if(o.classList.remove("js-hide"),!s.ok)throw new Error(s.status);return s.json()}).then(s=>{u(s,r),o.classList.add("js-hide")}).catch(s=>{console.log(s)})}const n=document.querySelector(".form-search-imgs"),c=document.querySelector(".img-search-request"),p=document.querySelector(".gallery-list"),d=document.querySelector(".loader");n.addEventListener("submit",t=>{t.preventDefault(),c.value.trim()!==""?f(c.value,p,d):l.error({message:"Please request for search imgs",position:"topCenter"}),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
