import { getImgsAndMarkup } from "./js/pixabay";

const formSearchImgs = document.querySelector('.form-search-imgs');
const inputSearchImgs = document.querySelector('.img-search-request');
const galleryListEl = document.querySelector('.gallery-list');

formSearchImgs.addEventListener('submit', (event) => {
    event.preventDefault();

    if (inputSearchImgs.value.trim() !== '') {
        getImgsAndMarkup(inputSearchImgs.value, galleryListEl);
    }

    formSearchImgs.reset();
})