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

export const updateAccount = (state, updateAccount) => {

  const itemToUpdate = state.accounts.findIndex( (e) => e.id == updateAccount.id );
  //change the data on the item to update position of the array
  console.log({updateAccount,itemToUpdate});

  state.accounts[itemToUpdate] = {
    id: updateAccount.id,
    alias: updateAccount.alias,
    entity: updateAccount.entity,
    document: updateAccount.document,
    acountNumber: updateAccount.acountNumber,
    type: updateAccount.type,
  };
} 