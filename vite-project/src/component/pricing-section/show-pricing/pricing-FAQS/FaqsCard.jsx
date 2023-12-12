import {AiOutlineRight} from "react-icons/ai"
import { pricingFaqsArray } from "../../../../utilities/mockData"

export const FaqsCard = () => {
  return (
    <div className=" faqs-container">
        {pricingFaqsArray.faqsList.map((faqs)=>{
            return(
                <div key={faqs.faqsListHeader} className="faqs-list">
                    <span className="faqs-arrow">
                        <AiOutlineRight />
                    </span>
                    <div className="faqs-content">
                        <p>{faqs.faqsListHeader}</p>
                        <p>{faqs.faqsListText}</p>                        
                    </div> 
                </div>
            )
        })}
        <p></p>
    </div>
  )
}
