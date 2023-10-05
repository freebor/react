import featureImage1 from "../../assets/img/feature1.png"
import featureImage2 from "../../assets/img/feature2.png"

const Feature = () =>{
    return(
        <section className="featured-container-wrap">
            <div className="featured-container">
                <div className="featured-image-wrap">
                    <div className="featured-image">
                        <img src={featureImage1} alt="featured-product img" />
                    </div>
                    <div className="featured-image">
                        <img src={featureImage2} alt="featured-product img" />
                    </div>
                </div>
                <div className="featured-text-wrap">
                    <div className="featured-text">
                        <h5>Featured Products</h5>
                        <h2>We love what we do</h2>
                        <p>
                            <span>Problems trying to resolve the conflict between 
                            the two major realms of Classical physics: 
                            Newtonian mechanics.</span>
                            
                            <span>Problems trying to resolve the conflict between 
                            the two major realms of Classical physics: 
                            Newtonian mechanics</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feature