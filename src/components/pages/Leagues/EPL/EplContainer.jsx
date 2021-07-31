import { withLeagueData } from '../../../../hocs/withLeagueData';
import Epl from './Epl.jsx';

let EplContainer = withLeagueData(Epl, "PL");
export default EplContainer;