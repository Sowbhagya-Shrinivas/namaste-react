import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useFetchRestaurantMenu = (resId) => {
    const [restInfo,setRestInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
      const data = await fetch(
        MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setRestInfo(json.data);
    };
    return restInfo;
};
export default useFetchRestaurantMenu;