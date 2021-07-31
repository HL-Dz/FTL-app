import { withLeagueData } from '../../../../hocs/withLeagueData';
import Championship from './Championship.jsx';

let ChampionshipContainer = withLeagueData(Championship, "ELC");
export default ChampionshipContainer;