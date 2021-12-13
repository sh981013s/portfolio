import {ThemeProvider} from "styled-components";
import {lightTheme} from "./Themes";
import styled from 'styled-components';
import {Develope} from './AllSvgs';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
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
  height: 70vh;
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
  font-size: calc(.5em + 1vw);
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
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frotend Developer
                    </Title>
                    <h1>Skills</h1>
                    <Description>
                        <ul>
                            <h4>HTML / CSS</h4>
                            <li>시멘틱 마크업을 준수합니다.</li>
                            <li>Search Engine Optimization 경험이 있습니다.</li>
                            <li>Sass 등 CSS Preprocessor 사용할 수 있습니다.</li>
                        </ul>
                        <ul>
                            <h4>JavaScript</h4>
                            <li>ES2015 이후의 자바스크립트 문법에 익숙합니다.</li>
                            <li>jQuery 없이 DOM API를 다루는데 능숙합니다.</li>
                        </ul>
                        <ul>
                            <h4>React</h4>
                            {/*<li>React hooks를 능숙하게 사용하고, 거의 모든 컴포넌트를 함수로 만듭니다. hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해 사용할 수 있습니다.</li>*/}
                            {/*<li>각종 컴포넌트 디자인 패턴에 능숙하며, 합리적인 방식으로 컴포넌트를 분리합니다.</li>*/}
                            <li>합리적인 방식으로 컴포넌트를 분리할 수 있습니다.</li>
                            <li>거의 모든 컴포넌트를 함수로 만드며, 합리적인 방식으로 컴포넌트를 분리합니다.</li>
                            <li>Redux & Redux tool kit을 사용하여 상태관리를 합니다.</li>
                        </ul>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage;
