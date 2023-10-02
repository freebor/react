import BottomHeader from "./BottomHeader"
import TopHeader from "./TopHeader"
import bannerImg from "../../img/banner.png"

const Header = ()=>{
    return (
        <header className="main-content">
            <div>
                <TopHeader />
                <BottomHeader />
            </div>
            <section className="banner">
                <div className="banner-text df">
                    <div className="center-text">
                        <p>SUMMER 2023</p>
                        <h1>NEW COLLECTION</h1>
                        <p>We know how large objects will act, but things on a scale.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="banner-image">
                    <img src={bannerImg} alt="Banner" />
                </div>
            </section>
        </header>
    )
}

export default Header