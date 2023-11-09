import {ThemeProvider} from "styled-components";
import {lightTheme} from "./Themes";
import styled from 'styled-components';
import {Develope} from './AllSvgs';
import Loading from "../subComponents/Loading";
import {lazy,Suspense} from "react";
import {useTranslation} from "react-i18next";


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
    const { t } = useTranslation();

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
                                <li>{t('htmlCss.compliant')}</li>
                                <li>{t('htmlCss.seoExperienced')}</li>
                                <li>{t('htmlCss.styledComponentsProficient')}</li>
                            </ul>
                            <ul>
                                <h4>JavaScript</h4>
                                <li>{t('javaScript.syntaxKnowledge')}</li>
                                <li>{t('javaScript.domApiSkill')}</li>
                            </ul>
                            <ul>
                                <h4>TypeScript</h4>
                                <li>{t('typeScript.integrationProficiency')}</li>
                            </ul>
                            <ul>
                                <h4>React</h4>
                                <li>{t('react.hooksExpertise')}</li>
                                <li>{t('react.functionComponents')}</li>
                                <li>{t('react.stateManagement')}</li>
                            </ul>
                            <ul>
                                <h4>Additional Tools & Libraries</h4>
                                <li>{t('additionalTools.stateManagementTools')}</li>
                                <li>{t('additionalTools.reactQueryExperience')}</li>
                                <li>{t('additionalTools.webpackSkill')}</li>
                                <li>{t('additionalTools.axiosUsage')}</li>
                            </ul>
                        </Description>
                    </Main>
                </Box>
            </Suspense>
        </ThemeProvider>
    )
}

export default MySkillsPage;
