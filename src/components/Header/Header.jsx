import React from 'react';
import "./Header.scss";
import { Container } from "./../../layouts/Container";
import { ReactComponent as LogoIcon } from "./../../assets/img/logo.svg";
import propTypes from "prop-types"



function Header({isLogo, isFixed}) {
    return (
        <Container>
           <div className={`flex justify-between py-2 mb-4 ${isFixed && 'isFixed'}`}>
                <div className='Logo'>
                    {isLogo && <LogoIcon />}
                    <span>React app </span>
                </div>
                <ul className='ui-button-group'>
                    <li className='ui-link'>Home</li>
                    <li className='ui-link'>About</li>
                </ul>
            </div>
        </Container>
      );
}

Header.propTypes = {
    isLogo: propTypes.bool,
    isFixed: propTypes.bool,
};
Header.defaultTypes = {
    isLogo: false,
    isFixed: false,
};

export default Header;