const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="header-contents">
          <div className="title">
            <a href="#">MOVIEW</a>
          </div>
          <nav>
            <a href="#">LOGOUT</a>
          </nav>
        </div>
      </header>
    )
  }
}

module.exports = Header;
