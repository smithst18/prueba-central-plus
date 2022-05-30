import { getUser } from "@/helpers/converJson";

export const loadUser = ({commit}) => {

  const user = getUser();

  commit('setUser',user);
}
