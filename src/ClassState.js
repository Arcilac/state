import React from "react";
// import './UseStates.css';

class ClassState extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            error: true,
        };
    }

    render() {
        return (
            <div>
                <h2>Delete {this.props.name}</h2>
                <p>type the security code to check that you want to delete </p>

                {this.state.error && (
            <p>Error: the code is wrong </p>
        )}
                <input placeholder="security code" />
                <button
                    onClick={() => 
                        this.setState(prevState => ({error: !prevState.error  }))
                    }
                >Check</button>
            </div>
        )
    }
}

export { ClassState };