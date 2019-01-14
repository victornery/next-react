import React from 'react'
import styles from './button.css'

const Button = ({ child }) => <button className={ styles.button }>{ child }</button>

export default Button