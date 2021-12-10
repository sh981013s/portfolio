import styled, {keyframes} from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import {NavLink} from "react-router-dom";
import {YinYang} from "./AllSvgs";
import {useState} from "react";
import Intro from "./Intro";
import {motion} from "framer-motion";

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  
  h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const Blog = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: 1.3rem;
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const Work = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 50%;
  left: 1.3rem;
  transform: rotate(-90deg) translate(0%, -50%);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  
  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%' };
  left: ${props => props.click ? '92%' : '50%' };
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child {
    animation: ${rotate} infinite 2s linear;
  }

  &>:last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
`

const DarkDiv = styled.div`
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height .5s ease, width 1s ease .5s;
`

const Main = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'}/>
                <SocialIcons theme={click ? 'dark' : 'light'}/>

                <Center click={click}>
                    <YinYang onClick={handleClick} width={click ? 150 : 200} height={click ? 150 : 200} fill='currentColor' />
                    <span>Click here</span>
                </Center>

                <Contact target="_blank" to={{pathname:'mailto:sh981013s@gmail.com'}}>
                    <motion.h2
                        whileHover={{scale: 1.1}}
                        whileTap={{scale:.9}}
                    >
                        Email me 📬
                    </motion.h2>
                </Contact>
                <Blog target="_blank" to={{pathname:'https://hwani.dev/'}}>
                    <motion.h2
                        whileHover={{scale: 1.1}}
                        whileTap={{scale:.9}}
                    >
                        Blog
                    </motion.h2>
                </Blog>
                <Work click={click} to='/work'>
                    <motion.h2
                        whileHover={{scale: 1.1}}
                        whileTap={{scale:.9}}
                    >
                        Work
                    </motion.h2>
                </Work>
                <BottomBar>
                    <About click={click} to='/about'>
                        <motion.h2
                            whileHover={{scale: 1.1}}
                            whileTap={{scale:.9}}
                        >
                            About me.
                        </motion.h2>
                    </About>
                    <Skills to='/skills'>
                        <motion.h2
                            whileHover={{scale: 1.1}}
                            whileTap={{scale:.9}}
                        >
                            My Skills.
                        </motion.h2>
                    </Skills>
                </BottomBar>
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main;
