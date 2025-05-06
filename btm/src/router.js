import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import Login from './pages/Login.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/login', component: Login }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 