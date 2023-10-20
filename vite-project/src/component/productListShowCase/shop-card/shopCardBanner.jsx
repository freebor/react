import ShopCard from "./ShopCard"
import { shopCard } from "../../../utilities/mockData"
const ShopCardBanner = ()=>{
    return(
        <>
            <div className="featured-container-wrap shop-card-wrap">
                {shopCard.map((shopImg)=>{
                    return(
                        <ShopCard 
                        key={shopImg.image}
                        ShopCardProp={shopImg}   
                        />
                    )

                })}
            </div>
        </>
    )
}
export default ShopCardBanner