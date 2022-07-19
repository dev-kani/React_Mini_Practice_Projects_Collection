import React, { useState, useContext } from 'react'
import { AppContext } from './context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext)
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost)
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='row d-flex flex-column'>
        <div className='col-sm'>
          <label htmlFor="name">Name</label>
          <input
            className='form-control'
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className='col-sm'>
          <label htmlFor="cost">Cost</label>
          <input
            className='form-control'
            type="number"
            id="cost"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
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