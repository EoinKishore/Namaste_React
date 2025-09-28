## How to write a code in HTML ?

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Basic html Code</h1>
</body>
</html>
```

---

## How to write the hello world in js and pushing into dom ?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">

    </div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World";
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>
</body>
</html>
```

---

## What is React ?

**React** is a **JavaScript library** created by **Facebook (now Meta)** for building **user interfaces (UIs)**, especially for **single-page applications (SPAs)**.

- It allows developers to create **components** (reusable pieces of UI, like buttons, forms, cards).
- React uses a **virtual DOM** (a lightweight copy of the real DOM) to update only the parts of the page that change, instead of reloading the whole page.
- This makes web applications **faster, more interactive, and efficient**.

---

## What is Difference between Library and Framework ?

- A **Library** is a collection of pre-written code you can use to perform specific tasks.
    - You are in **control**: you decide when and how to call the library functions.
    - Example: **React** (you decide how to structure your app, React just helps with the UI).
- A **Framework** is a bigger structure that provides a complete environment to build applications.
    - The framework is in **control**: it calls your code at the right time (this is called *Inversion of Control*).
    - Example: **Angular, Django, Spring Boot** (they define the rules, structure, and you just fill in your code).

## **In Simple Words**

👉 Think of **cooking** 🍳:

- **Library** → Like using a **ready-made masala packet**.
    - You’re the chef 👨‍🍳, you decide when and how to add it.
    - You’re still in control of the recipe.
- **Framework** → Like ordering a **meal kit** 🍱 where everything is pre-arranged.
    - You must follow their steps and structure.
    - The framework is guiding you, and you just fill in the missing parts.

---

## What is CDN ?

A **CDN (Content Delivery Network)** is a group of servers placed in different locations around the world. These servers store copies of website content (like images, videos, CSS, JavaScript, etc.). When a user visits a website, instead of always fetching the data from the original server, the CDN delivers the data from the server that is closest to the user.

---

## **What is `crossorigin` in `<script>` tag?**

When you load a script from another domain (like a CDN), the browser considers it **cross-origin** (different origin from your website).

The `crossorigin` attribute tells the browser **how to handle requests and responses for that script** when it comes from another domain.

👉 In **simple words**:

`crossorigin` in script means:

*"Hey browser, I know this script is from another website. Here’s how you should treat it when fetching (with or without credentials)."*

---

## For React if we inject the CDN links we can use react in normal HTML

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">

    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>
```

Output:

If we want to know is react is connected , just go to console and type react and check

![image.png](attachment:aa8e6a4c-56b5-4a2a-9c07-c543bbcef87f:image.png)

---

```jsx
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
 <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

## Why there are two script tags ? and what is react and react dom in it ?

## **1. What is React?**

- **React** is the **core library**.
- It helps you **create components** (small pieces of UI like buttons, forms, headers).
- It also provides the **Virtual DOM** and the way components work.

👉 But React alone **doesn’t know how to put things on the screen (DOM)**.

## **2. What is ReactDOM?**

- **ReactDOM** is another library that knows how to take React components and show them in the **real browser DOM**.
- It acts like a **bridge** between React (virtual world) and the real browser (HTML world).

## **Why not in one script?**

- Because React can be used in **different environments** (like mobile apps with React Native, not just browsers).
- In mobile apps, you don’t need ReactDOM (since there’s no browser DOM).
- That’s why they separated them:
    - **React** = logic + components (common for all platforms)
    - **ReactDOM** = specific to web browsers

---