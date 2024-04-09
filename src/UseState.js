import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    });
    
    console.log(value)

    React.useEffect(() => {
        console.log("beginning effect")

        if (!!loading) {
            setTimeout(() => {
                console.log("doing the validation")
    
                if (state.value === SECURITY_CODE) {
                    setState({
                        loading: false,
                    });
                   // setLoading(false);
                  //  setError(false);
                }else {
                    setState({
                        error: true,
                        loading: false,
                    });
                }
                
                console.log("completing validation")
            }, 2000 )
        }
       

        console.log("ending effect")
    }, [loading]);
    return (
        <div>
        <h2>Delete {name}</h2>
        <p>type the security code</p>

        {(state.error && !state.loading) && (
            <p>Error: the code is wrong </p>
        )}
        
        {state.loading && (
            <p> Loading... </p>
        )}

        <input 
        placeholder="security code" 
        value={state.value}
        onChange={(event) => {
             setError(false);
            setValue(event.target.value);
        }}  
        />
        <button
        onClick={() => {
            //setError(false); correct
           // setLoading(true);
           setState({
            loading: true,
        });
        }}
        >Check</button>
        </div>
    )
}

export { UseState };