const React = require('react');
const DefaultLayout = require('./layouts/default');

class RegisterDetails extends React.Component {
  render() {
    console.log(this.props)
    // const { pageTitle, movies, inputString } = this.props;
    const { pageTitle } = this.props;
    return (
      <html>
        <body>
          <DefaultLayout />
          <div id="contents">
            <h1 className="page-title">{ pageTitle }</h1>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = RegisterDetails;
