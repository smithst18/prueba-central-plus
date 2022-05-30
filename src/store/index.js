import { createStore } from 'vuex'

import state from "./state";
import * as actions  from "./actions";
import * as getters from "./getter";
import * as mutations from "./mutations";

import homeModule from '../modules/home/store';
import accountModule from '../modules/accounts/store'
const store =  createStore({
  namespaced:true,

  state,
  actions,
  getters,
  mutations,

  modules: {
    homeModule,
    accountModule
  }
})


export default store;
