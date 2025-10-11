Now we are going to rearrange the code in structured format and going to change something datas.

## Before Structure:

![image.png](attachment:b9c672ff-9fc5-4f82-957e-9651f83662f3:image.png)

## Before Coding

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="logo" alt="logo" src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resArr = [
  {id:'1',foodName : "Biriyani", rating :"3.7" , price:'370'},
  {id:'2',foodName : "burger" , rating :"4.8" , price :"120"},
  {id:'3',foodName : "Dosa" , rating : "4.0" , price :"50"},
  {id:'4',foodName : "Idly" , rating :"3.8" , price :"10"}
]

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        {
          resArr.map((res) => {
            return <CardComponent key={res.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

const CardComponent = (props) => {
  const {foodName , rating , price } = props?.resData;
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png" />
      <h3>{foodName}</h3>
      <h4>{rating}</h4>
      <h4>{price}</h4>
    </div>
  )
}

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="root">
    </div>
    <script type="module" src="./App.js"></script>
  </body>
</html>
```

## After Structure

![image.png](attachment:5330286c-4b3a-4ae3-81af-41178ef5b86e:image.png)

All the code should be written inside the **`src`** folder.

For components, we need to create a **`components`** folder and place all the component files inside it.

The **`utils`** folder (short for *utilities*) is used to store **common functions** or **hardcoded data** that can be reused across the project.

### Notes:

For **components** and **utils**, we can use the extensions **`.js`**, **`.jsx`**, or **`.tsx`** — any of them will work without issues.

However, I prefer using **`.jsx`** for components and **`.js`** for utils.

No need to overthink it!

---

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
```

HeaderComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent;
```

BodyComponent.jsx

```jsx
import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        {
          resArr.map((res) => {
            return <CardComponent key={res.data.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;
```

CardComponent.jsx

```jsx
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
```

constants.js

```jsx
export const LOGO_URL = "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000";
export const CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
```

mockData is too large i can’t give here.

index.html is same as before.

---

## Different Types of export ?

1. Default Export
2. Named Export

### Default Export

```jsx
export default anyname;
```

### How to import Default Exported

```jsx
import anyname from "filepath";
```

### Named Export

```jsx
export const url = "someurll";
```

### How to import Named Exported

```jsx
import { url } from "filepath";
```

---

### When too use the default and named export

1. If we are going to export a component use the default export.
2. If we are going to export multiple constants use the named export.

---