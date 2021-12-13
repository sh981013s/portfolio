import {ThemeProvider} from "styled-components";
import {DarkTheme} from "./Themes";
import styled from 'styled-components';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { motion } from 'framer-motion';

import { Work } from '../data/WorkData';
import Card from "../subComponents/Card";
import {useEffect, useRef} from "react";
import {YinYang} from "./AllSvgs";

const Box = styled.div`
  background: ${props => props.theme.body};
  height: 400vh;
  position: relative;
  overflow: hidden;
`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  transform: none;
`

const container = {
    hidden: {opacity:0},
    show: {
        opacity:1,
        transition:{
            staggerChildren:.5,
            duration:.5
        }
    }
}

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
            return (yinyang.current.style.transform =
                'rotate(' + -window.pageYOffset + 'deg)')
        }

        window.addEventListener('scroll', rotate)
        return () => {
            window.removeEventListener('scroll', rotate);

        }
    }, [])

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />

                <Main ref={ref} variants={container} initial='hidden' animate='show'>
                    {
                        Work.map(data =>
                            <Card key={data.id} data={data} />
                        )
                    }
                </Main>
                <Rotate ref={yinyang}>
                    <YinYang width={80} height={80} fill={DarkTheme.text} />
                </Rotate>

                {/*<BigTitle text='PROJECTS' top='10%' right='20%'/>*/}
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage;
