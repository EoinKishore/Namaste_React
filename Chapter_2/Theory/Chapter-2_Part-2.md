## What Parcel will do ?

When you run

```bash
npx parcel index.html
```

👉 **Parcel takes your `index.html` as the entry point** and does these things:

1. **Starts a local development server** → so you can open your app in the browser (usually at `http://localhost:1234`).
2. **Bundles your files** → it looks at the HTML, then follows all `<script>` and `import` statements (like React, CSS, images, etc.), and bundles them together.
3. **Watches for changes** → if you edit your code, Parcel automatically rebuilds and refreshes the browser.

### Output:

![image.png](attachment:fe829d79-99e7-4f47-a0f4-aa052b7645f6:image.png)

---

Note:

Untill now we are using the CDN links to explore react.

Now going to see the another way.

---

## Installing react using NPM

Like other packages there is packages for react and react-dom packages in the NPM.

To install , the command is

```jsx
npm install react
npm install react-dom
```

After installing it go and remove the CDN links.

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
    <div id="root">
    </div>
    <script src="./App.js"></script>
  </body>
</html>

```

Then again run these by using parcel

### Output:

![image.png](attachment:b66170e0-3cc7-4346-a724-8eed8cd8562a:image.png)

It will show an error.

Then we need to add the import in js file.

App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
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

Output:

![image.png](attachment:834cec94-2de0-4b01-8044-f736c33a7c9f:image.png)

Again it will another error.

In the index.html we need to add the type module 

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
    <div id="root">
    </div>
    <script type="module" src="./App.js"></script>
  </body>
</html>
```

Output:

![image.png](attachment:f63408df-bbf4-4367-921e-e60b0d848554:image.png)

So here parcel is doing such things like

- dev build
- Local Server
- HMR - Hot Module Replacement
- File watching algorithm - writtern by C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older Browser
- Error Handling
- HTTPs
- Tree Shaking Algorithm - Remove unused Code
- Different dev and prod build

---

Notes:

When you run your app with **Parcel** (like `npx parcel index.html`), it creates a hidden folder called **`.parcel-cache`** in your project directory.

### What is `.parcel-cache`?

- It is a **cache folder** created by Parcel to **store processed/compiled files**.
- Parcel doesn’t recompile everything from scratch every time — instead, it stores the results of expensive operations (like transpiling JS, bundling, minifying, processing images, etc.) in this cache.
- Next time you run the dev server or build, Parcel can **reuse these cached results** to make the build much faster.

### What it contains:

- Transformed versions of your source files.
- Dependency graphs (information about which files import/use which).
- Metadata about the build.

### What happens if you delete it?

- Nothing breaks. Parcel will just **rebuild everything from scratch** (which takes longer).
- It will automatically create the folder again the next time you run `parcel`.

### In short:

`.parcel-cache` = **"speed booster"**

It makes your development builds and rebuilds **much faster** by avoiding unnecessary reprocessing.

👉 That’s why you should **add it to `.gitignore`** — it’s only useful locally, not needed in version control.

---

## **What is `dist/`?**

- `dist` stands for **distribution**.
- It is a folder that build tools (like **Parcel**, **Webpack**, **Vite**, etc.) generate after processing your source code.
- It contains the **final, production-ready code** that you can **deploy to a server or host online**.

After running the **dev build command**, a **`dist`** folder is created.

This folder contains optimized files—such as simplified code, optimized images, and removed unused code. The files in the **`dist`** folder are what actually get served on **localhost** during development.

![image.png](attachment:57d3bccc-1082-492e-86c1-a75e147b0b20:image.png)

---

## Now lets try to build for production

The command is 

```jsx
npx parcel build index.html
```

### Important note:

If we’re using **Parcel**, we should remove the **`main`** field from the **`package.json`** file.

The **`main`** field usually specifies the entry point for the application, but since we’re already providing the entry point directly in the Parcel command, it’s no longer needed in **`package.json`**.

Compare to dev build it will take some time for production build , because compare to dev build , it will more simplify the code , more optimize the image , remove unused code.

![image.png](attachment:6f1519e8-48fd-4895-88bd-09972c9f65e3:image.png)

After this production dist generated , put this code in server and run , it will be fast.
Like this only the websites are hosting and working fastly.

---

### Notes:

Like the node_modules folder , the .parcel_cache and dist folder is a regenaring folder , so it can added to the gitignore file.

---

### Doubt:

If we put the folder like node_modules , dist , .parcel_cache in gitignore file , how the server will know and what files will server run.

![flowchart.png](attachment:3c39eff0-76d9-46cb-99de-0e0f56d927ee:flowchart.png)

That’s okay because we only upload our **source code** and **`package.json`** (along with **`package-lock.json`**) to GitHub. When the server pulls the code from GitHub:

1. It uses **`package.json`** to install all the required packages, recreating the **`node_modules`** folder on the server.
2. It then builds the project using Parcel, which generates the **`dist`** and **`.parcel_cache`** folders on the server.
3. Finally, the server uses the files inside the **`dist`** folder to execute the code and display the output to the user.

In short, the server rebuilds everything it needs from the **`package.json`** file.

---

## What is **browserslist**?

- **Browserslist** is a configuration that tells build tools (like **Parcel**, Babel, PostCSS, Autoprefixer, ESLint, etc.) **which browsers you want to support**.
- Based on this, tools will automatically add polyfills, transpile JS, and add vendor prefixes in CSS.

👉 Example: If you say "support last 2 Chrome versions", it will make sure the output works for the last 2 versions of Chrome.

```jsx
{
  "name": "coding",
  "version": "1.0.0",
  "description": "This is Namaste React By Eoin Kishore",
  "homepage": "https://github.com/EoinKishore/Namaste_React#readme",
  "bugs": {
    "url": "https://github.com/EoinKishore/Namaste_React/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/EoinKishore/Namaste_React.git"
  },
  "license": "ISC",
  "author": "Kishore C",
  "type": "commonjs",
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "parcel": "^2.16.0"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "browserlist": [
    "last 2 version"
  ]
}

```

in package.json we need to add the browserslist.

https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

Visit the website and chose , what config you want.

why we are using this browserslist to mak our website works in older browsers tooo.