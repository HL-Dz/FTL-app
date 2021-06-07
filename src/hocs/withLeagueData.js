import React from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../redux/league-reducer';


let mapStateToPropsForDataComponent = (state) => ({
  league: state.leaguePage.league,
  isFetching: state.leaguePage.isFetching,
  isFetchError: state.leaguePage.isFetchError
});

export const withLeagueData = (Component, code) => {
  class DataComponent extends React.Component {
    componentDidMount(){
      this.props.getLeague(code);
    }
  
    render(){
      return (
        <Component {...this.props}/>
      )
    }
  }

  let ConnetWithData = connect(mapStateToPropsForDataComponent, {getLeague})(DataComponent);
  return ConnetWithData;
};