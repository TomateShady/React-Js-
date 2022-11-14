import  { useState, useEffect } from "react";
import React from 'react'
import "./itemListContainer.css"
import Item from './Item'
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [ data, setData ] = useState([]);
    const { idCategory } = useParams();
    
    useEffect(() => {
      getItems(idCategory).then((respuesta) => {
        setData(respuesta); 
      });  
      }, [idCategory] )

  return (
    <div className='container'>
       {data.map( (films)=>{
        return (
         <Item
           key={films.id}
           id= {films.id}
           imgurl={films.thumbnail}
           title={films.title}
           category={films.category}
           price={films.price}
          />
         );
       })}
    </div>
  );
      } 