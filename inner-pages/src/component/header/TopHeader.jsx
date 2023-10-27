import { useState } from "react"
import {harmburger, cart, search} from "../../utilities/image"
import { bottomHeader } from "../../utilities/mockData"
import { FaArrowRight } from 'react-icons/fa'
const BottomHeader = ()=>{
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
                    <div className="tabs-login df">
                        <div className="login df">
                            <a href="#">Login</a>
                        </div>
                        <button className="login-btn">
                            <span>Become a member</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <ul className={navClicked ? "small-tabs" : "tabs-hidden"}>
                {bottomHeader.map((btmHeader, i)=>{
                    return(
                        <li  key={i}><a href={btmHeader.href}>{btmHeader.tabs}</a></li>
                    )
                })}
            </ul>
        </>
    )
}

export default BottomHeader