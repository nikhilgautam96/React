# React :

-   It has a component based architecture.
-   Uses virtusl DOM.
-   Uses JSX(Javascript XML code).
-   All the codes we write in REACT, we should include it inside the `src` folder.

    -   `WHY` : bcz when we are building the app, the webpack is going to search only inside the src folder.

    -   `Webpack` : It is a JS bundler. At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

## Why COMPONENTS :

1. Reusability.
2. Seperation of Concerns.

## How COMPONENTS are built = `HTML + CSS + REACT`

## `React.StrictMode` :

-   `<React.StrictMode>` is a component provided by React that is used to highlight potential problems in your application during development. It is not intended for use in production, and it does not affect the behavior of your application in a production build. Instead, it helps you find and fix issues early in the development process.

Here's what `<React.StrictMode>` does and why it's useful:

1. **Highlighting Problems:** When you wrap parts of your React application in `<React.StrictMode>`, React checks for potential issues and warns you about them in the browser's console. These warnings are meant to help you catch and fix problems that might lead to bugs or performance issues.

2. **Common Development Issues:** Some of the issues that `<React.StrictMode>` helps identify include:

    - Detecting components with unsafe lifecycle methods.
    - Detecting unexpected side effects in render functions.
    - Warning about legacy string ref API usage.
    - Identifying potential problems with the concurrent mode.

3. **Encouraging Best Practices:** `<React.StrictMode>` encourages you to follow best practices and write components that are more resilient and performant. For example, it encourages the use of modern lifecycle methods and discourages the use of legacy features.

Here's an example of how to use `<React.StrictMode>` in a React application:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

In the code above:

-   We import `<React.StrictMode>` from the 'react' library.
-   We wrap our `<App />` component with `<React.StrictMode>` when rendering it with `ReactDOM.render()`.
-   During development, this will enable the strict mode checks, and any potential issues will be reported in the browser's console.

It's important to note that these warnings and checks are meant to be helpful, and addressing them can lead to a better React application. However, some warnings may be related to third-party libraries or code that you don't have direct control over, so you should use your judgment when deciding how to address them.

## Why are `PROPS` immutable in React :

-   Props in React are designed to be immutable for several important reasons related to the predictability and maintainability of your application. Here are the key reasons why props should be treated as immutable:

1. **Predictable Data Flow:** In React, data flows in a unidirectional manner—from parent components to child components. This one-way data flow helps make your application more predictable because you can trace the origin of data changes. When props are immutable, you can trust that the data passed from parent to child components will not change unexpectedly.

2. **Pure Components and Memoization:** React uses the concept of "pure components" and memoization techniques to optimize rendering. A pure component compares the current and previous props and state to determine whether it should update. If props were mutable, React wouldn't be able to rely on this comparison, potentially leading to unnecessary re-renders and decreased performance.

3. **Functional Paradigm:** React encourages a functional programming style. Immutability is a fundamental concept in functional programming, where data is treated as immutable to avoid unintended side effects. By making props immutable, React aligns with this paradigm and promotes cleaner and more maintainable code.

Here's an example to illustrate why props should be treated as immutable:

```javascript
import React, { useState } from 'react';

function ParentComponent() {
    const [name, setName] = useState('John');

    const changeName = () => {
        setName('Alice');
    };

    return (
        <div>
            <ChildComponent name={name} />
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

function ChildComponent(props) {
    return <p>My name is {props.name}</p>;
}
```

In this example:

-   `ParentComponent` maintains a piece of state called `name`.
-   The `ChildComponent` receives `name` as a prop and displays it.
-   There's a "Change Name" button in the parent component that updates the `name` state when clicked.

If props were mutable, the following issues could arise:

1. **Unpredictable Behavior:** If `ChildComponent` directly modified the `name` prop, it would lead to unpredictable behavior because the parent component might not expect the prop to change in place.

2. **Inefficient Rendering:** React relies on prop immutability to optimize rendering. If `ChildComponent` mutated the `name` prop, it might trigger unnecessary re-renders, affecting performance.

By keeping props immutable, React ensures that data flows in a predictable and efficient manner, making it easier to reason about your application's behavior and maintain it as it scales. It also encourages a functional programming style, which can lead to cleaner and more reliable code.

## Functional vs Class Components :

-   Here's a comparison of function components and class components in tabular format:

| Aspect                | Function Components                                               | Class Components                                                                 |
| --------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Syntax                | Plain JavaScript functions that return JSX.                       | ES6 classes that extend `React.Component`.                                       |
| State Management      | Use React Hooks to manage state and side effects.                 | Use `this.state` and `this.setState()` for state management.                     |
| Lifecycle Methods     | No access to lifecycle methods.                                   | Access to lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc. |
| Local Component State | No local state.                                                   | Can have local component state.                                                  |
| `this` Keyword        | No use of `this` keyword. Props and state are accessed directly.  | Use `this` keyword to access props and state.                                    |
| Code Length           | Generally shorter and more concise.                               | May require more boilerplate code.                                               |
| Functional Paradigm   | Aligns with the functional programming paradigm.                  | Does not strictly follow functional programming principles.                      |
| Readability           | Often considered more readable, especially for simple components. | Can be more verbose for simple components.                                       |
| Ref API               | Cannot use the Ref API directly. Instead `useRef` Hook.           | Can use the Ref API for direct DOM manipulation.                                 |
| Adoption and Trend    | Preferred approach in modern React development.                   | Still used in older React codebases.                                             |

## How do functional components mimic lifecycle methods :

-   Function components in React do not have access to traditional lifecycle methods like class components do. Instead, they have access to lifecycle-related functionality through React Hooks. React Hooks allow function components to manage state, perform side effects, and handle component lifecycle events in a more concise and predictable manner.

Here are some commonly used React Hooks that correspond to certain aspects of component lifecycle:

1. `useState`: This Hook allows function components to manage local state, somewhat equivalent to this.state in class components.

2. `useEffect`: This Hook enables side effects and replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

3. `useContext`: It provides access to the context system, which is useful for passing data down the component tree without prop drilling.

4. `useRef`: This Hook is used to create and interact with refs, allowing direct manipulation of the DOM.
