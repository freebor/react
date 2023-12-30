import {facebook, twitter, instagram} from "../../utilities/image"
const Bandage = ()=>{
    return(
        <section className="bandage-container px-8 md:px-4">
            <div className="bandage-wrap">
                <div className="footer-bandage">
                    <p className="logo">Bandage</p>
                </div>
                <div className="footer-icon">
                    <a href="#" className="small-nav-icon"><img src={facebook} alt="harmburger-icon" /></a>
                    <a href="#" className="small-nav-icon"><img src={instagram} alt="harmburger-icon" /></a>
                    <a href="#" className="small-nav-icon"><img src={twitter} alt="harmburger-icon" /></a>
                </div>
            </div>
        </section>
    )
}
export default Bandage