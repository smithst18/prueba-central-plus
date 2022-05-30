import { getCurrencys as sendCurrencys,getTransactions as sendTransactions } from '@/helpers/converJson';

export const getCurrencyType = ({commit}) => {
  //get the currency data from api/json
  const arrCurrency =  sendCurrencys();

  //get types
  const cryptos = arrCurrency.filter( e => e.type == "crypto");

  const nationals = arrCurrency.filter( e => e.type == "national");

  //comit types 
  commit('setCurrencys',{arrCurrencys:cryptos,type:'crypto'});
  commit('setCurrencys',{arrCurrencys:nationals,type:'national'});
}

// get transactions 
export const getTransactions = ({commit}) => {
  const arrtransactions =  sendTransactions();

  commit('setTransactions',arrtransactions);
}