import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from "./Components/Main";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<BrowserRouter>
						<Main />
					</BrowserRouter>
				</Provider>
			</div>
		);
	}
}

export default App;
