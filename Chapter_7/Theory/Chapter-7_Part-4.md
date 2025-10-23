Now we are going to make the header as static ,  so we have write the children routes

App.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  )
};

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />,
    children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"about",
        element:<AboutComponent/> 
      },
      {
        path:"contact",
        element:<ContactComponent/>
      }
    ],
    errorElement:<ErrorComponent/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
```

Outlet is a component which is provided by the react-router-dom package , according to the children path , it will replace the component.

If it is only / → Outlet will replace with BodyComponent 

If it is /about → Outlet will replace with AboutComponent

If it is /contact → Outlet will replace with ContactComponent

And the Header Component will be static.

---

Now in the header when we click the about it should move to About page , when we click contact it should navigate to contact page.

HeaderComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
```

We can navigate by using two ways

1. Anchor tag
2. Link component

### Anchor Tag

If we are using anchor tag , while navigating to another page , it will refresh our website.

### Link Component

Link Component is coming from the react-router-dom package , which it helps us to navigate one page to another page without refreshing our website.

So we should use the Link Component to navigate one component to another component.

Code → HeaderComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
```

### Output:

![image.png](attachment:22088bb9-65aa-4a3b-a314-89c4f5f8f74e:image.png)

![image.png](attachment:c38e7fb8-bbde-4ece-aece-2e51286190ef:image.png)

![image.png](attachment:acf68b4d-783a-41c8-b333-e71acd735a95:image.png)

---

For routing there are two ways

1. Server side routing
2. Client side routing

The above is the client side routing.

### Server side routing

It is old method we used for routing , when we navigate to about page , a network call will happen and takes the about.html and display it in browser and it will refresh the brower.

---