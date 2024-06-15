export default class Pagination {
  #page = 1;
  #maxPage = 0;
  #totalItems = 0;
  #itemsPerPage;

  constructor(itemsPerPage) {
    this.#itemsPerPage = itemsPerPage;
  }

  reset() {
    this.#page = 1;
    this.#maxPage = 0;
    this.#totalItems = 0;
  }

  init(page, totalItems) {
    this.#page = page;
    this.#maxPage = Math.ceil(totalItems / this.#itemsPerPage);
    this.#totalItems = totalItems;
  }

  get page() {
    return this.#page;
  }

  get itemsPerPage() {
    return this.#itemsPerPage;
  }

  get isActive() {
    return this.#maxPage > 0;
  }

  get hasNextPage() {
    return this.#maxPage > this.#page;
  }
  get nextPage() {
    return this.#page + 1;
  }

  get totalItems() {
    return this.#totalItems;
  }
}
