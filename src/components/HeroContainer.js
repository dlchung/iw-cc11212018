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
    ],
    currentHero: ""
  }


  componentDidMount = () => {
    
  }

  renderHeroNav = () => {
    return this.state.images.map(hero => {
      return (<li className="hero-item" key={hero.url}>&#9679;</li>)
    })
  }

  render() {
    const heroStyle = {
      background: `url(${this.state.images[0].url}) center`,
    }

    return (
      <React.Fragment>
        <div id="hero-wrap" style={heroStyle}>
        </div>
        <div id="hero-nav">
          {this.renderHeroNav()}
        </div>
      </React.Fragment>
    )
  }
}