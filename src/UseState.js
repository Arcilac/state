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

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    })
  }

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    })
  }

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    })
  }

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    })
  }

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
      value: '',
    })
  }

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    })
  }
  
  
  React.useEffect(() => {
    console.log("beginning effect")

    if (!!state.loading) {
      setTimeout(() => {
        console.log("doing the validation")

        if (state.value === SECURITY_CODE) {
          onConfirm()
        } else {
          onError()
        }

        console.log("completing validation")
      }, 1000)
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
           onWrite(event.target.value)
          }}
        />
        <button
          onClick={() => {
            onCheck()
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
          onDelete()
        }}
        >Yes, delete</button>
        <button
         onClick={() => {
         onReset()
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
          onReset()
        }}
        >Reset, come back</button>
      </React.Fragment>
    )
  }
 
}

export { UseState }
