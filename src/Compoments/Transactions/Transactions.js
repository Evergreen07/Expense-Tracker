import React,{useContext} from 'react'
import Item from './Item'
import exContext from '../../Context/exContext'

const Transactions = () => {
    const {transactions_} = useContext(exContext);
    
    return (
        <div className="Transactions">
            <h3>My Transactions</h3>
            {transactions_.map((i) => (
                <Item key = {i.id_} trans = {i}/>
            ))}
        </div>
    )
}

export default Transactions
