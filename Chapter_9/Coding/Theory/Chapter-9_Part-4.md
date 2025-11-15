Now in our project , all the code that we have writterned code , parcel will be complied and give the browser with one JS file.

![image.png](attachment:7cf49ee6-6c10-41ed-a9b9-ff54ec9a376d:image.png)

All the code can be written inside a single JavaScript file, and that works fine for small projects.

But in a large project, the number of lines and the number of files increase a lot. So we must separate the code by modules.

For example:

- When we are on the **Home** page, only the **home.js** file should load.
- When we go to the **About Us** page, only the **about.js** file should load.

By loading separate JavaScript files for each module, the app becomes much faster.

This is one of the key ways to optimize a React application.

## Coding

GroceryComponent.jsx

```jsx
const GroceryComponent = () => {
    return (
        <div>
            <h1>This is Grocery page</h1>
        </div>
    )
}
export default GroceryComponent;
```

HeaerComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
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
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;

```

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import GroceryComponent from "./components/GroceryComponent";
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
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenuComponent/>
      },
      {
        path:"grocery",
        element:<GroceryComponent/>
      }
    ],
    errorElement:<ErrorComponent/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
```

This is how we add normally. but for seperate js we need to use differntly.

Now updated App.js

```jsx
import { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
// import GroceryComponent from "./components/GroceryComponent";
const GroceryComponent = lazy(() => import("./components/GroceryComponent"));
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
      },
      {
        path:"restaurant/:resId",
        element:<RestaurantMenuComponent/>
      },
      {
        path:"grocery",
        element:<Suspense fallback={<h1>Loading..</h1>}><GroceryComponent/></Suspense>
      }
    ],
    errorElement:<ErrorComponent/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
```

There is a method called **lazy**, provided by React. If we use the lazy method, React will create a separate JS file *only for that component*. This helps with code-splitting and makes the app faster.

We can technically use a lazy-loaded component without wrapping it in **Suspense**, but it will show an error. This happens because the component’s code is still loading in the background. The browser tries to render it immediately, yet the file is not ready.

Suspense acts as a safety layer. It provides a temporary UI until the lazy-loaded component finishes downloading.

![image.png](attachment:cd5aee33-daf1-439f-90df-85e83932afce:image.png)

Now the JS file contains all the code except the Grocery module. When we click the **Grocery** link in the header, the browser immediately tries to display the Grocery component. The problem is that the Grocery JS file is not yet loaded in the browser at that moment. It takes some time to download.

The browser tries to render the component instantly. It cannot find the code because the Grocery file is still loading. To handle this situation, React provides a component called **Suspense**.

Inside Suspense, there is a placeholder called **fallback**, where we can write any JSX that should be shown temporarily. For example, a shimmer UI, a loading animation, or any custom loading component.

Until the Grocery JS file finishes loading in the browser, the **Suspense fallback UI** will be displayed. After the Grocery JS file is fully loaded, the actual Grocery component will appear on the screen.

### Output:

While Loading

![image.png](attachment:cfdcb93d-e540-4c62-9c82-706112d0e8ca:image.png)

After Loading

![image.png](attachment:e5d31795-e89a-4789-b9a6-8ed7d0141b2f:image.png)