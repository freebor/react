import { problemTry } from "../../utilities/mockData"
const ProbTry =() =>{
    const {probTryHeader, problemTryText1, problemTryText2} = problemTry
    return(
        <section className="container probTry-container">
            <div className="probTry-hold">
                <div className="probTry-top">
                    <p>{probTryHeader}</p>
                    <h2>{problemTryText1}</h2>
                </div>
                <div className="probTry-bottom">
                    <p>{problemTryText2}</p>
                </div>
            </div>
        </section>
    )
}
export default ProbTry