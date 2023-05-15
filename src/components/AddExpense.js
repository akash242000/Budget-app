import React, { useRef } from 'react'
import { useBudget, UNCATEGORIZED_BUDGET } from '../contex/BudgetContex';

export default function AddExpense({closePopup,budget,currentBudgetId}) {

    const descriptionRef= useRef();
    const amountRef= useRef();
    const budgetIdRef= useRef();

    const {addExpense}= useBudget();



    function handleSubmit(){
        addExpense({
            budgetId:budgetIdRef.current.value,
            description:descriptionRef.current.value,
            amount:parseFloat(amountRef.current.value)
        });

        closePopup()
    }

  return (
<div className='popup-box'>
        <div className='popup'>
            <div className="popup-header">
                <h1>New Expense</h1>
                <button className='btn-cross' onClick={closePopup}>✖</button>
            </div>

            <div className="popup-form">
                <div className="input-wrapper">
                    <label>Description</label>
                    <input type="text" ref={descriptionRef} />
                </div>

                <div className="input-wrapper">
                    <label>Amount</label>
                    <input type="text" ref={amountRef}  />
                </div>

                <div className="input-wrapper">
                    <label>Budget</label>
                    <select className='input-options' defaultValue={currentBudgetId} ref={budgetIdRef}  name="" id="">
                        <option id={UNCATEGORIZED_BUDGET}>Uncategorized</option>
                        {budget.map((element)=>{
                            return(<option key={element.id} value={element.id}>{element.name}</option>)
                        })}

                    </select>
                </div>
            </div>

            <div className="button-wrapper-flex">
                <button className='btn btn-top-margin' onClick={handleSubmit} >Add</button>
            </div>
        </div>
    </div>
  )
}
