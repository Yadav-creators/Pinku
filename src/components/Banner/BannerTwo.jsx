import React from "react";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  return (
    <section className="banner-area-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5">
            <div className="banner-img-two">
              
              <img src="/img/banner/home.svg" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="banner-content-two">
              <span className="sub-title">Hi, I am Bhoopendra</span>
              <h2 className="title">
                Professional Shopify <span>Developer</span> Based in India
              </h2>
              <div className="banner-content-bottom">
              {/* <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <a href="https://wa.me/917379081148" className="btn">
                            Contact <span></span>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                
                <ul className="list-wrap">
                  <li>
                    <a href="https://www.instagram.com/bhoopendra097">
                      <img src="/img/icon/banner_icon01.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Yadav-creators">
                      <img className="linsedhhhjh" src="https://cdn.shopify.com/s/files/1/0778/3012/7901/files/git-svgrepo-com.svg?v=1735975440" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/yadav-creators">
                      <img className="linsedhhhjh" src="https://cdn.shopify.com/s/files/1/0778/3012/7901/files/linkedin-svgrepo-com.svg?v=1735975286" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/917379081148">
                      <img src="/img/icon/banner_icon04.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-shape-wrap-two">
        <img
          src="/img/banner/h2_banner_shape01.png"
          alt=""
          className="rotateme"
        />
        <img
          src="/img/banner/h2_banner_shape02.png"
          alt=""
          className="ribbonRotate"
        />
        <img
          src="/img/banner/h2_banner_shape03.png"
          alt=""
          className="ribbonRotate"
        />
        <img src="/img/banner/h2_banner_shape04.png" alt="" />
      </div>
    </section>
  );
};

export default BannerTwo;
