import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
const BestSellerCard = ({sellingCard, bgProduct})=>{
    const dispatch = useDispatch()
    const {image, header, oldPrice, newPrice, department, showEclipse} = sellingCard;
    const returnAds = (data) =>{
            dispatch(addToCart(data))
    }
    return(
        <div className={`best-selling-container group  ${bgProduct ?? ""}`}>
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
            <button onClick={()=> returnAds(sellingCard)} className="hover:bg-loginLinkColor transition-all hover:text-white text-loginLinkColor border-2 group-hover:flex hidden border-loginLinkColor text-[0.875rem] font-bold py-[.75rem] px-6 rounded">
                Add to cart
            </button>
            </div>
        </div>
    )
}
export default BestSellerCard
BestSellerCard.propTypes = {
    sellingCard: PropTypes.object,  
    bgProduct: PropTypes.object
}