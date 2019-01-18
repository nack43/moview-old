const React = require('react');

class LoginForm extends React.Component {
  render() {
    return (
      <div id="login-form">
        <form className="contents" action="#" method="post">
            <div>
                <input type="text" className="username" placeholder="USERNAME" />
            </div>
            <div>
                <input type="password" className="password" placeholder="PASSWORD" />
            </div>
            <input className="login-button" type="submit" value="LOGIN"/>
        </form>
      </div>
    )
  }
}

module.exports = LoginForm;
