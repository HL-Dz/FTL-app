import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPrimeraLeague } from '../../../../redux/primera-reducer.js';
import Primera from './Primera.jsx';


class EplContainer extends Component {
  componentDidMount(){
    this.props.getPrimeraLeague('PD');
  }

  render(){
    return (
      <Primera league={this.props.league} isFetching={this.props.isFetching}/>
    )
  }
}



let mapStateToProps = (state) => ({
    league: state.primeraPage.league,
    isFetching: state.primeraPage.isFetching
});


export default connect(mapStateToProps, {getPrimeraLeague})(EplContainer);