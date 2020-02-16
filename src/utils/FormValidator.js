import validator from 'validator';

class FormValidator {

  constructor(validations) {
    this.validations = validations
  }

  validate(state) {

    let validation = this.valid();

    this.validations.forEach(role => {

      const value = state[role.field.toString()];

      const args = role.args || [];

      const validationMethod = typeof role.method === 'string' ? validator[role.method] : role.method;

      if(validationMethod(value, ...args, state) !== role.validWhen){
        validation[role.field] = {
          isInvalid: true,
          message: role.message
        };

        validation.isValid = false;
      }

    });

    return validation;
  }

  valid() {
    const validation = {};

    this.validations.map(role => (

      validation[role.field] = { isValid: false, message: '' }

    ));

    return { isValid: true, ...validation };
  }
}

export default FormValidator;