## Search Functionality

Now we are going to implement the Search functionality

Like we will have one search box , inside we have type food name and click search button , it should show the searched food cards alone.

BodyComponent.jsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
const BodyComponent = () => {

    const [listOfRes,setListOfRes] = useState([]);
    const [seachText , setSearchText] = useState("");

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

            setListOfRes(filteredList);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.data.avgRating > 4);
            setListOfRes(filteredRes);
        }}>Top Rated Foods</button>
      </div>
      <div className="res-container">
        {
          listOfRes.map((res) => {
            return <CardComponent key={res.data.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;
```

In the **input** tag, we set the **state variable** as the value. This means the input field is controlled by React.

To update the text both in the input box and on the screen, we must define an **`onChange`** function that updates the state.

The **search button** contains the actual **search logic**, which filters and displays the results based on the user’s input.

### Output:

![image.png](attachment:2b29480d-5d0f-4eec-a809-1347bc744b01:image.png)

After Search

![image.png](attachment:da59580f-764d-41c9-b016-abc9ff757065:image.png)

However, there’s a bug. After searching `listOfRes`, only two cards appear; if we search for anything else, no results show. We have to refresh the page and search again.

That’s not acceptable — we need a better solution.

---

## Solution

BodyComponent.jsx

```jsx
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
```

Instead of modifying the original data directly, we should work with a **copy** of it.

Initially, **`listOfRes`** represents the **original** data, and **`filteredRes`** is a **copy** of that data.

When we apply a filter, we perform the filtering on the **original (`listOfRes`)** and store the results in **`filteredRes`**, which is then displayed on the screen.

### Output:

![image.png](attachment:bc62a303-3e53-4b64-8325-167a9f01c8e4:image.png)

Typing as pizza

![image.png](attachment:43ffef7a-05f2-4e4d-97e8-663f2a306c95:image.png)

In the same search box typing as Cafe

![image.png](attachment:bfef6d0a-cf2b-42d6-857f-513395caa4a8:image.png)

Now it is working as fine.