import {NavLink} from "react-router-dom";
import {Github, Instagram} from "../components/AllSvgs";
import styled from 'styled-components';

const Icons = styled.div`
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
  background: ${props => props.theme.text};
`

const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <div>
                    <NavLink style={{color:'inherit'}} target='_blank' to={{pathname:'https://github.com/sh981013s'}}>
                        <Github width={25} height={25} fill='currentColor'/>
                    </NavLink>
                </div>
                <div>
                    <NavLink style={{color:'inherit'}}  target='_blank' to={{pathname:'https://www.instagram.com/hwani_981013/'}}>
                        <Instagram width={25} height={25} fill='currentColor'/>
                    </NavLink>
                </div>
            </div>
            <Line />
        </Icons>
    )
}

export default SocialIcons;
