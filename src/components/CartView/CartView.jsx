import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext';
import { createOrder } from '../../Services/firestore';
import "../CartView/cartview.css";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";


    function CartView() {
        const { cart, clear, removeItem, priceInCart } = useContext(cartContext);
        let navigate = useNavigate();
    <div>
    if (cart.length === 0) return <h1 className='vacio'>Carrito Vacío</h1>;
    </div>
    
    async function onSubmit(evt, data){

    const order = {
        buyer: data,
        items: cart,
        total: priceInCart(),
        date: new Date(),
        };

        const orderId = await createOrder(order);
        navigate(`/ThankYou/${orderId}`);
    }

  return (
    <div>
        {cart.map ( (item => 
            <div key={item.id} className='carrito'>
                <h2>{item.title}</h2>
                <h3>$: {item.price}</h3>
                <h4>Unidades: {item.count}</h4>
                <button className= 'btnCarrito' onClick={()=>removeItem(item.id)} >Quit</button>
            </div>
        ))}

        <CartForm onSubmit={onSubmit} />
        <button className= 'btnVerMas' onClick={clear}>Vaciar carrito</button>
    </div>
  );
}

export default CartView;