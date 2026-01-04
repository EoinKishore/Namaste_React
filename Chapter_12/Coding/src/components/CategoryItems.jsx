import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartStore";
const CategoryItems = ({ categoryItems, isCart = false }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const itemsToRender = isCart
    ? categoryItems
    : categoryItems
        .filter(i => i?.itemCards)
        .flatMap(i => i.itemCards);

  return (
    <div className="w-full">
      {itemsToRender.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex p-4 m-4 w-full bg-gray-100 rounded-2xl border border-gray-300"
        >
          <div className="flex items-center w-[200px] relative">
            {!isCart && (
              <button
                className="bg-black text-amber-100 rounded-tl-2xl p-2 absolute bottom-[126px] right-[171px]"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            )}
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="h-[150px] w-[200px] rounded"
            />
          </div>

          <div className="ml-3 flex flex-1 flex-col justify-center gap-3">
            <h4 className="font-bold">{item?.card?.info?.name}</h4>
            <p className="text-xs">{item?.card?.info?.description}</p>
            <span className="font-semibold">
              ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryItems;