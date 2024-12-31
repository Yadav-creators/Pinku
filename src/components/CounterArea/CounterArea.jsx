import React from "react";
import CounterAreaItem from "./CounterAreaItem ";

const CounterArea = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-item-wrap">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
            <div class="counter-item">
             <span>50+</span>
             <p>Shopify Stores Launched</p>
             </div>
            </div>

            <div className="col-lg-3 col-sm-6">
            <div class="counter-item">
             <span>46+</span>
             <p>Satisfied Clients</p>
             </div>
            </div>

            <div className="col-lg-3 col-sm-6">
            <div class="counter-item">
             <span>50+</span>
             <p>Cups of Coffee Fueled Innovation</p>
             </div>
            </div>

            <div className="col-lg-3 col-sm-6">
            <div class="counter-item">
             <span>30+</span>
             <p>Collaborations and Partnerships</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
