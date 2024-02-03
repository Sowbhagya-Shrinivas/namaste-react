import {MEDIA_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resObj} = props;
    const {cloudinaryImgId,name,cuisins,avgRating,costForTwo,deliveryTime} = resObj?.data;
    return(
        <div className="rest-card">
            <img className="res-logo"
            alt="res-logo" src={MEDIA_URL+cloudinaryImgId}/>
            <h3>{name}</h3>
            <h4>{cuisins.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4> {costForTwo / 100}</h4>
            <h4> {deliveryTime} minutes</h4>
        </div>
    );
}
export default RestaurantCard;