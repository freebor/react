import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { bestSellingArray } from "../../../../utilities/mockData"
// import { selectCartState } from "../../../redux/slice/cartSlice";

export const Cart = () => {
    // const cartItems = useSelector(selectCartState);
    const dispatch = useDispatch()
    
  return (
    <section className="w-[22.1875rem] lg:w-[30rem] divide-y-2 divide-grayText-30 gap-[1.16rem] flex flex-col ">
      <div className="flex flex-col divide-y-2 divide-grayText-30 gap-[1.16rem]">
        {bestSellingArray.map((mapCart ,i)=>(
          <CartItem 
            key= {i}
            cartData={mapCart}
          />
        ))}
      </div>
      <div className="w-full flex justify-center pt-[1.88rem]"><button className="bg-loginLinkColor text-white font-bold text-[1rem] rounded-[0.3125rem] px-[1.25rem] py-[0.62rem]">Update Shopping Cart</button></div>
    </section>
  )
}
