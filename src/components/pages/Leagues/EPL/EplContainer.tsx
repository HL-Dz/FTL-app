import { withLeagueData } from '../../../../hocs/withLeagueData';
import Epl from './Epl';

let EplContainer = withLeagueData(Epl, "PL");
export default EplContainer;