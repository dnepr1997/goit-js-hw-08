// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galery = document.querySelector('.gallery')
galery.insertAdjacentHTML('beforeend', createMurkup(galleryItems))
galery.style.listStyle = "none";

function createMurkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    ).join("")
}
let lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
    captionsType: 'alt',
});
