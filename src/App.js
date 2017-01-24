import React, { Component } from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Truth from './truth'
import Sciaman from './sciaman'
import Risultato from './risultato'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Truth} />
        <Route path='/sciaman' component={Sciaman} />
        <Route path='/risultato' component={Risultato} />
      </Router>
    )
  }
}

export default App
