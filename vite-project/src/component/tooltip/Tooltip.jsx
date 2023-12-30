import React, { useState } from "react";
import { payPal } from "../../utilities/image";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/slice/cartSlice";
import { TooltipCard } from "./TooltipCard";

export const Tooltip = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cartItems = useSelector(selectCartItems);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {children}
        {isHovered && (
          <div className="w-[19.375rem] flex flex-col items-center absolute right-5 top-[7rem] px-3 py-[1.53rem] shadow-md bg-[#fafafa] z-10">
            <div>
              <div className="text-lightGrayText flex flex-col gap-[0.61rem]">
                <h4 className="text-black font-semibold text-[1.125rem] text-center w-full">
                  My Cart
                </h4>
                <p className=" w-full text-center text-[0.75rem] font-normal">
                  <span>{cartItems.length}</span> items in cart
                </p>
                <button className="flex items-center justify-center text-checkOutBlue w-[15.625rem] border-2 border-checkOutBlue font-semibold mt-2 rounded-[3.125rem] py-[0.5rem] text-[0.875rem]">
                  <span>View or Edit Your Cart</span>
                </button>
              </div>
              <div>
                <div className="flex flex-col divide-y-2 divide-grayText-30 gap-[0.64rem]">
                  {cartItems.map((mapCart, i) => (
                    <TooltipCard key={i} cartData={mapCart} />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 justify-center items-center my-2">
                <span className="font-semibold text-[0.875rem] text-lightGrayText">
                  Subtotal:
                </span>
                <span className="font-semibold text-[1.125rem] text-black">
                  $499.00
                </span>
              </div>
              <div className="flex flex-col gap-[0.44rem]">
                <button className="flex font-semibold items-center justify-center bg-checkOutBlue text-white w-full rounded-[3.125rem] py-[0.5rem] text-[0.75rem]">
                  <span>Go to Checkout</span>
                </button>
                <button className="flex items-center justify-center bg-checkOutYellow-bg text-checkOutYellow-text w-[15.625rem] rounded-[3.125rem] py-[0.59rem] text-[0.75rem] gap-[0.38rem]">
                  <span>Check out with</span>
                  <span>
                    <img src={payPal} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
