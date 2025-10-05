We are going to write the code , a website which is like swiggy 

So first we need to plan , how the website should be

![image.png](attachment:36d54f1c-c138-41bc-9a04-05e44f4d65e3:image.png)

Now 

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

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const AppComponent = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
```

### Output:

![image.png](attachment:a337ae5f-6933-4712-ac26-4826bbd06561:image.png)

---

Now we are going to implement the Header Component

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
const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
```

style.css

```css
.app{
    width: 100%;
}
.header{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    border: 1px solid black;
}
.nav-items > ul{
    display: flex;
    list-style: none;
    gap: 20px;
    margin-right: 20px;
}
.logo{
    width: 60px;
    
}
```

### Output:

![image.png](attachment:e73adc96-57a1-4e99-b5d1-87ca192f6154:image.png)

---

## Now we are going to write the Body Component

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

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  )
}

const CardComponent = () => {
  return (
    <div className="res-card">
      <img className="res-img" alt="biriyani img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383787E.png" />
      <h3>Biriyani</h3>
      <h4>4.5 Rating</h4>
      <h4>160 Rs</h4>
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

Here CardComponent will come again again so , if something is going come repeatedly , then we have write it as seperate component.

### Output:

![image.png](attachment:db21bfbc-7252-4699-af0b-f77a2143e4b2:image.png)

Now we are printing card repeatedly by using the card component , but we are printing the same component again and again , now we have to change it dynamic component.