import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";
import Video2 from '../components/video2'

function Projetos() {
  return (
    <div className="container">
        <Header />
        {/* <Carousel /> */}
        <Video2/>
        
        
        <Footer/>
    </div>
  )
}

export default Projetos