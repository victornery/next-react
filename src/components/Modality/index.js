import React from 'react'
import styles from './modality.css'

const Modality = ({ name, category, checked, onClick }) => <li onClick={onClick} data-modality={ category } className={ checked ? [styles.item, styles.selected].join(' ') : styles.item }>{ name }</li>

export default Modality