import { LOGO_URL } from "../utils/constants";
const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
export default HeaderComponent;