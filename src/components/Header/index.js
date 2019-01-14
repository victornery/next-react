import React from 'react'
import Nav from 'components/Nav'
import { Logo } from '../../utils/icons'
import styles from './header.css'

const Header = () => (
    <header className={ styles.header }>
        <Logo />
        <Nav />
        <button>Abra sua conta</button>
    </header>
)

export default Header