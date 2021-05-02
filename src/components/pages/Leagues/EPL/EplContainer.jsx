import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getEplLeague } from '../../../../redux/epl-reducer.js';
import Epl from './Epl.jsx';

class EplContainer extends Component {
  componentDidMount(){
    this.props.getEplLeague('PL');
  }

  render(){
    return (
      <Epl league={this.props.league} isFetching={this.props.isFetching}/>
    )
  }
}



let mapStateToProps = (state) => ({
    league: state.eplPage.league,
    isFetching: state.eplPage.isFetching
});


export default connect(mapStateToProps, {getEplLeague})(EplContainer);