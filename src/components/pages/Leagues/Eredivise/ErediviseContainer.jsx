import { withLeagueData } from '../../../../hocs/withLeagueData';
import Eredivise from './Eredivise.jsx';

let ErediviseContainer = withLeagueData(Eredivise, "DED");
export default ErediviseContainer;