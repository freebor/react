import { GoPencil } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const CartItem = ({cartData}) => {
  const {image, header, newPrice, quantity} = cartData
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-[0.81rem] pt-[1.88rem]">
        {/* data is my bestSellerCard prop  */}
        <div className="w-full h-fit lg:w-fit py-2 flex gap-[1.25rem]">
          <div className="h-full w-[5.25rem]"><img src={image} alt="" /></div>
          <div className="text-[0.875rem]">{header}</div>
        </div>
        <div className="flex justify-between">
          <table className="flex flex-col gap-[0.62rem] w-[85%]">
            <tr className="flex lg:hidden justify-between text-[0.875rem] font-semibold">
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
            </tr>
            <tr className="flex justify-between text-[0.875rem] lg:h-full lg:items-center font-semibold lg:gap-[1.2rem]">
                <td>{newPrice}</td>
                <td className="flex py-[0.69rem] items-center w-[4.375rem] h-[3.125rem] bg-gridDropdown-10 rounded-[0.375rem]">
                  <span className="py-[0.62rem] w-[2.5rem] text-center">{quantity}</span>
                  <span className="flex flex-col text-[0.625rem] text-grayText-50 font-bold">
                    <button className="w-4 h-4 flex items-center justify-center"><FaChevronUp /></button>
                    <button className="w-4 h-4 flex items-center justify-center"><FaChevronDown /> </button>
                  </span>
                </td>
                <td>$13,047.00</td>
            </tr>
          </table>
          <div className="flex flex-col justify-between text-grayText-40 w-[5%] lg:w-fit lg:justify-center lg:gap-2">
            <MdOutlineCancel />
            <GoPencil />
          </div>
        </div>
    </div>
  )
}
