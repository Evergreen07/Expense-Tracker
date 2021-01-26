import React,{useContext} from 'react'
import exContext from '../Context/exContext'

const Balance = () => {
    const {transactions_} = useContext(exContext);

    const cr = transactions_.filter(i => i.check_===true).reduce((j,i) => (j+parseFloat(i.amount_)),0);
    const dr = transactions_.filter(i => i.check_===false).reduce((j,i) => (j+parseFloat(i.amount_)),0);

    const amt = cr-dr;

    return (
        <div className='Balance'>
            <h2 style={{fontFamily: 'IBM Plex Serif, serif'}}>My Balance</h2>
            <h2>₹&ensp;{amt}</h2>
        </div>
    )
}

export default Balance
