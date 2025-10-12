import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useState } from "react";
const BodyComponent = () => {

    const [listOfRes,setListOfRes] = useState([
  {id:'1',name : "Biriyani", averageRating :"3.7" , costForTwo:'370', cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'2',name : "burger" , averageRating :"4.8" , costForTwo :"120", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'3',name : "Dosa" , averageRating : "4.0" , costForTwo :"50", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'4',name : "Idly" , averageRating :"3.8" , costForTwo :"10", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
]);

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