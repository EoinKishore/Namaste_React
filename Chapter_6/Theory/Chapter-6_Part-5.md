## Setting a login logout button

Now we are going to set the login button , when the component is loaded it should show a login , when we click login it should show the logout button.

HeaderComponent.jsx

```jsx
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" alt="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
```

### Output:

![image.png](attachment:2290e88f-261c-41e4-b6d4-5e371c5367cd:image.png)

when we click the login it should show logout

![image.png](attachment:c77becd3-bbd0-4b4d-ab61-b15fca02724e:image.png)

## Doubts:

### 1. Why do we use useState instead of a normal JavaScript variable?

When we use a normal JavaScript variable, the value changes in the code but **does not update the UI**, because React does not track changes in regular variables.

The **useState** hook allows React to track the variable’s state. When its value changes, React automatically re-renders the component to reflect the updated data in the UI.

---

### 2. In the HeaderComponent, when we change the login and logout button, will it re-render only the button or the whole component?

The **login button** is part of the **HeaderComponent**, so when its state changes (for example, from “Login” to “Logout”), the **entire HeaderComponent** will re-render.

React re-renders the whole component where the state is updated, not just the specific element.

---