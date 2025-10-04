## How to use normal JavaScript inside the JSX ?

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const number = 100;

const HeaderComponent = () => {
  return (
    <div>
        {number}
        <h2>{10 + 3}</h2>
        <p>{"Hi this is JavaScript"}</p>
      <h1>This is inside a div</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
```

### Output:

![image.png](attachment:c17abd90-5ee4-4bf9-b01c-8904098edd84:image.png)

## How to use React Element inside JSX ?

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const number = 100;

//React Element
const title = <h1>Namaste React</h1>; 
const HeaderComponent = () => {
  return (
    <div>
        {title}
        {number}
        <h2>{10 + 3}</h2>
        <p>{"Hi this is JavaScript"}</p>
      <h1>This is inside a div</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
```

### Output:

![image.png](attachment:3bcc9e95-fb12-43ba-919c-98351ba58179:image.png)

Like this we can use Element inside another Element

Inside Element we can use Component.

Inside Component we can use Element.

### Example:

```jsx
// Element inside Element
const element = <span>This is span</span>;
const title = <h1>Namaste React {element}</h1>; 
```

```jsx
// Element inside Component
const HeaderComponent = () => {
    return (
        <div>
      <h1>This is inside a div</h1>
    </div>
  );
};
const title = <h1>Namaste React {<HeaderComponent />}</h1>; 
```

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

//Component inside Element
const element = <span>This is span</span>;
const title = <h1>Namaste React {element}</h1>; 
const HeaderComponent = () => {
  return (
    <div>
        {title}
      <h1>This is inside a div</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

```

---

## Other Way Call the Component

```jsx
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
      <h1>This is inside a div</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
```

### Output:

![image.png](attachment:9ec49d18-0c86-4eeb-85a6-cfdd9296fa6f:image.png)

Component is JavaScript Function which it return a JSX Code.

So inside the JSX what if we call the Component

```jsx
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

```

Here Title is a JavaScript function , so if we call that inside the component , it will work. So it is other way to call an Component.

### Output:

![image.png](attachment:fee0d256-230e-42ba-8a5e-10b41f1d2fc9:image.png)