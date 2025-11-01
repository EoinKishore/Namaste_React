## How to use state variable in functional and class component ?

### Functional Component

UserComponent.jsx

```jsx
import { useState } from 'react';
const UserComponent = (props) => {
    const {name} = props;
    const [count] = useState(0);
    return (
        <div className="user-container">
            <h3>Count = {count}</h3>
            <h3>Name : {name}</h3>
            <h3>Location : New Zealand</h3>
            <h3>Contact : 12345</h3>
        </div>
    )
}

export default UserComponent;
```

### Class Component

```jsx
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count : 0,
        }
    }
  render() {
    const { location } = this.props;
    return (
      <div className="user-container">
        <h3>Count = {this.state.count}</h3>
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

we need to create the state variable inside the constructor.

state is an object , we can create multiple key value inside the state object.

### Output:

![image.png](attachment:72da1a6f-c48d-4c7d-a3fb-bf62088c940a:image.png)

---

## How to Update the State variable in class Component ?

### Class Based Component

UserClass.jsx

```jsx
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count : 0,
        }
    }
  render() {
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
        <h3>Count -2 : {this.state.count2}</h3>
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

Like functional component , there is method called setState in the class component , inside we can change the multiple key values.

### Output:

![image.png](attachment:73c89890-28a8-44fd-a8df-83d702121b13:image.png)

---