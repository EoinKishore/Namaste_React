## How to create a custom Hook ?

RestaurantMenuComponent.jsx

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenuComponent = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const { resId } = useParams();
  
  useEffect(() => {
    console.log("useEffect - RestaurantMenuComponent");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId="+resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurantMenu(json.data);
  };
  
  if (!restaurantMenu || restaurantMenu?.length === 0) {
    return <ShimmerComponent />;
  }

  const { name, costForTwoMessage, avgRating, cuisines } =
  restaurantMenu?.cards[2]?.card?.card?.info;
  
  const itemCards =
  restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
  
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

```

Ouput:

![image.png](attachment:7fff9879-c6ba-4565-8c9a-823414b322ff:image.png)

So when we click the card it will navigate to the RestaurantMenuComponent and shows the output

![image.png](attachment:46d4aaae-7d9f-49d7-a933-49b8bbf634b3:image.png)

Now in the code it is doing two things

1. API call
2. Display the Output in JSX.

Now we are going to keep the Display the Output in JSX alone in RestaurantMenuComponent and API call should be in Custom Hook.

## Custom Hook

useRestaurantMenu.js

```jsx
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    console.log("ResId in useRestaurantMenu", resId);
    
    const fetchData = async () => {
        console.log("ResId in useRestaurantMenu inside the fetch", resId);
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId="+resId);
        const json = await data.json();
        
        setResInfo(json.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return resInfo;
}
export default useRestaurantMenu;
```

RestaurantMenuComponent.jsx

```jsx
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/UseRestaurantMenu";
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

```

Now in the RestaurantMenuComponent it is handing only display the Component.

API call is handle by custom hook , useRestaurantMenu.