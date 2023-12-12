import { classNames } from "../../../utilities/function"
import PropTypes from "prop-types"
const BreadCrum = ({display, currentLocation, currentText, currentHeader})=>{
    return(
        <>
            <div className="featured-container-wrap px-10">
                <div className=" bread-crum-header">
                    <div className={classNames (display ? "block" : 'hidden', "bread-crum-logo")}>
                        <h1 className="hidden md:flex">{currentHeader}</h1>
                    </div>
                    <div className="bread-crum-nav">
                        <a href="#">Home</a>
                        <i className="fa-solid fa-chevron-right"></i>
                        <a href="#" className={classNames (currentLocation ? currentLocation : '')}>{currentText}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BreadCrum
BreadCrum.propTypes ={
    display: PropTypes.string
}