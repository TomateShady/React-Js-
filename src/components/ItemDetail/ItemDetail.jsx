import React from 'react';
import "./itemdetail.css";
import ClickCounter from "../ItemListContainer/ClickCounter"

function ItemDetail({ data }) {
    return(
     <div className ="card">
        <div className = "card-img">
            <img src= {data.thumbnail} alt= {data.title}/>
        </div>
        <div className = "card-detail">
            <h3>{data.title}</h3>
            <p>{data.category}</p>
            <p>$ {data.price}</p>
          <ClickCounter />
        </div>
     </div>
    );
}

export default ItemDetail;
