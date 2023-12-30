import BreadCrum from "../productListShowCase/shop-card/BreadCrum"
import { CheckoutTop } from "./checkout/CheckoutTop"
import {Cart} from "./checkout/cart/Cart"

export const ShowShopingCart = () => {
  return (
    <section className="bg-breadCrumBg">
        <BreadCrum 
          currentHeader= 'Shopping Cart'
          currentText= 'Cart'
        />
        <div className="flex flex-col lg:flex-row-reverse xl:px-[7rem] lg:justify-between lg:px-10 items-center lg:items-start gap-[2rem] py-[3rem]">
          <CheckoutTop />
          <Cart />
        </div>
    </section>
  )
}
