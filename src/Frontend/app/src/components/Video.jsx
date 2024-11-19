import videoJacare from '../imgs/1ny2.mp4';
import imgTest from '../imgs/LogoFecapFinanceOriginal2.png';
import styled from "styled-components";



export default function video(){
    return(
        <Intro>
        {/* <Logo src={imgTest} alt="" /> */}
        <Jacare src={videoJacare} poster={imgTest}  loop autoplay="true" muted playsInline preload disablePictureInPicture>
            Seu navegador não suporta o elemento de vídeo.
        </Jacare>
        </Intro>
    );
}

const Jacare = styled.video`
width: 100%;         
  height: auto;        
  max-height: 80vh;    
  object-fit: cover;   
  align-items: center;

`

const Texto = styled.h1`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`

const Intro = styled.div`
    text-align: center;
    align-items: center;
    position: relative;
`

const Logo = styled.img`
  position: fixed; 
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  text-align: center;
  color: #fff;
  max-width: 25%;
  max-height: 25%;
  transition: all 0.3s ease-in-out;
`