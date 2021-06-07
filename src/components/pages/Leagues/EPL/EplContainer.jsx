import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import Epl from './Epl.jsx';

let EplContainer = withLeagueData(Epl, "PL");
export default EplContainer;