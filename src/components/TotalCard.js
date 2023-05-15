import React from 'react'
import BudgetCard from './BudgetCard'
import { useBudget } from '../contex/BudgetContex'

export default function TotalCard() {

  const{expense, budget}= useBudget();  

  const amount= expense.reduce((total, expense)=> total + expense.amount, 0);
  const totalbudget= budget.reduce((total, budget)=> total + budget.max, 0);

  if (totalbudget === 0) return null
  return (
    <BudgetCard name="Total" amount={amount} budget={totalbudget} hidebuttons/>
  )
}
