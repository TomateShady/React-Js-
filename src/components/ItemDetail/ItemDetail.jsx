import React from 'react';
import "./itemdetail.css";

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
        </div>
     </div>
    );
}

export default ItemDetail;