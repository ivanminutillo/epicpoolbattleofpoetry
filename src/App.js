import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      truth: 'Braccio sei scarsini, a biliardini ti sfondini!',
      newTruth: ''
    }
    this.updateTruth = this.updateTruth.bind(this)
  }

  updateTruth (event) {
    let lung = event.target.value.length
    let newTruth = this.state.truth.slice(0, lung)
    this.setState({
      newTruth: newTruth
    })
  }

  render () {
    return (
      <div className="App">
        <input onChange={this.updateTruth} value={this.state.newTruth}  placeholder='Scrivi la tua verità...'/>
      </div>
    );
  }
}

export default App;
