import React from "react";
import "./clickcounter.css"

function ItemCount (){
    let [count, setCount] = React.useState(1)

    function handleSuma(){
        (count < 5) && setCount(count+1);
    }
    function handleResta(){
        (count > 1) && setCount(count-1);
    }

return (
 <div>
     <button onClick={handleResta} >-</button>
     <span className="spanColor">{count}</span>
     <button onClick={handleSuma} >+</button>
     <br />
     <button>Agregar al carrito</button>
 </div>
)


}

export default ItemCount;
