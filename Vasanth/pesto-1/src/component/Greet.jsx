import React from 'react'; // This import became optional in react version 18 onwards.
// Unless we combine Html/CSS with JS then only this `React` comes in picture. Otherwise it is not used.

// we should not export app as default, bcz default exports can be given any names, unlike Named exports.
export function Greet(props) {
    // use `Pascal Case` for react components.

    // console.log(props);

    let { name } = props;
    /**
     *
     * when we destructure the props, we actually create a new variable that has the same value as props.
     * Thus it is `mutable` --> value can be updated, as we see in below code.
     * while `props` object itself is `immutable` --> It's properties are read-only.
     *
     */
    name = 'updated name';

    return (
        <>
            <h1>Hi I am {name}.</h1>
            <h2>{props.name}</h2>
            {/* Anything written inside a react component is treated as text, unless inside a {}. */}
            {/* console.log('Hello I am Greet.'); --> if this line is uncommented, it gets treated as a text/string. */}
        </>
    );
}
