export default class InfiniteScroll {
  #observer;
  #callback;
  #container;
  #loading = false;

  constructor(container) {
    this.#container = container;
    this.#observer = new IntersectionObserver(
      entries => this.observeEntries(entries),
      {
        root: null,
        rootMargin: '300px',
        threshold: 1.0,
      }
    );
  }

  start(callback) {
    this.#callback = callback;
    this.#observer.observe(this.#container);
  }

  stop() {
    this.#observer.unobserve(this.#container);
    this.#callback = undefined;
  }

  async observeEntries([entry]) {
    if (entry.isIntersecting && !this.#loading) {
      this.#loading = true;
      await this.#callback();
      this.#loading = false;
    }
  }
}
