import BottomHeader from "../component/Header/BottomHeader"
import TopHeader from "../component/Header/TopHeader"
import Footer from "../component/footer/Footer";
import Client from "../component/Client"
import ShowProduct from "../component/product-page/ShowProduct";

const ProductPage =()=>{
    return(
        <>
            <TopHeader 
            bgColor={'green'}
            />
            <BottomHeader />
            <ShowProduct />
            <Client />
            <Footer />
        </>
    )
}
export default ProductPage