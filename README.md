# Notes Webapp LND

A simple web based note taking application.

https://notes.nicholascannon.com

### Motivation

The codebase is built to scale to a larger application worked on by multiple people.
This app is built with popular tools, not the hottest tools available (like vite and tailwindCSS).
It's meant to be a realistic example of production React apps depended on by businesses.

## How to run things

### Bootstrap project

Navigate to the `app` directory and install dependencies:

```bash
cd app && npm ci
```

Run the app in dev mode:

```bash
npm start
```

Build the app:

```bash
npm run build
```

Application is built to `./app/dist`

Run the test suite:

```bash
npm run test
```

## Stack

### Production stack

-   React
-   Emotion
-   Framer motion

### Tooling stack

-   Webpack
-   Babel
-   TypeScript
-   Eslint
-   Prettier
-   Lint staged
-   Husky
-   Jest
-   Testing library
-   Knip

## Wireframe

![Application wireframe](./docs/wireframe.png)

## Relevant links

-   [Bullet Proof React](https://github.com/alan2207/bulletproof-react)
