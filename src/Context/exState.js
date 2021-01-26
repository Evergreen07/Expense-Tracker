import React,{useReducer} from 'react'
import exReducer from './exReducer'
import exContext from './exContext'
import {
    add,clr
} from './types'


const ExState = (props) => {

    const initialState = {
        balance_ : 100,
        transactions_ : [
            { id_ : 0, title_ : 'Payment', amount_ : 100, date_ : '2021-01-25', check_:true},
            { id_ : 1, title_ : 'Grocery', amount_ : 50, date_ : '2021-01-24',check_:false},
            { id_ : 2, title_ : 'GPay', amount_ : 1000, date_ : '2021-01-23', check_:true},
        ]      
    }

    const[state,dispatch] = useReducer(exReducer,initialState);
    
    //Add Transactions
    const addTransactions = (e) => {
        dispatch({
            type: add,
            payload: e
        })
    }

    //Clear
    const setClear = (e) => {
        dispatch({
            type: clr,
            payload: e
        })
    }

    return <exContext.Provider
        value = {{ 
            balance_ : state.balance_,
            transactions_ : state.transactions_,
            addTransactions,
            setClear
        }}>
        {props.children}
    </exContext.Provider>
}

export default ExState;