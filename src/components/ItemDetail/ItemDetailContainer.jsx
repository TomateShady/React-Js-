import  { useState, useEffect } from "react";
import React from 'react'
import { getSingleItem } from "../../Services/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [ data, setData ] = useState([]);
    const { idItem } = useParams();
    console.log(useParams());
    
    async function getItemsAsync(){
        let respuesta = await getSingleItem(idItem);
        setData(respuesta);
    }

    useEffect(() => { 
      getItemsAsync();
    },[idItem])

  return ( 
  <ItemDetail data={data} />
  )
 
}

export default ItemDetailContainer;