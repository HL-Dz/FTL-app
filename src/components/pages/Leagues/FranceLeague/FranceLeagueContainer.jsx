import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import FranceLeague from './FranceLeague.jsx';


class FranceLeagueContainer extends Component {
  componentDidMount(){
    this.props.getLeague('FL1');
  }

  render(){
    return (
      <FranceLeague {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
});


export default connect(mapStateToProps, {getLeague})(FranceLeagueContainer);