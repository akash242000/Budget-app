import logo from './logo.svg';
import './App.css';
import BudgetCard from './components/BudgetCard';
import AddBudget from './components/AddBudget';
import { useState } from 'react';
import { useBudget ,UNCATEGORIZED_BUDGET} from './contex/BudgetContex';
import AddExpense from './components/AddExpense';
import Uncategorized from './components/Uncategorized';
import TotalCard from './components/TotalCard';
import ExpenseList from './components/ExpenseList';

function App() {

  const [isBudgetPopup, setBudgetPopup]= useState(false);
  const [iExpensePopup, setExpensePopup]= useState(false);
  const [currentBudgetId, setCurrentBudgetId]=useState(null);
  const [showExpenses, setShowExpenses]=useState(null);

  const {budget,getBudgetExpenses} = useBudget();

  function closePopup(){
    setBudgetPopup(false);
    setExpensePopup(false);
    setShowExpenses(null);
    setCurrentBudgetId(UNCATEGORIZED_BUDGET);
  }
  
  function openExpensePopup(budgetID){
    setCurrentBudgetId(budgetID);
    setExpensePopup(true);
  }



  return (
    <>
    {isBudgetPopup?
       <AddBudget closePopup={closePopup}></AddBudget>
       :
       <></>
    }

    {iExpensePopup?
      <AddExpense closePopup={closePopup} currentBudgetId={currentBudgetId} budget={budget}></AddExpense>
      :
      <></>
    }

    {showExpenses?
      <ExpenseList closePopup={closePopup} budgetID={showExpenses}/>
      :
      <></>
    }

    <div className="container">
      <div className="budget-bar-wrapper">
        <div className="budget-bar">
          <h1>Budget</h1>
          <div className="button-wrapper-flex">
            <button className="btn" onClick={()=>(setBudgetPopup(true))}>Add Budget</button>
            <button className="btn btn-no-color" onClick={()=>(setExpensePopup(true))} >Add Expense</button>
          </div>
        </div>
      </div>

      <div className="budget-card-list">
        {budget.map((budget)=>{
          const amount=getBudgetExpenses(budget.id).reduce(
            (total, expense)=> total+ expense.amount, 0
          )
          return(<BudgetCard  key={budget.id} 
                              name={budget.name} 
                              amount={amount} 
                              budget={budget.max} 
                              openExpensePopup={()=>openExpensePopup(budget.id)}
                              showExpenses={()=>setShowExpenses(budget.id)}
                              />)
        })}

      <Uncategorized openExpensePopup={()=>openExpensePopup(UNCATEGORIZED_BUDGET)} showExpenses={()=>setShowExpenses(UNCATEGORIZED_BUDGET)} />
      <TotalCard></TotalCard>
      </div>

      
       

    </div>
    </>
  );
}

export default App;
