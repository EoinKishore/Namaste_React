import { CDN_URL } from "../utils/constants"; 
const CardComponent = (props) => {
  const { name , cloudinaryImageId , averageRating , costForTwo } = props?.resData;
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src={cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{averageRating} Rating</h4>
      <h4>{costForTwo} Rupee</h4>
    </div>
  )
}

export default CardComponent;