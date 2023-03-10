// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

console.log(SimpleLightbox);

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const gallery = document.querySelector('.gallery')

const createGallatyElements = galleryItems.map((item) => {
  return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="" title="${item.description}"/>
</a>`
}).join('');

gallery.insertAdjacentHTML('beforeend', createGallatyElements)

	var lightbox = new SimpleLightbox('.gallery a', {
		captionType: 'attr',
		captionsData: 'title',
		captionPosition: 'bottom',
		captionDelay: 250
	});

