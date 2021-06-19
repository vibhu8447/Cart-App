import { getQueriesForElement } from '@testing-library/dom';
import { useState } from 'react';
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai';
import './index.css';

function App({id,title,price,img,amount ,Ammount,add}) {


  const [count,setcount]=useState(amount);
return (
<main>
  
  
  <div className="container">
    <div className="img">
      <div className="img_container">
      <img src={img} alt={title} className=" img"></img>

      </div>
    </div>
      <div className="start">
        <h4 className="title">{title}</h4>
      </div>
      <div className="end">
        <div className="upper">
        <AiOutlineArrowUp onClick={()=>
        {
          add(price);
          setcount(count+1);
          
        }}/>
        </div>
        
          <div className="counting">
          <h1 id ="count">{count}</h1>
          </div>
        

        {
            (count>=2)? <div className="lower" id="lowBtn" >

            <AiOutlineArrowDown  onClick={()=>
            {
              
              console.log("decresed");
              if(count===1)
              {
                document.getElementById("lowBtn").disabled = true;
                document.getElementById("lowBtn").setAttribute("class", "democlass");
                setcount(1);
                
              }
              else
              add(-price);
              setcount(count-1);
              
            }} />
        </div>:<h1></h1>
        }

      </div>
  
  
  </div>
  
</main>
  );
}

export default App;
