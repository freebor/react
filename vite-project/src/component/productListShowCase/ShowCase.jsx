import BreadCrum from "./shop-card/BreadCrum"
import GridList from "./gridList-View/GridList"
import GridCard from "./gridList-View/GridCard"
import Pagination from "./gridList-View/Pagination"
const ShowCase = ()=>{
    return(
        <>
            <BreadCrum />
            <GridList/>
            <GridCard/>
            <Pagination />
        </>
    )
}
export default ShowCase