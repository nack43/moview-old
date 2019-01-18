const React = require('react');
const DefaultLayout = require('./layouts/default');
const LoginForm = require('./layouts/loginForm');

class IndexPage extends React.Component {
  render() {
    return (
      <html>
        <body>
          <DefaultLayout />
          <div id="contents">
            <LoginForm />
          </div>
        </body>
      </html>
    )
  }
}

module.exports = IndexPage;
