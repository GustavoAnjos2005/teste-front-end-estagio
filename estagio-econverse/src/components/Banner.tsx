import React from 'react';
import '../styles/Banner.scss';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Venha conhecer nossas <br />promoções</h1>
        <p className="banner__subtitle">50% Off nos produtos</p>
        <a href="#" className="banner__button">Ver produto</a>
      </div>
    </section>
  );
};

export default Banner;
