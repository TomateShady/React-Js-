import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext';
import MyButton from '../mybuttonFolder/MyButton';

    function CartView() {
        const { cart, clear } = useContext(cartContext);

    if (cart.length === 0) return <h1>Carrito Vacío</h1>;

  return (
    <div className='container'>
        {cart.map ( (item => 
            <div key= {item.id} className='card'>
                <h2>{item.title}</h2>
                <h3>$: {item.price}</h3>
                <h4>Unidades: {item.count}</h4>
                <MyButton onTouchButton={() => clear(item.id)}>X</MyButton>
                <MyButton className= 'btn'>Vaciar carrito</MyButton>
            </div>
        ))}
    </div>
  );
}

export default CartView;