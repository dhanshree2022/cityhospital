import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action/cart.action';

function Cart(props) {
    const medicines = useSelector(state => state.medicines);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const CartData = cart.cart.map((v) => {
      const med =  medicines.medicines.find((m) => m.id === v.id);
        let fData = { ...med, qty: v.qty }

        return fData;
        
    })
    console.log(CartData);
    const handleIncrement = (id) => {
        dispatch(increment(id))
    }

    const handleDecrement = (id) => {
        dispatch(decrement(id))
    }
    return (
        <main>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        <h2>Cart</h2>
                        {
                            CartData.map((v) => {
                                return (
                                    <div className="shopping-cart">
                                        <div className="item">

                                        <div className="name">
                                            <span>{v.name}</span>

                                            </div>
                                            <div className="description">
                                            <p>{v.desc}</p>

                                            </div>
                                            <div className="quantity">
                                                <button onClick={handleIncrement(v.id)}> + </button>
                                                {v.qty}
                                                <button onClick={handleDecrement(v.id)}> - </button>
                                            </div>
                                            <div className="price">
                                                <p>Price:{v.price }</p>
                                                
                                            </div>
<br></br>
                                            <div className="price">
                                              <p>Total{v.price * v.qty}</p>  
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Cart;