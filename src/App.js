import React from 'react';
import Table from './Table';
import './App.css';

function App() {

  const autors = [
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
  ];

  return (
    <div className="App">
      
      <Table autors={ autors } />
    </div>
  );
}

export default App;
