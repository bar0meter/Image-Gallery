import React, { Fragment } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class SideBar extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    name = name === "home" ? "" : name;
    this.props.history.push("/" + name);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Fragment>
        <Menu fluid vertical tabular>
          <Menu.Item>
            <div style={{ display: "block", height: "150px" }}>
              <Icon inverted name="images" size="massive" />
            </div>
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <span style={activeItem === "home" ? { color: "black" } : {}}>
              <Icon
                name="home"
                inverted
                color={activeItem === "home" ? "black" : null}
              />{" "}
              Home
            </span>
          </Menu.Item>
          <Menu.Item
            name="categories"
            active={activeItem === "categories"}
            onClick={this.handleItemClick}
          >
            <span style={activeItem === "categories" ? { color: "black" } : {}}>
              <Icon
                name="list"
                inverted
                color={activeItem === "categories" ? "black" : null}
              />{" "}
              Categories
            </span>
          </Menu.Item>
          <Menu.Item
            name="account"
            active={activeItem === "account"}
            onClick={this.handleItemClick}
          >
            <span style={activeItem === "account" ? { color: "black" } : {}}>
              <Icon
                name="user"
                inverted
                color={activeItem === "account" ? "black" : null}
              />{" "}
              My Account
            </span>
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          >
            <span style={activeItem === "logout" ? { color: "black" } : {}}>
              <Icon
                name="sign-out"
                inverted
                color={activeItem === "logout" ? "black" : null}
              />{" "}
              Logout
            </span>
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          >
            <span style={activeItem === "login" ? { color: "black" } : {}}>
              <Icon
                name="sign-in"
                inverted
                color={activeItem === "login" ? "black" : null}
              />{" "}
              Login
            </span>
          </Menu.Item>
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(SideBar);
