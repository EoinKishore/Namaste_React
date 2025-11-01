## Let’s Understand how the class based component will work ?

To understand easily , let’s convert the About Component to class Based Component

AboutComponent.jsx

```jsx
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";
import React from "react";
class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent class Constructor");
    }
    render() {
        console.log("Parent class Render");
        return (
            <div>
            This is about page
            {/* <UserComponent name={"Eoin Kishore Functional"}/> */}
            <UserClass name={"Eoin Kishore Class"} location={"New Zealand Class"}/>
        </div>
        )
    }
}

export default AboutComponent;
```

UserClass.jsx

```jsx
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count : 0,
        }
        console.log("Child class Constructor")
    }
  render() {
    console.log("Child class Render");
    const { location } = this.props;
    return (
      <div className="user-container">
        <h3>Count = {this.state.count}</h3>
        <button onClick={() => {
          //this.state.count = this.state.count + 1;  never do this mistake.
          this.setState({
            count : this.state.count + 1
          })
        }}>Count Increase</button>
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

Now we can clearly see that **AboutComponent** is the **parent class**, and **UserClassComponent** is the **child class**.

When a component is called, it first executes the **constructor**, and then the **render** method.

So here’s what happens step by step:

- First, the **AboutComponent** (parent) is called — its **constructor** runs first, followed by its **render** method, which returns the JSX.
- Inside that JSX, we call the **UserClassComponent** (child).
- When the child component is called, its **constructor** runs first, and then its **render** method executes.

### Output:

![image.png](attachment:4301680e-51fc-4788-99f8-a56487b77779:image.png)

---

### componentDidMount

It is a method which is like useEffect , after rendering the component , it will run the method.

AboutComponent.jsx

```jsx
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";
import React from "react";
class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent class Constructor");
    }

    componentDidMount() {
        console.log("Parent class Component Did Mount");
    }
    render() {
        console.log("Parent class Render");
        return (
            <div>
            This is about page
            {/* <UserComponent name={"Eoin Kishore Functional"}/> */}
            <UserClass name={"Eoin Kishore Class"} location={"New Zealand Class"}/>
        </div>
        )
    }
}

export default AboutComponent;
```

UserClass.jsx

```jsx
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count : 0,
        }
        console.log("Child class Constructor")
    }
    componentDidMount() {
        console.log("Child class Component Did Mount")
    }
  render() {
    console.log("Child class Render");
    const { location } = this.props;
    return (
      <div className="user-container">
        <h3>Count = {this.state.count}</h3>
        <button onClick={() => {
          //this.state.count = this.state.count + 1;  never do this mistake.
          this.setState({
            count : this.state.count + 1
          })
        }}>Count Increase</button>
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

So simply put, after a component is rendered, the **`componentDidMount`** method is called.

According to the code:

- In the **parent component**, the **constructor** runs first.
- Then it **renders** the component, but it doesn’t immediately call **`componentDidMount`**.
- During the rendering of the parent, it also renders the **child component**.
- So, while rendering:
    1. The **child’s constructor** is called.
    2. Then the **child’s render** method runs.
    3. After that, the **child’s `componentDidMount`** executes.
- Finally, once the child is fully mounted, the **parent’s `componentDidMount`** method is called.

### Output:

![image.png](attachment:1075844e-4d52-410a-845a-56fc15bc43a3:image.png)

---
Now consider in about component we are going to two child component.

AboutComponent.jsx

```jsx
import UserClass from "./UserClass";
import UserComponent from "./UserComponent";
import React from "react";
class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent class Constructor");
    }

    componentDidMount() {
        console.log("Parent class Component Did Mount");
    }
    render() {
        console.log("Parent class Render");
        return (
            <div>
            This is about page
            <UserClass name={"First"} location={"New Zealand Class"}/>
            <UserClass name={"Second"} location={"New Zealand Class"}/>
        </div>
        )
    }
}

export default AboutComponent;
```

UserClass.jsx

```jsx
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count : 0,
        }
        console.log(this.props.name+" Child class Constructor")
    }
    componentDidMount() {
        console.log(this.props.name+" Child class Component Did Mount")
    }
  render() {
    console.log("Child class Render");
    const { location } = this.props;
    return (
      <div className="user-container">
        <h3>Count = {this.state.count}</h3>
        <button onClick={() => {
          this.setState({
            count : this.state.count + 1
          })
        }}>Count Increase</button>
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

Every body will except like 

```jsx
Parent constructor
Parent render
   First Child Constructor
   First Child Render
   First Child componentDidmount
   
   Second Child Constructor
   Second Child Render
   Second Child componentDidMount
Parent componentDidMount
```

But the above excepted steps are wrong

## Lifecycle method diagram

![image.png](attachment:5dcb0a16-aa3c-4485-a389-e853770e2935:image.png)

In React, there are two main phases in the component lifecycle:

### 1. Render Phase

In this phase, React prepares the component for rendering.

- It sets up the **state** and **props**.
- It runs the **render method**, where React uses its **reconciliation algorithm** to compare the Virtual DOM with the previous one and identify changes.
- However, **the DOM is not updated** yet during this phase.

### 2. Commit Phase

In this phase, React **updates the actual DOM** based on the differences found during the render phase.

- This phase usually takes more time since it involves real DOM updates.
- After updating the DOM, React calls the **`componentDidMount`** method.

---

If the same component is called multiple times, React **optimizes** the process by **batching the render and commit phases**.

For example, consider the **`UserClass`** component being rendered twice:

- For the **first instance**, React runs the **constructor** and **render** methods, but the DOM is not yet updated, and **`componentDidMount`** is not called — meaning only the **render phase** is completed.
- Then React moves to the **second instance**, runs its **constructor** and **render** methods, and updates the DOM — completing the **render phase** for both components.

After that:

- The DOM for the **first `UserClass`** component is updated, and its **`componentDidMount`** method is called.
- Then the DOM for the **second `UserClass`** component is updated, and its **`componentDidMount`** method is called.

In short, React batches the work to make rendering more efficient and updates the DOM only after the render phase for all components is done.

```jsx
Parent Constructor
Parent Render

   First Class Constructor
   First Class render
   
   Second Class Constructor
   Second Class render
   
   First ComponentDidMount
   Second ComponentDidMount
   
Parent componentDidMount
```

This is correct way it will get updated.

### Output:

![image.png](attachment:ffab60ed-8445-49b1-b663-2bc1ed780574:image.png)