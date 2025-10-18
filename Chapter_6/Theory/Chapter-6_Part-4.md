### Notes:

My API link is not working , swiggy has changed the link , try with some other API link.

---

BodyComponent.tsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useEffect, useState } from "react";
const BodyComponent = () => {

    const [listOfRes,setListOfRes] = useState([
  //{id:'1',name : "Biriyani", averageRating :"3.7" , costForTwo:'370', cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  //{id:'2',name : "burger" , averageRating :"4.8" , costForTwo :"120", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  //{id:'3',name : "Dosa" , averageRating : "4.0" , costForTwo :"50", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  //{id:'4',name : "Idly" , averageRating :"3.8" , costForTwo :"10", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
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

if(listOfRes.length === 0) {
  return <h1>Loading....</h1>
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

Now consider we getting the listOfRes from the API link.

Now untill the API response get we have to show the dispay as Loading.

After the response get it will show the data in display.

In Loading state

![image.png](attachment:728085af-0cbe-45d5-90e6-1f8123589532:image.png)

After getting the response From the API.

![image.png](attachment:e24c9b0f-f416-492d-a61d-4c96ea619f12:image.png)

Printing Loading is not a good for now , there is something called shimmer UI , that the industry follows. It is like a Skeleton of the cards.

---

![image.png](attachment:09ea8d31-050f-4ef8-b06d-c176963212a4:image.png)

Like this we have show the cards when it is loading.

ShimmerComponent.jsx

```jsx
const ShimmerComponent = () => {
    return (
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    )
}

export default ShimmerComponent;
```

After loading it will show output.