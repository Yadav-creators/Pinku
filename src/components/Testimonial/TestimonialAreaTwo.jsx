import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaTwoItem from "./TestimonialAreaTwoItem";

const TestimonialAreaTwo = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const testimonial_items = [
    {
      desc: `‘’Working with Bhoopendra was an absolute pleasure. They built us a stunning Shopify store that perfectly represents our brand. The functionality and user experience are top-notch! Highly recommend their services.”`,
      title: "Abeer",
      designation: "Director of Anemoia",
      src: "",
    },
    {
      desc: `‘’Thanks to Bhoopendra, our Shopify store now looks professional and performs flawlessly. They customized features we never thought possible, and our sales have doubled since the relaunch!”`,
      title: "Nilay",
      designation: "Ace Blend CTO",
      src: "",
    },
    {
      desc: `‘’From start to finish, the process was seamless. Bhoopendra created a visually appealing Shopify store with all the features we needed to scale. Our customers love the new look!”`,
      title: "Kanica",
      designation: "Manager of Deepa Gurnani",
      src: "",
    },
    {
      desc: `‘’I’m so impressed with the Shopify store that Bhoopendra built for us. It’s fast, user-friendly, and optimized for conversions. They went above and beyond to make sure every detail was perfect.”`,
      title: "Ashish Shah",
      designation: "Founder of Atelier",
      src: "",
    },
  ];

  return (
    <section className="testimonial-area-two pt-110 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title title-style-two white-title text-center mb-60">
              <span className="sub-title">Testimonial</span>
              <h2 className="title">What People Say About Me</h2>
            </div>
          </div>
        </div>

        <div className="row testimonial-active-two">
          <SlickSlider settings={slick_settings}>
            {testimonial_items.map((x, index) => (
              <div key={index} className="col-lg-3">
                <TestimonialAreaTwoItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaTwo;
