import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import Login from './pages/Login.vue'
import Tour from './pages/Tour.vue'
import Privacy from './pages/Privacy.vue'
import Terms from './pages/Terms.vue'

const routes = [
    { 
        path: '/', 
        component: Home,
        meta: { title: 'BTM Ghana - Leading Travel Management Company in West Africa' }
    },
    { 
        path: '/contact', 
        component: Contact,
        meta: { title: 'Contact Us - BTM Ghana' }
    },
    { 
        path: '/about', 
        component: About,
        meta: { title: 'About Us - BTM Ghana' }
    },
    { 
        path: '/services', 
        component: Services,
        meta: { title: 'Our Services - BTM Ghana' }
    },
    { 
        path: '/login', 
        component: Login,
        meta: { title: 'Login - BTM Ghana' }
    },
    { 
        path: '/tour', 
        component: Tour,
        meta: { title: 'Tour Packages - BTM Ghana' }
    },
    {
        path: '/privacy',
        component: Privacy,
        meta: { title: 'Privacy Policy - BTM Ghana' }
    },
    {
        path: '/terms',
        component: Terms,
        meta: { title: 'Terms of Service - BTM Ghana' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Navigation guard to handle page titles
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'BTM Ghana'
    next()
})

export default router 