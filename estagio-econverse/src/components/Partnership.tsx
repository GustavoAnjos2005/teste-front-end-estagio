// Importando imagens
import apple from '../assets/4-FundoIphone.png';
import store from '../assets/4-FundoLoja.png';

import '../styles/partnership.scss';

function Partnership() {
  return (
    <div className="partnership-section">
      <div className="partnership-container">
        <div className="partnership-item">
          <img src={apple} alt="Apple Partner" className="image" />
          <div className="overlay">
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit<br />amet, consectetur</p>
            <button className="btn-check">CONFIRA</button>
          </div>
        </div>
        <div className="partnership-item">
          <img src={apple} alt="Apple Partner" className="image" />
          <div className="overlay">
            <h3>Parceiros</h3>
            <p>Lorem ipsum dolor sit<br />amet, consectetur</p>
            <button className="btn-check">CONFIRA</button>
          </div>
        </div>
      </div>

      <h2 className="partnership-title">Produtos Relacionados</h2>
      <p className="see-all">Ver Todos</p>
      <div className="product-container">
        <div className="product-item">
          <img src={store} alt="Product Store" className="image" />
          <div className="overlay">
            <h3>Produtos</h3>
            <p>Lorem ipsum dolor sit<br />amet, consectetur</p>
            <button className="btn-check">CONFIRA</button>
          </div>
        </div>
        <div className="product-item">
          <img src={store} alt="Product Store" className="image" />
          <div className="overlay">
            <h3>Produtos</h3>
            <p>Lorem ipsum dolor sit<br />amet, consectetur</p>
            <button className="btn-check">CONFIRA</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
