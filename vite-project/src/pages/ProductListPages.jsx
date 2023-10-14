import BottomHeader from "../component/Header/BottomHeader"
import TopHeader from "../component/Header/TopHeader"
import Footer from "../component/footer/Footer";
import Client from "../component/Client"
import ShowCase from "../component/productListShowCase/ShowCase";


const ProductListPage =()=>{
    return(
        <>
            <TopHeader 
            bgColor={'green'}
            />
            <BottomHeader />
            <ShowCase />
            <Client />
            <Footer />
        </>
    )
}
export default ProductListPage