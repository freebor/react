import BreadCrum from "../productListShowCase/shop-card/BreadCrum"
import ProductUseEffect from "./product-useEffect/ProductUseEffect"
import QuickFox from "./product-quickFox/QuickFox"
const ShowProduct =()=>{
    return(
        <>
            <section className="bread-crum">
                <BreadCrum 
                    display={'hide-breadCrum'}
                />
                <ProductUseEffect />
            </section>
            <QuickFox />
        </>
    )
}
export default ShowProduct