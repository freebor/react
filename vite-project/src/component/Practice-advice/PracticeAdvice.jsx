import {products} from "../../utilities/mockData" 
import PracticeAdviceCard from "../Practice-advice/PracticeAdviceCard"

const PracticeAdvice = ()=>{
    return(
        <>
            <section className="featured-container-wrap">
                <div className="practiceAdvice-container">
                    <div className="practiceAdvice-header">
                        <h6>Practice Advice</h6>
                        <h3>Featured Posts</h3>
                    </div>
                    <div className="practiceAdvice-card-container">

                        {products.map((product, i)=>{
                            return(<PracticeAdviceCard 
                                key = {product.img}
                                product = {product}
                            />);
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default PracticeAdvice