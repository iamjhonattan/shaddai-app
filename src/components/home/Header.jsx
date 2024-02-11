import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../styles/home/Header.css';
import logo from '../../image/logo.svg';

const Header = ({ title, description, keywords }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Tu Logo" />
        </div>
        <div className="social-icons">
          {/* Enlaces a las redes sociales con atributos rel y target explícitos */}
          <a href="https://www.facebook.com/shaddai.live/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px' }} />
          </a>
          <a href="https://twitter.com/shaddai_live" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '20px' }} />
          </a>
          <a href="https://www.instagram.com/shaddai.live" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '20px' }} />
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;

