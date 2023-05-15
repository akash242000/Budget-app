import React, { useRef } from 'react'
import { useBudget } from '../contex/BudgetContex';



export default function AddBudget({closePopup}) {

    const nameRef= useRef();
    const limitRef= useRef();

    const {addBudget}= useBudget();

    function handleSubmit(e){
        e.preventDefault();

        addBudget({
            name: nameRef.current.value,
            max:parseFloat(limitRef.current.value)
        });

        closePopup();
    }

  return (
    <div className='popup-box'>
        <div className='popup'>
            <div className="popup-header">
                <h1>New Budget</h1>
                <button className='btn-cross' onClick={closePopup}>✖</button>
            </div>

            <div className="popup-form">
                <div className="input-wrapper">
                    <label>Name</label>
                    <input type="text" ref={nameRef} />
                </div>

                <div className="input-wrapper">
                    <label>Maximum Limit</label>
                    <input type="text" ref={limitRef} />
                </div>
            </div>

            <div className="button-wrapper-flex">
                <button className='btn btn-top-margin' onClick={handleSubmit}>Add</button>
            </div>
        </div>
    </div>
  )
}
