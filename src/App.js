import './index.scss';
import "./App.scss";
import Navbar from './components/Navbar/Navbar.jsx';
import {Route, Switch} from 'react-router-dom';
import Leagues from './components/pages/Leagues/Leagues';
import Clubs from './components/pages/Clubs/Clubs';
import Info from './components/pages/Info/Info';
import Brasil from './components/pages/Leagues/Brasil/Brasil';
import Championship from './components/pages/Leagues/Championship/Championship';
import ChampionsLeague from './components/pages/Leagues/ChampionsLeague/ChampionsLeague';
import EuropeanC from './components/pages/Leagues/EuropeanC/EuropeanC';
import FranceLeague from './components/pages/Leagues/FranceLeague/FranceLeague';
import SerieA from './components/pages/Leagues/SerieA/SerieA';
import Eredivise from './components/pages/Leagues/Eredivise/Eredivise';
import Portugal from './components/pages/Leagues/Portugal/Portugal';
import WorldCup from './components/pages/Leagues/WorldCup/WorldCup';
import EplContainer from './components/pages/Leagues/EPL/EplContainer';
import BundesligaContainer from './components/pages/Leagues/Bundesliga/BundesligaContainer';
import PrimeraContainer from './components/pages/Leagues/Primera/PrimeraContainer';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Leagues}/>
        <Route path="/clubs" component={Clubs}/>
        <Route path="/info" component={Info}/>
        <Route path="/brasilial-division-1" component={Brasil}/>
        <Route path="/english-premiere-league" component={EplContainer}/>
        <Route path="/championship" component={Championship}/>
        <Route path="/champions-league" component={ChampionsLeague}/>
        <Route path="/european-championships" component={EuropeanC}/>
        <Route path="/france-league-1" component={FranceLeague}/>
        <Route path="/bundesliga" component={BundesligaContainer}/>
        <Route path="/serie-a" component={SerieA}/>
        <Route path="/eredivise" component={Eredivise}/>
        <Route path="/portuguese-primera-division" component={Portugal}/>
        <Route path="/la-liga" component={PrimeraContainer}/>
        <Route path="/world-cup" component={WorldCup}/>
      </Switch>
    </div>
  );
}

export default App;
