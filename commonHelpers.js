import{S as w,i as d,a as v}from"./assets/vendor-951421c8.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const L=document.querySelector(".search-form"),y=document.querySelector(".pictures-list"),p=document.querySelector(".loader"),t=document.querySelector(".button-load"),i=new w(".gallery-card a.gallary-card-link",{captionsData:"alt",captionDelay:250});let u=null,f=0;L.addEventListener("submit",r=>{r.preventDefault(),u=r.target.elements.input.value,n=1,u.trim("")!==""&&(p.style.display="flex",i&&(i.close(),y.innerHTML=""),setTimeout(()=>{m().then(e=>{f=e.totalHits,b(e.hits),i.refresh(),e.hits.length===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white"}),t.disabled=!0,t.style.display="none",t.style.opacity=0,t.style.overflow="hidden"):(t.disabled=!1,t.style.display="flex",t.style.opacity=1,t.style.overflow="visible"),e.hits.length<=14&&(d.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#add8e6",messageColor:"white"}),t.disabled=!0,t.style.display="none",t.style.opacity=0,t.style.overflow="hidden")}).catch(e=>{console.error("Помилка отримання зображень:",e)}).finally(()=>{p.style.display="none"})},500),h(),r.target.reset())});let n=1,g=15;t.addEventListener("click",async()=>{n+=1;const r=await m();b(r.hits),i.refresh(),h(),document.querySelectorAll(".gallery-card").forEach(e=>{const a=e.getBoundingClientRect();window.scrollBy({top:a.height*1.36,behavior:"smooth"})})});async function m(){const r="42193842-675e74ed987999787d4b57f5e",l=new URLSearchParams({key:r,per_page:g,page:n,q:u,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await v.get(`https://pixabay.com/api/?${l}`)).data}function h(){const r=Math.ceil(f/g);n===r&&(d.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#add8e6",messageColor:"white"}),t.disabled=!0,t.style.display="none",t.style.opacity=0,t.style.overflow="hidden")}function b(r){const l=r.map(e=>`<li class="gallery-card">
    <a class="gallary-card-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
    <ul class="image-info">
            <li class="image-item-info">
            <p>Likes</p>
            <p>${e.likes}</p>
        </li>
        <li class="image-item-info">
            <p>Views</p>
            <p>${e.views}</p>
        </li>
        <li class="image-item-info">
            <p>Comments</p>
            <p>${e.comments}</p>
        </li>
        <li class="image-item-info">
            <p>Downloads</p>
            <p>${e.downloads}</p>
        </li>
    </ul>
    </a>
</li>`).join("");y.insertAdjacentHTML("beforeend",l)}
//# sourceMappingURL=commonHelpers.js.map
