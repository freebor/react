import BreadCrum from "./shop-card/BreadCrum"
import GridList from "./gridList-View/GridList"
import GridCard from "./gridList-View/GridCard"
import Pagination from "./gridList-View/Pagination"
import ShopCardBanner from "./shop-card/shopCardBanner"
const ShowCase = ()=>{
    return(
        <>
            <section className="bread-crum">
                <BreadCrum 
                    currentText= 'Shop'
                    currentHeader= 'Shop'
                />
                <ShopCardBanner />
            </section>
            <GridList/>
            <GridCard/>
            <Pagination />
        </>
    )
}
export default ShowCase