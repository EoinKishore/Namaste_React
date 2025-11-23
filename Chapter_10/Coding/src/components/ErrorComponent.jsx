import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
    const error = useRouteError();
    console.log("ErrorComponent -> ", error);
    return (
        <div>Oops something went wrong</div>
    )
}

export default ErrorComponent;