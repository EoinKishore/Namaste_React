Now using Custom hook , we are going to show is our system is network is Offline or online

useOnlineStatus.js

```jsx
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[]);

    return onlineStatus;
};

export default useOnlineStatus;
```

there is an event listener to check online or offline and update in a state.

BodyComponent.jsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const BodyComponent = () => {

    const [listOfRes,setListOfRes] = useState([]);
    const [seachText , setSearchText] = useState("");
    const [filterRes , setFilteredRes] = useState([]);

    const onlineStatus = useOnlineStatus();

useEffect(() => {
  console.log("useEffect called");
  fetchData();
} , []);

const fetchData = async () => {
  const data = await fetch(
    "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

if(!listOfRes || listOfRes.length === 0) {
  return <ShimmerComponent />;
}

if(onlineStatus === false) {
  return <h1>🔴 You are offline!! Please check your internet connection</h1>
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

HeaderComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;

```

If we  are Offline it will show like

### Output:

![image.png](attachment:5f7f736a-47a0-4511-b437-f5a485bce895:image.png)

![image.png](attachment:f5e80fca-013c-4243-995d-02498e407f8a:image.png)