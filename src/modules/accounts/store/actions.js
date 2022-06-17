import { saveStorageAccount, getStorage, deleteStorageAccount, updateStorageAccount } from '@/services/localStorageService';

export const loadAccounts = ({commit}) => {
  const data = getStorage();
  if(data.length > 0) commit('setAccounts',data);
}

export const createAccount = ({commit},account) => {
  
  if(account){
    saveStorageAccount(account);
    commit('addAccount',account);
  }
}

export const deleteAccount = ({commit},id) => {
  deleteStorageAccount(id);
  commit('deleteAccount',id);
}



export const updateAccount = ({commit}, updateAccount) => {

  updateStorageAccount(updateAccount);
  commit('updateAccount',updateAccount);
} 