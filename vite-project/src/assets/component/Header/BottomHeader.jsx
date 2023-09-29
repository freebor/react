

const BottomHeader = ()=>{
    return (
        <div className="bottom-header df">
            <div className="nav-brand df">
                <p className="logo">Bandage</p>
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
                        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i><span>1</span></a>
                        <a href="#"><i class="fa-regular fa-heart"></i><span>1</span></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader