import React from 'react';
import { connect } from 'react-redux';
import { getLeague } from '../redux/league-reducer';
import { RootState } from '../redux/store';
import { ILeague } from '../types/league';

type MapPropsType = {
  league: ILeague
  isFetching: boolean
  isFetchError: boolean
  errorLeagueMessage: string
}

type DispatchPropsType = {
  getLeague: (league: string) => void
}

let mapStateToPropsForDataComponent = (state: RootState) => ({
  league: state.leaguePage.league,
  isFetching: state.leaguePage.isFetching,
  isFetchError: state.leaguePage.isFetchError,
  errorLeagueMessage: state.leaguePage.errorLeagueMessage
} as MapPropsType);

export const withLeagueData = (Component: any, code: string) => {
  class DataComponent extends React.Component<MapPropsType & DispatchPropsType> {
    componentDidMount(){
      this.props.getLeague(code);
    }
  
    render() {
      return <Component {...this.props}/>
    }
  }

  let ConnetWithData = connect<MapPropsType, DispatchPropsType, {}, RootState>(mapStateToPropsForDataComponent, {getLeague})(DataComponent);
  return ConnetWithData;
};