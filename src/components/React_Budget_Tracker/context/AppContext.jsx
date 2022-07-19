import { createContext, useReducer } from "react"

const AppReducer = () => {
    switch (action.type) {
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 }
    ],
}

export const AppContext = createContext()

const AppProvider = () => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}