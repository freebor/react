const BestSellerCard = ({sellingCard})=>{
    const {image, header, oldPrice, newPrice, department, showEclipse} = sellingCard;
    return(
        <div className="best-selling">
            <div className="best-selling-image">
                <img src={image} alt="" />
            </div>
            <div className="best-selling-text">
                <h5>{header}</h5>
                <p>{department}</p>
                <p className="price-tag">{oldPrice} <span>{newPrice}</span></p>
                {showEclipse && <div>12345</div>}
            </div>
        </div>
    )
}
export default BestSellerCard