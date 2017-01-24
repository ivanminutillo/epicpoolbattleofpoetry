import React, { Component } from 'react'

class Truth extends Component {
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
        {/* <input onChange={this.updateTruth} value={this.state.newTruth}  placeholder='Scrivi la tua verità...'/> */}
        <h1>La società dipende dalle nostre decisioni</h1>
        <h2>Prima regola:</h2>
        <h3>Che vadano a farsi fottere.</h3>
        <p>Attendere nuovi sviluppi</p>
        <h6>braccio.</h6>
      </div>
    );
  }
}

export default Truth;
