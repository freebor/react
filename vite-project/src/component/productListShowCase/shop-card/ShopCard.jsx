const ShopCard = ({ShopCardProp})=>{
    const {image, text, header} = ShopCardProp;
    return(
        <>
            <div className="shop-card">
                <img src={image} alt="img" />
                <div className="shop-card-text">    
                    <h6>{header}</h6>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
export default ShopCard