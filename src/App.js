import React, { Component, Fragment } from 'react';
import Table from './components/Table';
import Form from "./components/Form";
import Header from "./components/Header";

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000'
      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99'
      },
      {
        name: 'Marcos',
        book: 'Design',
        price: '150'
      },
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      }
    ],

  };

  deleteAuthor = position => {
    const authors = this.state.authors;

    this.setState({
      authors: authors.filter((author, current_position) => {
        return this.deleteAuthorOnSpecificPosition(position, current_position);
      })
    });
  };

  deleteAuthorOnSpecificPosition = (position_to_delete, current_position) => {
    return position_to_delete !== current_position;
  };

  submitListener = author => {
    this.setState({
      authors: [...this.state.authors, author]
    });
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="container">
          <Table autors={ this.state.authors } deleteAuthor={ this.deleteAuthor } />

          <Form submitListener={ this.submitListener } />
        </div>
      </Fragment>
    );
  };
}

export default App;
