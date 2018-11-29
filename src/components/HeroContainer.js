import React, { Component } from 'react'

export default class HeroContainer extends Component {
  state = {
    images: [
      {
        url: '/img/hero_1.jpg',
        title: 'Hero Image 1',
        content: 'Hero Content'
      },
      {
        url: '/img/hero_2.jpg',
        title: 'Hero Image 2',
        content: 'Hero Content'
      },
      {
        url: '/img/hero_3.jpg',
        title: 'Hero Image 3',
        content: 'Hero Content'
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <div id="hero-wrap">
          <img src={this.state.images[1].url} />
        </div>
      </React.Fragment>
    )
  }
}