import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/Home'
import '../public/css/all.css' // CSS Commons

const App = () => <Home />

ReactDOM.render(<App />, document.getElementById("next"))