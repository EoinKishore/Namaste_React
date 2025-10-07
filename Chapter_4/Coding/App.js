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