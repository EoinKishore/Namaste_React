## Types of Testing

1. Unit testing
2. Integration Testing
3. End to End testing - E2E Testing

---

## How to setup for testing in react

1. Here going to use the React Testing library , react testing library is using the Jest library. so we need to install both packages.

### What is React Testing Library ?

React Testing Library is a testing utility used to test React components.

Its main idea is to test components the way a user uses them, not by checking internal implementation details.

### What is Jest ?

Jest is a JavaScript testing framework developed by Meta.

It is mainly used to run tests, make assertions, and generate test reports.

### To install the React Testing Library

```sql
npm i -D @testing-library/react
```

To install the Jest Library

```sql
npm i -D jest
```

If we are using the  babel

![image.png](attachment:2e17f9b8-0aa5-4c33-ac20-5a2349c9f8b5:image.png)

```jsx
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

create a file called babel.config.js

```jsx
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

---

Now we are using the babel and parcel , so here for testing parcel will conflict with babel , so we need to set the additional setup 

![image.png](attachment:5efbc7dc-807e-46ac-b024-855d82803c51:image.png)

1. create a file .parcelrc

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```