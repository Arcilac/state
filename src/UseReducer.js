import React from "react"
import  "./UseReducer.css"

const SECURITY_CODE = "paradigma"

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const SECURITY_CODE = "paradigma"

  
    const onConfirm = () => {
      dispatch({ type: actionTypes.confirm})
    }
  
    const onError = () => {
        dispatch({ type: actionTypes.error})
    }
  
    const onWrite = ({ target: {value}}) => {
        dispatch({ type: actionTypes.write, payload: value})
        // setState({
        //     ...state,
        //     value: newValue,
        // })
    }
  
    const onCheck = () => {
        dispatch({ type: actionTypes.check})
    }
  
    const onDelete = () => {
        dispatch({ type: actionTypes.delete})
    }
  
    const onReset = () => {
        dispatch({ type: actionTypes.reset})
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
          onChange={onWrite}
        />
        <button onClick={onCheck}
        >Check</button>
      </div>
    )
  }else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Are you sure?</p>
        <button onClick={onDelete}
        >Yes, delete</button>
        <button onClick={onReset}
        >No, come back</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>successfully eliminated</p>

        <button onClick={onReset}
        >Reset, come back</button>
      </React.Fragment>
    )
  }
 
}

const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    check: 'CHECK',
    delete: 'DELETE',
    reset: 'RESET',
    write: 'WRITE',
}

// const reducer = (state, action) => {
// }
// const reducerIf = (state, action) => {
//    if (action.type === 'ERROR') {
//     return{
//         ...state,
//         error: true,
//         loading: false,
//     }
//    } else if (action.type === 'CHECK') {
//     return {
//         ...state,
//         loading: true,
//     }
//    } else {
//     return {
//         ...state,
//     }
//    }
// }

// const reducerSwitch = (state, action) => {
//     switch(action.type) {
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: true,
//                 loading: false,
//             }
//         case 'CHECK':
//             return {
//                  ...state,
//                 loading: true,
//             }
//         default:
//             return {
//                 ...state,
//             }

//     }
// }

const reducerObject = (state, payload) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.write]: {
        ...state,
        value: payload,
    },
    [actionTypes.check]: {
        ...state,
        loading: true,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true,
        value: '',
    },
    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    },
})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}

export { UseReducer }