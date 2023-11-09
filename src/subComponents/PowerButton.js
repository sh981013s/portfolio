// Home btn
import styled from 'styled-components';
import {PowerBtn} from "../components/AllSvgs";
import {NavLink} from "react-router-dom";
import {mediaQueries} from "../components/Themes";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #FCF6F4;
  padding: .3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  
  &:hover {
    background: rgba(0,255,0,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
  }
  &>*:first-child {
    text-decoration: none;
    color: inherit;
  }

  ${mediaQueries(40)`
   width: 2rem;
  height: 2rem;
      svg{
        width:20px;
        height:20px;
      }

  `};
`;

const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/main'>
                <PowerBtn width={30} height={30} fill='currentColor' />
            </NavLink>
        </Power>
    )
}

export default PowerButton;
