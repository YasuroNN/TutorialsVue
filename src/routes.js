import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Pizzas from './pages/Pizzas.vue'

export default new VueRouter({
    routes: [
        {
            path: '', //localhost8080
            component: Home
        },
        {
            path: '/pizzas',//localhost8080/pizzas
            component: Pizzas
        }
    ],
    mode: 'history'
})