import React from 'react'
import styles from './item.css'

const GiftItem = ({ name, icon }) => (
    <li className={ styles.item } key={icon ? `${ name }-${ icon }` : name}>
        { icon }
        <span className={ styles.title }>{ name }</span>
    </li>
)

export default GiftItem