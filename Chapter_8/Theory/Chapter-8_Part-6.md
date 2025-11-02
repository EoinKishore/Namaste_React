## How to call an API in Class based component ?

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
          userInfo:{
            name : "Dummy Name",
            location : "Dummy Location"
          }
        }
        console.log(this.props.name+" Child class Constructor")
    }
    async componentDidMount() {
       console.log("Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/EoinKishore");
        const json = await data.json();
        this.setState({
          userInfo : json
        })
    }
    componentDidUpdate() {
      console.log("Child Component Did Update");
    }
    componentWillUnmount() {
      console.log("Child Component Will Unmount");
    }
  render() {
    console.log("Child class Render");
    const { name , location } = this.state.userInfo;
     return (
      <div className="user-container">
        <h3>Count = {this.state.count}</h3>
        <button onClick={() => {
          this.setState({
            count : this.state.count + 1
          })
        }}>Count Increase</button>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : 12345</h3>
      </div>
    );
  }
}

export default UserClass;
```

## Lifecycle method diagram

![image.png](attachment:9635e320-e4b9-4c96-98f9-522c79686461:image.png)

So here , when we click the AboutPage → 

```jsx
Parent Constructor will be called
Paren Render

   Inside Parent JSX child is called
   
	 Child Constructor is called
	 Child Render
	 Child ComponentDidMount will be called -> API is called it will get updated and show API data
	 
	 Parent ComponentDidMount
	 
	 Once the child updated the DOM elements -> componentDidUpdate will be called.
	 
	 Once if we navigate to someother page or UserClass component content get deleted 
	 componentWillUnMount will be called.
	    
```

### Output:

![image.png](attachment:d500014c-344e-4f77-abbc-3b1b076d016f:image.png)

### Unmount Example Output:

![image.png](attachment:09f00be9-f0c2-4e57-8efb-af52e274fa20:image.png)

---