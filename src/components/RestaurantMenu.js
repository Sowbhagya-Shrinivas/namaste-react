import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom Hook for fetch restaurant menu : useFetchRestaurantMenu()
  const restaurantInfo = useFetchRestaurantMenu(resId);

  if (restaurantInfo === null) return <Shimmer />;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;
    
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
