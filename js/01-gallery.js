import { galleryItems } from "./gallery-items.js";
// Change code below this line

// galleryItems.forEach((el) => console.log(el.description));

const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href='${original}'>
            <img
            class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}'
            />
        </a>
    </li>`
  )
  .join("");

galleryContainer.insertAdjacentHTML("afterbegin", createGalleryMarkup);

galleryContainer.addEventListener("click", openLargeImage);
function openLargeImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`
    // {
    //   onShow: (instance) =>
    //     galleryContainer.addEventListener("click", openLargeImage),
    //   onClose: (instance) => galleryContainer.removeEventListener(),
    // }
  );

  instance.show();
  console.log(instance);
  window.addEventListener("keydown", closeLargeImageByEscape);
  function closeLargeImageByEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

// const instance = basicLightbox.create(
//   `
//     <img src="${galleryContainer.dataset.source}" width="800" height="600">
// `,
//   {
//     onShow: (instance) => galleryContainer.addEventListener("click", ),
//     onClose: (instance) => galleryContainer.removeEventListener(),
//   }
// );

// instance.show();
// console.log(galleryContainer.dataset.source);
// window.addEventListener("keydown", closeLargeImageByEscape);
// function closeLargeImageByEscape(event) {
//   if (event.code === "Escape") {
//     instance.close();
//   }
// }

// function openLargeImage(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(
//     `
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `,
//     {
//       onShow: (instance) =>
//         galleryContainer.addEventListener("click", openLargeImage),
//       onClose: (instance) => galleryContainer.removeEventListener(),
//     }
//   );

//   instance.show();
//   console.log(instance);
//   window.addEventListener("keydown", closeLargeImageByEscape);
//   function closeLargeImageByEscape(event) {
//     if (event.code === "Escape") {
//       instance.close();
//     }
//   }
// }

// * Function that gets executed before the lightbox will be shown.
// 	 * Returning false will prevent the lightbox from showing.
// 	 */
// 	onShow: (instance) => {},
// 	/*
// 	 * Function that gets executed before the lightbox closes.
// 	 * Returning false will prevent the lightbox from closing.
// 	 */
// 	onClose: (instance) => {}
