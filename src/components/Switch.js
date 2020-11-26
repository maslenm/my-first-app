import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<Switch>
	<Route exact path="/Header">
		<Header />{" "}
	</Route>
	<Route exact path="/TwoCounters">
		<TwoCounters />{" "}
	</Route>
	<Route exact path="/GodCounter">
		<GodCounter />{" "}
	</Route>
	<Route exact path="/Length">
		<Length />{" "}
	</Route>
	<Route exact path="/PasswordStrength">
		<PasswordStrength />{" "}
	</Route>
	<Route exact path="/People">
		<People />{" "}
	</Route>
	<Route exact path="/Square">
		<Square />{" "}
	</Route>
	<FourOhFour />{" "}
</Switch>;
