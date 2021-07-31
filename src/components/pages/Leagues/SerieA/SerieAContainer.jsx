import { withLeagueData } from '../../../../hocs/withLeagueData';
import SerieA from './SerieA.jsx';

let SerieAContainer = withLeagueData(SerieA, "SA");
export default SerieAContainer;