import React from 'react'
import { UNCATEGORIZED_BUDGET, useBudget } from '../contex/BudgetContex'
import { currencyFormatter } from '../utils';

export default function ExpenseList({name, budgetID, closePopup}) {

    const {getBudgetExpenses, budget, deleteExpense} = useBudget();

    console.log(budgetID);
    const expenses= getBudgetExpenses(budgetID);
    const currentBudget= 
    UNCATEGORIZED_BUDGET==budgetID
    ?
    {name: "Uncategorized", id: UNCATEGORIZED_BUDGET}
    : budget.find((b)=> b.id ===budgetID)


  return (
    <div className='popup-box'>
            <div className='popup'>
                <div className="popup-header">
                    <h1>{currentBudget.name}</h1>
                    <button className='btn-cross' onClick={closePopup}>✖</button>
                </div>

                <div className="list-wrapper">
                    {expenses.map((expense)=>{
                        return(<div key={expense.id} className="list-item">
                            <div>{expense.description}</div>
                            <div>
                                <span>{currencyFormatter.format(expense.amount)}</span>
                                <span> <button className='btn-cross' onClick={()=>deleteExpense(expense.id)} >✖</button> </span>
                            </div>
                        </div>)
                    })}
                </div>
            </div>    
    </div>  
  )
}
