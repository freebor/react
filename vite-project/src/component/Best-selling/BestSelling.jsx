import {bestSellingArray} from "../../utilities/mockData"
import BestSellerCard from "./BestSellerCard"

const BestSelling = () =>{
    return(
        <section className="featured-container-wrap">
            <div className="best-services-container best-selling-container">
                <div className="best-service-header">
                    <h2>Featured Products</h2>
                    <h3>THE BEST SERVICES</h3>
                    <p>Problems trying to resolve the conflict between</p>
                </div>
                <div className="best-selling-image-wrap">
                    {bestSellingArray.map((bestSell)=>{
                        return(<BestSellerCard 
                            key = {bestSell.id}
                            sellingCard = {bestSell}
                        />)
                    })}
                </div>
            </div>
        </section>
    )
}
export default BestSelling