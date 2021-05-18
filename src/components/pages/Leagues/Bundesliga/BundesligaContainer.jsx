import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague, getBestLeaguePlayers } from '../../../../redux/league-reducer.js';
import Bundesliga from './Bundesliga.jsx';



class BundesligaContainer extends Component {
  componentDidMount(){
    this.props.getLeague('BL1');
    this.props.getBestLeaguePlayers('BL1');
  }

  render(){
    return (
      <Bundesliga {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
    scorers: state.leaguePage.scorers,
});


export default connect(mapStateToProps, {getLeague, getBestLeaguePlayers})(BundesligaContainer);