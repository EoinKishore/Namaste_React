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