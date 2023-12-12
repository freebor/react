import { BsCheck2 } from "react-icons/bs";

export const PriceCards = ({ pricingCardProp }) => {
  const { cardHeader, Cardtext, CardAmount, cardBtn, cardList } =
    pricingCardProp;
  return (
    <div className="priceCard-wrap">
      <h3>{cardHeader}</h3>
      <p>{Cardtext}</p>
      <div className="priceCard-amount">
        <span className="card-amount">{CardAmount}</span>
        <span className="cardAmountText">
          <p>$</p>
          <p>Per Month</p>
        </span>
      </div>
      <div className="priceCard-list">
        <ul>
          {cardList.map((cardListMap, i) => (
            <li key={i}>
                <span className={cardListMap.isCompleted ? 'checked-icon' : 'unChecked-icon'}>
                  <BsCheck2 />
                </span>
                <p>{cardListMap.list1}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="priceCard-btn">
        <button>{cardBtn}</button>
      </div>
    </div>
  );
};
