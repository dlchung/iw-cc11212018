import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="logo-wrap">
          <a href="/"><img src="/img/logo.png" alt="Sparta Plaesent logo" /></a>
        </div>
      </React.Fragment>
    )
  }
}