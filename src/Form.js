import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props);

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
    
    this.props.submitListener(this.state);

    this.setState(this.initialState);
  };

  render() {
    const { name, book, price } = this.state;

    return (
      <form>
        <label htmlFor="name">Nome do Autor</label>
        <input id='name'
               name='name'
               type="text"
               value={ name }
               onChange={ this.listenerOfInput }/>

        <label htmlFor="book">Livro</label>
        <input id='book'
               name='book'
               type="text"
               value={ book }
               onChange={ this.listenerOfInput }/>

        <label htmlFor="price">Price</label>
        <input id='price'
               name='price'
               type="text"
               value={ price }
               onChange={ this.listenerOfInput }/>

         <button onClick={ this.submitForm }>Salvar</button>
      </form>
    );
  }
}

export default Form;