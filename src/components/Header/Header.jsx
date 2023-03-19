import React from 'react';
import "./Header.scss";
import { Container } from "./../../layouts/Container";
import { ReactComponent as LogoIcon } from "./../../assets/img/logo.svg";



function Header() {
    return (
        <Container>
           <div className='flex justify-between py-2 mb-4'>
                <div className='Logo'>
                    <LogoIcon className="mr-2" style={{width:'100%'}}/>
                    <span>React template </span>
                </div>
            </div>
        </Container>
      );
}

export default Header;