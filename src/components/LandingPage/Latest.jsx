import React from "react";
import Carousel from "react-bootstrap/Carousel";
import web6 from "../../images/web6.jpg";
import {Link} from 'react-router-dom'

const Latest = () => {
  return (
    <section className="latest">
      <p className="latest-title">Commodo integer</p>
      <h5 className="articles">Latest Articles</h5>
      <p className="article-text">
        There are many variations of passages of lorem ipsum available.
      </p>
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <div className="slider-container">
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-container">
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-container">
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            <Link to=""><img className="slideImage" src={web6} alt="" /></Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Latest;
