(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();function l(o,r){const n=o.hits.map(t=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${t.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${t.webformatURL}"
                            alt="${t.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${t.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${t.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${t.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${t.downloads}</p>
                    </div>
            </li>`).join("");r.innerHTML=n}function f(o,r){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"44207215-6e26e0e4c00d7fc92f72264f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{l(e,r)}).catch(e=>{console.log(e)})}const a=document.querySelector(".form-search-imgs"),c=document.querySelector(".img-search-request"),u=document.querySelector(".gallery-list");a.addEventListener("submit",o=>{o.preventDefault(),c.value.trim()!==""&&f(c.value,u),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
