const React = require('react');
const Header = require('./header');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en">
      <head>
        <title>MOVIEW</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="/javascripts/main.js"></script>
      </head>

      <body>
        <Header />
      </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
