import {createWebHashHistory, createRouter} from "vue-router"
import ProductView from "@/views/ProductView"
import postProductView from "@/views/PostProductView";

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products/:page?',
        name: 'products',
        component: ProductView
    },
    {
        path: '/post',
        name: 'post',
        component: postProductView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
