import React, { useState, useEffect } from 'react';
import '../styles/Header.scss';

// Importando o JSON
import { fetchProducts } from '../utils/api';

// Importando Product
import Product from '../utils/Product';

// Importando as imagens
import logo from '../assets/2-logo.png';
import searchIcon from '../assets/2-buscar.png';
import userIcon from '../assets/2-usuario.png';
import cartIcon from '../assets/2-carrinho.png';
import shield from '../assets/2-escudo.png';
import truck from '../assets/2-caminhao.png';
import card from '../assets/2-CartaoCredito.png';
import heart from '../assets/2-coracao.png';
import box from '../assets/2-caixa.png';
import crown from '../assets/2-coroa.png';


interface HeaderProps {
  onSearchResults: (products: Product[]) => void;
}

// Pesquisa dos produtos
const Header: React.FC<HeaderProps> = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAndFilter = async () => {
      const allProducts = await fetchProducts();
      const filteredProducts = allProducts.filter((product: Product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      onSearchResults(filteredProducts); // Aqui deve ser uma função válida
    };
  
    fetchAndFilter();
  }, [searchTerm, onSearchResults]);

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__top-links">
          <a href="#">
            <img src={shield} alt="escudo" />Compra<span className="highlight"> 100% segura</span>
          </a>
          <a href="#">
            <img src={truck} alt="caminhao" />
            <span className="highlight">Frete Grátis</span> acima de R$200
          </a>
          <a href="#">
            <img src={card} alt="credito" />
            <span className="highlight">Parcele</span> suas compras
          </a>
        </div>
      </div>
      <div className="header__main">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__search">
          <input
            type="text"
            placeholder="O que você está buscando?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button">
            <img src={searchIcon} alt="search" />
          </button>
        </div>
        <div className="header__icons">
          <img src={box} alt="Caixa" />
          <img src={heart} alt="Coracao" />
          <img src={userIcon} alt="User" />
          <img src={cartIcon} alt="Cart" />
        </div>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#">TODAS CATEGORIAS</a></li>
          <li><a href="#">SUPERMERCADO</a></li>
          <li><a href="#">LIVROS</a></li>
          <li><a href="#">MODA</a></li>
          <li><a href="#">LANÇAMENTOS</a></li>
          <li><a href="#">OFERTAS DO DIA</a></li>
          <li><a href="#"><img src={crown} alt="coroa" />ASSINATURA</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
