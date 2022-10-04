//oltre a importare tutto il necessario
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//importiamo le singole pagine
import About from './pages/About';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import SinglePost from './pages/SinglePost';

//che per ogni pagina avrò: path(uri), name (by name calls), component di riferimento

const router = new VueRouter ({
    mode: 'history',
    routes: [
        {   path: '/',
            name: 'home',
            component: Home
        },
        {   path: '/about',
            name: '/about',
            component: About
        },
        {   path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/posts/:id',
            name: 'singlePost',
            component: SinglePost
        },


    ],

});

export default router
