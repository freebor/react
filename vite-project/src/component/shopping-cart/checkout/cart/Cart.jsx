import { useDispatch, useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { clearCart, selectCartItems } from "../../../redux/slice/cartSlice";

export const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch()

  return (
    <section className="w-[21.1875rem] md:w-[75%] lg:w-[30rem] xl:w-[46rem]">
      <div className="hidden md:flex flex-col gap-[1.16rem]">
        <div className="flex flex-row justify-between gap-[0.81rem] pt-[1.88rem]">
          <div className="w-full h-fit md:w-fit py-2 flex gap-[1.25rem]">
            <p>Items</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col md:w-[15rem] lg:w-[15rem] gap-[0.62rem]">
              <span className="flex justify-between text-[0.875rem] font-semibold h-full items-center gap-[1.2rem] text-left pr-6 pl-2">
                <p>Price</p>
                <p className="w-[3rem]">Qty</p>
                <p className="w-[4.5rem]">Subtotal</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y-2 divide-grayText-30 gap-[1.16rem] flex flex-col ">
        <div className="flex flex-col divide-y-2 divide-grayText-30 gap-[1.16rem]">
          {cartItems.map((mapCart ,i)=>(
            <CartItem 
              key= {i}
              cartData={mapCart}
            />
          ))}
        </div>
        <div className="w-full flex flex-col xl:flex-row xl:justify-between gap-6 items-center justify-center pt-[1.88rem]">
          <div className="hidden md:flex justify-center gap-[0.93rem]">
            <button className="border-2 border-loginLinkColor bg-white font-bold text-[1rem] rounded-[0.3125rem] px-[1.25rem] py-[0.62rem]">
            Continue Shoping
            </button>
            <button onClick={()=> dispatch(clearCart())} className="bg-loginLinkColor text-white font-bold text-[1rem] rounded-[0.3125rem] px-[1.25rem] py-[0.62rem]">
            Clear Shopping Cart
            </button>
          </div>
          <button className="bg-loginLinkColor w-fit text-white font-bold text-[1rem] rounded-[0.3125rem] px-[1.25rem] py-[0.62rem]">
          Update Shopping Cart
          </button>
        </div>
      </div>
    </section>
  )
}
