const React = require('react');
const DefaultLayout = require('./layouts/default');

class RegisterSearch extends React.Component {
  render() {
    const { pageTitle, movies, inputString } = this.props;
    return (
      <html>
        <body>
          <DefaultLayout />
          <div id="contents">
            <h1 className="page-title">{ pageTitle }</h1>
            <div className="search-form">
              <img src="/images/search_icon.png"></img>
              <form action="/register/search" method="GET">
                <input type="text" value={ inputString } placeholder="Search..." name="s" />
              </form>
            </div>
            <div className="movies">
              <ul>
                {
                  movies ? 
                    movies.map(movie => {
                      return <Movie movie={movie} />
                    })
                    :
                    null
                }
              </ul>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <li className="movie">
        <a href={`/register/${movie.imdbID}`}>
          <div className="contents">
            <img src={ movie.Poster } alt="poster"/>
            <div className="right-content">
              <div className="title">
                <h2>{ movie.Title }</h2>
              </div>
              <div className="sub-content">
                <span>RELEASED AT : { movie.Year }</span>
              </div>
            </div>
          </div>
        </a>
      </li>             
    );
  }
}

module.exports = RegisterSearch;
