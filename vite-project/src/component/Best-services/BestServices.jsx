import arrowGrowth from "../../assets/img/arrow-growth.svg"
import bookReader from "../../assets/img/book-reader.svg"
import carbonBook from "../../assets/img/carbon_book.svg"

const BestService = () =>{
    return(
        <section className="featured-container-wrap">
            <div className="best-services-container">
                <div className="best-service-header">
                    <h2>Featured Products</h2>
                    <h3>THE BEST SERVICES</h3>
                    <p>Problems trying to resolve the conflict between</p>
                </div>
                <div className="best-service-image-wrap">
                    <div className="best-services">
                        <img src={bookReader} alt="" />
                        <h3>Easy Wins</h3>
                        <p>Get your best looking smile now!</p>
                    </div>
                    <div className="best-services">
                        <img src={carbonBook} alt="" />
                        <h3>Concrete</h3>
                        <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                    </div>
                    <div className="best-services">
                        <img src={arrowGrowth} alt="" />
                        <h3>Hack Growth</h3>
                        <p>Overcame any hurdle or any other problem.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestService