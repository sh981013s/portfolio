import styled from "styled-components";
import {DarkTheme} from "../components/Themes";

const Logo = styled.div`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;
  font-size: calc(1rem + 1.2vh);
  
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            SeungHwan
        </Logo>
    )
}

export default LogoComponent;
