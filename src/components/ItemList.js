import { useDispatch } from "react-redux";
import { MEDIA_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items}) => {

  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 flex border-black border-b text-left justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className=" text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 p-4 h-auto">
            <div className="absolute">
              <button className="p-2 bg-black shadow-lg mx-10 text-white rounded-md"
              onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img src={MEDIA_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
