import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryComponent from "./CategoryComponent";
const RestaurantMenuComponent = () => {
  
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  
  if (!restaurantMenu || restaurantMenu?.length === 0) {
    return <ShimmerComponent />;
  }

  const { name, costForTwoMessage, avgRating, cuisines } =
  restaurantMenu?.cards[2]?.card?.card?.info;
  
  const itemCards =
  restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;

  const allCards =  restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categoryItems = allCards.filter(c => c?.card?.card?.categories);
  
  return (
    <div className="flex flex-col m-4 p-4 items-center justify-center">
      <div className="bg-lime-950 text-amber-100 w-[500px] p-4 ">
        <h1> <span className="!text-yellow-100"> Restaurant Name :</span> {name}</h1>
        <h3> <span className="!text-yellow-100">Cuisines :</span>  {cuisines?.join(", ")}</h3>
        <h3> <span className="!text-yellow-100">Cost for two :</span> {costForTwoMessage}</h3>
      </div>
      <CategoryComponent categoryItems={categoryItems} />
    </div>
  );
};

export default RestaurantMenuComponent;
