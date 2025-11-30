import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";
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
  
  return (
    <div className="flex flex-col m-4 p-4 bg-green-200 items-center justify-center">
      <h1>Restaurant Name : {name}</h1>
      <h3>Cuisines : {cuisines?.join(", ")}</h3>
      <h3>Cost for two : {costForTwoMessage}</h3>
      <h3>Average Rating : {avgRating}</h3>
      <h2>Recommended Menu Items</h2>
      <div className="menu-items">
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenuComponent;
