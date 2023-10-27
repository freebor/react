import { aboutBanner } from "../../utilities/image"

const AboutBanner =() =>{
    return(
        <section className="container">
            <div className="about-banner-wrap">
                <div className="about-text">
                    <h2>ABOUT US</h2>
                    <p>We know how large objects will act, but things on a small scale just do not act that way.</p>

                    <button>Get Quote Now</button>
                </div>
                <div className="about-image">
                    <img src={aboutBanner} alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutBanner