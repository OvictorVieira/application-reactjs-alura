import React, { Component } from "react";

class Form extends Component {

  constructor(properties) {
    super(properties);

    this.initialState = {
      name: '',
      book: '',
      price: '',
    };

    this.state = this.initialState;
  }

  render() {
    const { name, book, price } = this.state;

    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Nome do Autor</label>
            <input id='name' name='name' type="text" value={ name }/>
          </div>

          <div>
            <label htmlFor="book">Livro</label>
            <input id='book' name='book' type="text" value={ book }/>
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input id='price' name='price' type="text" value={ price }/>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;