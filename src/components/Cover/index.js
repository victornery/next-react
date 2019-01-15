import React from 'react'
import styles from './cover.css'

const Cover = ({ image, otherSizes, alt, ...otherProps }) => {
    <figure {...otherProps}>
        <img { ...otherSizes && `srcset=${otherSizes}` } src={image} alt={alt} />
    </figure>
}

export default Cover