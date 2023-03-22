import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function templateItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
        <a class="gallery__link" href='${original}'>
            <img
            class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}'
            />
        </a>
    </li>`;
}
function createGalleryMarkup(galleryItems) {
  return galleryItems.map(templateItemMarkup).join("");
}
// const createGalleryMarkup = galleryItems //////// Отакий от клювий варіант вставляти одразу const
//   .map(
//     ({ preview, original, description }) =>
//       `<li class="gallery__item">
//         <a class="gallery__link" href='${original}'>
//             <img
//             class="gallery__image"
//             src='${preview}'
//             data-source='${original}'
//             alt='${description}'
//             />
//         </a>
//     </li>`
//   )
//   .join("");

galleryContainer.insertAdjacentHTML(
  "afterbegin",
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener("click", openLargeImage);

function openLargeImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () =>
        document.addEventListener("keydown", closeLargeImageByEscape),
      onClose: () =>
        document.removeEventListener("keydown", closeLargeImageByEscape),
    }
  );

  instance.show();

  function closeLargeImageByEscape(event) {
    // console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
