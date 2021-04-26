import React from 'react'
import { Link } from 'react-router-dom';
import './Leagues.scss';

const Leagues = () => {
  return (
    <div className="leagues">
      <video  className="video-set" src="./videos/progression.mp4" autoPlay loop muted="muted"></video>
      <div className="container">
        <div className="leagues-list">
          <div className="league">
            <Link to="brasilial-division-1" className="league__link">
              <div className="league__pic">
                <img src="./images/Brasil.png" alt="Brasil" className="league__img"/>
              </div>
              <div className="league__name">Brasilian Division One</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/bundesliga" className="league__link">
              <div className="league__pic">
                <img src="./images/Bundesliga.png" alt="Bundesliga" className="league__img"/>
              </div>
              <div className="league__name">Bundesliga</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/serie-a" className="league__link">
              <div className="league__pic">
                <img src="./images/Serie_A.png" alt="Serie_A" className="league__img"/>
              </div>
              <div className="league__name">Serie A</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/champions-league" className="league__link">
              <div className="league__pic">
                <img src="./images/Champions_League.png" alt="Champions_League" className="league__img"/>
              </div>
              <div className="league__name">Champions League</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/championship" className="league__link">
              <div className="league__pic">
                <img src="./images/Chapmionship.png" alt="Chapmionship" className="league__img"/>
              </div>
              <div className="league__name">Chapmionship</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/eredivise" className="league__link">
              <div className="league__pic">
                <img src="./images/Eredivise.png" alt="Eredivise" className="league__img"/>
              </div>
              <div className="league__name">Eredivise</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/european-championships" className="league__link">
              <div className="league__pic">
                <img src="./images/le.png" alt="Europe_League" className="league__img"/>
              </div>
              <div className="league__name">Europe League</div>
            </Link>
          </div>
          
          <div className="league">
            <Link to="/world-cup" className="league__link">
              <div className="league__pic">
                <img src="./images/fifa.png" alt="FIFA" className="league__img"/>
              </div>
              <div className="league__name">FIFA</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/la-liga" className="league__link">
              <div className="league__pic">
                <img src="./images/LaLiga.png" alt="LaLiga" className="league__img"/>
              </div>
              <div className="league__name">La Liga</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/france-league-1" className="league__link">
              <div className="league__pic">
                <img src="./images/Ligue1.png" alt="Ligue1" className="league__img"/>
              </div>
              <div className="league__name">Ligue 1</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/portuguese-primera-division" className="league__link">
              <div className="league__pic">
                <img src="./images/Portugal_Primera.png" alt="Portugal_Primera" className="league__img"/>
              </div>
              <div className="league__name">Portugal Primera</div>
            </Link>
          </div>

          <div className="league">
            <Link to="/english-premiere-league" className="league__link">
              <div className="league__pic">
                <img src="./images/pl.png" alt="Premier League" className="league__img"/>
              </div>
              <div className="league__name">Premier League</div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Leagues
