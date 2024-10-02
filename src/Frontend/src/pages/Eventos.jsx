import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";

function Eventos() {
  return (
    <div className="container">
        <Header />
        <Carousel />
        
        <Footer/>
    </div>
  )
}

export default Eventos