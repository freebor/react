import { GoPencil } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/slice/cartSlice";

export const CartItem = ({cartData}) => {
  const dispatch = useDispatch();
  const {image, header, newPrice, quantity} = cartData
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-[0.81rem] pt-[1.88rem]">
        {/* data is my bestSellerCard prop  */}
        <div className="w-full h-fit md:w-fit py-2 flex gap-[1.25rem]">
          <div className="h-full w-[5.25rem]"><img src={image} alt="" /></div>
          <div className="text-[0.875rem]">{header}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[0.62rem] w-[85%]">
            <div className="flex md:hidden justify-between text-[0.875rem] font-semibold">
              <h4>Price</h4>
              <h4>Qty</h4>
              <h4>Subtotal</h4>
            </div>
            <div className="flex justify-between text-[0.875rem] md:h-full md:items-center font-semibold md:gap-[1.2rem]">
                <p>{newPrice}</p>
                <p className="flex py-[0.69rem] items-center w-[4.375rem] h-[3.125rem] bg-gridDropdown-10 rounded-[0.375rem]">
                  <span className="py-[0.62rem] w-[1.8rem] text-center">{quantity}</span>
                  <span className="flex flex-col text-[0.625rem] text-grayText-50 font-bold">
                    <button className="w-4 h-4 flex items-center justify-center"><FaChevronUp /></button>
                    <button className="w-4 h-4 flex items-center justify-center"><FaChevronDown /> </button>
                  </span>
                </p>
                <p>$13,047.00</p>
            </div>
          </div>
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
