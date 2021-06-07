import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import SerieA from './SerieA.jsx';

let SerieAContainer = withLeagueData(SerieA, "SA");
export default SerieAContainer;