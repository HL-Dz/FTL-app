import { withLeagueData } from '../../../../hocs/withLeagueData';
import Primera from './Primera';

let PrimeraContainer = withLeagueData(Primera, "PD");
export default PrimeraContainer;