## What is JSX ?

- **JSX** stands for **JavaScript XML**.
- It is a **syntax extension** for JavaScript, which allows you to write HTML-like code inside JavaScript.

It is not HTML inside JavaScript , JSX is like HTML Or XML Syntax.

### Example:

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

// this is how we write in react
const heading = React.createElement("h1",{id:"heading"},"Hello World from react");

console.log(heading);

// this is how we write in jsx
const jsxHeading = <h1 id="jsxHeading">Hello World from JSX</h1>;
// jsx makes it easier to write and understand
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

index.html

```html
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
    <script type="module" src="./App.js"></script>
  </body>
</html>
```

### Output:

![image.png](attachment:08391154-5e4c-465c-8e08-cd8b0969a85c:image.png)

### Console Output:

![image.png](attachment:5777ae64-6810-4955-974d-05c1006a2a95:image.png)

So using React it will return an Object

By using JSX it will return an Object.

So render function only converting the Object to HTML and displaying in the browser.

---

### Note:

JSX is not a JavaScript or HTML.

### Example:

Browser understand only JavaScript , In every browser there will be JavaScript Engine.

In console if we paste JSX line

![image.png](attachment:48357b0d-2e78-4dad-80d4-483e5b6116c9:image.png)

---

### Doubt:

Everybody will have the Doubt like then how it is printed in the browser ?

In the Parcel , it is using another Package called Babel.

## What is Babel ?

- **Babel** is a **JavaScript compiler** (or transpiler).
- Its main job: **convert modern JavaScript (ES6+, JSX, TypeScript, etc.) into older JavaScript that all browsers can understand.**
- It is simply converting the JSX into JavaScript , then only the browser can understand.

---

## How it converting the JSX into JavaScript ?

### Normal React Element

```jsx
const heading = React.createElement("h1",{id:"heading"},"Hello World from react");
```

![flowchart_2.png](attachment:6330d163-e645-4e89-a64b-ee2d4c39374b:flowchart_2.png)

React.creatElement → Returns an Object which is JavaScript → then By using ReactDOM render function Converting the Object to HTML code and then displaying in the Browser.

### Using JSX

```jsx
const jsxHeading = <h1 id="jsxHeading">Hello World from JSX</h1>;
```

![flowchart_3.png](attachment:f1f3815c-4d5d-45ea-8151-64f154fc37ae:flowchart_3.png)

Now here comes the babel

So now the code is in JSX 

Now babel will convert JSX → React.createElemnt()

React.creatElement → Returns an Object which is JavaScript → then By using ReactDOM render function Converting the Object to HTML code and then displaying in the Browser.

---

## Common HTML vs JSX Attributes

| **HTML Attribute** | **JSX Attribute** | **Why Different?** |
| --- | --- | --- |
| `class` | `className` | `class` is a reserved keyword in JS |
| `for` | `htmlFor` | `for` is a reserved word in JS |
| `onclick` | `onClick` | JSX uses camelCase for event handlers |
| `onchange` | `onChange` | camelCase convention |
| `onmouseover` | `onMouseOver` | camelCase convention |
| `tabindex` | `tabIndex` | camelCase convention |
| `maxlength` | `maxLength` | camelCase convention |
| `readonly` | `readOnly` | camelCase convention |
| `colspan` | `colSpan` | camelCase convention |
| `rowspan` | `rowSpan` | camelCase convention |
| `contenteditable` | `contentEditable` | camelCase convention |
| `autocomplete` | `autoComplete` | camelCase convention |
| `autofocus` | `autoFocus` | camelCase convention |
| `spellcheck` | `spellCheck` | camelCase convention |
| `novalidate` | `noValidate` | camelCase convention |
| `frameborder` | `frameBorder` | camelCase convention |
| `marginwidth` | `marginWidth` | camelCase convention |
| `marginheight` | `marginHeight` | camelCase convention |
| `accept-charset` | `acceptCharset` | camelCase convention |
| `enctype` | `encType` | camelCase convention |
| `crossorigin` | `crossOrigin` | camelCase convention |

---

If you want to write the JSX Multiple lines then wrap the code inside the ()

```jsx
const jsxHeading = (<h1 id="jsxHeading">
    Hello World from JSX
    </h1>);
```