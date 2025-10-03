## What is Script ?

A **script** is a custom command inside your React project’s `package.json` that makes running, building, testing, or deploying your project much easier and consistent.

To run or To dev build we use the command is

```jsx
npx parcel index.html
```

Insteded of using this again and again , we can simplify the command by writting the scripts in package.json file.

```json
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
    "start":"parcel index.html",
    "build":"parcel build index.html",
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

Now to run or to dev we have to give the command likebuild 

```jsx
npm run start
Or
npm start
```

Now to build for production

```jsx
npm run build
```