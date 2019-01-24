const React = require('react');
const DefaultLayout = require('./layouts/default');
const moment = require('moment');

class Reviews extends React.Component {
  render() {
    const reviews = this.props.reviews;
    return (
      <html>
        <body>
          <DefaultLayout />
          <div id="contents">
            <h1 className="page-title">REVIEWS</h1>
            <button className="add-button">+</button>
            <div className="sorts">
              <span>WATCHED AT: <a href="#">↑</a><a href="#">↓</a></span>
              <span>RATE: <a href="#">↑</a><a href="#">↓</a></span>
            </div>
            <div className="reviews">
              <ul>
                {
                  reviews.map(review => {
                    return <Review review={ review } />
                  })
                }
              </ul>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

class Review extends React.Component {
  render() {
    const review = this.props.review;
    return (
      <li className="review">
        <div className="contents">
          <img src={ review.imgUrl } alt="sample1"/>
          <div className="right-content">
            <div className="title">
              <h2>{ review.title }</h2>
            </div>
            <div className="sub-contents">
              <span className="watched-at">WATCHED AT : { moment(review.watchedAt).format('YYYY/MM/DD') }</span>
              <span>YOUR RATE : { review.rate }</span>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button>VIEW</button>
          <button>EDIT</button>
        </div>
      </li>
    )
  }
}

module.exports = Reviews;
