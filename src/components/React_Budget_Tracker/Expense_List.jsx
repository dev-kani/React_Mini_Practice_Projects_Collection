import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expense_List = () => {

    const expenses = [
        { id: 1234, name: 'Shopping', cost: 50 },
        { id: 1235, name: 'Holiday', cost: 300 },
        { id: 1236, name: 'Transportation', cost: 70 },
        { id: 1237, name: 'Fuel', cost: 40 },
        { id: 1238, name: 'Child Care', cost: 500 },
    ]

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ul>
    )
}

export default Expense_List