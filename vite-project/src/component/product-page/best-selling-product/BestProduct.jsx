import { bestProductArray } from "../../../utilities/mockData"
import BestSellerCard from "../../Best-selling/BestSellerCard"
const BestProduct =()=>{
    return(
        <section className="featured-container-wrap bread-crum ">
            <div className="best-product-wrap">
                <div className="best-product-header">
                    <h2>BESTSELLER PRODUCTS</h2>
                </div>
                <div className="product-line"></div>
                <div className="best-product-map">
                    {bestProductArray.map((bestProduct)=>{
                        return(
                            <BestSellerCard 
                                bgProduct = {"bg-bestProduct"}
                                key={bestProduct.id}
                                sellingCard={bestProduct}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default BestProduct