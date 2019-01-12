import React from 'react'
import styles from './navItem.css'

const NavItem = ({ name }) => <li className={ styles.item }>{ name }</li>

export default NavItem