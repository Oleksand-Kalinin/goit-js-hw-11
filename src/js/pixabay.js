
import { markupGallery } from "./render-functions";

export function getAndMarkupImgs(requestImgs, domEl, loaderEl) {
    const searchParams = new URLSearchParams({
        key: '44207215-6e26e0e4c00d7fc92f72264f5',
        q: requestImgs,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;


    fetch(url)
        .then(response => {
            loaderEl.classList.remove('js-hide');
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(imgs => {
            markupGallery(imgs, domEl);
            loaderEl.classList.add('js-hide');
        })
        .catch(error => {
            console.log(error);
        });

}