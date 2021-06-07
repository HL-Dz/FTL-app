import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import Championship from './Championship.jsx';

let ChampionshipContainer = withLeagueData(Championship, "ELC");
export default ChampionshipContainer;