import React from "react";
import "./Testimonial.component.scss";
import img5403 from "../../../assets/images/smiling-woman-with-afro-posing-pink-sweater 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="testimonial">
          <Swiper navigation={true} modules={[Navigation]} className="carousel">
            <SwiperSlide className="slide">
              <img src={img5403} alt="" />
              <div className="box">
                <div className="text">
                  "Thank you so much for your help. It's exactly what I've been
                  looking for. You won't regret it. It really saves me time and
                  effort. Skilline is exactly what our business has been
                  lacking."
                </div>
                <div className="row">
                  <div className="name">Gloria Rose</div>
                  <div className="rate">
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="people">12 reviews at Yelp</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={img5403} alt="" />
              <div className="box">
                <div className="text">
                  "Thank you so much for your help. It's exactly what I've been
                  looking for. You won't regret it. It really saves me time and
                  effort. Skilline is exactly what our business has been
                  lacking."
                </div>
                <div className="row">
                  <div className="name">Gloria Rose</div>
                  <div className="rate">
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon
                        style={{ color: "grey" }}
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        style={{ color: "grey" }}
                        icon={faStar}
                      />
                    </div>
                    <div className="people">5 reviews at Yelp</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={img5403} alt="" />
              <div className="box">
                <div className="text">
                  "Thank you so much for your help. It's exactly what I've been
                  looking for. You won't regret it. It really saves me time and
                  effort. Skilline is exactly what our business has been
                  lacking."
                </div>
                <div className="row">
                  <div className="name">Gloria Rose</div>
                  <div className="rate">
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon
                        style={{ color: "grey" }}
                        icon={faStar}
                      />
                    </div>
                    <div className="people">32 reviews at Yelp</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="box">
            <div className="label">TESTIMONIAL</div>
            <h2>What They Say?</h2>
            <p>
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p>Are you too? Please give your assessment</p>
            <button>
              Write your assessment{" "}
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
