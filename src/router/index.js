import { createRouter, createWebHashHistory } from 'vue-router'

//rout for dashboard view
import HomeRouter from '@/modules/home/router';
import AccountRouter from "@/modules/accounts/router"
const routes = [
  {
    path: '/',
    redirect:'/home',

  },
  {
    path:'/home',
    component: () => import(/* webpackChunkName: "daybook" */'@/views/HomeView.vue'),
    children:[
      {
        path:'',
        name:'home',
        ...HomeRouter
      },
      {
        path:'accounts',
        name:'accounts',
        ...AccountRouter
      },
      {
        path:'',
        redirect:'home',
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect:'/'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
