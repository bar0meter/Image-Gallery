import React from "react";
import { Menu, Button } from "semantic-ui-react";

class Header extends React.Component {
	state = {};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<Menu>
				<Menu.Menu position="right">
					<Menu.Item>
						<Button primary>Sign up</Button>
					</Menu.Item>
					<Menu.Item>
						<Button>Log-in</Button>
					</Menu.Item>
					<Menu.Item>
						<Button>Logout</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Header;
