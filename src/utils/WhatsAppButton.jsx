import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      IR AL GRUPO WHATSAPP
    </button>
  );
};

export default WhatsAppButton;
