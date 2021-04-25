import './index.scss';
import "./App.scss";
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import Leagues from './components/pages/Leagues/Leagues';
import Clubs from './components/pages/Clubs/Clubs';
import Info from './components/pages/Info/Info';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Leagues}/>
        <Route path="/clubs" component={Clubs}/>
        <Route path="/info" component={Info}/>
      </Switch>
    </div>
  );
}

export default App;
