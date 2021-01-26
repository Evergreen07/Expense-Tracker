import React,{useContext} from 'react'
import exContext from '../../Context/exContext'


const Item = ({trans}) => {
    const {setClear} = useContext(exContext);

    return (
        <div className="Items">
            <div>
                {trans.check_ && (<i style={{paddingTop : '1.5px', color:'limegreen'}} className="fas fa-plus-square fa-lg"></i>)}
                {!trans.check_ && (<i style={{paddingTop : '1.5px', color:'red'}} className="fas fa-minus-square fa-lg"></i>)}
            </div>

            <div>
                <h4>Title :&ensp;</h4>
                {trans.title_}
            </div>

            <div>
                <h4>Date :&ensp;</h4> 
                {trans.date_}
            </div>

            <div>
                <h4>&ensp;Amount :&ensp;</h4>
                ₹&nbsp;<strong>{trans.amount_}</strong>
            </div>
             
            <div>
                <i style={{ cursor: 'pointer',color:'gray' }} className="fas fa-trash fa-lg" onClick={() => setClear(trans.id_)}></i>
            </div>
        </div>
    )
}

export default Item
