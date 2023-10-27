import {AiFillFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import { FaTwitter } from "react-icons/fa6"

const Bandage = ()=>{
    return(
        <section className="bandage-container">
            <div className="bandage-wrap">
                <div className="footer-bandage">
                    <p className="logo">Bandage</p>
                </div>
                <div className="footer-icon">
                    <a href="#" className="small-nav-icon"><AiFillFacebook /></a>
                    <a href="#" className="small-nav-icon"><BsInstagram /></a>
                    <a href="#" className="small-nav-icon"><FaTwitter /></a>
                </div>
            </div>
        </section>
    )
}
export default Bandage