export const getStorage = () =>{
  // get storage
  const storage = localStorage.getItem('accounts');
  if(storage) { 
    //parse and destruct storage
    let accounts = JSON.parse(storage);
    //return actual storage if exist
    return accounts
  }
  //else return empy array
  return [];
}
//get the data to save []
const setStorage = (data) => {
  localStorage.setItem('accounts',JSON.stringify(data));
}

//get de object to save {}
export const saveStorageAccount = (data) => {
  //if i have data
  if (data){
    //get the actual storage
    let actualStorage = getStorage();
    //add the new object to the actual array
    const saveData = actualStorage.length > 0  ? [...actualStorage,data] : [data];
    //save results
    setStorage(saveData);
    return true
  }return false
}
//parameter string
export const deleteStorageAccount = (id) => {
  if(id){
    let actualStorage = getStorage();
    // geta new
    if(actualStorage.length > 0){
      //get a new array without the item 
      const arrayWithoutItem = actualStorage.filter( e => e.id != id);
      //save results
      setStorage(arrayWithoutItem);
      return true
    }else console.log('no hay datos');

  }return false
}
//parameter  {}
export const updateStorageAccount = (data) => {
  if(data){

    let actualStorage =  getStorage();
    //find de item to update position
    const itemToUpdate = actualStorage.findIndex( (e) => e.id == data.id );
    //change the data on the item to update position of the array
    actualStorage[itemToUpdate] = data;
    //save results
    setStorage(actualStorage);
    return true
  }return false
}