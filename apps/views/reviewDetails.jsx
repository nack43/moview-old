const React = require('react');
const DefaultLayout = require('./layouts/default');
const moment = require('moment');

class ReviewDetails extends React.Component {
  render() {
    const review = this.props.review;
    console.log(review[0])
    return (
      <html>
        <body>
          <DefaultLayout />
          <div id="contents">
            <h1 className="page-title">REVIEW DETAILS</h1>
            <div className="review-details">
              <div>
                <h2>Title</h2>
                <p>{ review.title }</p>
              </div>

              <div>
                <h2>Watched at</h2>
                <p>{ review.watchedAt }</p>
              </div>

              <div>
                <h2>Released at</h2>
                <p>{ review.releasedYear }</p>
              </div>

              <div>
                <h2>Rate</h2>
                <p>{ review.rate }</p>
              </div>

              <div>
                <h2>Runtime</h2>
                <p>{ review.runtime }</p>
              </div>

              <div>
                <h2>Director</h2>
                <p>{ review.director }</p>
              </div>

              <div>
                <h2>Cast</h2>
                {
                  review.actors.map(actor => <Cast actor={actor} />)
                }
              </div>

              <div>
                <h2>Prot</h2>
                <p>{ review.prot }</p>
              </div>

              <div>
                <h2>Scene-1</h2>
                <p>{ review.scene1 }</p>
              </div>

              <div>
                <h2>Scene-2</h2>
                <p>{ review.scene2 }</p>
              </div>

              <div>
                <h2>Scene-3</h2>
                <p>{ review.scene3 }</p>
              </div>

              <div>
                <h2>Thoughts</h2>
                <p>{ review.totalReview }</p>
              </div>
            </div>

          </div>
        </body>
      </html>
    )
  }
}

class Cast extends React.Component {
  render() {
    const actor = this.props.actor;
    return (
      <p><span>{`${actor.actor} :  ${actor.charactor}`}</span></p>
    )
  }
}

module.exports = ReviewDetails;
