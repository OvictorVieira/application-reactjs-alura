import React, { Component } from "react";
import FormValidator from "../utils/FormValidator";

class Form extends Component {

  constructor(props) {
    super(props);

    this.formValidator = new FormValidator({
      field: 'name',
      method: 'isEmpty',
    });

    this.initialState = {
      name: '',
      book: '',
      price: '',
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

    if(this.formValidator.validate(this.state)) {

      this.props.submitListener(this.state);

      this.setState(this.initialState);
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