import React, { useState } from "react";
import ProjectAreaTwoItem from "./ProjectAreaTwoItem";
import cn from "classnames";

const ProjectAreaTwo = () => {
  const project_items = [
    {
      url: "https://miduty.in",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/OBpOuR8gTdUTVsVPQSLJv5TQNQ_1.png?v=1735650880",
      title: "Miduty",
      desc: "India's Number 1 Nutraceutical Brand and Online Supplement Store",
      className: "cat-one",
    },
    {
      url: "https://aceblend.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_1_2.png?v=1735655688",
      title: "Ace Blend",
      desc: "Nature-based modern nutrition crafted for everybody",
      className: "cat-one",
    },
    {
      url: "https://www.gleefullsupps.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_2.png?v=1735657322",
      title: "GleeFull Supps",
      desc: "Nature-based modern nutrition crafted for everybody",
      className: "cat-one",
    },
    {
      url: "https://wellbeingnutrition.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e8c91e73c0ca7470edf4_Wellbeing-p-500.png?v=1735650879",
      title: "Wellbeing Nutrition India",
      desc: "Health and Beauty Supplements Online",
      className: "cat-one",
    },
    {
      url: "https://www.zeroharm.in",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e90210a8d05fd3f131fc_ZEOHARM-p-500.png?v=1735650879",
      title: "Zeroharm Sciences",
      desc: "100% Plant Based Natural Health Supplements India",
      className: "cat-one",
    },
    {
      url: "https://thegoodbug.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e21b1c22d08713e8227c_GOODBUG-p-500.png?v=1735652952",
      title: "The Good Bug",
      desc: "Enhance Your Health with Daily Probiotics",
      className: "cat-one",
    },
    {
      url: "https://supplysix.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/66d2e910942268b324a5f96b_GOOdStuff-p-500.png?v=1735652953",
      title: "Daily Nutrition Simplified",
      desc: "Foundational Nutrition for a Happy and Healthier life.",
      className: "cat-one",
    },
    {
      url: "/project-details",
      src: "/img/project/h2_project_img05.jpg",
      title: "Motion Design",
      desc: "Lorem Ipsum is simply",
      className: "cat-one cat-five",
    },
    {
      url: "/project-details",
      src: "/img/project/h2_project_img06.jpg",
      title: "Motion Design",
      desc: "Lorem Ipsum is simply",
      className: "cat-two cat-five",
    },
  ];

  const filters = [

    {
      filter: "cat-one",
      label: "Health and Supplements",
    },
    {
      filter: "cat-two",
      label: "Clothing",
    },
    {
      filter: "cat-three",
      label: "Beauty and jwellery",
    },
    {
      filter: "cat-four",
      label: "Decor",
    },
    {
      filter: "cat-five",
      label: "Some Fanastic Plus stores",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("*");

  const [items, setItems] = useState(project_items);

  const handleFilterChange = (filter) => {
    const newItems = project_items.filter((el) =>
      el.className.split(" ").includes(filter)
    );
    setSelectedFilter(filter);
    setItems(filter === "cat-one" ? project_items : newItems);
  };

  return (
    <section className="project-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title title-style-two white-title mb-60 text-center">
              <span className="sub-title">Portfolio</span>
              <h2 className="title">You Will Like These Design Made by Me</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </div>

        <div className="project-item-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-menu-nav">
                {filters.map((x, index) => (
                  <button
                    key={index}
                    className={x.filter === selectedFilter ? "active" : ""}
                    data-filter={x.filter}
                    onClick={() => handleFilterChange(x.filter)}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="row project-active-two">
            {items.map((x, index) => (
              <div
                key={index}
                className={cn(
                  "col-lg-4 col-md-6 grid-item grid-sizer  wow fadeInUp",
                  x.className
                )}
              >
                <ProjectAreaTwoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="project-shape">
        <img src="/img/project/h2_project_shape.png" alt="" />
      </div>
    </section>
  );
};

export default ProjectAreaTwo;
