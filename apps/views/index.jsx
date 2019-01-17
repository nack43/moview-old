const React = require('react');
const DefaultLayout = require('./layouts/default');

class IndexPage extends React.Component {
  render() {
    return (
      <html>
        <body>
          <DefaultLayout />
        </body>
      </html>
    )
  }
}

module.exports = IndexPage;
