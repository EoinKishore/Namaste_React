## Higher Order Component

**Higher-Order Component (HOC)**

is a function that takes a component as input and returns a new component.

It does not change the original component. Instead, it **wraps** it and adds extra features.

## Coding:

CardComponent.jsx

```jsx
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

export  const withLabeledCard = (CardComponent) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-300 text-black absolute rounded-lg m-2 p-2">Opened</label>
        <CardComponent {...props} />
      </div>
    )
  }
}

export default CardComponent;
```

BodyComponent.jsx

```jsx
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
  const data = await fetch(
    "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
  );
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
```

Output:

![image.png](attachment:6a56ec9f-396c-4b62-a38e-b576598c3eb9:image.png)

Example idea

You have a normal `CardComponent`.

You want to add a label “Opened” only when the restaurant is open.

Instead of writing that label code inside `CardComponent`, you create an HOC that adds it from outside.

That is exactly what your code does.

---

## **Why does it have two `return` statements?**

Because an HOC does two different jobs.

### **1. Outer return — returns a NEW component**

```jsx
export const withLabeledCard = (CardComponent) => {
  return (props) => { ... }
}
```

This `return` gives a new component based on the original one.

You call this new component somewhere else:

```jsx
const RestaurentWithLabel = withLabeledCard(CardComponent)
```

So the **first return returns the HOC's new component**.

### **2. Inner return — returns JSX**

```jsx
return (
  <div>
    <label>Opened</label>
    <CardComponent {...props} />
  </div>
)
```

The inner return is the JSX that shows on the screen.

It decides what UI should appear.

So:

- The **outer return** returns a new component
- The **inner return** returns what that new component should render

---

## **Why do we pass `props` from the HOC?**

The new HOC-generated component should behave exactly like the original `CardComponent`.

It should accept whatever props the original one needs.

Example

The original card expects:

```jsx
<CardComponent resData={res} />
```

If the HOC does not pass these props, the card will not work.

So the HOC must forward the props to the inner component.

---

## **Why use `{...props}` (spread operator)?**

The spread operator copies all props at once.

### Without spread

You would need to manually pass each prop:

```jsx
<CardComponent resData={props.resData} img={props.img} name={props.name} />
```

This is inconvenient, especially when there are many props.

### With spread

```jsx
<CardComponent {...props} />
```

This sends every prop exactly as it was received.

If you pass:

```jsx
<RestaurentWithLabel resData={res} />
```

Inside the HOC you get:

```jsx
props = { resData: res }
```

Then you forward it:

```jsx
<CardComponent {...props} />
```

This becomes:

```jsx
<CardComponent resData={res} />
```

So the original component behaves normally.

---

## **Summary**

### **HOC**

A function that takes a component and returns a new enhanced component.

### **Two returns**

. First return: gives a new component

. Second return: shows what UI the new component should render

### **Why pass props?**

To make sure the wrapped component still receives all required data.

### **Why use spread operator?**

It forwards all props automatically without writing each one.