import styled from "styled-components";
import {DarkTheme} from "../components/Themes";
import {Link} from "react-router-dom";

const Logo = styled.div`
display: inline-block;
  font-family: 'Pacifico', cursive;
  font-size: calc(1rem + 1.2vh);
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  .title {
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    text-decoration: none;
  }
`

const LogoComponent = (props) => {
    return (
            // <Link to='/'>
                <Logo color={props.theme}>
                    <Link to='/' className='title'>
                        SeungHwan
                    </Link>
                </Logo>
            // </Link>
    )
}

export default LogoComponent;
