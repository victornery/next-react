import React from 'react'
import styles from './header.css'
import Nav from 'components/Nav'
import Icons from 'components/Icons'
import Button from 'components/Button'
import AppContext from '../../utils/context'

const Header = () => {
    return (
        <AppContext.Consumer>
            { context => (
                <header className={ styles.header }>
                    <div className="container container-flex">
                        <Icons name="logo" style={{height: '50px'}} />
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