import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Normal Js variable
  let restaurants1 = [];
  //local state variable - Super powerful variable
  const [restaurants, setListOfRestaurant] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
}
export default Body;