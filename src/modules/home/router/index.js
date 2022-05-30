
export default  {

  name:'home',
  
  component: () => import(/* webpackChunkName: "daybook" */'@/modules/home/layouts/HomeLayout.vue'),
  children:[]
}