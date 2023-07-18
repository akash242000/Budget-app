import React,{ createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "../hooks/useLocalStorage.js";


const BudgetContex = React.createContext();


export const UNCATEGORIZED_BUDGET="Uncategorized";

export function useBudget() {
    return useContext(BudgetContex)
}


export function BudgetProvider({children}){

    const [budget, setBudget]=useLocalStorage("budget", []);
    const [expense, setExpense]=useLocalStorage("expense", []);

    

    function getBudgetExpenses(budgetId){
        return expense.filter(expense=>expense.budgetId===budgetId)
    }

    function addBudget({name,max}){
        setBudget((prevBudget)=>{
            if(prevBudget.find((budget)=>budget.name==name)){
                return prevBudget;
            }
            return [...prevBudget,{id: uuidv4(), name, max }]
        })
    }

    function addExpense({budgetId, description, amount} ){
        setExpense((prevExpense)=>{
            return [...prevExpense,{id: uuidv4(), budgetId, description, amount}]
        })
    }

    function deleteBudget(id){
        
        setExpense((prevExpense)=>{
            return prevExpense.filter((expense)=>{
                if(prevExpense.budgetId!==id) return expense;
                return{...expense, budgetId:UNCATEGORIZED_BUDGET}
            })
        })


        setBudget((prevBudget)=>{
            return prevBudget.filter((element)=>element.id!==id);
            
        })
    }

    function deleteExpense(id){
        setExpense((prevExpense)=>{
            return prevExpense.filter((element)=>element.id!==id);
        })
    }

    return(
    
    <BudgetContex.Provider value={{
        budget,
        expense,
        getBudgetExpenses,
        addBudget,
        addExpense,
        deleteBudget,
        deleteExpense
    }}>
        {children}
    </BudgetContex.Provider>
    )
}