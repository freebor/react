import PropTypes from "prop-types"
const TopHeader = ({bgColor})=>{
    return (
        <div className={`top-header ${bgColor ?? ""}`}>
            <div className="num-email df">
                <div className="number df">
                    <i className="fa-solid fa-phone"></i>
                    <a href="#">(225) 556-0118</a>
                </div>
                <div className="email df">
                    <i className="fa-regular fa-envelope"></i>
                    <a href="chisomnwanoruo6@gmail.com">chisomnwanoruo6@gmail.com</a>
                </div>
            </div>
            <div className="follow-text">
                <p>follow us to get a chance to win 80% off</p>
            </div>
            <div className="follow-icon df">
                <p>Follow Us :</p>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    )
}

export default TopHeader
TopHeader.propTypes= {
    bgColor: PropTypes.string
}