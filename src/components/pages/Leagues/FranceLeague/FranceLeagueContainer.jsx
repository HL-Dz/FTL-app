import { withLeagueData } from '../../../../hocs/withLeagueData';
import FranceLeague from './FranceLeague.jsx';

let FranceLeagueContainer = withLeagueData(FranceLeague, "FL1");
export default FranceLeagueContainer;