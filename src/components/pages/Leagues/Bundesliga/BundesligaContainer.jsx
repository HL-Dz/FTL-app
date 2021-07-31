import { withLeagueData } from '../../../../hocs/withLeagueData';
import Bundesliga from './Bundesliga.jsx';

let BundesligaContainer = withLeagueData(Bundesliga, "BL1");
export default BundesligaContainer;