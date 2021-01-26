import React,{useState, useContext} from 'react'
import exContext from '../Context/exContext'

const New = () => {
    const context = useContext(exContext);
    const [text,setText] = useState('');
    const [amt,setAmt] = useState('');
    const [date,setDate] = useState('');
    const [check,setCheck] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const tr = {
            id_ : Math.floor(Math.random() * 1000000),
            title_:text,
            date_:date,
            amount_:amt,
            check_:check
        };
        context.addTransactions(tr);
        
        setText('');
        setAmt('');
        setDate('');
    }

    const onText = (e) => {
        setText(e.target.value);
    }

    const onAmt = (e) => {
        setAmt(e.target.value);
    }

    const onDate = (e) => {
        setDate(e.target.value);
    }

    const onCheck = (e) => {
        setCheck(e.target.checked);
    }

    return (
        <div className='New'>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit} autoComplete="off" id="form">
                <div>
                    <h4> Title </h4>
                    <input type="text" name="title" value={text} onChange={onText} required/>
                </div>

                <div>
                    <h4> Amount ( ₹ ) </h4>
                    <input type="number" name="amount" min="1" value={amt} onChange={onAmt} required/>
                </div>

                <div>
                    <h4>Date </h4>
                    <input type="date" name="date" min="2021-01-01" value={date} onChange={onDate} required/>
                </div>

                <div style={{marginRight:'10px'}}>
                        <input type="checkbox" style={{cursor:'pointer'}} value={check} onChange={onCheck}/>
                        <label style={{marginLeft:'5px'}}>Credit</label>
                </div>
                   
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default New
