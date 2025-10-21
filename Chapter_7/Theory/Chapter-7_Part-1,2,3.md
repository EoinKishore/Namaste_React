## UseEffect

Syntax:

```jsx
useEffect( () => {} , []) 
```

Here the depencency bracket not mandatory.

## 3 Ways to use useEffect:

- If there is **no dependency array**, the **`useEffect`** will run **after the component loads** and **every time the component re-renders**.
- If the dependency array is **empty (`[]`)**, the **`useEffect`** will run **only once**, right after the component loads.
- If there are **values inside the dependency array**, the **`useEffect`** will run **after the component loads** and **whenever any of those dependency values change**.

## Router

Router is used to navigate one page to another page without re-loading the website.

Now we have localhost:1234

Now we are going to do About page and Contact Page.

If we give [localhost:1234/about](http://localhost:1234/about) → it should navigate to about page.

If we give [localhost/contact](http://localhost/contact) → it should navigate to contact page.

### Note:

If we need to use the router we need to install a package called react-router-dom

Install Command is

```jsx
npm install react-router-dom
```

In the AppComponent we have write the code

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
};

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />
  },
  {
    path:"/about",
    element:<AboutComponent/>
  },
  {
    path:"/contact",
    element:<ContactComponent/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
```

`createBrowserRouter` is a function from the **react-router-dom** package. It takes a router configuration defined as an array of objects.

After creating the router, we need to render the **RouterProvider** component and pass the router configuration (created using `createBrowserRouter`) to it as a prop.

### Output:

![image.png](attachment:0340aaad-c608-458b-91f4-30228d58c4a0:image.png)

![image.png](attachment:18ec9119-bf9b-4ba6-854c-6e31a2286d81:image.png)

![image.png](attachment:234d9767-6316-4d9a-8cee-0b84c0404833:image.png)

---

### Notes:

If we give something insteaded of about or contact

![image.png](attachment:f302958c-e35f-4784-ba3c-231eca4bf72e:image.png)

Here, **react-router-dom** provides a default error component, but instead of using that, we can create our **own separate error component** for better customization and control.

App.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
};

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />,
    errorElement:<ErrorComponent/>
  },
  {
    path:"/about",
    element:<AboutComponent/>
  },
  {
    path:"/contact",
    element:<ContactComponent/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
```

We need to add errorElement to the error component.

ErrorComponent.jsx

```jsx
import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
    const error = useRouteError();
    console.log("ErrorComponent -> ", error);
    return (
        <div>Oops something went wrong</div>
    )
}

export default ErrorComponent;
```

This is the **error component**, and we can modify it as we wish.

**`useRouteError`** is a React hook that provides detailed information about any route-related errors.

We can use this hook to display clear and informative error messages on the website.

### Output:

![image.png](attachment:b97592dd-0279-451e-97fc-1ae7036301fe:image.png)