import React from "react"

const SECURITY_CODE = "paradigma"

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    console.log("beginning effect")

    if (!!state.loading) {
      setTimeout(() => {
        console.log("doing the validation")

        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' })
        } else {
            dispatch({ type: 'ERROR' })
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
            dispatch({ type: 'WRITE', payload: event.target.value })
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: 'CHECK' })
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
            dispatch({ type: 'DELETE' })
        }}
        >Yes, delete</button>
        <button
         onClick={() => {
            dispatch({ type: 'RESET' })
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
            dispatch({ type: 'RESET' })
        }}
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
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'WRITE': {
        ...state,
        value: payload,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'DELETE': {
        ...state,
        deleted: true,
        value: '',
    },
    'RESET': {
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