## What if we replace the app link above the CDN links ?

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
    <script src="./App.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

  </body>
</html>
```

If we giving the App.js link before the CDN links , first it will execute them , then only it saw the CDN links so it will Error. So nothing will be printed.

### Output:

![image.png](attachment:591972ff-4233-4512-b05a-b47f4b4cad37:image.png)

---

## Whats the difference between the development and production links ?

![image.png](attachment:706bac1e-7816-4f7d-b82b-04b0f07cb8d9:image.png)

### 🔹 Development Build (`react.development.js` & `react-dom.development.js`)

- **Purpose**: Used during development (while coding, debugging).
- **Features**:
    - Includes **extra checks, warnings, and error messages** to help developers catch mistakes.
    - Example: If you forget a `key` in a list or pass invalid props, React will show a detailed warning in the console.
    - Code is **not minified**, so it’s bigger and slower.
- **File size**: Larger (because of extra debugging features).

---

### 🔹 Production Build (`react.production.min.js` & `react-dom.production.min.js`)

- **Purpose**: Used in the final, deployed application (when users visit your website).
- **Features**:
    - All warnings, developer checks, and debugging messages are **removed**.
    - The code is **minified and optimized** → runs faster, loads quicker.
    - Smaller file size, better performance.
- **Trade-off**: You lose the helpful warnings that make debugging easier.

---

### ⚖️ What happens if you use Production build in Development?

- Your app will still work fine ✅.
- But:
    - You **won’t see warnings or helpful error messages** in the console.
    - Debugging becomes harder because errors might be vague or missing.
    - Example: If you forget to add `key` in a list:
        - Development build: *"Warning: Each child in a list should have a unique 'key' prop."*
        - Production build: **No warning at all.**

---

### ⚖️ What happens if you use Development build in Production?

- The app still works ✅.
- But:
    - The files are **heavier**, so your website loads slower.
    - Extra checks may slightly reduce performance.
    - Not good for user experience.

---

👉 **Best Practice**

- **While coding**: Use `development` build → better debugging.
- **When deploying (live site)**: Use `production.min` build → faster and optimized.

---

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
    <div id="root">
      <h1>Hello World</h1>
    </div>
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

What will happen now , 

1. Whether Hello world prints first , then App.js content will come
2. Whether App.js content prints first , then Hello World will come
3. Whether Hello World will replaces the App.js content
4. Whether App.js content will replace the Hello World

So the answer is , 

Initially the hello world will printed and after the root render the App.js content , then App.js content will be replace the Hello World.

---