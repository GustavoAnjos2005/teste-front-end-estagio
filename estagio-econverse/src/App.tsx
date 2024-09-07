import { useState } from 'react';
import React from 'react';

// Componentes da página
import Header from './components/Header';
import Banner from './components/Banner';
import ProductType from './components/ProductTypes';
import ProductList from './components/ProductList';
import Partnership from './components/Partnership';
import Stamp from './components/Stamp';
import Footer from './components/Footer';

// Importando Product
import Product from './utils/Product';

import '../src/styles/main.scss'

const App: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearchResults = (searchResults: Product[]) => {
    setFilteredProducts(searchResults);
  };

  return (
    <div className="App">
      <Header onSearchResults={handleSearchResults} />
      <Banner />
      <ProductType />
      <ProductList filteredProducts={filteredProducts} />
      <Partnership />
      <Stamp />
      <Footer />
    </div>
  );
};

export default App;