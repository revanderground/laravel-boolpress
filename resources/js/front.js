window.Vue = require('vue');

Vue.use(VueRouter)
import Vue from 'vue';

//importiamo il componente app
import App from './views/App';
import VueRouter from 'vue-router';

const app = new Vue({
    el: '#root',
    render : h => h(App) // mostriamo App all'avvio di Vue
});
