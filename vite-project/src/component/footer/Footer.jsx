import Bandage from "./Bandage"
import FooterCard from "./FooterCard"
import {footerLinks} from "../../utilities/mockData"
const Footer =() =>{
    return(
        <section className="featured-container-wrap f-dir">
            <Bandage />
            <div className="footer">
                <div className="footer-links-wrap">
                    {footerLinks.map((footLink)=>{
                        return(
                            <FooterCard 
                                key={footLink.footerHeader}
                                footerProp={footLink}
                            />
                        )
                    })}
                </div>
                <div className="subscribe">
                    <h5>Get In Touch</h5>
                    <div>
                        <div className="subscribe-btn">
                            <input type="email" name="Email" id="email" placeholder="Your Email" />
                            <button>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit adipisicing elit.</p>
                    </div>
                </div>
            </div>
                <section className="bandage-container">
                    <div className="copyRight-wrap">
                        <div className="footer-copyRight">
                            <p className="copyRight">Made With Love By Finland All Right Reserved </p>
                        </div>
                    </div>
                </section>

        </section>
    )
}
export default Footer