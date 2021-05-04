import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import FranceLeague from './FranceLeague.jsx';


class EplContainer extends Component {
  componentDidMount(){
    this.props.getLeague('FL1');
  }

  render(){
    return (
      <FranceLeague league={this.props.league} isFetching={this.props.isFetching}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching
});


export default connect(mapStateToProps, {getLeague})(EplContainer);