import React from 'react'
import './App.css';
import Header from './Compoments/Header'
import Balance from './Compoments/Balance'
import Display from './Compoments/Display'
import New from './Compoments/New'
import Transactions from './Compoments/Transactions/Transactions'

import ExState from './Context/exState'

function App() {
  return (
    <ExState>
      <div className="container">
        <Header/>
        <div className="mini">
          <div>
            <Balance/>
            <Display/>
            <Transactions/>
          </div>
          <div>
            <New/>
          </div>
        </div>
        <div className="footer"> 
          &copy;2021 Evergreen 
        </div>
      </div>
    </ExState> 
  );
}

export default App;
