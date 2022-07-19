import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)

  const alertType = () => {
    if (totalExpenses > (budget * 0.9)) {
      return 'alert-danger'
    }

    else if (totalExpenses > (budget * 0.8)) {
      return 'alert-warning'
    }

    else {
      return 'alert-success'
    }
  }

  return (
    <div className={`alert ${alertType()}`}>
      <span>Remaining £{budget - totalExpenses}</span>
    </div>
  )
}

export default Remaining