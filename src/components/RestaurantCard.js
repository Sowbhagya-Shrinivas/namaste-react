import { useContext } from "react";
import { MEDIA_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={MEDIA_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component : input : restraurantCard , output : restaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <lable className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </lable>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export const withOpenCloseLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
        <label>Open</label>
        <RestaurantCard  {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
