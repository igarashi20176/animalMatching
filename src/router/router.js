import { createRouter, createWebHistory } from 'vue-router'
import Chart from '../templates/ChartList.vue'
import Animal from "../templates/AnimalList.vue";
<<<<<<< HEAD
import Detail from "../views/AnimalListDetail.vue";
=======
import Detail from "../templates/AnimalListDetail.vue";
>>>>>>> 5474ccfe80450524a2ab9f150652682d16fa12ed

const routes = [
    {
        path: '/chart',
        name: 'chart',
        component: Chart,
    },
    {
        path: '/list/:filter?',
        name: 'list',
        component: Animal
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    // {
    //     path: '/edit/:id',
    //     name: 'edit',
    //     component: Edit
    // },
    {
        path: '/*',
        redirect: '/list'
    }
]

const router = createRouter({
    history: createWebHistory(),
    // routes: routesの省略↓
    routes,
    // グローバルに <router-link 'exact'>を設定
    // linkExactActiveClass
})

export default router