import React from "react";
import styles from "./Our_services.module.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import img1 from "./image 13.png";
import img2 from "./image 15.png";
import img3 from "./image11.png";
import img4 from "./istock.jpg";

function Our_services() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => {
      return <ul style={{ margin: " -25px" }}>{dots}</ul>;
    },
  };
  const data = [
    {
      img: img4,
      details: "",
    },
    {
      img: img1,
      details: "",
    },
    {
      img: img2,
      details: "",
    },
    {
      img: img3,
      details: "",
    },
    {
      img: img4,
      details: "",
    },
    {
      img: img1,
      details: "",
    },
    {
      img: img2,
      details: "",
    },
  ];
  return (
    <div className={`${styles.our_services}`}>
      <div className={`${styles.section}`}>
        <div className={`${styles.textt}`}>
          <h2>Our members</h2>
          <p>Those who are part of our journy.</p>
        </div>
        <div className={`${styles.slide}`}>
          <Slider {...settings}>
            {data.map((Data) => {
              return (
                <div className={`${styles.box}`}>
                  <div className={`${styles.card}`}>
                    <div className={`${styles.cardbody}`}>
                      <div className={`${styles.OurServicesServiceImgWrap}`}>
                        <img
                          className={`${styles.ServiceImage}`}
                          key={Data.id}
                          src={Data.img}
                          alt=""
                        />
                      </div>
                      <p className={`${styles.ServicesText}`}>{Data.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img2} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img3} alt="" />
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img4} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img2} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <div className="centimg">
                    <img className="image" src={img1} alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ullam! Iste quidem soluta error velit. Voluptate, nemo</p>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Our_services;
