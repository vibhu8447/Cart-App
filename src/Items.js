import React,{useEffect, useState} from 'react'
import Item from './Item';
import items from './Data';
 function Items()
 {


  

  let to=0;
  const too=()=>
  {
    
      items.map((item)=>
      {
        to+=(item.price)*(item.amount);
        console.log((item.price)*(item.amount))
      })

  }
    
too();
   const [total ,settotal]=useState(to);

  const addmoney=(props)=>
  {
       settotal((total)=>
       {
         return total+props;

       })
  }


console.log("hello",to);

  let Ammount=0;
   return(
<div>
  {
    items.map((item)=>
    {
      console.log(item.price);
      console.log(item.amount);
      
      return(
        <Item key={item.id} {...item} Ammount={Ammount} add ={addmoney}></Item>
        )
    })
  }
  <div className="footer">

    <div>
      <h3> Your Ammount :  {total.toFixed(2)} Rs only  </h3>
    </div>
 

  </div>
</div>
   )
 }
 export default Items;