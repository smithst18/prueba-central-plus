
export default  {

  name:'dashboard',
  
  component: () => import(/* webpackChunkName: "daybook" */'@/modules/home/layouts/HomeLayout.vue'),
  children:[]
}