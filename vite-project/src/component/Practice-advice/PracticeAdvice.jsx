import {products} from "../../utilities/mockData" 
import PracticeAdviceCard from "../Practice-advice/PracticeAdviceCard"

const PracticeAdvice = ()=>{
    return(
        <>
            <section className="featured-container-wrap items-center">
                <div className="practiceAdvice-container">
                    <div className="practiceAdvice-header">
                        <h6>Practice Advice</h6>
                        <h3>Featured Posts</h3>
                    </div>
                    <div className="flex flex-col justify-center gap-[1.88rem] md:flex-row">
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