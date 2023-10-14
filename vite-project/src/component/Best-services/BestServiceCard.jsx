const BestServiceCard = ({service})=>{
    const {content, header, img} = service;
    return(
        <div className="best-services">
            <img src={img} alt="" />
            <h3>{header}</h3>
            <p>{content}</p>
        </div>
    )
}
export default BestServiceCard