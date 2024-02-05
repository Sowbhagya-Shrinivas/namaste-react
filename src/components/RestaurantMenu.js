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
    <div className="m-4 p-4 bg-gray-200 rounded-lg">
      <h1 className="font-bold py-4 text-red-600">{name}</h1>
      <p className="italic">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="py-4 font-bold text-red-400">Menu</h2>
      <ul className="px-4 list-disc list-outside italic">
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
