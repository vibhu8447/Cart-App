import React from 'react'
import Item from './Item';
import items from './Data';
 function Items()
 {

   return(
<div>
  {
    items.map((item)=>
    {
      return(
        <Item id={item.id} {...item}></Item>
        )
    })
  }
</div>
   )
 }
 export default Items;