Now insteded of search , we are to add the filter button , if we click the filter it should show the foods which is above 4 rating.

Now changed some code

BodyComponent.tsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
const BodyComponent = () => {

    const listOfRes = [
  {id:'1',name : "Biriyani", averageRating :"3.7" , costForTwo:'370', cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'2',name : "burger" , averageRating :"4.8" , costForTwo :"120", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'3',name : "Dosa" , averageRating : "4.0" , costForTwo :"50", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'4',name : "Idly" , averageRating :"3.8" , costForTwo :"10", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
]

  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
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
```

CardComponent.tsx

```jsx
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
```

Remaining files are same

### Output:

![image.png](attachment:a06e5a6f-1c38-4d5b-95c1-617ac760171e:image.png)

---

Now going to change the search as filter

BodyComponent.tsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
const BodyComponent = () => {

    let listOfRes = [
  {id:'1',name : "Biriyani", averageRating :"3.7" , costForTwo:'370', cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'2',name : "burger" , averageRating :"4.8" , costForTwo :"120", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'3',name : "Dosa" , averageRating : "4.0" , costForTwo :"50", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
  {id:'4',name : "Idly" , averageRating :"3.8" , costForTwo :"10", cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c67c80e5-4d93-4065-b2c7-5533752a9fca_964658.JPG" },
]

  return (
    <div className="body">
      <div className="filter-container">
        <button className="filter-btn" onClick={() => {
            listOfRes = listOfRes.filter((res) => (res.averageRating > 4))
            console.log(listOfRes);
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
```

Here i have changed logic , if i click the button , i have to get the food which is above 4 rating foods.

### Output:

![image.png](attachment:acd9ed02-2b6d-4e75-b31a-e6cf3baaf337:image.png)

Here the UI is not reflecting but in the console it is showing correct output.

We are changing the data , when we click the button , but it is not changing in UI , because we changing in Normal JS variable.

Now we need a super powerful variable which is called as State Variable.

---

## React Hooks

**React Hooks** are simply JavaScript utility functions developed by Facebook, and they are part of the **React** package.

---

## useState()

**useState** is a JavaScript utility function that provides a **special variable** capable of holding and updating state values in a component.

### Syntax:

```jsx
const [name, setName] = useState("");
```

- **`name`** → This is the state variable. Initially, it holds the value `""` (an empty string) that we pass inside `useState`.
- **`setName`** → This is the function used to update the value of `name`.
- Simply useState wil return an arr and we using the arr destructing.

we can also use like

```jsx
const arr = useState("");
const [name, setName] = arr;
```

and other way to use it

```jsx
const arr = useState("");
const name = arr[0];
const setName = arr[1];
```

So simply useState will return an array with two values.

---

## What is the use of useState()?

Whenever the state data changes, the **UI automatically updates** to reflect the new data.

In simple terms:

When a component is rendered in the browser, changing any data using **useState** will cause **only that specific component** to re-render, instead of the whole page.

BodyComponent.tsx

```jsx
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
```

Here the data is stored in the state variable , so ititially it will show as all the 4 cards.

![image.png](attachment:98d4fd88-fc1c-4049-863a-c8750ce6b8bc:image.png)

After clicking the filter button , by using the setListOfRes function we have updating , after clicking it , it willl show only the above 4 rating cards alone.

![image.png](attachment:e422ad12-aac5-4ce5-9cf7-0ebef116e45b:image.png)

---

### Notes:

In **React 16**, a new **Reconciliation Algorithm** was introduced, which is also known as **React Fiber**.

When React renders something to the browser, it first creates a **Virtual DOM**, which is a lightweight representation of the **Actual DOM**.

When we perform an action such as clicking the **Filter** button, React creates a **new Virtual DOM** that reflects the latest updates. Then, React uses the **Diffing Algorithm** to compare the **old Virtual DOM** with the **new Virtual DOM**.

Finally, React updates **only the parts that have changed** in the **Actual DOM**, instead of re-rendering the entire page.

This process makes React applications **faster and more efficient**.