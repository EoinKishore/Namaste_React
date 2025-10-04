import React from "react";
import ReactDOM from "react-dom/client";

// this is how we write in react
const heading = React.createElement("h1",{id:"heading"},"Hello World from react");

console.log(heading);

// this is how we write in jsx
const jsxHeading = (<h1 id="jsxHeading">
    Hello World from JSX
    </h1>);
// jsx makes it easier to write and understand
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);