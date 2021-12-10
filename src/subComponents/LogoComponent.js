import styled from "styled-components";

const Logo = styled.div`
display: inline-block;
color: ${props => props.theme.text};
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`

const LogoComponent = () => {
    return (
        <Logo>
            SeungHwan
        </Logo>
    )
}

export default LogoComponent;
