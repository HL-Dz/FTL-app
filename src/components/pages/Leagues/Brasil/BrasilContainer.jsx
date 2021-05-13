import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import Brasil from './Brasil.jsx';


class BrasilContainer extends Component {
  componentDidMount(){
    this.props.getLeague('BSA');
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
});


export default connect(mapStateToProps, {getLeague})(BrasilContainer);