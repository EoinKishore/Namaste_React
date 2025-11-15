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