import React from 'react'
import {currencyFormatter} from '../utils.js'

export default function BudgetCard({name, budget, amount, openExpensePopup, hidebuttons, showExpenses}) {

    let progress=(amount/budget)*100;
  return (
    <div className='card'>
        <div className="card-header">
            <h1>{name}</h1>
            <span className='budget-meter'>
                <span style={{fontWeight:"800", fontSize:"1.2rem"}} >{currencyFormatter.format(amount)}</span>
                {budget && <span style={{fontWeight:"300", opacity:"0.7"}} >/{currencyFormatter.format(budget)}</span>}
            </span>
        </div>
        
        {budget &&
        <div className="progress-bar">
            <div className="bar-outer">
                <div className="bar-inner" style={{width:`${progress}%`}}></div>
            </div>
        </div>
        }

        {!hidebuttons &&
        <div className="card-buttons">
            <div className="button-wrapper-flex">
                <button className="btn btn-clr-red" onClick={openExpensePopup}>Add Expense</button>
                <button className="btn btn-clr-green" onClick={showExpenses}>View Expenses</button>
            </div>
        </div>
        }
    </div>
  )
}
