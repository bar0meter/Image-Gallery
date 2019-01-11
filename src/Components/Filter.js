import React from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Filter extends React.Component {
  state = { searchQuery: "", filterValues: [] };

  handleChange = (e, { searchQuery, value }) => {
    this.setState({ searchQuery, filterValues: value });
    this.props.filterData(value);
    this.props.gotoPage(1);
  };

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  render() {
    const { searchQuery, filterValues } = this.state;
    const { categories } = this.props;
    let categoryOptions = [];
    for (let cat of categories) {
      categoryOptions.push({
        key: cat.toLowerCase(),
        text: cat,
        value: cat.toLowerCase()
      });
    }
    return (
      <div className="filter">
        <Dropdown
          fluid
          multiple
          onChange={this.handleChange}
          onSearchChange={this.handleSearchChange}
          options={categoryOptions}
          placeholder="Categories"
          search
          searchQuery={searchQuery}
          selection
          value={filterValues}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  const { categories } = state.filter;
  return {
    categories
  };
};

export default connect(
  mapStatetoProps,
  actions
)(Filter);
