import React from "react"

const SECURITY_CODE = "paradigma"

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  console.log(state)

  React.useEffect(() => {
    console.log("beginning effect")

    if (!!state.loading) {
      setTimeout(() => {
        console.log("doing the validation")

        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          })
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          })
        }

        console.log("completing validation")
      }, 2000)
    }

    console.log("ending effect")
  }, [state.loading])

  if(!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>type the security code</p>
  
        {state.error && !state.loading && <p>Error: the code is wrong </p>}
  
        {state.loading && <p> Loading... </p>}
  
        <input
          placeholder="security code"
          value={state.value}
          onChange={(event) => {
            setState({
              ...state,
              value: event.target.value,
            })
          }}
        />
        <button
          onClick={() => {
            setState({
              ...state,
              loading: true,
            })
          }}
        >Check</button>
      </div>
    )
  }else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Are you sure?</p>
        <button
        onClick={() => {
          setState({
            ...state,
            deleted: true,
            value: '',
          })
        }}
        >Yes, delete</button>
        <button
         onClick={() => {
          setState({
            ...state,
            confirmed: false,
            value: '',
          })
        }}
        >No, come back</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>successfully eliminated</p>

        <button
        onClick={() => {
          setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
          })
        }}
        >Reset, come back</button>
      </React.Fragment>
    )
  }
 
}

export { UseState }
