import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import Epl from './Epl.jsx';

class EplContainer extends Component {
  componentDidMount(){
    this.props.getLeague('PL');
  }

  render(){
    return (
      <Epl league={this.props.league} isFetching={this.props.isFetching}/>
    )
  }
}



let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching
});


export default connect(mapStateToProps, {getLeague})(EplContainer);