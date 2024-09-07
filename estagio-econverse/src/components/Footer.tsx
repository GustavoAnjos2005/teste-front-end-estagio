import '../styles/footer.scss';

// Importando imagens
import facebook from '../assets/0-facebook.png';
import instagram from '../assets/0-instagram.png';
import youtube from '../assets/0-youtube.png';
import econverse from '../assets/0-econverse.png';
import vtex from '../assets/0-vtex.png';
import visa from '../assets/1-visa.png';
import mastercard from '../assets/1-mastercard.png';
import elo from '../assets/1-elo.png';
import amex from '../assets/1-amex.png';
import alelo from '../assets/1-alelo.png';
import ifood from '../assets/1-ifood.png';
import pix from '../assets/1-pix.png';
import sodexo from '../assets/1-sodexo.png';
import ticket from '../assets/1-ticket.png';
import dinners from '../assets/1-dinners.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>SOBRE NÓS</h4>
          <ul>
            <li><a href="#">Conheça</a></li>
            <li><a href="#">Como comprar</a></li>
            <li><a href="#">Indicação e Desconto</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>INFORMAÇÕES ÚTEIS</h4>
          <ul>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Dúvidas</a></li>
            <li><a href="#">Prazos de entrega</a></li>
            <li><a href="#">Formas de pagamento</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Trocas e devoluções</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>FORMAS DE PAGAMENTO</h4>
          <div className="payment-icons">
            <img className="visa" src={visa} alt="Visa" />
            <img className="elo" src={elo} alt="Elo" />
            <img className="alelo" src={alelo} alt="Alelo" />
            <img className="dinners" src={dinners} alt="Dinners" />
            <img className="ifood" src={ifood} alt="Ifood" />
            <img className="mastercard" src={mastercard} alt="Mastercard" />
            <img className="pix" src={pix} alt="Pix" />
            <img className="amex" src={amex} alt="Amex" />
            <img className="ticket" src={ticket} alt="Ticket" />
            <img className="sodexo" src={sodexo} alt="Sodexo" />
          </div>
        </div>

        <div className="footer__newsletter">
          <span className='title-1'>CADASTRA-SE E RECEBA NOSSAS</span><br/><span className='title-2'>NOVIDADES E PROMOÇÕES</span>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <form className="newsletter-form">
            <input type="email" placeholder="SEU E-MAIL" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__social">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={youtube} alt="Youtube" /></a>
        </div>

        <div className="footer__copyright">
          <p>COPYRIGHT &copy; 2019 TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO PROPRIEDADES DE SEUS RESPECTIVOS DONOS</p>
          <p>É VEDADDA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORAZIÇÃO.</p>
        </div>

        <div className="footer__branding">
          <img src={econverse} alt="Econverse" />
          <img src={vtex} alt="VTEX" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
