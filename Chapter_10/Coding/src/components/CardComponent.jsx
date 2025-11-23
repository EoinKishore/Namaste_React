import { CDN_URL } from "../utils/constants"; 
const CardComponent = (props) => {
  const { name , cloudinaryImageId , avgRating , costForTwo } = props?.resData?.info;
  return (
    <div className="res-card bg-gray-200 shadow-lg flex flex-col items-center justify-center w-70 hover:shadow-2xl rounded-lg p-4 hover:bg-gray-400">
      <img className="w-60 h-60 rounded-lg" alt="biriyani img" src={CDN_URL +cloudinaryImageId} />
      <h3 className="font-bold p-2 text-lg">{name}</h3>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo} Rupee</h4>
    </div>
  )
}

export default CardComponent;