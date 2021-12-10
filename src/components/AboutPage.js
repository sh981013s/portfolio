import {keyframes, ThemeProvider} from "styled-components";
import {DarkTheme} from "./Themes";
import styled from 'styled-components';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from '../assets/Images/spaceman.png';

const Box = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY()(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} infinite 4s ease;

  img {
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50%;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  
  font-family: 'Ubuntu Mono', monospace;
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="Spaceman"/>
                </Spaceman>

                <Main>
                    한번 만들었던 방식은 쉽고 편하지만 성장에는 한계가 있다고 믿고,<br /> 새로운 시도를
                    해보면서 컴포트 존에서 항상 벗어나려고 의식적으로 노력하는 '이승환' 입니다.
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage;
