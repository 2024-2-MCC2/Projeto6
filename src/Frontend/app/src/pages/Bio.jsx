import React from 'react';
import BioContent from '../components/BioContent';
import Header from '../components/Header';
import Video from '../components/Video';
import Footer from '../components/Footer';

function Bio() {
  return (
    <>
      <Header />
      <Video />
      <BioContent />
      <Footer />
    </>
  );
}

export default Bio;