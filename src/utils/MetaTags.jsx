// MetaTags.jsx

import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
  return (
    <Helmet>
      {/* Metatags para Google y Bing */}
      <title>Iglesia El Shaddai - Iglesia Evangélica Misionera Pentecostés</title>
      <meta name="description" content="Descripción de tu página de inicio para los motores de búsqueda." />
      <meta name="keywords" content="iglesia, evangelica, misionera, el shaddai" />

      {/* Metatags para compartir en Facebook y Twitter */}
      <meta property="og:title" content="Iglesia El Shaddai - Iglesia Evangélica Misionera Pentecostés" />
      <meta property="og:description" content="Descripción de tu página de inicio para Facebook y Twitter." />
      <meta property="og:image" content="URL de la imagen que deseas mostrar en redes sociales" />
      <meta property="og:url" content="URL de tu sitio web" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Iglesia El Shaddai - Iglesia Evangélica Misionera Pentecostés" />
      <meta name="twitter:description" content="Descripción de tu página de inicio para Twitter." />
      <meta name="twitter:image" content="URL de la imagen que deseas mostrar en redes sociales" />
    </Helmet>
  );
};

export default MetaTags;
