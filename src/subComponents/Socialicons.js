import {NavLink} from "react-router-dom";
import {Github, Instagram} from "../components/AllSvgs";

const Socialicons = () => {
    return (
        <div>
            <div>
                <NavLink to='/'>
                    <Github width={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/'>
                    <Instagram width={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
        </div>
    )
}
