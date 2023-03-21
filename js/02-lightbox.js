import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const makeGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryMarkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
// console.log(gallery);
// gallery.defaultOptions.captionsData = "alt";
// gallery.defaultOptions.captionDelay = "250";
