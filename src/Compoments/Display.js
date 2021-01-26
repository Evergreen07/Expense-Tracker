import React,{useContext} from 'react'
import exContext from '../Context/exContext'

function Display() {
    const {transactions_} = useContext(exContext);
    
    const cr = transactions_.filter(i => i.check_===true).reduce((j,i) => (j+parseFloat(i.amount_)),0);
    const dr = transactions_.filter(i => i.check_===false).reduce((j,i) => (j+parseFloat(i.amount_)),0);

    return (
        <div className='Display'>
            <div className='cr'>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', padding: '5px 0px',fontSize:'20px' }}>CREDIT</h3>
                <h2 style={{fontSize:'20px'}}>₹&ensp;{cr}</h2>
            </div>
            <div className='dr'>
                <h3 style={{ fontFamily: 'Libre Baskerville, serif', padding: '5px 0px',fontSize:'20px' }}>EXPENSE</h3>
                <h2 style={{fontSize:'20px'}}>₹&ensp;{dr}</h2>
            </div>
        </div>
    )
}

export default Display
