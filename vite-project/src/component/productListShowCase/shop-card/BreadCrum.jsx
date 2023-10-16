import ShopCard from "./ShopCard"
import { shopCard } from "../../../utilities/mockData"
const BreadCrum = ()=>{
    return(
        <section className="bread-crum">
            <div className="featured-container-wrap">
                <div className=" bread-crum-header">
                    <div className="bread-crum-logo">
                        <h1>Shop</h1>
                    </div>
                    <div className="bread-crum-nav">
                        <a href="#">Home</a>
                        <i className="fa-solid fa-chevron-right"></i>
                        <a href="#">Shop</a>
                    </div>
                </div>
            </div>
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
        </section>
    )
}
export default BreadCrum