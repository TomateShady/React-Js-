import  { useState, useEffect } from "react";
import React from 'react'
import "./itemListContainer.css"
import ItemList from './ItemList'
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


export default function ItemListContainer() {
    const [ data, setData ] = useState(null);
    const { idCategory } = useParams();

    useEffect(() => {
      getItems(idCategory).then((respuesta) => {
        setData(respuesta); 
      });  
      }, [idCategory] )

  return (
    <>
     {data ? <ItemList data = {data} /> : <Loader/>}
     </>
  );
} 