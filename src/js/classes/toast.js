import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default class Toast {
  constructor(position) {
    iziToast.settings({ position });
  }

  warning(message) {
    iziToast.warning({ message });
  }

  success(message) {
    iziToast.success({ message });
  }

  error(message) {
    iziToast.error({ message });
  }
}
