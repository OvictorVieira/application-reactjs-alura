import React, { Component } from 'react';
import Table from './Table';
import './App.css';

class App extends Component {

  state = {
    autors: [
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

  render() {
    return (
      <div className="App">

        <Table autors={ this.state.autors } />
      </div>
    );
  };
}

export default App;
