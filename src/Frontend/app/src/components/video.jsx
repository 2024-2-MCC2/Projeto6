import videoJacare from '../imgs/ny4k.mp4';
import imgTest from '../imgs/LogoLogo.png';
import styled from "styled-components";

function video(){
    return(
        <Intro>
        <Texto></Texto>
        <Logo src={imgTest} alt="" />
        <Jacare src={videoJacare} poster={imgTest}  loop autoplay="true" muted playsInline preload disablePictureInPicture>
            Seu navegador não suporta o elemento de vídeo.
        </Jacare>
        </Intro>
    );
}

const Jacare = styled.video`
max-width:1343px;
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
`

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  max-width: 350px;
  max-height: 350px;
  transition: all 0.3s ease-in-out;

  *:hover{
    transform: scale(1.1);
  }
`

export default video;