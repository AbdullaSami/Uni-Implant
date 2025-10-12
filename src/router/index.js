import {createRouter, createWebHistory} from 'vue-router'

import Layout from '../components/Layout.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import Products from '../views/Products.vue'
import Download from '../views/Download.vue'


const routes = [
    {
        path: '/',
        name: 'app',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'app.home',
                component: Home,
            },
            {
                path: '/about',
                name: 'app.about',
                component: About,
            },
            {
                path: '/contact-us',
                name: 'app.contact-us',
                component: ContactUs,
            },
            {
                path: '/products',
                name: 'app.products',
                component: Products,
            },
            {
                path: '/download',
                name: 'app.download',
                component: Download,
            }
        ]
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router