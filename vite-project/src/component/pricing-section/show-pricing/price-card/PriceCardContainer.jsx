import { pricingContent } from "../../../../utilities/mockData";
// import { Switch } from "antd";
import { PriceCards } from "./PriceCards";
import { priceCardArray } from "../../../../utilities/mockData";

export const PriceCardContainer = () => {
  const { priceHeader, priceText } = pricingContent;

  return (
    <section className="container Price-card-main-container">
      <div className="team-text">
        <h2>{priceHeader}</h2>
        <p>{priceText}</p>
      </div>
      <div className="price-toggler-wrap">
        <div className="price-toggler-switch">
          <p>Monthly</p>
          {/* <Switch /> */}
          <p>Yearly</p>
        </div>
        <button>Save 25%</button>
      </div>
        {/* pricing cards */}
      <div className="pricing-container">
        {priceCardArray.map((pricingCard)=>{
            return(
              <PriceCards 
                  key={pricingCard.cardHeader}
                  pricingCardProp={pricingCard}
              />
            )
        })}
      </div>
    </section>
  );
};
