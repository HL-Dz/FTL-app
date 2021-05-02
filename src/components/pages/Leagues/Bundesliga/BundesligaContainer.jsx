import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBL1League } from '../../../../redux/bundesliga-reducer.js';
import Bundesliga from './Bundesliga.jsx';

class BundesligaContainer extends Component {
  componentDidMount(){
    this.props.getBL1League('BL1');
  }

  render(){
    return (
      <Bundesliga league={this.props.league} isFetching={this.props.isFetching}/>
    )
  }
}



let mapStateToProps = (state) => ({
    league: state.bundesligaPage.league,
    isFetching: state.bundesligaPage.isFetching
});


export default connect(mapStateToProps, {getBL1League})(BundesligaContainer);