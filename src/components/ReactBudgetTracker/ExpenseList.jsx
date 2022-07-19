import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import ExpenseItem from './ExpenseItem'


const Expense_List = () => {
    const { expenses } = useContext(AppContext)

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