import topProductImage1 from "../../assets/img/top-product.png"
import topProductImage2 from "../../assets/img/top-product2.png"
import topProductImage3 from "../../assets/img/top-product3.png"
import smalltopProductImage1 from "../../assets/img/smallScreen-top-product.png"
import smalltopProductImage2 from "../../assets/img/smallScreen-top-product2.png"
import smalltopProductImage3 from "../../assets/img/smallScreen-top-product3.png"

const TopProduct = ()=>{
    const {header, button, bigImg, smallImg, topProductArray} = topProduct
    return(
        <>
            <section className="flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-[0.94rem] ">
                    <div className="relative">
                        <div className="bottom-0 absolute text-white text-[1.25rem] w-full lg:w-fit bg-topProductColor pt-[2.5rem] pb-[1.81rem] pl-[2.25rem] pr-[3.19rem]">
                            <div className="w-[12.375rem] flex flex-col gap-3">
                                <p className="text-[1.5rem] font-bold">{header}</p>
                                <button className="text-[0.875rem] border-2 border-white rounded-[0.3125rem] flex justify-center items-center font-bold py-[0.94rem]">{button}</button>
                            </div>
                        </div>
                        <img className="hidden lg:grid" src={bigImg} alt="topProductimage" />
                        <img className="grid lg:hidden" src={smallImg} alt="topProductimage" />
                    </div>
                    <div className="product-containr flex flex-col gap-4 lg:gap-[1.35rem]">
                        {topProductArray.map((topPro, i)=>{
                            return(
                            <div key={i} className="">
                                <div className="relative">
                                    <div className="bottom-0 absolute w-full lg:w-fit text-white text-[1.25rem] bg-topProductColor pt-[2.5rem] pb-[1.81rem] pl-[2.25rem] pr-[3.19rem]">
                                        <div className="flex flex-col gap-3 w-[12.375rem] lg:w-fit">
                                            <p className="text-[1.5rem] lg:text-[1.25rem] font-bold lg:font-normal">{topPro.header}</p>
                                            <button className="text-[0.875rem] border-2 border-white rounded-[0.3125rem] flex justify-center items-center font-bold py-[0.94rem]">{topPro.button}</button>
                                        </div>
                                    </div>
                                    <img className="hidden lg:grid" src={topPro.bigImg} alt="topProductimage" />
                                    <img className="grid lg:hidden" src={topPro.smallImg} alt="topProductimage" />
                                </div>
                            </div>                  
                        )})}
                    </div>
            </section>
        </>
    )
}

const topProduct = {
    header : "Top Product Of the Week", 
    button: "EXPLORE ITEM",
    bigImg: topProductImage1, 
    smallImg: smalltopProductImage1,
    topProductArray : [
        {header: "Top Product Of the Week", button: "EXPLORE ITEM", bigImg: topProductImage2, smallImg: smalltopProductImage2},
        {header: "Top Product Of the Week", button: "EXPLORE ITEM", bigImg: topProductImage3, smallImg: smalltopProductImage3},
    ]
}

export default TopProduct