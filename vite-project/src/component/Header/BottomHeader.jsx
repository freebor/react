import harmburger from "../../img/harmburger.svg"
import search from "../../img/search.svg"
import cart from "../../img/cart.svg"
import { useState } from "react"

const BottomHeader = ()=>{
    const [navClicked, setNavNotClicked] = useState(false)
    return (
        <>
            <div className="bottom-header">
                <div className="nav-brand df">
                    <p className="logo">Bandage</p>
                </div>
                <div className="small-nav-link">
                    <img className="small-nav-icon" src={search} alt="harmburger-icon" />
                    <img className="small-nav-icon" src={cart} alt="harmburger-icon" />
                    <img className="small-nav-icon" src={harmburger} alt="harmburger-icon" />
                </div>

                <div className="nav-link df">
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
                            <i class="fa-regular fa-user"></i>
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
            <ul className="small-tabs">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
    )
}

export default BottomHeader