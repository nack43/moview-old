const React = require('react');
const Header = require('./header');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="en">
      <head>
        <title>MOVIEW</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />   
      </head>

      <body>
        <Header />
      </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
