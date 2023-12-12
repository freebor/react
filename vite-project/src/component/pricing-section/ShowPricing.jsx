import { PriceCardContainer } from "./show-pricing/price-card/PriceCardContainer";
import { PricingClient } from "./show-pricing/PricingClient";
import { Faqs } from "./show-pricing/pricing-FAQS/Faqs";
import { Trial } from "./show-pricing/Trial";

export const ShowPricing = () => {
  return (
    <>
      <PriceCardContainer />
      <PricingClient />
      <Faqs />
      <Trial />
    </>
  );
};
