const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="header-contents">
          <div className="title">
            <a href="/reviews">MOVIEW</a>
          </div>
          <nav>
            <a href="/logout">LOGOUT</a>
          </nav>
        </div>
      </header>
    )
  }
}

module.exports = Header;
