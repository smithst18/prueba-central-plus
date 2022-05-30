import state from "./state";

import * as actions  from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const HomeModule = {
  namespaced:true,

  state,
  actions,
  getters,
  mutations,
}

export default HomeModule