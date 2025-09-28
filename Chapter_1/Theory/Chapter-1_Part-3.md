## How to create a structure of

```jsx
<div id="parent">
		<div id="child">
				<h1>I am h1 tag</h1>
		</div>
</div>
```

## in react ?

index.html

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
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

    <script src="./App.js"></script>
  </body>
</html>

```

App.js

```jsx

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am h1 tag")
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

```

Output:

![image.png](attachment:ff1b1048-f737-461d-80f8-aaf28b57de8c:image.png)

---

## How to create a structure of

```jsx
<div id="parent">
		<div id="child">
				<h1>I am h1 tag</h1>
				<h2>I am h2 tag</h2>
		</div>
</div>
```

## in react ?

App.js

```jsx

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag") , React.createElement("h2",{},"I am h2 tag")]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

```

If we need to add more than one element we have give inside the array.

### Output:

![image.png](attachment:fa2595dd-287a-4881-8883-bbad1894122e:image.png)

---

How create a structure Of 

```jsx
<div id="parent">
		<div id="child">
				<h1>I am h1 tag</h1>
				<h2>I am h2 tag</h2>
		</div>
		<div id="child2">
				<h1>I am h1 tag</h1>
				<h2>I am h2 tag</h2>
		</div>
</div>
```

in react ?

App.js

```jsx
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

## Output:

![image.png](attachment:20d95e87-15ab-42f1-8103-daabd2445e53:image.png)

It is looking like so tough , but this is react core , here after we won’t use this , we will use JSX.

But react is also can be write by JS this is what we learnt above.