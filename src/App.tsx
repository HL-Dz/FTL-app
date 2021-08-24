import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import Navbar from './components/common/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Leagues from './components/pages/Leagues/Leagues';
import Clubs from './components/pages/Clubs/Clubs';
import Documentation from './components/pages/Documentation/Documentation';
import ChampionsLeague from './components/pages/Leagues/ChampionsLeague/ChampionsLeague';
import EuropeanLeague from './components/pages/Leagues/EuropeanC/EuropeanC';
import WorldCup from './components/pages/Leagues/WorldCup/WorldCup';
import EplContainer from './components/pages/Leagues/EPL/EplContainer';
import BundesligaContainer from './components/pages/Leagues/Bundesliga/BundesligaContainer';
import PrimeraContainer from './components/pages/Leagues/Primera/PrimeraContainer';
import SerieAContainer from './components/pages/Leagues/SerieA/SerieAContainer';
import FranceLeagueContainer from './components/pages/Leagues/FranceLeague/FranceLeagueContainer';
import PortugalContainer from './components/pages/Leagues/Portugal/PortugalContainer';
import ChampionshipContainer from "./components/pages/Leagues/Championship/ChampionshipContainer";
import Team from "./components/pages/Team/Team";
import ErediviseContainer from "./components/pages/Leagues/Eredivise/ErediviseContainer";
import BrasilContainer from "./components/pages/Leagues/Brasil/BrasilContainer";
import Player from "./components/pages/Player/Player";
import firebase from './firebase';
import Whoops from "./components/common/Whoops/Whoops";
import Articles from "./components/pages/News/Articles";
import { delay } from "./helpers/helpers";
import { setAuthUser, setIsAuthorized } from "./redux/auth-reducer";
import CurrentArticle from "./components/pages/CurrentArticle/CurrentArticle";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
      if(user) {
        dispatch(setIsAuthorized(true))
        await delay(800);
        dispatch(setAuthUser(user));
      } else {
        dispatch(setIsAuthorized(false))
        dispatch(setAuthUser(user));
      }
    })
  }, [])

  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Leagues}/>
        <Route path="/clubs" exact component={Clubs}/>
        <Route path="/articles" exact component={Articles}/>
        <Route path="/articles/:id" component={CurrentArticle}/>
        <Route path="/documentation" exact  component={Documentation}/>
        <Route path="/players/:id/:name" component={Player}/>
        <Route path="/teams/:id/:name" component={Team}/>
        <Route path="/brasilial-division-1" exact component={BrasilContainer}/>
        <Route path="/english-premiere-league" exact component={EplContainer}/>
        <Route path="/championship" exact component={ChampionshipContainer}/>
        <Route path="/champions-league" exact component={ChampionsLeague}/>
        <Route path="/european-championships" exact component={EuropeanLeague}/>
        <Route path="/france-league-1" exact component={FranceLeagueContainer}/>
        <Route path="/bundesliga" exact component={BundesligaContainer}/>
        <Route path="/serie-a" exact component={SerieAContainer}/>
        <Route path="/eredivise" exact component={ErediviseContainer}/>
        <Route path="/portuguese-primera-division" exact component={PortugalContainer}/>
        <Route path="/la-liga" exact component={PrimeraContainer}/>
        <Route path="/world-cup" exact component={WorldCup}/>
        <Route component={Whoops}/>
      </Switch>
    </div>
  );
}

export default App;
