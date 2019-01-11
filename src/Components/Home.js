import React, { Fragment } from "react";
import ImageSlider from "./ImageSlider";
import Filter from "./Filter";
import { Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends React.Component {
  handlePaginationChange = (e, { activePage }) =>
    this.props.gotoPage(activePage);

  render() {
    const { dataFilter, activePage } = this.props;
    const pageSize = 2;
    const totalPages = dataFilter.length / pageSize;
    const pageCategories = dataFilter.slice(
      (activePage - 1) * pageSize,
      activePage * pageSize
    );
    const displayCategories = pageCategories.map((cat, index) => {
      return (
        <div key={index}>
          <ImageSlider data={cat.models} category={cat.name} />
        </div>
      );
    });
    return (
      <Fragment>
        <Filter />
        <div>{displayCategories}</div>
        <div className="pagination">
          <Pagination
            firstItem={null}
            lastItem={null}
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={totalPages}
            pointing
            secondary
          />
        </div>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { dataFilter } = state.filter;
  const { activePage } = state.paginate;
  return {
    dataFilter,
    activePage
  };
};

export default connect(
  mapStatetoProps,
  actions
)(Home);
