import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenuComponent = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurantMenu(json.data);
  };

  
  const { name, costForTwoMessage, avgRating, cuisines } =
  restaurantMenu?.cards[2]?.card?.card?.info;
  
  const itemCards =
  restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  
  if (!restaurantMenu) {
    return <ShimmerComponent />;
  }
  return (
    <div className="selected-food-container">
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
