import { FaAngleDown } from "react-icons/fa6";
import { payPal, zipLogo } from "../../../utilities/image";

export const CheckoutTop = () => {
  return (
    <div className="flex relative flex-col items-center gap-[0.63rem]">
        <div className="divide-y-2 divide-grayText-30 bg-gridDropdown-10 px-[1.25rem] py-[1.06rem] w-[22.1875rem]">
            <div className="flex mb-[0.62rem] flex-col gap-[0.63rem]">
                <h3 className="text-[1.125rem] font-bold">Summary</h3>
                <div className="flex flex-col gap-[0.62rem]">
                    <div className="flex flex-col gap-[0.62rem]">
                        <span className="flex justify-between text-[1rem]">
                            <h4>Estimate Shipping and Tax</h4>
                            <FaAngleDown />
                        </span>
                        <span className="text-grayText-20 w-[17.9375rem] text-[0.875rem]">Enter your destination to get a shipping estimate.</span>
                        {/* <div>dropdown</div> */}
                    </div>
                    <div>
                        <span className="flex justify-between text-[1rem]">
                            <h4>Apply Discount Code</h4>
                            <FaAngleDown />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[0.63rem] pt-[0.62rem]">
                <div className="flex justify-between font-bold text-[0.75rem]"><span>Subtotal</span><span>$13,047.00</span></div>
                <div>
                    <div className="flex justify-between font-bold text-[0.75rem]"><span>Shipping</span><span>$21.00</span></div>
                    <div className="text-lightGrayText text-[0.725rem]"><span>(Standard Rate - Price may vary depending on the item / destination. Shop Staff will contact you.)</span></div>
                </div>
                <div className="flex flex-col gap-[0.62rem]">
                    <div className="flex justify-between font-bold text-[0.75rem]"><span>Tax</span><span>$1.91</span></div>
                    <div className="flex justify-between font-bold text-[0.75rem]"><span>GST (10%)</span><span>$13,068.00</span></div>
                    <div className="flex justify-between font-bold text-[0.75rem]"><span>Order Total</span><span>$1.91</span></div>
                    <div>
                        <button className="flex items-center justify-center bg-checkOutBlue text-white w-full rounded-[3.125rem] py-[0.5rem] text-[0.875rem]"><span>Proceed to Checkout</span></button>
                    </div>
                    <div>
                        <button className="flex items-center justify-center bg-checkOutYellow-bg text-checkOutYellow-text w-full rounded-[3.125rem] py-[0.5rem] text-[0.875rem] gap-6">
                            <span>Proceed to Checkout</span>
                            <span><img src={payPal} alt="" /></span>
                        </button>
                    </div>
                    <div>
                        <button className="flex items-center justify-center text-grayText-20 w-full border-2 border-grayText-20 rounded-[3.125rem] py-[0.5rem] text-[0.875rem]"><span>Check Out with Multiple Addresses</span></button>
                    </div>
                    <div className="flex divide-stroke divide-x-2 gap-[0.52rem] items-center">
                        <div className=""><img src={zipLogo} alt="" /></div>
                        <span className="font-light text-[0.625rem] w-[8.564rem] pl-[0.52rem]">own it now, up to 6 months interest free <a href="#" className="underline">learn more</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}
