import CardComponent from "./CardComponent";
import { resArr } from "../utils/mokData";
const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">
        <p>Search</p>
      </div>
      <div className="res-container">
        {
          resArr.map((res) => {
            return <CardComponent key={res.data.id} resData={res} />
          })
        }
      </div>
    </div>
  )
}

export default BodyComponent;