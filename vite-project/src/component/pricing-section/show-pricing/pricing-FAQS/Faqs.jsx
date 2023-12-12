import { FaqsCard } from "./FaqsCard";
import { pricingFaqsArray } from "../../../../utilities/mockData";

export const Faqs = () => {
    const {pricingFaqsHeader, pricingFaqsText} = pricingFaqsArray;
  return (
    <div className="container">
      <div className="team-text">
        <h2>{pricingFaqsHeader}</h2>
        <p>{pricingFaqsText}</p>
      </div>
      <FaqsCard />
    </div>
  );
};
