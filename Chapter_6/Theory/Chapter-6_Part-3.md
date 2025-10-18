To make an API call , we need to know a hook called UseEffect.

## useEffect

In React, **`useEffect`** is a **Hook** that lets you perform **side effects** in functional components.

---

### 🧠 What is a "side effect"?

A *side effect* is anything that happens **outside** the normal React rendering process, such as:

- Fetching data from an API
- Updating the DOM manually
- Setting up subscriptions or event listeners
- Using timers (`setTimeout`, `setInterval`)

### Syntax:

```jsx
useEffect(() => {} , [] )
```

useEffect has two arguments , first one is call back function , and second one is dependencies.

useEffect is simply , when the component is rendered and then auto maticaaly useEffect will be called.

---

Now we are going to call the swiggy api

BodyComponent.jsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useEffect, useState } from "react";
const BodyComponent = () => {

    const [listOfRes,setListOfRes] = useState([
  {id:'1',name : "Biriyani", averageRating :"3.7" , costForTwo:'370', cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'2',name : "burger" , averageRating :"4.8" , costForTwo :"120", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'3',name : "Dosa" , averageRating : "4.0" , costForTwo :"50", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'4',name : "Idly" , averageRating :"3.8" , costForTwo :"10", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
]);

useEffect(() => {
  console.log("useEffect called");
  fetchData();
} , []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  console.log(json);
}

  return (
    <div className="body">
      <div className="filter-container">
        <button className="filter-btn" onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.averageRating > 4);
            setListOfRes(filteredRes);
        }}>Top Rated Foods</button>
      </div>
      <div className="res-container">
        {
          listOfRes.map((res) => {
            return <CardComponent key={res.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;
```

Output:

![image.png](attachment:415648de-358d-40b3-a80a-eb75a400f6b1:image.png)

This error will come.

It is CORS error.

When I try to call the Swiggy API from my React app, a

**CORS error**

occurs.

This happens because the browser blocks requests to other domains (cross-origin requests) for security reasons.

Since Swiggy’s server doesn’t allow public access from other origins, the browser prevents my app from fetching their data.

---

### Solution

If we need to access the Swiggy API , we need to install the extension call CORS Extension.

![image.png](attachment:1493bf9f-3410-42ae-9b41-68552eacfed6:image.png)

Then we should on it.

Then refresh the browser and see the output.

### Output:

![image.png](attachment:ce1304be-826e-437c-bdd7-7a49dab50cb6:image.png)

Our consoled data has been got.

---

Now in the fetchData function , we have to setListOfRes function to set the API response data.