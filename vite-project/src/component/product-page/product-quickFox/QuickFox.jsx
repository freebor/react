import QuickFoxTextCard from "./QuickFoxTextCard"
import QuickFoxListCard from "./QuickFoxListCard"
import { quickfoxImg } from "../../../utilities/image"
const QuickFox = () =>{
    return(
        <section className="featured-container-wrap f-dir">
            <div className="quick-fox-header">
                <p>Description</p>
                <p>Additional Information</p>
                <p>Reviews <span className="reviewCount">(0)</span></p>
            </div>
            <div className="quick-fox-card">
                <div className="quickfoxImg">
                    <img src={quickfoxImg} alt="" />
                </div>
                <div className="quickfoxText">
                    <QuickFoxTextCard />
                </div>
                <div className="quickfoxList">
                    <QuickFoxListCard />
                </div>
            </div>
        </section>
    )
}
export default QuickFox