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