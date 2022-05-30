export const setAccounts = (state,data) => {
  state.accounts = [...data] ;
}


export const addAccount = (state,account) => {
  state.accounts = [...state.accounts,account];
}
  
export const deleteAccount = (state,id) => {
  state.id = 0;
  state.accounts = state.accounts.filter( e => e.id != id);
}

export const saveAccountToUpdate = (state,account) =>{
  state.acountToUpdate =  account;
}   


export const updateAccount = (state, updateAccount) => {
  console.log('mutation');

  const itemToUpdate = state.accounts.findIndex( (e) => e.id == updateAccount.id );
  //change the data on the item to update position of the array
  state.accounts[itemToUpdate] = updateAccount;
} 