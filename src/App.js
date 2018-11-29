import React, { Component } from 'react'
import HeaderContainer from './components/HeaderContainer'
import HeroContainer from './components/HeroContainer'
import BodyContainer from './components/BodyContainer'
import FooterContainer from './components/FooterContainer'
// import logo from './logo.svg'
// import './App.css'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <HeroContainer />
        <BodyContainer />
        <FooterContainer />
      </React.Fragment>
    )
  }
}

export default App
