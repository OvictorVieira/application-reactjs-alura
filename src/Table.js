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
          <button>Remover</button>
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

    const { autors } = this.props;

    return(
      <table>
        <TableHead />

        <TableBody autors={ autors } />
      </table>
    );
  }
}

export default Table;