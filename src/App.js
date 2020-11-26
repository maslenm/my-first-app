import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import TwoCounters from "./components/TwoCounters";
import GodCounter from "./components/GodCounter";
import Length from "./components/Length";
import PasswordStrength from "./components/PasswordStrength";
import Clicked from "./components/Clicked";

import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Square from "./components/Square";
import People from "./components/People";
import ToggleText from "./components/ToggleText";
import Counter from "./components/Counter";
import FourOhFour from "./components/FourOhFour";

//import Stuff from "./components/Stuff";

// use the Header component as if it was an HTML element
const App = () => (
	<Router>
		<Switch>
			<Route exact path="/twocounters">
				<TwoCounters />
			</Route>
			<Route exact path="/godcounter">
				<GodCounter />
			</Route>
			<Route exact path="/length">
				<Length />
			</Route>
			<Route exact path="/passwordstrength">
				<PasswordStrength />
			</Route>
			<Route exact path="/clicked">
				<Clicked />
			</Route>
			<Route path="/header">
				<Header>Hello, world!</Header>
			</Route>
			<Route path="/paragraph">
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu
					hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando
					Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus.
					Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum
					plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos
					ad agendum esse natos.
				</Paragraph>
			</Route>
			<Route
				path="/squares/:colour"
				render={({ match }) => <Square colour={match.params.colour} />}
			/>
			<Route path="/square">
				<Square colour="red" />
			</Route>
			<Route path="/people">
				<People
					names={[
						"James P. Sullivan",
						"Mike Wazowski",
						"Boo",
						"Randall Boggs",
						"Roz",
						"Fungus",
					]}
				/>
			</Route>
			<Route path="/toggletext">
				<ToggleText initial="Hello" alternate="World" />
			</Route>
			<Route path="/counter">
				<Counter initial={50} max={100} />
			</Route>
			<FourOhFour />{" "}
		</Switch>
		<Footer />
	</Router>
);

export default App;
