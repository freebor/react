import { workContent } from "../../utilities/mockData"
const Work = () =>{
    const {workH5, workH2, workText, workBtn, workImage} = workContent
    return(
        <section  className="work-wrap2">
            <div className="work-wrap">
                <div className="work-content">
                    <h5>{workH5}</h5>
                    <h2>{workH2}</h2>
                    <p>{workText}</p>
                    <button>{workBtn}</button>
                </div>
            </div>
            <div className="work-img">
                <img src={workImage} alt="work side image" />
            </div>
        </section>
    )
}
export default Work