import React, { Component } from 'react'
import Swipe from 'react-easy-swipe'

export default class HeroContainer extends Component {
  state = {
    images: [
      {
        url: '/img/hero_1.jpg',
        title: 'Screening: DVF Secret Agent Part 2',
        date: 'October 15, 2017',
        content: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
      },
      {
        url: '/img/hero_2.jpg',
        title: 'Hero Image 2',
        date: 'November 5, 2017',
        content: 'Hero Content'
      },
      {
        url: '/img/hero_3.jpg',
        title: 'Hero Image 3',
        date: 'May 25, 2017',
        content: 'Hero Content'
      }
    ],
    currentHeroIndex: 0,
    fadeIn: true,
    intervalId: "",
    animationInterval: 5000, // milliseconds
    animationDuration: 750 // milliseconds
  }

  componentDidMount = () => {
    this.startCarousel()
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }

  renderHeroNav = () => {
    return this.state.images.map((hero, index) => {
      return (<li className={this.state.currentHeroIndex === index ? "hero-item selected" : "hero-item"} key={hero.url}>&#9679;</li>)
    })
  }

  renderHeroClass = () => {
    return this.state.fadeIn ? "hero-fade-in" : "hero-fade-out"
  }

  renderHero = () => {
    const index = this.state.currentHeroIndex
    const heroStyle = {
      background: `url(${this.state.images[index].url}) center`,
      animationDuration: `${this.state.animationDuration}ms`
    }

    return (
      <div className={this.renderHeroClass()} style={heroStyle}>
        <h1 className="hero-title">{this.state.images[index].title}</h1>
        <h2 className="hero-subtitle">{this.state.images[index].date}</h2>
        <h3 className="hero-content">{this.state.images[index].content}</h3>
      </div>
    )
  }

  rotateHero = (index = null) => {
    const heroCount = this.state.images.length
    let newIndex
    index !== null ? newIndex = index : newIndex = this.state.currentHeroIndex + 1

    this.setState({ fadeIn: false }, () => { // fade out current image
      setTimeout(() => { // wait for animation to finish
        if(newIndex <= heroCount - 1 && newIndex >= 0) {
          // console.log("cond 1")
          this.setState({ currentHeroIndex: newIndex}, () => { // set new hero image
            this.renderHero() // render new hero image
            this.setState({ fadeIn: true }) // fade in new image
          })
        } else if(newIndex < 0) {
          // console.log("cond 2")
          this.setState({ currentHeroIndex: heroCount - 1}, () => {
            this.renderHero()
            this.setState({ fadeIn: true })
          })
        } else { // if last hero, go back to first hero
          // console.log("cond 3")
          this.setState({ currentHeroIndex: 0 }, () => {
            this.renderHero()
            this.setState({ fadeIn: true })
          })
        }
       }, this.state.animationDuration) // timeout needs to be same as animation duration
    }) 
  }

  startCarousel = () => {
    // console.log("Current hero index: ", this.state.currentHeroIndex)
    const existDuration = (this.state.animationDuration * 2) + this.state.animationInterval
    const intervalId = setInterval(this.rotateHero, existDuration)
    this.setState({ intervalId })
  }

  resetCarousel = () => {
    clearInterval(this.state.intervalId)
    this.startCarousel()
  }

  onSwipeLeft = (event) => {
    console.log(this.state.currentHeroIndex)
    this.rotateHero(this.state.currentHeroIndex - 1)
    this.resetCarousel()
  }

  onSwipeRight = (event) => {
    this.rotateHero(this.state.currentHeroIndex + 1)
    this.resetCarousel()
  }

  render() {
    return (
      <React.Fragment>
        <Swipe
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        >
          <div id="hero-wrap">
            <div id="hero-ratio">
              {this.renderHero()}
            </div>
          </div>
        </Swipe>

        <div id="hero-nav">
          {this.renderHeroNav()}
        </div>
      </React.Fragment>
    )
  }
}