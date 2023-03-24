import React from 'react'
import './scss/main.scss'
import { Header, Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/Home.jsx'
import AboutPage from './pages/About/About.jsx'
import NotFoundPage from './pages/NotFound/NotFound.jsx'

function App() {
    return (
        <div className='ui-wrapper'>
            <Header isLogo />
            <div className='ui-content-wrapper'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
