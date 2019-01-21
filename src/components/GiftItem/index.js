import React from 'react'
import styles from './item.css'
import SVG from 'react-inlinesvg'

const GiftItem = ({ name, icon, onClick }) => (
    <li onClick={onClick} className={ styles.item } key={icon ? `${ name }-${ icon }` : name} data-gift={name}>
        <SVG src={icon} />
        <span className={ styles.title }>{ name }</span>
    </li>
)

export default GiftItem