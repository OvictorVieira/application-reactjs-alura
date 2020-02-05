import validator from 'validator';

class FormValidator {

  constructor(validation) {
    this.validation = validation
  }

  validate(state) {
    const value = state[this.validation.field.toString()];
    const method = validator[this.validation.method];

    if(method(value, [], state)){
      console.log('Formulário inválido!');
      
      return false;
    }
    else{
      console.log('Formulário válido!');

      return true;
    }
  }
}

export default FormValidator;