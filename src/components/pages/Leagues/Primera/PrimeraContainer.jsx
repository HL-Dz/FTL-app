import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import Primera from './Primera.jsx';


class PrimeraContainer extends Component {
  componentDidMount(){
    this.props.getLeague('PD');
  }

  render(){
    return (
      <Primera {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError,
});


export default connect(mapStateToProps, {getLeague})(PrimeraContainer);