import React from 'react';
import "./Header.scss";
import { Container } from "./../../layouts/Container";



function Header() {
    return (
        <Container>
            <div className='header flex justify-between'>
                <p>hello world</p>
                <p>menu</p>
            </div>
        </Container>
      );
}

export default Header;