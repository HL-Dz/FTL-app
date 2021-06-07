import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import Primera from './Primera.jsx';

let PrimeraContainer = withLeagueData(Primera, "PD");
export default PrimeraContainer;