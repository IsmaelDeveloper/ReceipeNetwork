import React from 'react'
import { Redirect } from 'react-router-dom'
class Connexion extends React.Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  render () {
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>Receipes Network</h1>
          <input
            type='text'
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder='Chef name'
            pattern='[A-Za-z-]{1,}'
            required />
          <button type='submit'>GO</button>
          <p>No special characters.</p>
        </form>
      </div>
    )
  }
}

export default Connexion
