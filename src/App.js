import React, { Component } from 'react';
import Table from './Table';
import './App.css';

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
    const authors = this.state.authors

    this.setState({
      authors: authors.filter((author, current_position) => {
        return this.deleteAuthorOnSpecificPosition(position, current_position);
      })
    });
  };

  deleteAuthorOnSpecificPosition = (position_to_delete, current_position) => {
    return position_to_delete !== current_position;
  };

  render() {
    return (
      <div className="App">

        <Table autors={ this.state.authors } deleteAuthor={ this.deleteAuthor } />
      </div>
    );
  };
}

export default App;
