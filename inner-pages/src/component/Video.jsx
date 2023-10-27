import { BsFillPlayFill } from "react-icons/bs"
import { video } from "../utilities/image"

const Video =()=>{
    return(
        <section className="container">
            <div className="video-wrap">
                <img src={video} alt="video" />
                <div className="vid-btn">
                    <button><BsFillPlayFill /></button>
                </div>
            </div>
        </section>
    )
}
export default Video 