import RestaurantCard, {withPromotedLabel,withOpenCloseLabel} from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Normal Js variable
  let restaurants1 = [];
  //local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  console.log("listOfRestaurants",listOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const RestaurantOpenClose = withOpenCloseLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //custom hook to check online status : useOnlineStatus();
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return <h1>Looks like you are offline!!! Please check your internet connection</h1>
  }

  const {setUserInfo, loggedInUser} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredData = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(filteredData);
              setFilteredRestaurant(filteredData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="serch m-4 p-4 flex items-center">
          <label>UserName </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants?.info.id}
            to={"/restaurants/" + restaurants?.info.id}
          >
            {restaurants?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurants?.info} />
            ) : (
              <RestaurantCard resData={restaurants?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Body;