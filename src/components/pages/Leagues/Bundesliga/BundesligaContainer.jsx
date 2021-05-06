import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import Bundesliga from './Bundesliga.jsx';



class BundesligaContainer extends Component {
  componentDidMount(){
    this.props.getLeague('BL1');
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
});


export default connect(mapStateToProps, {getLeague})(BundesligaContainer);