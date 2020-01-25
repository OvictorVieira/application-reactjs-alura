import React, { Component } from 'react';

const TableHead = () => {

  return(
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = properties => {

  const tableLines = properties.autors.map((line, index) => {
    return(
      <tr key={ index }>
        <td>{ line.name }</td>
        <td> { line.book } </td>
        <td>{ line.price }</td>
        <td>
          <button onClick={ () => { properties.deleteAuthor(index) } }>Remover</button>
        </td>
      </tr>
    );
  });

  return(
    <tbody>
      { tableLines }
    </tbody>
  );
};

class Table extends Component {
  render() {

    const { autors, deleteAuthor } = this.props;

    return(
      <table>
        <TableHead />

        <TableBody autors={ autors } deleteAuthor={ deleteAuthor } />
      </table>
    );
  }
}

export default Table;