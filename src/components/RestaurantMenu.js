import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom Hook for fetch restaurant menu : useFetchRestaurantMenu()
  const restaurantInfo = useFetchRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(0);

  const dummy = "dummy data";

  if (restaurantInfo === null) return <Shimmer />;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      .card;

  console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
  restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("categories " ,categories);
  
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;
    
  return (
    <div className="m-4 p-4 bg-gray-200 rounded-lg text-center">
      <h1 className="font-bold py-4 text-red-600 text-lg">{name}</h1>
      <p className="italic">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/**categories accordian */}
      {categories.map((category,index) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
          activeIndex={index}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
