import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import AppContext from 'utils/context'
import '../public/css/all.css' // CSS Commons

class App extends Component {
    state = {
        gifts: [],
        nav: [],
        savings: []
    }

    componentDidMount() {

        const url = [
            'http://localhost:8080/api/gifts',
            'http://localhost:8080/api/nav',
            'http://localhost:8080/api/savings'
        ]
        
        const handleFetchs = async () => 
            await Promise.all(url.map(url => 
                fetch(url)
                    .then(data => data.json())
            ))
            .then(data => {
                const [gifts, nav, savings] = data;

                this.setState({ gifts })
                this.setState({ nav })
                this.setState({ savings })
            })
            
        handleFetchs()
    }

    render() {
        const { gifts, nav, savings } = this.state
        return (
            <AppContext.Provider value={{
                gifts,
                nav,
                savings
            }}>
                <Home />
            </AppContext.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("next"))