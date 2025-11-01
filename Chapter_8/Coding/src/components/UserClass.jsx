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
    console.log(this.props.name+" Child class Render");
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