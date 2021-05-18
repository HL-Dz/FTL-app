import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague, getBestLeaguePlayers } from '../../../../redux/league-reducer.js';
import Brasil from './Brasil.jsx';


class BrasilContainer extends Component {
  componentDidMount(){
    this.props.getLeague('BSA');
    this.props.getBestLeaguePlayers('BSA');
  }

  render(){
    return (
      <Brasil {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
    scorers: state.leaguePage.scorers,
});


export default connect(mapStateToProps, {getLeague, getBestLeaguePlayers})(BrasilContainer);