const BreadCrum = ({display})=>{
    return(
        <>
            <div className="featured-container-wrap">
                <div className=" bread-crum-header">
                    <div className={`bread-crum-logo ${display ?? ''}`}>
                        <h1>Shop</h1>
                    </div>
                    <div className="bread-crum-nav">
                        <a href="#">Home</a>
                        <i className="fa-solid fa-chevron-right"></i>
                        <a href="#">Shop</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BreadCrum