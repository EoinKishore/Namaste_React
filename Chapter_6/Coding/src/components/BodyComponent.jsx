import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
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
    "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
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
            return <CardComponent key={res.info.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;