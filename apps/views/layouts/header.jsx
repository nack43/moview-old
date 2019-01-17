const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="title">
          <a href="#">MOVIEW</a>
        </div>
      </header>
    )
  }
}

module.exports = Header;
