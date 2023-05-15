import { useEffect,useState } from "react";

export default function useLocalStorage(key,defalutvalue){
    const[value, setValue] =useState(()=>{
        const jsonvalue=localStorage.getItem(key);
        
        if(jsonvalue!=null){
            return JSON.parse(jsonvalue);
        }

        if(typeof defalutvalue=="function"){
            return defalutvalue()
        }
        else{
            return defalutvalue
        }
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value, setValue]
}