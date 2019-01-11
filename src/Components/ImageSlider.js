import React, { Component, Fragment } from "react";
import Slider from "react-slick";

import { Icon } from "semantic-ui-react";

import CustomModal from "./ImageModal";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrowClass arrowRightClass" onClick={onClick}>
      <Icon name="arrow circle right" size="large" inverted color="red" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrowClass arrowLeftClass" onClick={onClick}>
      <Icon name="arrow circle left" size="large" inverted color="red" />
    </div>
  );
}

export default class ImageSlider extends Component {
  state = {
    settings: {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    }
  };

  render() {
    const { data, category } = this.props;
    const { settings } = this.state;

    const imageSlider = data.map((x, index) => {
      return <CustomModal key={index} index={index} value={x} />;
    });

    return (
      <div className="slider">
        <h2>
          &nbsp;
          {category.toUpperCase()}
        </h2>
        <div>
          <Slider {...settings}>{imageSlider}</Slider>
        </div>
      </div>
    );
  }
}
