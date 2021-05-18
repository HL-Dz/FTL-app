import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague, getBestLeaguePlayers } from '../../../../redux/league-reducer.js';
import Epl from './Epl.jsx';

class EplContainer extends Component {
  componentDidMount(){
    this.props.getLeague('PL');
    this.props.getBestLeaguePlayers('PL');
  }

  render(){
    return (
      <Epl {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
    scorers: state.leaguePage.scorers,
});


export default connect(mapStateToProps, {getLeague, getBestLeaguePlayers})(EplContainer);