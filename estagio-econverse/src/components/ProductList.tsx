import React, { useEffect, useState } from 'react';

// Importando o JSON
import { fetchProducts } from '../utils/api';

import '../styles/ProductList.scss';
import Modal from './Modal';

// Importando o Product
import Product from '../utils/Product';

interface ProductListProps {
  filteredProducts: Product[];
}

// Implementando o filtro dos resultados da barra de pesquisa, e implementando a logica da vitrine
const ProductList: React.FC<ProductListProps> = ({ filteredProducts }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleNextClick = () => {
    const visibleProductsCount = 4; // Alterado para 4 produtos visíveis
    if (currentIndex < filteredProducts.length - visibleProductsCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  return (
    <div className="product-section">
      <h2 className="section-title">Produtos Relacionados</h2>

      <Topics />

      <div className="carousel-container">
        <button className="prev-button" onClick={handlePrevClick}></button>
        <div className="carousel">
          <div className="product-list" style={{ transform: `translateX(calc(-250px * ${currentIndex}))` }}>
            {filteredProducts.map((product) => (
              <div
                className="product-item"
                key={product.productName}
              >
                <img src={product.photo} alt={product.productName} />
                <p className="description">{product.descriptionShort}</p>
                <p className='before-price'>R$ {(product.price * 1.2).toFixed(2)}</p>
                <p className="price">{`R$ ${product.price.toFixed(2)}`}</p>
                <p className='interest'>ou 10x de R$ {(product.price / 10).toFixed(2)} sem juros</p>
                <span className="free">Frete grátis</span>
                <button className="btn-buy" onClick={() => handleBuyClick(product)}>Comprar</button>
              </div>
            ))}
          </div>
        </div>
        <button className="next-button" onClick={handleNextClick}></button>
      </div>

      {selectedProduct && (
        <Modal
          onClose={closeModal}
          product={{
            photo: selectedProduct.photo,
            productName: selectedProduct.productName,
            price: selectedProduct.price
          }}
        />
      )}
    </div>
  );
};

// Componente para as abas de categorias
const Topics: React.FC = () => {
  const topics = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];
  const [activeTopic, setActiveTopic] = useState<string>('');

  return (
    <div className="topics-list">
      {topics.map((topic, index) => (
        <div
          key={index}
          className={`topic-item ${topic === activeTopic ? 'active' : ''}`}
          onClick={() => setActiveTopic(topic)}
        >
          {topic}
        </div>
      ))}
    </div>
  );
};

export default ProductList;