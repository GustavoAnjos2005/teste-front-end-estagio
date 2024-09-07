import React, { useState } from 'react';
import '../styles/modal.scss';
import X from '../assets/5-X.svg';
import minus from '../assets/5-menos.svg';
import plus from '../assets/5-mais.svg';
import ModalProps from '../utils/Modal';

const Modal: React.FC<ModalProps> = ({ onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const calculateTotalPrice = () => {
    return (product.price * quantity).toFixed(2);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <img src={X} alt="Fechar" />
        </button>
        <div className="modal-content">
          <img src={product.photo} alt={product.productName} className="product-image"/>
          <div className="product-details">
            <h2>{product.productName}</h2>
            <p className="price">{`R$ ${calculateTotalPrice()}`}</p>
            <p className="description">Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
            <p className="see-more">Veja mais detalhes do produto →</p>
            <div className="qty-selector">
              <button onClick={handleDecrement} disabled={quantity === 1}>
                <img src={minus} alt='Diminuir quantidade' />
              </button>
              <input type="text" value={quantity} readOnly />
              <button onClick={handleIncrement}>
                <img src={plus} alt='Aumentar quantidade' />
              </button>
            </div>
            <button className="buy-button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;