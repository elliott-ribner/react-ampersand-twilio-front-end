import Router from './router';
import Styles from './styles/styles.styl'
import app from 'ampersand-app';
import Me from './models/me';

window.app = app; // allowing us to access app from console

window.app = {
  init() {
    this.me = new Me({_id: 'x343', email: 'greegreg', token: 'none'});
    this.router = new Router();
    this.router.history.start();
  }
}

window.app.init()