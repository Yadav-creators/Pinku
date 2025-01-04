import React from "react";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const AboutAreaTwo = () => {
  const parallax = useParallax({
    translateY: [-24, 24],
    rootMargin: 0,
  });

  return (
    <section className="about-area-two" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/h2_about_img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two">
              <div className="section-title white-title title-style-two mb-30">
                <span className="sub-title">I'm a Shopify Developer</span>
                <h2 className="title">
                I Can Build Shopify Solutions <br />
                That Fit Your Needs
                </h2>
              </div>
              <p>
              Hello there! I'm a Shopify Developer, and I’m incredibly passionate and dedicated to creating exceptional e-commerce experiences. With over 4 years of experience as a professional developer, I have mastered the skills and knowledge required to bring your online store to life.
<br />
From customizing themes to developing unique features, I ensure your Shopify store not only meets but exceeds your expectations. I enjoy every step of the development process, from ideation and collaboration to delivering a polished product.
              </p>
              <Link to="https://wa.me/917379081148">
                <span className="arrow">
                  <img src="/img/icon/right_arrow.svg" alt="" />
                </span>
                <span className="text">Available jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img
          src="/img/images/h2_about_shape01.png"
          alt=""
          className="shape-one"
          ref={parallax.ref}
        />
        <img
          src="/img/images/h2_about_shape02.png"
          alt=""
          className="shape-two"
        />
        <img
          src="/img/images/h2_about_shape03.png"
          alt=""
          className="shape-three"
        />
      </div>
    </section>
  );
};

export default AboutAreaTwo;
