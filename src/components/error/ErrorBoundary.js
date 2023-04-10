import React, { useState } from 'react';

function ErrorBoundary(props) {
    const [hasError, setHasError] = useState(false);

    const handleOnError = () => {
        setHasError(true);
    };

    if (hasError) {
        return (
            <div>
                <h1>Oops</h1>
                <p>I am still a work in progress and something went wrong. Its likely I tried to render a component that dosn't exist. </p>
            </div>
        );
    }

    return (
        <div onError={handleOnError}>
            {props.children}
        </div>
    );
}

export default ErrorBoundary;
