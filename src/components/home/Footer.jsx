import React from 'react';
import WhatsAppButton from '../../utils/WhatsAppButton'; // Importa el componente WhatsAppButton
import '../../styles/home/Footer.css';

const Footer = () => {
  // Número de teléfono y mensaje para WhatsApp
  const phoneNumber = '+584122575852';
  const message = '¡Hola! Quiero acceder al grupo de WhatsApp.';

  return (
    <footer className="footer">
      {/* Utiliza el componente WhatsAppButton */}
      <WhatsAppButton phoneNumber={phoneNumber} message={message} />
    </footer>
  );
};

export default Footer;
