import { useState } from "react"
import {harmburger, cart, search} from "../../utilities/image"

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
                        <li><a href="#">Home</a></li>
                        <li>shop</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                    <div className="tabs-login df">
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
                </div>
            </div>
            <ul className={navClicked ? "small-tabs" : "tabs-hidden"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
    )
}

export default BottomHeader