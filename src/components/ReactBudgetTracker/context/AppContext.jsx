import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 5000,
    expenses: [
        { id: 1234, name: 'Shopping', cost: 50 },
        { id: 1235, name: 'Holiday', cost: 1000 },
        { id: 1236, name: 'Transportation', cost: 80 },
        { id: 1237, name: 'Fuel', cost: 200 }
    ],
}

export const AppContext = createContext()

export const AppProvider = (props) => {
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