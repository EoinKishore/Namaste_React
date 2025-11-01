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