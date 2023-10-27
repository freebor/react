import {AiFillFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import { FaTwitter } from "react-icons/fa6"
import PropTypes from "prop-types"

const TeamUserCard =({teamUserProp})=>{
    const {image, userName, profession} = teamUserProp
    return(
        <section>
            <div className="user-img">
                <img src={image} alt="userImg" />
            </div>
            <div className="user-info container">
                <h5>{userName}</h5>
                <h6>{profession}</h6>
                <span>
                    <AiFillFacebook className="facebook"/>
                    <BsInstagram className="instagram"/>
                    <FaTwitter className="twitter"/>
                </span>
            </div>
        </section>
    )
}
export default TeamUserCard
TeamUserCard.propTypes = {
    teamUserProp: PropTypes.string
}