import Bandage from "./Bandage"
import FooterCard from "./FooterCard"
import {footerLinks} from "../../utilities/mockData"
const Footer =() =>{
    return(
        <section className="featured-container-wrap items-center flex flex-col">
            <Bandage />
            <div className="flex flex-col lg:flex-row xl:justify-center justify-between lg:w-[97%]">
                <div className="flex flex-col md:flex-row gap-[1.88rem]">
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
                        <p className="copyRight md:px-4">Made With Love By Finland All Right Reserved </p>
                    </div>
                </div>
            </section>

        </section>
    )
}
export default Footer