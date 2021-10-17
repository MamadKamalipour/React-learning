import React, { Component } from "react";
import styles from "./BrandsSlider.module.css";
import Slider from "react-slick";
import Brands from "./Brands/Brands";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./customSlider.css"
import img1 from "../../Images/image1.png";
import img2 from "../../Images/image2.png";
import img3 from "../../Images/image3.png";
import img4 from "../../Images/image4.png";
export default class BrandsSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.sliderWrapper}>
        <h2> Our Brands</h2>
        <Slider {...settings}>
          <Brands img={img1} alt="img1" />
          <Brands img={img2} alt="img1"/>
          <Brands img={img3} alt="img1"/>
          <Brands img={img4} alt="img1"/>
          <Brands img={img1} alt="img1"/>
          <Brands img={img2} alt="img1"/>
          <Brands img={img3} alt="img1"/>
          <Brands img={img4} alt="img1"/>
        </Slider>
      </div>
    );
  }
}
