import React, { Component } from 'react'
import Logo from './Logo'
import HeaderInfo from './HeaderInfo'
import Nav from './Nav'

export default class HeaderWrap extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="header-wrap">
          <div id="header-content">
            <Logo />
            <Nav />
            <HeaderInfo />
          </div>
        </div>
      </React.Fragment>
    )
  }
}