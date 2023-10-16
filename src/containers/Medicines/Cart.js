import React from 'react';

function Cart({Cart}) {
    const Cart = ({ cart, removeFromCart }) => {
        return (
          <div>
            <h2>Shopping Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        );
      };
}

export default Cart;