import topProductImage1 from "../../assets/img/top-product.png"
import topProductImage2 from "../../assets/img/top-product2.png"
import topProductImage3 from "../../assets/img/top-product3.png"
import smalltopProductImage1 from "../../assets/img/smallScreen-top-product.png"
import smalltopProductImage2 from "../../assets/img/smallScreen-top-product2.png"
import smalltopProductImage3 from "../../assets/img/smallScreen-top-product3.png"

const TopProduct = ()=>{
    return(
        <>
            <section className="top-product-wrap">
                <div className="product-container">
                    <div className="first-product-half">
                        <div className="top-product">
                            <div className="image-text">
                                <p>Top Product Of the Week</p>
                                <button>EXPLORE ITEM</button>
                            </div>
                            <img className="hide_smallSreen" src={topProductImage1} alt="topProductimage" />
                            <img className="display-smallScreen" src={smalltopProductImage1} alt="topProductimage" />
                        </div>
                    </div>
                    <div className="second-product-half">
                        <div className="top-product">
                            <div className="image-text">
                                <p>Top Product Of the Week</p>
                                <button>EXPLORE ITEM</button>
                            </div>                    
                            <img className="hide_smallSreen" src={topProductImage2} alt="topProductimage" />
                            <img className="display-smallScreen" src={smalltopProductImage2} alt="topProductimage" />
                        </div>
                        <div className="top-product">
                            <div className="image-text">
                                <p>Top Product Of the Week</p>
                                <button>EXPLORE ITEM</button>
                            </div>                        
                            <img className="hide_smallSreen" src={topProductImage3} alt="topProductimage" />
                            <img className="display-smallScreen" src={smalltopProductImage3} alt="topProductimage" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopProduct