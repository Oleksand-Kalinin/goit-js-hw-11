import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getAndMarkupImgs } from "./js/pixabay";


const formSearchImgs = document.querySelector('.form-search-imgs');
const inputSearchImgs = document.querySelector('.img-search-request');
const galleryListEl = document.querySelector('.gallery-list');
const loaderEl = document.querySelector('.loader');


formSearchImgs.addEventListener('submit', (event) => {
    event.preventDefault();

    if (inputSearchImgs.value.trim() !== '') {
        getAndMarkupImgs(inputSearchImgs.value, galleryListEl, loaderEl);
    } else {
        iziToast.error({
            message: 'Please request for search imgs',
            position: 'topCenter',
        });
    }

    formSearchImgs.reset();
})