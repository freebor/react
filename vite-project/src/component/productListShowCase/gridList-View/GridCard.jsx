import { gridShopCard } from "../../../utilities/mockData"
import BestSellerCard from "../../Best-selling/BestSellerCard"
const GridCard =()=>{
    return(
        <section className="featured-container-wrap">
            <div className="grid-card">
                {gridShopCard.map((gridshop)=>{
                    return(
                        <BestSellerCard 
                            key={gridshop.id}
                            sellingCard = {gridshop}
                        />
                    )
                })}
            </div>
        </section>
    )
}
export default GridCard