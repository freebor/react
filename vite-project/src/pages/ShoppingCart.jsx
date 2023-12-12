import TopHeader from "../component/Header/TopHeader";
import BottomHeader from "../component/Header/BottomHeader";
import { ShowShopingCart } from "../component/shopping-cart/ShowShopingCart";
import Footer from "../component/footer/Footer";
export const ShoppingCart = () => {
  return (
    <section>
      <TopHeader bgColor={"green"} />
      <BottomHeader />
      <ShowShopingCart />
      <Footer />
    </section>
  );
};
