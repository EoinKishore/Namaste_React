### To make the CardComponent as Dynamic Component , We can use props

## What is Props ?

In simple terms, a **component** is just a JavaScript function, and **props** are the arguments we pass to that function.

In React, these arguments are called **props**, which is short for **properties**.

### Example:

```jsx
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        <CardComponent foodName="Biriyani" rating="4.5" price="160" />
        <CardComponent foodName="Burger" rating="4.8" price="90" />
      </div>
    </div>
  )
}

const CardComponent = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png" />
      <h3>Biriyani</h3>
      <h4>4.5 Rating</h4>
      <h4>160 Rs</h4>
    </div>
  )
}
```

From **`BodyComponent`**, when we call **`CardComponent`**, we pass the props to it.

Inside **`CardComponent`**, all the passed arguments are received as a single **object**, which is stored in the **`props`** parameter.

### Console Output:

![image.png](attachment:9ecd5d31-07a4-443d-877e-4006f77df87a:image.png)

---

## How to make the dynamic CardComponent ?

### Example:

```jsx
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        <CardComponent foodName="Biriyani" rating="4.5" price="160" />
        <CardComponent foodName="Burger" rating="4.8" price="90" />
      </div>
    </div>
  )
}

const CardComponent = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png" />
      <h3>{props.foodName}</h3>
      <h4>{props.rating}</h4>
      <h4>{props.price}</h4>
    </div>
  )
}

```

To use JavaScript code inside **JSX**, we wrap it in **`{}`**.

Since **props** are received as an **object**, we use **`{}`** in JSX to access and display the specific values from that object.

### Output:

![image.png](attachment:8ca7c6f6-02a5-46c8-8bf7-c3061d0be10d:image.png)

---

## How to Destructuring the Props ?

```jsx
const CardComponent = ({foodName , rating , price}) => {
  
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png" />
      <h3>{foodName}</h3>
      <h4>{rating}</h4>
      <h4>{price}</h4>
    </div>
  )
}
```

This is way to destructing the props.

We can also use this way 

```jsx
const CardComponent = (props) => {
  const {foodName , rating , price } = props;
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png" />
      <h3>{foodName}</h3>
      <h4>{rating}</h4>
      <h4>{price}</h4>
    </div>
  )
}
```

---

## What is Config Driven UI ?

**Config Driven UI** means building a user interface (UI) that is controlled by **configuration data** (like a JSON file or object), instead of writing every element manually in code.

So —

➡️ The **structure, content, and behavior** of the UI are **driven by configuration (data)**

➡️ Not hardcoded inside components.

### Example:

Take the swiggy website

If you are in Madurai , it will show the Madurai hotels , madurai food etc.

If you are in banglore , it will show the banglore Hotels , Banglore Foods etc.

So here the UI is writtern as common , based on the data we are showing the UI to the user , it is called Config Driven UI.

---

## How to Use the reusable component properly ?

Usually, the data is stored as an **array of objects**.

If something needs to be displayed repeatedly, we create a **single component** for it and only change the data passed to that component.

### Example:

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
  {foodName : "Biriyani", rating :"3.7" , price:'370'},
  {foodName : "burger" , rating :"4.8" , price :"120"},
  {foodName : "Dosa" , rating : "4.0" , price :"50"},
  {foodName : "Idly" , rating :"3.8" , price :"10"}
]

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        <CardComponent resData={resArr[0]}/>
        <CardComponent resData={resArr[1]}/>
        <CardComponent resData={resArr[2]}/>
        <CardComponent resData={resArr[3]}/>
      </div>
    </div>
  )
}

const CardComponent = (props) => {
  const {foodName , rating , price } = props.resData;
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

### Output:

![image.png](attachment:225f6921-9010-43fc-b120-f645f31ae3dd:image.png)

Here, the card is going to be repeated, so I created it as a **separate component** and displayed the data from the **array of objects** inside the card.

---

## What is Optional Chaining ?

```
?.
checks if something exists before trying to access its value.
If it doesn’t exist → it returns
undefined nstead of throwing an error.
```

```jsx
const {foodName , rating , price } = props?.resData;
```

---

## How to use the Dynamic calling in the component ?

Example:

```jsx
<div className="res-container">
        <CardComponent resData={resArr[0]}/>
        <CardComponent resData={resArr[1]}/>
        <CardComponent resData={resArr[2]}/>
        <CardComponent resData={resArr[3]}/>
 </div>
```

we should not use like this repeatedly

```jsx
<div className="res-container">
        {
          resArr.map((res) => {
            return <CardComponent resData={res} />
          })
        }
 </div>
```

We should use map function this like , map is javaScript function

### Output:

![image.png](attachment:2f5c7e38-14d4-4aa3-b445-53b589cf287b:image.png)

---

When we using the map it will show an error in console

![image.png](attachment:31ddfc9c-ddaa-4d13-b870-979ebe7bfad9:image.png)

For each Child there should be a unique key

App.js

```jsx
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
```

Output:

![image.png](attachment:e9932c05-6b64-4e85-89ee-d7c687be0fc2:image.png)

### Note:

When we are using map , for the child there should be a unique key.

---

## Why the key is needed ?

We are rendering the same component repeatedly. If we add new data, React will re-render all the components. At that point, React won’t know where the newly added data should be displayed.

That’s why the **`key`** property is important—it helps React identify each component uniquely and render only what’s necessary.

---

### Note:

Instead of a unique key, we can use the **index** as the key.

However, the React official documentation **does not recommend** using the index as a key because it can lead to issues with rendering and performance, especially when items are added, removed, or reordered in the list.

```jsx
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        {
          resArr.map((res, index) => {
            return <CardComponent key={index} resData={res} />
          })
        }
      </div>
    </div>
  )
}
```