import React from 'react';
import './Footer.scss';
import { Container } from "./../../layouts/Container";

function Footer () {
    return (
        <Footer className="Footer">
            <Container>
                <div className="py-2 mt-6">
                    <p className='text-center text-xs' style={{opacity: 0.6}}>
                        сделано на курсе
                        <a
                        target="_blank"
                        href='https://app.tocode.ru/courses/react-pro/react-app-1/406/'
                        className='ui-link ml-1'
                        >
                            React.js - с нуля до результата!
                        </a>
                    </p>
                </div>
            </Container>
        </Footer>
    );
};


export default Footer;