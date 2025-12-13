import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryComponent from "./CategoryComponent";
import { useState } from "react";
const RestaurantMenuComponent = () => {
  
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);
  const [showItem , setShowItem] = useState(null);

  
  if (!restaurantMenu || restaurantMenu?.length === 0) {
    return <ShimmerComponent />;
  }

  const { name, costForTwoMessage, cuisines } =
  restaurantMenu?.cards[2]?.card?.card?.info;

  const allCards =  restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categoryItems = allCards.filter(c => c?.card?.card?.categories);
  
  return (
    <div className="flex flex-col m-4 p-4 items-center justify-center">
      <div className="bg-lime-950 text-amber-100 w-[500px] p-4 ">
        <h1> <span> Restaurant Name :</span> {name}</h1>
        <h3> <span>Cuisines :</span>  {cuisines?.join(", ")}</h3>
        <h3> <span>Cost for two :</span> {costForTwoMessage}</h3>
      </div>
      {categoryItems.map((item, index) => {
        return <CategoryComponent categoryItems={item} showItem={index === showItem ? true : false} setShowItem={() => {
          if (showItem === index) {
            setShowItem(null);
          }
          else {
            setShowItem(index);
          }
        }} key={item.card.card.categoryId} />
      })}
      
    </div>
  );
};

export default RestaurantMenuComponent;
