// Home.jsx

import React from 'react';
import Header from '../components/home/Header';
import Body from '../components/home/Body';
import Footer from '../components/home/Footer';
import '../styles/home/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header
        title="El Shaddai - Iglesia Evangélica Misionera Pentecostés"
        description="Iglesia Evangélica Misionera Pentecostés, La Candelaria, Parroquia Caña de Azúcar"
        keywords="iglesia, evangelica, misionera, el shaddai, venezuela"
      />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
