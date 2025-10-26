## Class Based Component

In the about page , we are going to create a user card like name , location and contact.

### Using Functional Commponent:

UserComponent.jsx

```jsx
const UserComponent = () => {
    return (
        <div className="user-container">
            <h3>Name : Eoin Kishore</h3>
            <h3>Location : New Zealand</h3>
            <h3>Contact : 12345</h3>
        </div>
    )
}

export default UserComponent;
```

Using Class Based Component:

UserClass.jsx

```jsx
import React from "react";
class UserClass extends React.Component {
  render() {
    return (
      <div className="user-container">
        <h3>Name : Eoin Kishore</h3>
        <h3>Location : New Zealand</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

For class component we need to extends the React.Component.

Inside the class component , under the render method we should write our JSX code.

AboutComponent.jsx

```jsx
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";

const AboutComponent = () => {
    return (
        <div>
            This is about page
            <UserComponent/>
            <UserClass/>
        </div>
    )
};

export default AboutComponent;
```

Output:

![image.png](attachment:f7d8de85-5128-4001-9152-f7801d5ca0fc:image.png)

---

## How to use the props in the class Component ?

Using props in functional Component

UserComponent.jsx

```jsx
const UserComponent = (props) => {
    const {name} = props;
    return (
        <div className="user-container">
            <h3>Name : {name}</h3>
            <h3>Location : New Zealand</h3>
            <h3>Contact : 12345</h3>
        </div>
    )
}

export default UserComponent;
```

### Using Props in class Based Component

UserClass.jsx

```jsx
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    const { location } = this.props;
    return (
      <div className="user-container">
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

### 🧠 What’s happening in your class component

In React, when you create a **class component** by extending `React.Component`, you’re using **JavaScript class inheritance**.

Your component `UserClass` inherits all the features from the base class `React.Component`.

---

### ⚙️ Role of `constructor(props)`

A **constructor** in a class is used to initialize state or bind methods before rendering.

If you define a constructor in your subclass (like here), you must first call `super()` — otherwise, JavaScript will throw an error because the subclass can’t use `this` before calling `super()`.

---

### 💡 Why we pass `props` to `super(props)`

- The **parent class** (`React.Component`) has its own constructor that expects `props`.
- When you call `super(props)`, you are **passing the props up to the parent class**, so that `React.Component` can initialize `this.props` internally.

So if you don’t pass `props` to `super`, then `this.props` inside your component will be **undefined** in the constructor.

AboutComponent.jsx

```jsx
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";

const AboutComponent = () => {
    return (
        <div>
            This is about page
            <UserComponent name={"Eoin Kishore Functional"}/>
            <UserClass name={"Eoin Kishore Class"} location={"New Zealand Class"}/>
        </div>
    )
};

export default AboutComponent;
```

### Output:

![image.png](attachment:2bf475cd-5f19-4b8b-9550-49bce276985e:image.png)

---