import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a href="/" className="brand-logo">Casa do Cógigo</a>
        <ul className="right">
          <li><a href="/authors">Autores</a></li>
          <li><a href="/books">Livros</a></li>
          <li><a href="/about">Sobre</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;