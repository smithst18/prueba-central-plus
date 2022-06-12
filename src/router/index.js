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
        path:'dashboard',
        ...HomeRouter
      },
      {
        path:'accounts',
        ...AccountRouter
      },
      {
        path:'',
        redirect:{name:'dashboard'},
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect:{name:'dashboard'}
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
