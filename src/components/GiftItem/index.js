import React from 'react'
import styles from './item.css'

const GiftItem = ({ name, icon, onClick }) => (
    <li onClick={onClick} className={ styles.item } key={icon ? `${ name }-${ icon }` : name} data-gift={name}>
        { icon }
        <span className={ styles.title }>{ name }</span>
    </li>
)

export default GiftItem