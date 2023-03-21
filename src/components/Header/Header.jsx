import React from 'react';
import "./Header.scss";
import { Container } from "./../../layouts/Container";
import { ReactComponent as LogoIcon } from "./../../assets/img/logo.svg";
import propTypes from "prop-types"
import classNames from 'classnames';



function Header({isLogo, isFixed, className}) {
    const classes = classNames("Header",
    className, 
    {
        isFixed: isFixed, 
    }
    ); 
    return (
        <header className={classes}>
        <Container>
           <div className=" flex justify-between py-2 mb-4">
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
        </header>
      );
}

Header.propTypes = {
    isLogo: propTypes.bool,
    isFixed: propTypes.bool,
    className: propTypes.string,
};
Header.defaultTypes = {
    isLogo: false,
    isFixed: false,
};

export default Header;