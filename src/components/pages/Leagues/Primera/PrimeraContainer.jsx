import { withLeagueData } from '../../../../hocs/withLeagueData';
import Primera from './Primera.jsx';

let PrimeraContainer = withLeagueData(Primera, "PD");
export default PrimeraContainer;