import React, { Component } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default class BodyContainer extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Bureaux exquisite delightful carefully curated soft power.",
        author: "LOREM IPSUM",
        date: "FEBRUARY 10, 2017",
        imgUrl: "/img/content_1.jpg" 
      },
      {
        id: 2,
        title: "Esse airport veniam ryokan soft power.",
        author: "LOREM IPSUM",
        date: "MARCH 21 2017",
        imgUrl: "/img/content_2.jpg" 
      },
      {
        id: 3,
        title: "Sharp bureaux sleepy K-pop carefully curated.",
        author: "LOREM IPSUM",
        date: "APRIL 2 2017",
        imgUrl: "/img/content_3.jpg" 
      },
      {
        id: 4,
        title: "Bureaux exquisite delightful carefully curated soft power.",
        author: "LOREM IPSUM",
        date: "MAY 10, 2017",
        imgUrl: "/img/content_2.jpg" 
      },
      {
        id: 5,
        title: "Esse airport veniam ryokan soft power.",
        author: "LOREM IPSUM",
        date: "JUNE 21 2017",
        imgUrl: "/img/content_1.jpg" 
      },
      {
        id: 3,
        title: "Sharp bureaux sleepy K-pop carefully curated.",
        author: "LOREM IPSUM",
        date: "JULY 2 2017",
        imgUrl: "/img/content_3.jpg" 
      },
      {
        id: 5,
        title: "Esse airport veniam ryokan soft power.",
        author: "LOREM IPSUM",
        date: "AUGUST 21 2017",
        imgUrl: "/img/content_1.jpg" 
      },
    ]
  }

  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <div className="card-wrap" key={post.id}>
          <img src={post.imgUrl} className="featured-img" />
          <p className="date">{post.date}</p>
          <h1 className="title">{post.title}</h1>
          <p className="author">Presented by <a href="#">{post.author}</a></p>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="body-wrap">
          <ResponsiveMasonry>
            <Masonry gutter="25px">
              {this.renderPosts()}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </React.Fragment>
    )
  }
}