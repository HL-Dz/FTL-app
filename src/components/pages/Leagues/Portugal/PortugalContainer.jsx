import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import PortugalLeague from './Portugal.jsx';

class PortugalContainer extends Component {
  componentDidMount(){
    this.props.getLeague('PPL');
  }

  render(){
    return (
      <PortugalLeague {...this.props}/>
    )
  }
}


let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
});


export default connect(mapStateToProps, {getLeague})(PortugalContainer);