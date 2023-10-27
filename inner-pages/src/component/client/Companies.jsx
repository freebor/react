import Client from "./Client" 
import { companyContent } from "../../utilities/mockData"
const Companies =()=>{
    const {companyHeader, companyText} = companyContent
    return(
        <section className="containers">
            <div className="company-wrap">
                <div className="comText">
                    <h2>{companyHeader}</h2>
                    <p>{companyText}</p>
                </div>
                <div className="company-container">
                    <Client />
                </div>
            </div>
        </section>
    )
}
export default Companies