import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems ,setShowIndex,dummy, activeIndex}) => {
  //const [showItems, setShowItems] = useState(false);

  const handleClick = (index) => {
    //setShowItems(!showItems);
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {/** Accordian Header */}
      <div
        className=" w-6/12 bg-gray-50 shadow-xl
       p-4  mx-auto my-4"
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => handleClick(activeIndex)}
        >
          <span className=" font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/**Accordian Body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy}/> }
      </div>
    </div>
  );
};
export default RestaurantCategory;
