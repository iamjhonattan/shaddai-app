import React from 'react';
import Header from '../components/home/Header';
import Body from '../components/home/Body';
import Footer from '../components/home/Footer';
import { Helmet } from 'react-helmet';
import '../styles/home/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Iglesia El Shaddai - </title>
        <meta name="description" content="Descripción de tu página de inicio" />
        {/* Agrega otras meta etiquetas si es necesario */}
      </Helmet>
      <Header
        title="El Shaddai - Iglesia Evangélica Misionera Pentecostés"
        description="Iglesia Evangélica Misionera Pentecostés"
        keywords="iglesia, evangelica, misionera, el shaddai"
      />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;