import React from 'react'
import styles from './item.css'

const NavItem = ({ title }) => <li className={ styles.item } key={`nav-${title}`}>{ title }</li>

export default NavItem