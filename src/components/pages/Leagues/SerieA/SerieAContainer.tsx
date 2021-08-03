import { withLeagueData } from '../../../../hocs/withLeagueData';
import SerieA from './SerieA';

let SerieAContainer = withLeagueData(SerieA, "SA");
export default SerieAContainer;