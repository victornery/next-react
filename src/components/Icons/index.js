import React from 'react'
import './icons.svg'

const Icon = ({ name, ...otherProps }) => (
    <svg {...otherProps} className={`icon icon-${name}`}>
        <use xlinkHref={`#icon-${name}`} />
    </svg>
)

export default Icon