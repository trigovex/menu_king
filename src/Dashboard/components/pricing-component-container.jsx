import React, { Component } from "react";
import PricingComponent from "./pricing-component";
import bgbottom from "../images/bg-bottom.svg";
import bgtop from "../images/bg-top.svg";
import "./pricing.css";

class PricingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMontlyActive: false
    };
  }
  togglePricing = () => {
    this.setState({
      isMontlyActive: !this.state.isMontlyActive
    });
  };
  render() {
    return (
      <div className="pricing-container">
        <img src={bgtop} alt="" />
        <img src={bgbottom} alt="" />

        <div className="pricing-body">
          <h1 style={{textAlign:'center'}}>Our Pricing</h1>
          <div className="toggle-row">
            <p>Large Scale</p>
            <div className="toggle-container">
              <input
                className="toggle-switch"
                type="checkbox"
                id="switch"
                name="switch"
                onClick={this.togglePricing}
              />
            </div>
            <p>Medium Scale</p>
          </div>
          <label className="pricing-card-container" htmlFor="switch">
            {this.state.isMontlyActive ? (
              <>
                <PricingComponent
                  pricingHeader="3 Months"
                  priceAnnually="1599/-"
                  priceMonthly="799/-"
                  storage="500 GB Storage"
                  allowedUser="2 Users Allowed"
                  gigabits="Send up to 3 GB"
                  isMonthlyActive={true}
                />
                <PricingComponent
                  pricingHeader="6 Months"
                  priceAnnually="2999/-"
                  priceMonthly="1599/-"
                  storage="1 TB Storage"
                  allowedUser="5 Users Allowed"
                  gigabits="Send up to 10 GB"
                  isMonthlyActive={true}
                />
                <PricingComponent
                  pricingHeader="Yearly"
                  priceAnnually="6599/-"
                  priceMonthly="2899/-"
                  storage="2 TB Storage"
                  allowedUser="10 Users Allowed"
                  gigabits="Send up to 20 GB"
                  isMonthlyActive={true}
                />
              </>
            ) : (
              <>
                <PricingComponent
                  pricingHeader="3 Months"
                  priceAnnually="1599/-"
                  priceMonthly="799/-"
                  storage="500 GB Storage"
                  allowedUser="2 Users Allowed"
                  gigabits="Send up to 3 GB"
                  isMonthlyActive={false}
                />
                <PricingComponent
                  pricingHeader="6 Months"
                  priceAnnually="2999/-"
                  priceMonthly="1599/-"
                  storage="1 TB Storage"
                  allowedUser="5 Users Allowed"
                  gigabits="Send up to 10 GB"
                  isMonthlyActive={false}
                />
                <PricingComponent
                  pricingHeader="Yearly"
                  priceAnnually="6599/-"
                  priceMonthly="2899/-"
                  storage="2 TB Storage"
                  allowedUser="10 Users Allowed"
                  gigabits="Send up to 20 GB"
                  isMonthlyActive={false}
                />
              </>
            )}
          </label>
        </div>
      </div>
    );
  }
}

export default PricingContainer;
