import GlobalStyle from "./globgalStyles";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./components/Themes";
import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Loading from "./subComponents/Loading";
import {lazy,Suspense} from "react";
import './i18n';

/* Components */
const Main = lazy(() => import("./components/Main"));
const LanguageSelectionPage = lazy(() => import("./components/LangaugeSelectionPage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));



function App() {
    const location = useLocation();

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={lightTheme}>
                <Suspense fallback={<Loading />}>
                    <SoundBar />
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/" component={LanguageSelectionPage}/>
                            <Route exact path="/main" component={Main}/>
                            <Route exact path="/about" component={AboutPage}/>
                            <Route exact path="/blog" component={BlogPage}/>
                            <Route exact path="/work" component={WorkPage}/>
                            <Route exact path="/skills" component={MySkillsPage}/>
                        </Switch>
                    </AnimatePresence>
                </Suspense>

            </ThemeProvider>
        </>
    )


}

export default App

