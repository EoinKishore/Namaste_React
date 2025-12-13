## What is Prop Drilling

Prop drilling means passing data from a parent component to a deeply nested child component through many intermediate components, even when those middle components do not need the data.

### Simple example

```
App
 └── Parent
      └── Child
           └── GrandChild

```

If `App` has some data and `GrandChild` needs it, you must pass it like this.

```
App → Parent → Child → GrandChild

```

Parent and Child receive the prop but do not use it. They only forward it.

### Problems with prop drilling

- Code becomes hard to read
- Too many props in components
- Difficult to maintain and debug
- Small changes force updates in many components

---

## Why useContext is needed

`useContext` helps us avoid prop drilling. It allows components to access data directly from a common place without passing props through every level.

---

## What is Context in React

Context is like a global store for a specific set of data. Any component inside the provider can directly access the data.

React provides:

- `createContext`
- `Context.Provider`
- `useContext` hook

---

## Flow Diagram. With Prop Drilling

```
App (userName)
  |
  | props
  v
Parent
  |
  | props
  v
Child
  |
  | props
  v
GrandChild (uses userName)

```

---

## Flow Diagram. Using useContext

```
App
 |
 | Context Provider (userName)
 |
 v
Parent
 |
 v
Child
 |
 v
GrandChild (directly reads from Context)

```

No props are passed through Parent and Child.

---

## How to read the context value ?

UserContext.js

```jsx
import { createContext } from 'react';
const UserContext = createContext({   // creaContext method helps to create context
    loggedInUser: "Default User",
})
export default UserContext;
```

HeaderComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";  // need to import useContext
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";  // need to import UserContext
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);   // accessing the loggedInUser from the USerContext
  return (
    <div className="flex items-center justify-between shadow-lg">
      <img className="w-25 h-25" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul className="flex">
          <li className="px-4">Online Status {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
```

Output:

![image.png](attachment:5d8d172d-e4c4-4557-95db-b5478babb029:image.png)

## How to modify the context value ?

App.js

```jsx
import { lazy , Suspense , useContext, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import UserContext from "./utils/UserContext";    // need to import the UserContext
// import GroceryComponent from "./components/GroceryComponent";
const GroceryComponent = lazy(() => import("./components/GroceryComponent"));
const AppComponent = () => {
  const [userName , setUserName] = useState();  // by using state and useEffect change the vale
  const {loggedInUser} = useContext(UserContext);   // Access the loggedInUser
  useEffect(() => {
    setUserName("Kishore");
  })
  return (
    <UserContext.Provider value={{loggedInUser : userName}}>  {/* by using provider only we can change the value , if we wrap with all component , we can access the loggedInUsr from any component */}
      <div className="app">
        <HeaderComponent />
        <Outlet />
      </div>
    </UserContext.Provider>
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

Output:

![image.png](attachment:4f13fdf2-9ea0-4040-8b29-1faa1730ccf8:image.png)