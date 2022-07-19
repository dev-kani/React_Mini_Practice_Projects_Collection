import React from 'react'

const AddExpenseForm = () => {
    return (
        <form>
            <div className='row d-flex flex-column'>
                <div className='col-sm'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className='form-control'
                        required
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor="cost">Cost</label>
                    <input
                        type="text"
                        id="cost"
                        className='form-control'
                        required
                    />
                </div>
                <div className='col-sm mt-3'>
                    <button
                        type='submit'
                        className='btn btn-primary'
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm