import React from 'react'
import styles from './item.css'

const SavingItem = ({ icon, offer, description }) => (
    <li className={ styles['saving-item'] }>
        <div className={ styles['saving-item__image'] }>
            { icon }
            <span>{ offer }</span>
        </div>
        <p className={ styles['saving-item__description'] }>
            { description }
        </p>
        <div className={ styles['saving-item__price'] }>
            <span>R$XX</span>
            <span>no ano*</span>
        </div>
    </li>
)

export default SavingItem