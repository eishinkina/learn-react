import React from 'react'
import './scss/main.scss'
import { Header, Footer } from './components'
import { Container } from './layouts/Container.jsx'
import './test.js'
import { Routes, Route, Link} from 'react-router-dom'

function App() {
    return (
        <div className='ui-wrapper'>
            <Header isLogo />
            <div className='ui-content-wrapper'>
                <Container>
                    <a className='ui-link' to='/about'>
                        about 2
                    </a>
                    <br />
                    <Link className='ui-link' to='/'>
                        home 2
                    </Link>
                    <br />
                    <Link className='ui-link' to='/about'>
                        about 3
                    </Link>
                    <br />
                    <Link className='ui-link' to='/'>
                        home 3
                    </Link>

                    <Routes>
                        <Route path='/' element={<h1>Home page</h1>} />
                        <Route path='/about' element={<h1>About page</h1>} />
                    </Routes>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default App
