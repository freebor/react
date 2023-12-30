import {arrowRight, starIcon, downloadIcon, heartIcon, cartIcon, eyeIcon, clockIcon, chartWaveIcon, chartIcon} from "../../utilities/image"
import PropTypes from "prop-types"
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea, FaChevronRight } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";

const PracticeAdviceCard =({product})=>{
    const {department, title, desc, sales, oldPrice, newPrice, time, lessons, progress, date, img} = product;
    return(
        <div className="flex justify-center lg:w-[30rem] ">
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
                <ul className="flex gap-[0.94rem] lg:hidden text-grayText-10 text-[0.75rem]">
                    <li className="text-newLightBlue">Google</li>
                    <li>Trending</li>
                    <li>New</li>
                </ul>
                <div className="pa-card-text-header">
                    <a href="#">{department}</a>
                    <p><img src={starIcon} alt="star" /><span>4.9</span></p>
                </div>
                <h5>{title}</h5>
                <p>{desc}</p>
                <div className="download-icon items-center hidden-sm">
                    <BsDownload />
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
                    <p className="flex gap-[0.31rem]"><LuAlarmClock className="text-loginLinkColor"/>{time}</p>
                    <p className="flex items-center"><LuWaves className="text-alertColor"/>{lessons}</p>
                    <p className="flex gap-[0.31rem]"><FaChartArea className="text-greenColor"/>{progress}</p>
                </div>
                <div className="chart-icon-sm w-[80%]">
                    <span className="flex gap-[0.31rem] text-[0.875rem]">
                        <LuAlarmClock className="text-loginLinkColor"/>
                        <p>{date}</p>
                    </span>
                    <span className="flex gap-[0.31rem] text-[0.875rem]">
                        <FaChartArea className="text-greenColor"/>
                        <p>{progress}</p>
                    </span>
                </div>
                <div className="flex items-center gap-[0.62rem]">
                    <button className="text-grayText-10 text-[0.875rem] font-bold">Learn More </button>
                    <FaChevronRight className="text-loginLinkColor"/>
                </div>
            </div>
        </div>
    )
}
export default PracticeAdviceCard
PracticeAdviceCard.propTypes = {
    product : PropTypes.object
}