import React from "react";
import './UseStates.css';

function UseState({ name }) {
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log("beginning effect")

        if (!!loading) {
            setTimeout(() => {
                console.log("doing the validation")
    
                setLoading(false);
    
                console.log("completing validation")
            }, 2000 )
        }
       

        console.log("ending effect")
    }, [loading]);
    return (
        <div>
        <h2>Delete {name}</h2>
        <p>type the security code to check that you want to delete </p>

        {error && (
            <p>Error: the code is wrong </p>
        )}
        
        {loading && (
            <p> Loading... </p>
        )}

        <input placeholder="security code" />
        <button
        onClick={() => setLoading(true)}
        >Check</button>
        </div>
    )
}

export { UseState };