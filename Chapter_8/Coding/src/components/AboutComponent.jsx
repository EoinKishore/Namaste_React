import UserClass from "./UserClass";
import UserComponent from "./UserComponent";

const AboutComponent = () => {
    return (
        <div>
            This is about page
            {/* <UserComponent name={"Eoin Kishore Functional"}/> */}
            <UserClass name={"Eoin Kishore Class"} location={"New Zealand Class"}/>
        </div>
    )
};

export default AboutComponent;