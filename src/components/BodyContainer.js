import React, { Component } from 'react'

export default class BodyContainer extends Component {
  state = {
    posts: [
      {
        title: "Bureaux exquisite delightful carefully curated soft power.",
        author: "LOREM IPSUM",
        date: "FEBRUARY 10, 2017",
        imgUrl: "/img/content_1.jpg" 
      },
      {
        title: "Esse airport veniam ryokan soft power.",
        author: "LOREM IPSUM",
        date: "JANUARY 21 2017",
        imgUrl: "/img/content_1.jpg" 
      },
      {
        title: "Sharp bureaux sleepy K-pop carefully curated.",
        author: "LOREM IPSUM",
        date: "FEBRUARY 2 2017",
        imgUrl: "/img/content_1.jpg" 
      }
    ]
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div className="card-wrap">
          <img src={post.imgUrl} className="featured-img" />
          <p className="date">{post.date}</p>
          <h1 className="title">{post.title}</h1>
          <p className="author">{post.author}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="body-wrap">
          <div className="col">
            {this.renderPosts()}
          </div>
          <div className="col"></div>
          <div className="col">
            {this.renderPosts()}
          </div>
          <div className="col"></div>
          <div className="col">
            {this.renderPosts()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}