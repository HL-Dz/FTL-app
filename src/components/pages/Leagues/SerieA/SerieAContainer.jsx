import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague,getBestLeaguePlayers } from '../../../../redux/league-reducer.js';
import SerieA from './SerieA.jsx';


class SerieAContainer extends Component {
  componentDidMount(){
    this.props.getLeague('SA');
    this.props.getBestLeaguePlayers('SA');
  }

  render(){
    return (
      <SerieA {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
    scorers: state.leaguePage.scorers,
});


export default connect(mapStateToProps, {getLeague, getBestLeaguePlayers})(SerieAContainer);