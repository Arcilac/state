import React from "react";
import './UseStates.css';

function UseState({ name }) {
    const [error, setError] = React.useState(true);
    return (
        <div>
        <h2>Delete {name}</h2>
        <p>type the security code to check that you want to delete </p>

        {error && (
            <p>Error: the code is wrong </p>
        )}

        <input placeholder="security code" />
        <button
        onClick={() => setError(!error)}
        >Check</button>
    </div>
    )
}

export { UseState };