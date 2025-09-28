## How to write the hello world program using react ?

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
        const heading = React.createElement("h1",{id:"heading"},"Hello World From React");
        console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
  </body>
</html>

```

- `createElement` is a method provided by the React library. It accepts three parameters: the first is the tag name, and the last is the content that will be displayed inside the tag and the centered part of parameter is used to pass the attributes to the tag.
- `createRoot` is a method provided by the ReactDOM library. It creates the root container where all other React components and content can be rendered.

### Output:

![image.png](attachment:e28a895b-dc3c-4017-b2d5-b7db325b1867:image.png)

- The **`React.createElement`** method returns a plain JavaScript object (a React element) that describes the UI.
- The **`render`** method takes this object, converts it into an actual HTML element, and displays it in the browser.