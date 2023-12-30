import { GoPencil } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartItems } from "../redux/slice/cartSlice";
import { CartItem } from "../shopping-cart/checkout/cart/CartItem";

export const TooltipCard = ({cartData}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const {image, header, quantity} = cartData
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-[0.81rem] pt-[0.64rem]">
        <div className="w-full h-fit md:w-fit py-2 flex gap-[1.25rem]">
        <div className="flex items-center text-black font-normal gap-1">
            <span className="text-[1.125rem]">{quantity}</span>
            <span className="text-[0.75rem] text-end pt-[0.25rem]">X</span>
        </div>
          <div className="h-full w-[4.062rem]"><img src={image} alt="" /></div>
          <div className="text-[0.8125rem] text-black font-normal">{header}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col text-grayText-40 w-[5%] md:w-fit md:justify-center justify-start gap-4 py-1">
            <button onClick={()=> dispatch(removeFromCart(cartData))}>
              <MdOutlineCancel />
            </button>
            <button>
              <GoPencil />
            </button>
          </div>
        </div>
    </div>
  )
}
