import React from 'react'
import styles from './header.css'
import Nav from 'components/Nav'
import Button from 'components/Button'
import AppContext from 'utils/context'
import KeyImage from 'icons/logo.svg'
import SVG from 'react-inlinesvg'

const Header = () => {
    return (
        <AppContext.Consumer>
            { context => (
                <header className={ styles.header }>
                    <div className="container container-flex">
                        <SVG src={ KeyImage } style={{ width: '80px' }} />
                        <Nav items={ context.nav } />
                        <Button title="Abra sua conta" />
                    </div>
                </header>
                )
            }
        </AppContext.Consumer>
    )
}

export default Header