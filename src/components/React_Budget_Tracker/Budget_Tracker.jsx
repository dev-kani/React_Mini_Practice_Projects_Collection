import 'bootstrap/dist/css/bootstrap.min.css'
import AddExpenseForm from './AddExpenseForm'
import Budget from './Budget'
import ExpenseTotal from './ExpenseTotal'
import Expense_List from './Expense_List'
import Remaining from './Remaining'


const Budget_tracker = () => {
    return (
        <div className='container'>
            <h1 className='mt-3'>My Budget Planer</h1>
            <div className='row mt-3 d-flex flex-column'>
                <div className='col-sm'>
                    <Budget />
                </div>
                <div className='col-sm'>
                    <Remaining />
                </div>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
            <h3 className='mt-3'>Expenses</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <Expense_List />
                </div>
            </div>
            <h3 className='mt-3'>Add Expense</h3>
            <div className='mt-3'>
                <div className='col-sm'>
                    <AddExpenseForm />
                </div>
            </div>
        </div>
    )
}

export default Budget_tracker