import { Link } from "react-router-dom";

const LinkList = () => (
	<section>
		<footer>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/header">Hello</Link>
				</li>
			</ul>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/twocounters">TwoCounters</Link>
				</li>
			</ul>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/godcounter">GodCounter</Link>
				</li>
			</ul>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/length">Length</Link>
				</li>
			</ul>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/passwordstrength">PasswordStrength</Link>
				</li>
			</ul>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/people">People</Link>
				</li>
			</ul>
			<ul className="list-group">
				<li className="list-group-item">
					<Link to="/square">Square</Link>
				</li>
			</ul>
		</footer>
	</section>
);

export default LinkList;
