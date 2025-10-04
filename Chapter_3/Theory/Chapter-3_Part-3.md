## What is React Element ?

- A **React element** is the smallest building block in React.
- It is basically a **plain JavaScript object** that describes what you want to see on the screen.
- Example:
    
    ```jsx
    const element = <h1>Hello, world!</h1>;
    ```
    
    Under the hood, React converts this JSX into:
    
    ```jsx
    const element = React.createElement("h1", null, "Hello, world!");
    ```
    
    ### How to Render the React Element
    
    App.js
    
    ```jsx
    //React Element
    const heading = <h1 id="jsxHeading">Hello World from JSX</h1>;
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
    ```
    

---

## What is React Component ?

- A **React component** is a **function or class** that returns React elements (JSX).
- Components let you **re-use UI code** and **split UI into smaller pieces**.
- Two types:
    1. **Functional Component**
    2. Class Component

### Function Component

A function which return a normal JSX is called Functional Component.

Rule:

A Functional Component name should Always starts with Uppercase.

### Example:

```jsx
const HeadingComponent = () => {
    return <h1>Hello World using Functional Component</h1>;
}
```

### Other ways to Write the Functional Component

```jsx
const HeadingComponent = () => <h1>Hello World using Functional Component</h1>;
```

```jsx
const HeadingComponent = () => (
    <h1>Hello World using Functional Component</h1>
);
```

```jsx
const HeadingComponent = () => {
    return (
        <h1>Hello World using Functional Component</h1>
    )
};
```

Using Functional Component , We can write the nested Blocks also

```jsx
const HeaderComponent = () => {
    return <div>
        <h1>This is inside a div</h1>
    </div>;
}
```

### How to Render the React Functional Component ?

```jsx
// React Functional Component
const HeadingComponent = () => {
  return <h1>Hello World using Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

```

### Output:

![image.png](attachment:7867b167-7a52-4da3-8cf3-6166c7484dfa:image.png)

---

## How  to write a component inside another component ?

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1>Namaste React </h1>;
};

const HeaderComponent = () => {
  return (
    <div>
        <Title />
      <h1>This is inside a div</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
```

### Output:

![image.png](attachment:a08fbcff-5705-4b3c-8317-7ad828ef04c0:image.png)

### This is called Component Composition.