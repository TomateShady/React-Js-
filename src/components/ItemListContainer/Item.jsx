import React from 'react';
import "./item.css";
import MyButton from '../mybuttonFolder/MyButton';
import { Link } from "react-router-dom";

function Item({ imgurl , title , category , price, color, id, discount}){
  const urlDetail = `/detail/${id}`;
  return (
    <div className ="card">
        <div className = "card-img">
             <img src= {imgurl} alt= {title}/>
        </div>
        <div className = "card-detail">
             <h3>{title}</h3>
             <p>{category}</p>
             <p>$ {price}</p>
             { discount && <small>{discount} OFF</small>}
        </div>
        <Link to={urlDetail}>
          <MyButton onTouchButton={() => console.log("click")} color={color}>
            Ver más
          </MyButton>
        </Link>
    </div>
  )
}

export default Item;
