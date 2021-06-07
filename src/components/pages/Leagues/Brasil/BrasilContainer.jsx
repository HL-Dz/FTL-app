import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import Brasil from './Brasil.jsx';

let BrasilContainer = withLeagueData(Brasil, "BSA");
export default BrasilContainer;