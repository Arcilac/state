import React from "react"
// import './UseStates.css';

class Loading extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  render() {
    return <p>Loading...</p>
  }
}

export { Loading }
