import { getQueriesForElement } from '@testing-library/dom';
import { useState } from 'react';
import {AiOutlineArrowUp,AiOutlineArrowDown,AiOutlineShoppingCart} from 'react-icons/ai';
import './index.css';
import Items from './Items';
function App() {
 
return(
  <>
  <div className="main">
  <div className="header">
        <div className="heading">
        <h1>hello</h1>

        </div>
        <div>
        <AiOutlineShoppingCart/>

        </div>
      </div>
  </div>


     <Items></Items> 
  </>
);
}

export default App;
