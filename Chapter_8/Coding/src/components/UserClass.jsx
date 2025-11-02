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