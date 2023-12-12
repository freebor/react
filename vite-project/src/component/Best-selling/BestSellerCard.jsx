import PropTypes from "prop-types"
const BestSellerCard = ({sellingCard, bgProduct})=>{
    const {image, header, oldPrice, newPrice, department, showEclipse} = sellingCard;
    return(
        <div className={`best-selling ${bgProduct ?? ""}`}>
            <div className="best-selling-image">
                <img src={image} alt="" />
            </div>
            <div className="best-selling-text">
                <h5>{header}</h5>
                <p>{department}</p>
                <p className="price-tag">{oldPrice} <span>{newPrice}</span></p>
                {showEclipse && <div className="eclipse">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>    
                </div>}
            </div>
            <button>
                
            </button>
        </div>
    )
}
export default BestSellerCard
BestSellerCard.propTypes = {
    sellingCard: PropTypes.string,  
    bgProduct: PropTypes.string
}