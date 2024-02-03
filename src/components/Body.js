import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="resto-container">
          {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resObj={restaurant} />
          ))}
        </div>
      </div>
    );
}
export default Body;