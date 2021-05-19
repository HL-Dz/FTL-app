import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import Championship from './Championship.jsx';




class ChampionshipContainer extends Component {
  componentDidMount(){
    this.props.getLeague('ELC');
  }

  render(){
    return (
      <Championship {...this.props}/>
    )
  }
}



let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError
});


export default connect(mapStateToProps, {getLeague})(ChampionshipContainer);