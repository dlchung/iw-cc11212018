import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="nav-wrap">
          <a href="/"><span className="fas fa-bars"></span></a>
        </div>
      </React.Fragment>
    )
  }
}