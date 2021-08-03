import { withLeagueData } from '../../../../hocs/withLeagueData';
import Championship from './Championship';

let ChampionshipContainer = withLeagueData(Championship, "ELC");
export default ChampionshipContainer;