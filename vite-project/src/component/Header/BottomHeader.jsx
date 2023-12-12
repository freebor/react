import { useState } from "react"
import {harmburger, cart, search} from "../../utilities/image"
import { bottomHeader } from "../../utilities/mockData"
import { FaArrowRight } from 'react-icons/fa'
import { AiOutlineRight } from 'react-icons/ai'
import { HOME } from "../routes"

const BottomHeader = ({BgsmallColor, showLoginButton, hideLink, showSamplePrice})=>{
    const [navClicked, setNavNotClicked] = useState(false)
    return (
        <>
            <div className="bottom-header">
                <div className="nav-brand df">
                    <p className="logo">Bandage</p>
                </div>
                <div className="small-nav-link">
                    <button className="small-nav-icon"><img src={search} alt="harmburger-icon" /></button>
                    <button className="small-nav-icon"><img src={cart} alt="harmburger-icon" /></button>
                    <button className="small-nav-icon" onClick={() => setNavNotClicked(!navClicked)}><img src={harmburger} alt="harmburger-icon" /></button>
                </div>

                <div className="nav-link">
                    <ul className="tabs df">
                        {bottomHeader.map((btmHeader, i)=>{
                            return(
                                <li key={i}><a href={btmHeader.href}>{btmHeader.tabs}</a></li>
                            )
                        })}
                    </ul>
                    <div className={`tabs-login df ${hideLink}`}>
                        <div className="login df">
                            <i className="fa-regular fa-user"></i>
                            <a href="#">Login</a><span>/</span>
                            <a href="#">Register</a>
                        </div>
                        <span className="reg-icon">
                            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#"><i className="fa-solid fa-cart-shopping"></i><span>1</span></a>
                            <a href="#"><i className="fa-regular fa-heart"></i><span>1</span></a>
                        </span>
                    </div>
                    {showLoginButton && <div className="tabs-login df">
                        <div className="login df">
                            <a href="#">Login</a>
                        </div>
                        <button className="login-btn">
                            <span>Become a member</span>
                            <FaArrowRight />
                        </button>
                    </div>}
                </div>
            </div>
            <ul className={navClicked ? `small-tabs ${BgsmallColor ?? ""}` : "tabs-hidden"}>
                {bottomHeader.map((btmHeader, i)=>{
                    return(
                        <li key={i}><a href={btmHeader.href}>{btmHeader.tabs}</a></li>
                    )
                })}
            </ul>
            {showSamplePrice && <div className="container pricing-wrap">
                <h5>PRICING</h5>
                <h2>Sample Pricing</h2>
                <span className="price-tabs">
                    <a href={HOME}>Home</a>
                    <AiOutlineRight className="arrow-l"/>
                    <a href="#">Pricing</a>
                </span>
            </div>}
        </>
    )
}

export default BottomHeader