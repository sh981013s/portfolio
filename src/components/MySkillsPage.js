import {ThemeProvider} from "styled-components";
import {lightTheme, mediaQueries} from "./Themes";
import styled from 'styled-components';
import {Develope} from './AllSvgs';
import Loading from "../subComponents/Loading";
import {lazy,Suspense} from "react";


const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
    import("../subComponents/ParticleComponent")
);

const Box = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  //height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background: ${props => props.theme.body};
  padding: 2rem;
  width: 50vw;
    margin-top: 6rem;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin: .4em 0;
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vh);
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(.4em + 1vw);
  padding: .5rem 0;
  ul>*:not(:first-child) {
    margin-left: 2em;
  }
  &>*:not(:last-child) {
    margin-bottom: 1em;
  }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Suspense fallback={<Loading />}>
                <Box>
                    <LogoComponent theme='light' />
                    <SocialIcons theme='light' />
                    <PowerButton />
                    <ParticleComponent theme='light' />
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Frotend Developer
                        </Title>

                        <Description>
                            <ul>
                                <h4>HTML / CSS</h4>
                                <li>Compliant with semantic markup standards.</li>
                                <li>Experienced with Search Engine Optimization (SEO).</li>
                                <li>Proficient in using CSS preprocessors like Sass.</li>
                            </ul>
                            <ul>
                                <h4>JavaScript</h4>
                                <li>Familiar with JavaScript syntax post ES2015.</li>
                                <li>Skilled in handling DOM API without jQuery.</li>
                            </ul>
                            <ul>
                                <h4>TypeScript</h4>
                                <li>Proficient in integrating and using TypeScript with various frameworks and libraries.</li>
                            </ul>
                            <ul>
                                <h4>React</h4>
                                <li>Expert in using React hooks and primarily develops components as functions. Capable of modularizing common business logic appropriately using hooks.</li>
                                <li>Primarily constructs components as functions and sensibly decomposes components.</li>
                                <li>Manages state using Context Api, Zustand, and Recoil.</li>
                            </ul>
                            <ul>
                                <h4>Additional Tools & Libraries</h4>
                                <li>Proficient in Recoil and Zustand for advanced state management.</li>
                                <li>Experienced with React-Query for asynchronous data fetching and caching.</li>
                                <li>Skilled in bundling and optimization using Webpack5.</li>
                                <li>Expert in styled-components for CSS-in-JS styling solutions.</li>
                                <li>Adept at making HTTP requests and handling responses using Axios.</li>
                            </ul>
                        </Description>
                    </Main>
                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default MySkillsPage;
