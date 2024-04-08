import React from "react";

class ClassState extends React.Component{
    render() {
        return (
            <div>
                <h2>Delete ClassState</h2>
                <p>type the security code to check that you want to delete </p>

                <input placeholder="security code" />
                <button>Check</button>
            </div>
        )
    }
}

export { ClassState };