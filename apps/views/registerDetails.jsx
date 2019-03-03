const React = require('react');
const DefaultLayout = require('./layouts/default');

class RegisterDetails extends React.Component {
  render() {
    const { pageTitle } = this.props;
    const { title } = this.props;
    const { ratings } = this.props;
    const { actors } = this.props;
    const { releasedYear } = this.props;
    const { runtime } = this.props;
    const { director } = this.props;
    const { imgUrl } = this.props;
    return (
      <html>
        <body>
          <DefaultLayout />
          <div id="contents">
            <h1 className="page-title">{ pageTitle }</h1>
            <div className="inputs">
              <form action="/reviews" method="POST">
                <div>
                  <h2>What is the title?</h2>
                  <input name="title" className="input-content movie-title" type="text" value={title} />
                </div>

                <div>
                  <h2>When did you watch?</h2>
                  <input name="watched-at" className="input-content movie-date" type="date"/>
                </div>

                <div>
                  <h2>What is your rate?</h2>
                  <select name="rate" className="input-content">

                    <option value="" selected disabled>Choose your rate</option>
                    <option value="3">3</option>
                    <option value="2.5">2.5</option>
                    <option value="2">2</option>
                    <option value="1.5">1.5</option>
                    <option value="1">1</option>
                  </select>
                </div>

                <div>
                  <h2>Reference of popular reputation sites</h2>
                  <div className="input-content">
                    <p>Internet Movie Database:  {ratings[0].Value}</p>
                    <p>Rotten Tomatoes:  {ratings[1].Value}</p>
                    <p>Metacritic:  {ratings[2].Value}</p>
                  </div>
                </div>
                
                <div>
                  <h2>Prot</h2>
                  <textarea name="prot" className="input-content"/>
                </div>

                <div>
                  <h2>What are the characters name?</h2>
                  <ul className="actors">
                    {
                      actors.map(actor => {
                        return (
                          <li class="actor">
                            <label class="actual">{actor}</label>
                            <input name="charactors" type="text"/>
                            <input type="hidden" name="actors" value={actor}/>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

                <div>
                  <h2>Which scene did you like?</h2>
                  <div className="scenes input-content">
                    <div> 
                      <label htmlFor="scene-1">scene1</label>
                      <textarea name="scene_1" id="scene-1" className="input-content"/>
                    </div>
                    <div>
                      <label htmlFor="scene-2">scene2</label>
                      <textarea name="scene_2" id="scene-2" className="input-content"/>
                    </div>
                    <div>
                      <label htmlFor="scene-3">scene3</label>
                      <textarea name="scene_3" id="scene-3" className="input-content"/>
                    </div>
                  </div>
                </div>

                <div>
                  <h2>How was that?</h2>
                  <textarea name="total-review" className="input-content"/>
                </div>

                <div className="complete-button">
                  <input type="submit" value="COMPLETE"/>
                </div>
                <input type="hidden" name="releasedYear" value={releasedYear}/>
                <input type="hidden" name="runtime" value={runtime}/>
                <input type="hidden" name="director" value={director}/>
                <input type="hidden" name="imgUrl" value={imgUrl}/>
              </form>
            </div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = RegisterDetails;
