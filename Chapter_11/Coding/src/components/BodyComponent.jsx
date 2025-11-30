import CardComponent, {withLabeledCard} from "./CardComponent";
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
    const RestaurentWithLabel = withLabeledCard(CardComponent);
useEffect(() => {
  console.log("useEffect called");
  fetchData();
} , []);

const fetchData = async () => {
  const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
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
      <div className="filter-container flex p-4">
        <div className="search-container">
          <input type="text" className="border border-solid border-black h-10 w-100 pl-2 py-2" placeholder="Search" value={seachText} onChange={(e) => {
            setSearchText(e.target.value);
          }}  />
          <button className="px-4 py-2 ml-4 rounded-xl bg-green-300" onClick={() => {
      
            const filteredList = listOfRes.filter((res) => {
              return res.info.name.toLowerCase().includes(seachText.toLowerCase());
            })

            setFilteredRes(filteredList);
          }}>Search</button>
        </div>
        <button className="px-4 py-2 ml-4 rounded-xl bg-pink-200" onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.info.avgRating > 4);
            setFilteredRes(filteredRes);
        }}>Top Rated Foods</button>
      </div>
      <div className="flex gap-4 mx-4 p-4 flex-wrap">
        {
          filterRes.map((res) => {
            return (
              <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                {res.info.isOpen ? <RestaurentWithLabel resData={res} /> : <CardComponent resData={res} />}
              </Link>
            ) 
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;