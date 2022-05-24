import {createWebHashHistory, createRouter} from "vue-router"
import ProductView from "@/views/ProductView"

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products',
        name: 'products',
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
