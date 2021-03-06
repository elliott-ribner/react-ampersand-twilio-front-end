import React from 'react';
import Router from 'ampersand-router';
import MainPage from './pages/main-page';
import Convo from './pages/convo';
import Layout from './pages/layout';
import Register from './pages/register';
import Login from './pages/Login';

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if(opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
        )
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'mainPage',
    'convo': 'convo',
    'register': 'register',
    'login': 'login',
  },
  mainPage() {
    this.renderPage(<MainPage />);
    console.log('main page');
  },
  convo() {
    this.renderPage(<Convo />)
    console.log('convo');
  },
  register() {
    this.renderPage(<Register />)
    console.log('register')
  },
  login() {
    this.renderPage(<Login />)
    console.log('register')
  }
})