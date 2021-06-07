import { withLeagueData } from '../../../../hocs/withLeagueData.js';
import Eredivise from './Eredivise.jsx';

let ErediviseContainer = withLeagueData(Eredivise, "DED");
export default ErediviseContainer;