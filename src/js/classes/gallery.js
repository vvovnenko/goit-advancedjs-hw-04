import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default class Gallery {
  #gallery;
  #lightBox;
  createGalleryItem;

  constructor(gallerySelector, createGalleryItem) {
    this.#gallery = document.querySelector(gallerySelector);
    this.#lightBox = new SimpleLightbox(`${gallerySelector} a`, {});
    this.createGalleryItem = createGalleryItem;
  }

  clear() {
    this.#gallery.innerHTML = '';
  }

  addItems(items) {
    this.#gallery.insertAdjacentHTML(
      'beforeend',
      items.map(this.createGalleryItem).join('')
    );
    this.#lightBox.refresh();
  }
}
