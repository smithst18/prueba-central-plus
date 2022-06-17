export const validateForm = (form) =>{
    const errors = [];
    let validDocument = /^[0-9]{5,8}$/;
    let validAcountNumber = /^[0-9]{20}$/;
    //if any elemnt is empty
    if(!form.alias.trim() || !form.entity.trim() || !form.acountNumber.trim() || !form.type.trim()) errors.push('Rellena todos los campos');
    //if element is number
    !isNaN(form.entity) && errors.push('campo entidad invalido');
    //if element mth with a regex document 5-8 digits only number
    !validDocument.test(form.document) && errors.push('Documento de indentidad invalido');
    //if element mth with a regex account only number 20 digit 
    !validAcountNumber.test(form.acountNumber) && errors.push('numero de cuenta invalido (20 dig)');

    return errors;
}