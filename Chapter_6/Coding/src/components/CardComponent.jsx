import { CDN_URL } from "../utils/constants"; 
const CardComponent = (props) => {
  const { name , cloudinaryImageId , avgRating , costForTwo } = props?.resData?.info;
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src={CDN_URL +cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo} Rupee</h4>
    </div>
  )
}

export default CardComponent;