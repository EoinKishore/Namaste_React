## Dynamic Routing

Now we are going implement , we are showing cards , when we click the card it should open another page and show detailly.

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  )
};

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />,
    children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"about",
        element:<AboutComponent/> 
      },
      {
        path:"contact",
        element:<ContactComponent/>
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenuComponent/>
      }
    ],
    errorElement:<ErrorComponent/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
```

Added the path with restuarant/:resid 

?:resId menas after the restaurant we will give some id , in the url.

BodyComponent.jsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
const BodyComponent = () => {

    const [listOfRes,setListOfRes] = useState([]);
    const [seachText , setSearchText] = useState("");
    const [filterRes , setFilteredRes] = useState([]);

useEffect(() => {
  console.log("useEffect called");
  fetchData();
} , []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

if(!listOfRes || listOfRes.length === 0) {
  return <ShimmerComponent />;
}

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input type="text" placeholder="search" value={seachText} onChange={(e) => {
            setSearchText(e.target.value);
          }}  />
          <button onClick={() => {
      
            const filteredList = listOfRes.filter((res) => {
              return res.info.name.toLowerCase().includes(seachText.toLowerCase());
            })

            setFilteredRes(filteredList);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.info.avgRating > 4);
            setFilteredRes(filteredRes);
        }}>Top Rated Foods</button>
      </div>
      <div className="res-container">
        {
          filterRes.map((res) => {
            return (
              <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                <CardComponent resData={res} />
              </Link>
            ) 
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;
```

Currently implemented

```
<div className="res-container">
        {
          filterRes.map((res) => {
            return (
              <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                <CardComponent resData={res} />
              </Link>
            ) 
          })
        }
</div>
```

for each card we have added the Link element , before the key attribute is inside the cardComponet element , now it is in Link Element , because key attribute should always place on outer element.

RestaurantMenuComponent.jsx

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenuComponent = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

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

```

Here by using useParam hook , we are getting the id

useParam is a hook which is provided by the react-router-dom package , it will return object with param id.

### Output:

![image.png](attachment:8531f078-24a7-4a9a-a22a-bb7136ffd5e6:image.png)