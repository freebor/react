import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const Trial = () => {
  return (
    <div className="container trial">
      <div className="team-text">
        <h2>
          <span>Start your</span>
          <span>14 days free trial</span>
        </h2>
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
      </div>
      <div className="priceCard-btn">
        <button>Try it free now</button>
      </div>
      <div className="priceCard-social">
        <AiOutlineTwitter className="priceSocial" />
        <AiFillFacebook className="priceSocial" />
        <AiOutlineInstagram className="priceSocial" />
        <AiFillLinkedin className="priceSocial" />
      </div>
    </div>
  );
};
