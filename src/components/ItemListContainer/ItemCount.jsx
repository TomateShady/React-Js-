import React from "react";
import "./itemCount.css"
import { useState } from "react";

function ItemCount ({ stock, onAddToCart }){
    let [count, setCount] = useState(1)
    
    function handleResta(){
      if  (count > 1) setCount(count-1);
    }
    function handleSuma(){
      if  (count < stock) setCount(count+1);
    }

return (
 <div>
     <button onClick={handleResta}>
         -
     </button>
     <span className="spanColor">{count}</span>
     <button onClick={handleSuma}>
         +
     </button>
     <br />
     <button onClick={() => onAddToCart(count)}>
         Agregar al carrito
     </button>
 </div>
)


}

export default ItemCount;