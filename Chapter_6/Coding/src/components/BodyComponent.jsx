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
    "https://pastebin.com/raw/0QcdEDBL"
  );
  const json = await data.json();
  console.log(json);
  setListOfRes(resArr);
  setFilteredRes(resArr);
}

if(listOfRes.length === 0) {
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
            console.log(seachText);
            const filteredList = listOfRes.filter((res) => {
              return res.data.name.toLowerCase().includes(seachText.toLowerCase());
            })

            setFilteredRes(filteredList);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.data.avgRating > 4);
            setFilteredRes(filteredRes);
        }}>Top Rated Foods</button>
      </div>
      <div className="res-container">
        {
          filterRes.map((res) => {
            return <CardComponent key={res.data.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;