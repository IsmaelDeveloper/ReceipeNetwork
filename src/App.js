import React, { Component } from 'react'
import Header from './components/Header'
// CSS
import './App.css'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount(){
   this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {context:this, state:'recettes'})
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ... this.state.recettes}
    recettes[`recettes-${Date.now()}`] = recette
    this.setState({recettes});
  }


  updateRecette =(key, newRecette) => {
    const recettes = { ... this.state.recettes}
    recettes[key] = newRecette
    this.setState({newRecette});
  }

  deleteRecette = key =>{
    const recettes = { ... this.state.recettes}
    recettes[key] = null
    this.setState({recettes});
  }

chargeExemple = () => this.setState({recettes})
  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
   
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          {cards}
        </div>
        <Admin pseudo={this.state.pseudo} deleteRecette={this.deleteRecette} recettes={this.state.recettes} updateRecette={this.updateRecette} chargeExemple={this.chargeExemple} ajouterRecette={this.ajouterRecette}>

        </Admin>
      </div>
    )
  }
}

export default App
