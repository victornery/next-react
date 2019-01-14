import React, { Component, Fragment } from 'react'
import Header from 'components/Header'
import Prelude from 'components/Prelude'
import Gift from 'components/Gift'
import Saving from 'components/Saving'

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Prelude />
                <Gift />
                <Saving />
            </Fragment>
        )
    }
}

export default Home