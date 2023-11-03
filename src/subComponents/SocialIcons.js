import {NavLink} from "react-router-dom";
import {Github} from "../components/AllSvgs";
import styled from 'styled-components';
import {DarkTheme} from "../components/Themes";
import {motion} from "framer-motion";

const Icons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > div > * {
    margin: 0 0 1rem 0;
  }
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <div>
                    <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://github.com/sh981013s'}}>
                        <Github width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body} />
                    </NavLink>
                </div>
            </div>
            <Line color={props.theme}/>
        </Icons>
    )
}

export default SocialIcons;
