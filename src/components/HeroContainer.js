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
    currentHero: "",
    fadeIn: true
  }

  componentDidMount = () => {
  }

  renderHeroNav = () => {
    return this.state.images.map(hero => {
      return (<li className="hero-item" key={hero.url}>&#9679;</li>)
    })
  }

  renderHeroClass = () => {
    return this.state.fadeIn ? "hero-fade-in" : "hero-fade-out"
  }

  heroChange = () => {
    this.setState({ fadeIn: !this.state.fadeIn })
  }

  render() {
    const heroStyle = {
      background: `url(${this.state.images[0].url}) center`,
    }

    return (
      <React.Fragment>
        <div id="hero-wrap">
          <div className={this.renderHeroClass()} style={heroStyle}>
            <h1>Some text or something</h1>
          </div>
        </div>
        <div id="hero-nav">
          {this.renderHeroNav()}
        </div>
        <p><button onClick={this.heroChange}>Toggle</button></p>
      </React.Fragment>
    )
  }
}