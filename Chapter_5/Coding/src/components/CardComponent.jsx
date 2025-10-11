import { CDN_URL } from "../utils/constants"; 
const CardComponent = (props) => {
  const { name , cloudinaryImageId , averageRating , costForTwo } = props?.resData.data;
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{averageRating}</h4>
      <h4>{costForTwo/100}</h4>
    </div>
  )
}

export default CardComponent;