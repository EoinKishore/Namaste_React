## What is NPM ?

Actually, NPM doesn’t have an official full form. If you visit different websites, you’ll find various interpretations of it.

However, since its main purpose is **managing packages**, people often refer to it as **“Node Package Manager.”**

---

## How to Setup NPM in Our Project ?

command is : npm init

![image.png](attachment:41f78dd3-71cf-4d24-8258-a34baefc6363:image.png)

Then After finishing these steps , in the folder a package.json file will be created.

![image.png](attachment:979731e7-97d5-4df9-bd8c-e6bb7cdd55da:image.png)

## What is package.json ?

It is a JSON file that holds important information about your project, such as:

- **Project details** → name, version, description, author, license, etc.
- **Dependencies** → libraries (like React, Express, Lodash) your project needs.
- **DevDependencies** → tools needed only for development (like testing frameworks, linters).
- **Scripts** → custom commands you can run with `npm run ...`.
- **Configuration** → project-specific settings.

---

### Notes:

If you see the files we having the files like App.js , index.html , style.css ,

So for production we need to bundle these files.

To bundle the Files there some packages are there in NPM
they are parcel , webpack , vite etc.

---

## To Download Parcel Package :

The command is :

npm install -D parcel

npm → package manager , which it has collections of packages.

install → we are going to install that particular parcel package.

parcel → it is the package name.

-D → devDependencies

In package.json , you will see dependencies and devDependencies

Dependencies →  These are the packages your **application needs to run** in production.
devDependencies → These are packages needed **only for development**, not for production.

---

After installing parcel package ,

you may see

```jsx
"devDependencies": {
    "parcel": "^2.16.0"
  }
```

## so before the version number what is ^ symbol ?

### 🔹 1. `^` (Caret)

- Example: `"parcel": "^2.16.0"`
- Means: **Install the latest minor/patch updates**, but don’t change the major version.
- So it allows: `2.16.1`, `2.17.0`, `2.99.9`, but **not** `3.0.0`.
- This is the default when you install most packages.

---

### 🔹 2. `~` (Tilde)

- Example: `"parcel": "~2.16.0"`
- Means: **Allow only patch updates**, but keep the same minor version.
- So it allows: `2.16.1`, `2.16.2`, … but **not** `2.17.0`.

---

### 🔹 3.  (Wildcard)

- Example: `"parcel": "*"`
- Means: **Accept any version** (latest available).
- Risky because it may break your app.

---

### 🔹 4. No symbol (Exact version)

- Example: `"parcel": "2.16.0"`
- Means: Use **only this exact version**, no updates allowed.

---

### 🔹 5. `>` , `<` , `>=` , `<=`

- Example: `"parcel": ">=2.16.0"`
- Means: Install `2.16.0` or **higher**.
- Example: `"parcel": "<3.0.0"`
- Means: Anything **below version 3**.

---

### 🔹 6. `latest`

- Example: `"parcel": "latest"`
- Always fetches the **latest published version** from npm registry.

---

✅ **Most Common**

- `^` → safer, allows new features without breaking major changes.
- `~` → safer for stability, allows only bug fixes.

---

After we install some dependencies 

A package-lock.json file will also be generated.

## What is package-lock.json ?

- It is an **automatically generated file** created when you run `npm install`.
- It **locks** the exact versions of every package (and sub-package) installed in your project.
- Ensures that if someone else installs your project, they will get **the exact same dependency versions** you used.

### 📦 Example:

Suppose in your `package.json` you have:

```json
"dependencies": {
  "express": "^4.18.0"
}
```

- The `^` means npm could install `4.18.1`, `4.19.0`, etc.
- But in `package-lock.json`, you’ll see something like:

```json
"express": {
  "version": "4.18.2",
  "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
  "integrity": "sha512-XYZ..."
}
```

---

After installing any dependencies , Node modules folder will be created.

Inside the node_modules folder , contains the actual code of your installed packages.

![image.png](attachment:0ae6180e-f324-4f16-8df1-a4d02673d8dc:image.png)

So inside the node_modules there will be other folders too , 
When you install **Parcel**, you are not just getting Parcel itself. Every package can have **its own dependencies**—other packages it needs to work.

So this is called **transtive dependencies**.

![image.png](attachment:a2528b15-247b-484e-8e23-0e7781b202d6:image.png)

Like this inside node_modules folders , for every folder there will be package.json.

---

Why we need to put node_modules in gitignore , why can’t we put the package.json , package-lock.json in gitignore ?

We add **`node_modules`** to `.gitignore` because it contains all the actual code for the dependencies we install. This folder can become very large, so it’s unnecessary to include it in version control.

On the other hand, **`package.json`** and **`package-lock.json`** list all the dependencies and their versions. If someone wants to use our project or join our team, they can simply run **`npm install`** using these files to download and recreate the `node_modules` folder.

In short:

- **`node_modules`**: contains the downloaded dependency code (not pushed to Git).
- **`package.json` / `package-lock.json`**: contain dependency information and are essential for installing dependencies with **`npm install`**.