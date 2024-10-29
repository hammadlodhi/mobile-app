import React from "react";
import "./FrontPage.css";
import Navbar from "../Navbar/Navbar";
import {
  background1,
  background2,
  background3,
  background4,
  mobile1,
  mobiles,
  pagination,
  rectangle1,
  rectangle2,
  text1,
  text2,
  text3,
  things,
} from "<@>/util/images";

const Home = () => {
  return (
    <div>
      <div className="background">
        <Navbar />
      </div>
      <div className="image-container">
        <div>
          <img src={background3} alt="" />
          <img
            className="image-container__text"
            width={550}
            src={text1}
            alt=""
          />
          <img src={rectangle1} alt="" />
          <img src={rectangle2} alt="" />
        </div>
        <img
          className="image-container__background4"
          src={background4}
          alt=""
        />
        <img width={1250} className="image-container__things" src={things} alt="" />

        <img
          width={300}
          className="image-container__background1"
          src={background1}
          alt=""
        />
        <img
          width={200}
          className="image-container__mobile1"
          src={mobile1}
          alt=""
        />
        <img
          width={100}
          className="image-container__background1-1"
          src={background1}
          alt=""
        />
      </div>
      <div className="footer">
        <img
          className="footer__background"
          src={background2}
          alt="Background"
        />
        <img className="footer__text" src={text2} alt="Text Overlay" />
      </div>
      <div className="footer-1">
        <img src={text3} alt="" />
      </div>
      <div className="mobiles">
        <img width={1200} src={mobiles} alt="" />
      </div>
      <div className="pagination">
        <img src={pagination} alt="" />
      </div>
    </div>
  );
};

export default Home;
