import React from "react";
import ServicesAreaTwoItem from "./ServicesAreaTwoItem";

const ServicesAreaTwo = () => {
  const services_two_items = [
    {
      src: "/img/icon/services_icon01.png",
      url: "",
      title: "Website Development",
      desc: "Build responsive and user-friendly websites tailored to your business needs.",
    },
    {
      src: "/img/icon/services_icon03.png",
      url: "",
      title: "Landing Page",
      desc: "Design high-converting landing pages to boost engagement and drive sales.",
    },
    {
      src: "/img/icon/services_icon04.png",
      url: "",
      title: "Shopify Apps",
      desc: "Create custom Shopify apps to enhance store functionality and improve user experience.",
    },
  ];

  return (
    <section className="services-area-two" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title mb-65 text-center">
              <span className="sub-title">What I Do</span>
              <h2 className="title">What Service Do I Provide</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services_two_items.map((x, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <ServicesAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaTwo;
