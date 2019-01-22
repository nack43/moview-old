const React = require('react');
const DefaultLayout = require('./layouts/default');

class Reviews extends React.Component {
  render() {
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
                <li className="review">
                  <div className="contents">
                    <img src="/images/sample_img1.jpg" alt="sample1"/>
                    <div className="right-content">
                      <div className="title">
                        <h2>Noah</h2>
                      </div>
                      <div className="sub-contents">
                        <span className="watched-at">WATCHED AT: YYYY/MM/DD</span>
                        <span>YOUR RATE x.x</span>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button>VIEW</button>
                    <button>EDIT</button>
                  </div>
                </li>

                <li className="review">
                  <div className="contents">
                    <img src="/images/sample_img2.jpg" alt="sample1"/>
                    <div className="right-content">
                      <div className="title">
                        <h2>Bohemian Rhapsody</h2>
                      </div>
                      <div className="sub-contents">
                        <span className="watched-at">WATCHED AT: YYYY/MM/DD</span>
                        <span>YOUR RATE x.x</span>
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button>VIEW</button>
                    <button>EDIT</button>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Reviews;
