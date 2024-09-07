import React from 'react';
import '../styles/ProductTypes.scss';

// Importando as imagens
import tech from '../assets/3-aparelhos.png';
import supermarket from '../assets/3-supermercado.png';
import drink from '../assets/3-whiskey.png';
import tools from '../assets/3-ferramentas.png';
import heals from '../assets/3-cuidados-de-saude.png';
import exercise from '../assets/3-corrida.png';
import dress from '../assets/3-moda.png';

// Todos os tópicos em array
const topicsData = [
  { img: tech, label: 'Tecnologia' },
  { img: supermarket, label: 'Supermercado' },
  { img: drink, label: 'Bebidas' },
  { img: tools, label: 'Ferramentas' },
  { img: heals, label: 'Saúde' },
  { img: exercise, label: 'Esportes e Fitness' },
  { img: dress, label: 'Moda' },
  
];

const ProductType: React.FC = () => {
  return (
    <section className="topics">
      {topicsData.map((topic, index) => (
        <div key={index} className="topics__container">
          <div className="topics__item">
            <div className="topics__image-wrapper">
              <img src={topic.img} alt={topic.label} className="topics__image" />
            </div>
          </div>
          <span className={`topics__label ${topic.label === 'Tecnologia' ? 'topics__label--active' : ''}`}>
            {topic.label}
          </span>
        </div>
      ))}
    </section>
  );
};

export default ProductType;
