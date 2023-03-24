import React from 'react'
import './Header.scss'
import { Container } from 'layouts/Container'
import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
// import { app } from './../../layouts/_config'

const menuLinks = [
    {
        title: 'Home',
        alias: '/',
    },
    {
        title: 'About',
        alias: '/about',
    },
]

const menuItem = menuLinks.map((item) => (
    <li key={item.alias}>
        <NavLink to={item.alias}>
          <div className='ui-button isLink'>{item.title}</div>
        </NavLink>
    </li>
))

const menuList = <ul className='headerList'>{menuItem}</ul>

function Header({ isLogo, isFixed, className, ...attrs }) {
    const classes = classNames('Header', className, {
        isFixed: isFixed,
    })
    return (
        <header className={classes} {...attrs}>
            <Container>
                <div className=' flex justify-between py-2 mb-4'>
                    <div className='Logo'>
                        {isLogo && <LogoIcon />}
                        <span>React app </span>
                    </div>
                    {menuList}
                </div>
            </Container>
        </header>
    )
}

Header.propTypes = {
    isLogo: propTypes.bool,
    isFixed: propTypes.bool,
    className: propTypes.string,
}
Header.defaultProps = {
    isLogo: false,
    isFixed: false,
}

export default Header
