
export default  {

  name:'accounts',
  
  component: () => import(/* webpackChunkName: "daybook" */'@/modules/accounts/layouts/AccountsLayout.vue'),
  children:[]
}