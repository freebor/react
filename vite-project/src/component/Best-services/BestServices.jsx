import {bestService} from "../../utilities/mockData"
import BestServiceCard from "./BestServiceCard"

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
                    {bestService.map((services)=>{
                        return(<BestServiceCard 
                            key = {services.img}
                            service = {services}
                        />)
                    })};
                </div>
            </div>
        </section>
    )
}

export default BestService