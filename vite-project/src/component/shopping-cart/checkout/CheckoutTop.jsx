import { FaAngleDown } from "react-icons/fa6";
import { payPal, zipLogo } from "../../../utilities/image";
import { useState } from "react";

export const CheckoutTop = () => {
    const [text] = standardArray
    const [dropdown, setDropdown] = useState(" ")
  return (
    <div className="flex lg:sticky top-4 flex-col items-center gap-[0.63rem]">
        <div className="divide-y-2 divide-grayText-30 bg-gridDropdown-10 px-[1.25rem] py-[1.06rem] w-[22.1875rem] md:w-[95%] xl:w-[26.4rem]">
            <div className="flex mb-[0.62rem] flex-col gap-[0.63rem]">
                <h3 className="text-[1.125rem] font-bold">Summary</h3>
                <div className="flex flex-col gap-[0.62rem]">
                    <div className="flex flex-col gap-[0.62rem]">
                        <span className="flex justify-between text-[1rem]">
                            <h4>Estimate Shipping and Tax</h4>
                            <button onClick={()=> setDropdown(!dropdown)}><FaAngleDown /></button>
                        </span>
                        <span className="text-grayText-20 w-[17.9375rem] text-[0.875rem]">Enter your destination to get a shipping estimate.</span>
                        <div className={dropdown ? "flex flex-col py-[1.2rem]" : "hidden"}>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="country" className="font-bold text-[0.875rem]">Country</label>
                                    <div className="flex justify-center items-center border-2 rounded-[0.25rem] border-lightGrayText h-[2.345rem] bg-white">
                                        <input type="text" className="h-full w-full"/>
                                        <span className="h-full px-2 flex items-center"><FaAngleDown /></span>
                                    </div> 
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="state" className="font-bold text-[0.875rem]">State/Province</label>
                                    <input type="text" id="state" className="border-2 rounded-[0.25rem] border-lightGrayText h-[2.345rem]"/>
                                </div>
                                <div className="flex flex-col gap-2"> 
                                    <label htmlFor="zip" className="font-bold text-[0.875rem]">Zip/Postal Code</label>
                                    <input type="text" id="zip" className="border-2 rounded-[0.25rem] border-lightGrayText h-[2.345rem]"/>
                                </div>
                            </div>
                            <div>
                                {standardArray.map((check,i)=>{
                                    return(
                                        <div className="flex flex-col" key={i}>
                                            <h3 className="h-[2.2rem] font-bold flex items-center text-[0.875rem]">{check.header}</h3>
                                            <div className="text-[0.73rem] flex items-start gap-2">
                                                <input type="radio" className=""/>
                                                <span>{check.text}</span>
                                            </div>
                                        </div>
                                )})}
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="flex justify-between text-[1rem]">
                            <h4>Apply Discount Code</h4>
                            <button><FaAngleDown /></button>
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
    </div>
  )
}

const standardArray = [
    {
        header: "Standard Rate",
        text: "Standard Rate Price may vary depending on the item/destination. Shop Staff will contact you. $21.00"
    },
    {
        header: "Pickup from store",
        text: "1234 Street Adress, City Address, 1234"
    }
]