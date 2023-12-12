import BreadCrum from "../productListShowCase/shop-card/BreadCrum"
import ProductUseEffect from "./product-useEffect/ProductUseEffect"
import QuickFox from "./product-quickFox/QuickFox"
import BestProduct from "./best-selling-product/BestProduct"
const ShowProduct =()=>{
    return(
        <>
            <section className="bread-crum">
                <BreadCrum 
                    currentText= 'product'
                    display = {false}

                />
                <ProductUseEffect />
            </section>
            <QuickFox />
            <BestProduct />
        </>
    )
}
export default ShowProduct