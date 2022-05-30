import * as userData from "@/back/user.json";
import * as CurrencysData from "@/back/currencys.json";
import * as TransactionsData from "@/back/transactions.json";

export const getUser = () =>{
  var { user } = userData;

  return user;
}

export const getCurrencys = () =>{
  var { currencys } = CurrencysData;

  return currencys;
}
export const getTransactions = () =>{
  var { transactions } = TransactionsData;

  return transactions;
}

// export const setAccounts = () =>{
//   var { user } = userData;

//   return user;
// }