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
    currentHeroIndex: 0,
    fadeIn: true,
    intervalId: ""
  }

  componentDidMount = () => {
    const intervalId = setInterval(this.cycleHero, 5000)
    this.setState({ intervalId })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }

  renderHeroNav = () => {
    return this.state.images.map(hero => {
      return (<li className="hero-item" key={hero.url}>&#9679;</li>)
    })
  }

  renderHeroClass = () => {
    return this.state.fadeIn ? "hero-fade-in" : "hero-fade-out"
  }

  renderHero = () => {
    const heroStyle = {
      background: `url(${this.state.images[this.state.currentHeroIndex].url}) center`,
    }

    return (
      <div className={this.renderHeroClass()} style={heroStyle}>
        <h1>{this.state.images[this.state.currentHeroIndex].title}</h1>
        <h3>{this.state.images[this.state.currentHeroIndex].content}</h3>
      </div>
    )
  }

  cycleHero = () => {
    const heroCount = this.state.images.length

    this.setState({ fadeIn: false }, () => {
      setTimeout(() => {
        if(this.state.currentHeroIndex < heroCount - 1) {
          this.setState({ currentHeroIndex: this.state.currentHeroIndex + 1}, () => {
            this.renderHero(this.state.currentHeroIndex)
            this.setState({ fadeIn: true })
          })
        } else {
          this.setState({ currentHeroIndex: 0 }, () => {
            this.renderHero(this.state.currentHeroIndex)
            this.setState({ fadeIn: true })
          })
        }
       }, 1000)
    })

    
  }

  heroChange = () => {
    this.setState({ fadeIn: !this.state.fadeIn })
  }

  render() {
    return (
      <React.Fragment>
        <div id="hero-wrap">
          {this.renderHero()}
        </div>
        <div id="hero-nav">
          {this.renderHeroNav()}
        </div>
        <p><button onClick={this.heroChange}>Toggle</button></p>
      </React.Fragment>
    )
  }
}