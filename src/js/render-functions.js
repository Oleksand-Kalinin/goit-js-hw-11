export function markupGallery(objImgs, domEl) {
    const markup = objImgs.hits
        .map(image => {
            return `
            <li class="gallery-item">
                <a class="gallery-link" href="${image.largeImageURL}">
                    <img
                        class="gallery-image"
                            src="${image.webformatURL}"
                            alt="${image.tags}"
                    />
                </a>
                  <div class="img-info">
                        <p class="img-info-text"><span class="span-img-info">Likes</span>${image.likes}</p>
                        <p class="img-info-text"><span class="span-img-info">Views</span>${image.views}</p>
                        <p class="img-info-text"><span class="span-img-info">Comments</span>${image.comments}</p>
                        <p class="img-info-text"><span class="span-img-info">Downloads</span>${image.downloads}</p>
                    </div>
            </li>`
        })
        .join('');
    domEl.innerHTML = markup;
}
