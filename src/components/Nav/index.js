import React from 'react'
import styles from './nav.css'

const Nav = () => (
    <nav className={styles.nav}>
        <ul className={ styles.nav__list }>
            <li>next</li>
            <li>Flow</li>
            <li>Vaquinha</li>
            <li>Objetivos</li>
            <li>Mimos</li>
            <li>Propostas</li>
        </ul>
    </nav>
)

export default Nav