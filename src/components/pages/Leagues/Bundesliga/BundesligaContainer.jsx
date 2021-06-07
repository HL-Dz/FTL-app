import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import Bundesliga from './Bundesliga.jsx';

let BundesligaContainer = withLeagueData(Bundesliga, "BL1");
export default BundesligaContainer;