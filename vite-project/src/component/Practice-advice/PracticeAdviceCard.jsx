import {arrowRight, starIcon, downloadIcon, heartIcon, cartIcon, eyeIcon, clockIcon, chartWaveIcon, chartIcon} from "../../utilities/image"
import PropTypes from "prop-types"

const PracticeAdviceCard =({product})=>{
    const {department, title, desc, sales, oldPrice, newPrice, time, lessons, progress, date, img} = product;
    return(
        <div className="practiceAdvice-card">
            <div className="pa-card-image img1" style={{backgroundImage: `url(${img})`}}>
                <p className="hidden-sm">Sale</p>
                <p className="hidden-lg">New</p>
                <div className="palm-text-icon">
                    <span><img src={heartIcon} alt="icons" /></span>
                    <span><img src={cartIcon} alt="icons" /></span>
                    <span><img src={eyeIcon} alt="icons" /></span>
                </div>
            </div>
            <div className="pa-card-text">
                <div className="pa-card-text-header">
                    <a href="#">{department}</a>
                    <p><img src={starIcon} alt="star" /><span>4.9</span></p>
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
                <div className="download-icon hidden-sm">
                    <img src={downloadIcon} alt="download" />
                    <p>{sales}</p>
                </div>
                <p className="price-tag hidden-sm">{oldPrice}<span>{newPrice}</span></p>
                <div className="pa-color hidden-sm">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="chart-icon">
                    <p><img src={clockIcon} alt="icons" />{time}</p>
                    <p><img src={chartWaveIcon} alt="icons" />{lessons}</p>
                    <p><img src={chartIcon} alt="icons" />{progress}</p>
                </div>
                <div className="chart-icon-sm">
                    <p><img src={clockIcon} alt="icons" />{date}</p>
                    <p><img src={chartIcon} alt="icons" />{progress}</p>
                </div>
                <div className="pa-card-btn"><button>Learn More <img src={arrowRight} alt="" /></button></div>
            </div>
        </div>
    )
}
export default PracticeAdviceCard
PracticeAdviceCard.propTypes = {
    product : PropTypes.string
}