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
      url: "https://cannavedic.in",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_4.png?v=1735822390",
      title: "Cannavedic",
      desc: "Buy CBD Oil India | Licensed Under Ministry of Ayush",
      className: "cat-one",
    },
    {
      url: "https://www.aumi4.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_12.png?v=1735828545",
      title: "Aumi4",
      desc: "Experience the finest in online fashion shopping with AUMI4.",
      className: "cat-two",
    },
    {
      url: "https://wearanemoia.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_8.png?v=1735826173",
      title: "Wearanemoia",
      desc: "We are outsiders looking in.",
      className: "cat-two",
    },
    {
      url: "https://raf-clothing.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_5.png?v=1735823696",
      title: "RAF",
      desc: "When you wear the garments of RAF, you are not just wearing outfits.",
      className: "cat-two",
    },
    {
      url: "https://quodbyikshitpande.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_6.png?v=1735824077",
      title: "QUOD",
      desc: "QUOD fuses period femininity with classic tailoring and modern streetwear.",
      className: "cat-two",
    },
    {
      url: "https://serrakirdar.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_7.png?v=1735824426",
      title: "Serra Kirdar",
      desc: "Serrakirdar is the global go-to platform for curated fashion edits from edgy independent brands.",
      className: "cat-two",
    },
    {
      url: "https://serrakirdar.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_9.png?v=1735826832",
      title: "Renu-oberoi",
      desc: "DISCOVER THE WORLD OF RENU OBEROI",
      className: "cat-three",
    },
    {
      url: "https://www.deepagurnani.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_10.png?v=1735827238",
      title: "Deepa Gurnani",
      desc: "Luxury Handmade Accessories",
      className: "cat-three",
    },
    {
      url: "https://www.afewwoodmen.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_11_1.png?v=1735827758",
      title: "A Few Wood Men",
      desc: "A Few Wood Men crafts stylish wooden and metal timepieces for men worldwide.",
      className: "cat-three",
    },
    {
      url: "https://serrakirdar.com",
      src: "https://cdn.shopify.com/s/files/1/0778/3012/7901/files/Group_7.png?v=1735824426",
      title: "Serra Kirdar",
      desc: "Serrakirdar is the global go-to platform for curated fashion edits from edgy independent brands.",
      className: "cat-three",
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

  const [selectedFilter, setSelectedFilter] = useState("cat-one");

  const [items, setItems] = useState(project_items);

  const handleFilterChange = (filter) => {
    const newItems = project_items.filter((el) =>
      el.className.split(" ").includes(filter)
    );
    setSelectedFilter(filter);
    setItems(filter === "*" ? project_items : newItems);
  };

  return (
    <section className="project-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="section-title title-style-two white-title mb-60 text-center">
              <h2 className="title">You Will Like These Stores Made by Me</h2>
              <p>
              We build high-performance Shopify Stores pages that are optimized for speed, functionality, and seamless user interactions.
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
