import { searchImages } from './service/pixabay.js';
import { renderGalleryItem } from './service/markup.js';
import Toast from './classes/toast.js';
import Gallery from './classes/gallery.js';
import InfiniteScroll from './classes/infinit-scroll.js';
import Pagination from './classes/pagination.js';
import Loader from './classes/loader.js';

const form = document.querySelector('.search-form');

const loader = new Loader(document.querySelector('.loader'));
const toast = new Toast('topRight');
const gallery = new Gallery('.gallery', renderGalleryItem);
const pagination = new Pagination(40);
const infiniteScroll = new InfiniteScroll(document.querySelector('.js-guard'));

form.addEventListener('submit', handleForm);

async function loadPage(query, page) {
  loader.show();
  try {
    const { hits, totalHits } = await searchImages(
      query,
      page,
      pagination.itemsPerPage
    );

    gallery.addItems(hits);

    pagination.init(page, totalHits);
  } catch (error) {
    toast.error(error.message);
  } finally {
    loader.hide();
  }
}

async function handleForm(event) {
  event.preventDefault();

  infiniteScroll.stop();
  pagination.reset();
  gallery.clear();

  const query = event.currentTarget.searchQuery.value.trim();
  if (!query) {
    toast.warning('Write the search query!');
    return;
  }

  await loadPage(query, 1);

  if (!pagination.isActive) {
    toast.warning(
      "We're sorry, but there are no images matching your search query."
    );
    return;
  }

  toast.success(`Hooray! We found ${pagination.totalItems} images.`);

  infiniteScroll.start(async () => {
    if (!pagination.hasNextPage) {
      infiniteScroll.stop();
      toast.warning(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }

    await loadPage(query, pagination.nextPage);
  });
}
