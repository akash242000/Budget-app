import React from 'react'
import BudgetCard from './BudgetCard'
import { useBudget, UNCATEGORIZED_BUDGET } from '../contex/BudgetContex'


export default function Uncategorized(props) {

    const {getBudgetExpenses, expense} =useBudget();

    

    const amount= getBudgetExpenses(UNCATEGORIZED_BUDGET).reduce(
        (total, expense)=> total + expense.amount, 0
    );

    if (amount === 0) return null


  return (
    <BudgetCard amount={amount} name="Uncategorized"  {...props} />
  )
}
