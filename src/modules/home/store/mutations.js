export const setCurrencys = (state,{arrCurrencys,type}) => {
  //save the currencys by type in the  Homemodule state
  if(type == 'crypto') state.cryptos = arrCurrencys;
  else if(type == 'national')  state.nationals = arrCurrencys;
}
//save the transactions  in the  Homemodule state
export const setTransactions = (state,arrTransactions) => {
  if(arrTransactions.length > 0) state.transactions = arrTransactions;
}