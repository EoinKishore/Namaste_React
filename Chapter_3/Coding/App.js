import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1>Namaste React</h1>;
};
const HeaderComponent = () => {
  return (
    <div>
        <Title />
        <Title></Title>
        {Title()}
      <h1>This is inside a div</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
