import React, { Component } from "react";
import FormValidator from "../utils/FormValidator";
import PopUp from './PopUp';

class Form extends Component {

  constructor(props) {
    super(props);

    const fields_to_validate = [
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Insira o nome do Autor'
      },
      {
        field: 'book',
        method: 'isEmpty',
        validWhen: false,
        message: 'Insira o nome do Livro'
      },
      {
        field: 'price',
        method: 'isInt',
        args: [{ min: 0, max: 999999 }],
        validWhen: true,
        message: 'Insira um valor numérico'
      }
    ];

    this.formValidator = new FormValidator(fields_to_validate);

    this.initialState = {
      name: '',
      book: '',
      price: '',
      validation: this.formValidator.valid(),
    };

    this.state = this.initialState;
  }

  listenerOfInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  };

  submitForm = event => {

    event.preventDefault();

    const validation = this.formValidator.validate(this.state);

    if(validation.isValid) {

      this.props.submitListener(this.state);

      this.setState(this.initialState);
    }
    else {
      const { name, book, price} = validation;

      const fields = [name, book, price];

      const invalidFields = fields.filter(element => {
        return element.isInvalid;
      });

      invalidFields.forEach(field => {
        PopUp.showMessage('error', field.message)
      });
    }
  };

  render() {
    const { name, book, price } = this.state;

    return (
      <div className="row">
        <form className='col s12'>
          <div className="row">
            <div className="col s4">
              <label className='input-field'
                     htmlFor="name">Nome do Autor</label>

              <input id='name'
                     name='name'
                     type="text"
                     value={ name }
                     className='validate'
                     onChange={ this.listenerOfInput }/>
            </div>

            <div className="col s4">
              <label className='input-field'
                     htmlFor="book">Livro</label>

              <input id='book'
                     name='book'
                     type="text"
                     value={ book }
                     className='validate'
                     onChange={ this.listenerOfInput }/>
            </div>

            <div className="col s4">
              <label className='input-field'
                     htmlFor="price">Price</label>

              <input id='price'
                     name='price'
                     type="text"
                     value={ price }
                     className='validate'
                     onChange={ this.listenerOfInput }/>
            </div>
          </div>

          <button className='waves-effect waves-light btn'
                  onClick={ this.submitForm }>Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;