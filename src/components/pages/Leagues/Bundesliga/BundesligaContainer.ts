import { withLeagueData } from '../../../../hocs/withLeagueData';
import Bundesliga from './Bundesliga';

let BundesligaContainer = withLeagueData(Bundesliga, "BL1");
export default BundesligaContainer;