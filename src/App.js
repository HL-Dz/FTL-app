import "./App.scss";
import Navbar from './components/Navbar/Navbar.jsx';
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


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Leagues}/>
        <Route path="/clubs" component={Clubs}/>
        <Route path="/documentation" component={Documentation}/>
        <Route path="/players/:id/:name" component={Player}/>
        <Route path="/teams/:id/:name" component={Team}/>
        <Route path="/brasilial-division-1" component={BrasilContainer}/>
        <Route path="/english-premiere-league" component={EplContainer}/>
        <Route path="/championship" component={ChampionshipContainer}/>
        <Route path="/champions-league" component={ChampionsLeague}/>
        <Route path="/european-championships" component={EuropeanLeague}/>
        <Route path="/france-league-1" component={FranceLeagueContainer}/>
        <Route path="/bundesliga" component={BundesligaContainer}/>
        <Route path="/serie-a" component={SerieAContainer}/>
        <Route path="/eredivise" component={ErediviseContainer}/>
        <Route path="/portuguese-primera-division" component={PortugalContainer}/>
        <Route path="/la-liga" component={PrimeraContainer}/>
        <Route path="/world-cup" component={WorldCup}/>
      </Switch>
    </div>
  );
}

export default App;
