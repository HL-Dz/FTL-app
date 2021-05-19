import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../../../../redux/league-reducer.js';
import Eredivise from './Eredivise.jsx';


class ErediviseContainer extends Component {
  componentDidMount(){
    this.props.getLeague('DED');
  }

  render(){
    return (
      <Eredivise {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
    league: state.leaguePage.league,
    isFetching: state.leaguePage.isFetching,
    isFetchError: state.leaguePage.isFetchError
});


export default connect(mapStateToProps, {getLeague})(ErediviseContainer);