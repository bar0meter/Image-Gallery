import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SideBar from "./Sidebar";
import CategoriesAll from "./CategoriesAll";

import "./Main.css";

class Main extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="sidebar">
					<SideBar />
				</div>
				<div className="main">
					<Switch>
						<Route path="/categories" exact component={CategoriesAll} />
						<Route path="/" exact component={Home} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default Main;
