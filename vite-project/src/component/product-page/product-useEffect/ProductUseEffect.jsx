import { starBorder, heartIcon, cartIcon, eyeIcon, couch, chair } from "../../../utilities/image"
import { UseEffectCards } from "../../../utilities/mockData"
import { FaStar } from "react-icons/fa"
const ProductUseEffect = ()=>{
    const {cardTitle, price, text, starText} = UseEffectCards;
    return(
        <section className="featured-container-wrap">
            <div className="productUseEffect-card">
                {/* useEffect card image section */}
                <div className="productUseEffect-card-image">
                    <div className="product-card-image">
                        <img src={chair} alt="" />
                        <div className="productImage-arrow">
                            <a href="#"><i class="fa-solid fa-chevron-left"></i></a>
                            <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div className="product-small-card">
                        <div className="product-small-card-image">
                            <img src={couch} alt="" />
                        </div>
                        <div className="product-small-card-image image-active">
                            <img src={chair} alt="" />
                        </div>
                    </div>
                </div>
                {/* useEffect card text section */}
                <div className="productUseEffect-card-text">
                    <div className="card-title">
                        <h2>{cardTitle}</h2>
                    </div>
                    <div className="star-hold">
                        {[...Array(4)].map(()=><FaStar className="star"/>)}
                        <img src={starBorder} alt="star-border" />
                        <span>{starText}</span>
                    </div>
                    <div className="cardPrice">
                        <h5>{price}</h5>
                    </div>
                    <div className="cardStock">
                        <span>Availability :</span><span>In Stock</span>
                    </div>
                    <div className="cardText">
                        <p>{text}</p>
                    </div>
                    <span className="cardLine"></span>
                    <div className="eclipse use-effect-eclipse">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>    
                    </div>
                    <div className="cardBtn">
                        <button>Select Options</button>
                        <a href="#"><img src={heartIcon} alt="" /></a>
                        <a href="#"><img src={cartIcon} alt="" /></a>
                        <a href="#"><img src={eyeIcon} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductUseEffect