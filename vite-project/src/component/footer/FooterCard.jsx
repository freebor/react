import PropTypes from "prop-types"
const FooterCard = ({footerProp})=>{
    const{footerHeader}= footerProp;
    return(
        <div className="footer-links">
            <h5>{footerHeader}</h5>
            <div className="Tlink">
                {footerProp.links.map((eachLink)=>{
                    return(
                        <a href={eachLink.href} key={eachLink.childKey}>{eachLink.link1}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
export default FooterCard
FooterCard.propTypes = {
    footerProp : PropTypes.object
}