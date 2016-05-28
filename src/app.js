import Router from './router';
import Styles from './styles/styles.styl'

window.app = {
  init() {
    this.router = new Router();
    this.router.history.start();
  }
}

window.app.init()