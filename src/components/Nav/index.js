import React from 'react'
import styles from './nav.css'

import NavItem from 'components/NavItem'

const Nav = ({ items }) => (
    <nav className={styles.nav}>
        <ul className={ styles.nav__list }>
            { items &&
                items.map((item) => <NavItem key={item.title} title={ item.title } />)
            }
        </ul>
    </nav>
)

export default Nav