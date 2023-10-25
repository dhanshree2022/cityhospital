import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementShoppingCart, incrementShoppingCart, removeShoppingCart } from '../../redux/action/shopping.action';

function ShoppingCart(props) {
    const dispatch = useDispatch();

    const medicines = useSelector(state => state.medicines);
    const shoppingcart = useSelector(state => state.shoppingcart);

    const CartData = shoppingcart.shoppingcart.map((v) => {
        const med = medicines.medicines.find((m) => m.id === v.id);
        let fData = { ...med, qty: v.qty }

        return fData;

    })
    console.log(CartData);

    const totalQuantity = CartData.reduce((total, item) => total + item.qty, 0);
    const totalPrice = CartData.reduce((total, item) => total + (item.qty * item.price), 0);
  

    const handleIncrement = (id) => {
        console.log(id);
        dispatch(incrementShoppingCart(id))
    }
    const handleDecrement = (id) => {
        console.log(id);
        dispatch(decrementShoppingCart(id))
    }
    const handleRemove = (id) => {
        console.log(id);
        dispatch(removeShoppingCart(id))
    }

    return (
        <div className="container-fluid">
            <br></br>            <br></br>
            <br></br>
            <br></br>

            <div className="row">
                <aside className="col-lg-9">
                    <div className="card">
                        <div className="table-responsive">

                            <table className="table table-borderless table-shopping-cart">
                                <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col">Counting</th>
                                        <th scope="col" width={120}>Quantity</th>
                                        <th scope="col" width={120}>Price</th>
                                        <th scope="col" className="text-right d-none d-md-block" width={200} />
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CartData.map((v) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <figure className="itemside align-items-center">
                                                            <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">{v.name}</a>
                                                                <p className="text-muted small"></p>
                                                            </figcaption>
                                                        </figure>
                                                    </td>
                                                    <td>
                                                        <figure className="itemside align-items-center">
                                                            <button onClick={()=>handleIncrement(v.id)}>+</button>

                                                            {v.qty}
                                                            <button onClick={()=>handleDecrement(v.id)}>-</button>
                                                        </figure>
                                                    </td>
                                                    <td>
                                                        <div className="price-wrap">{v.qty} </div>
                                                    </td>
                                                    <td>
                                                        <div className="price-wrap">{v.price * v.qty} </div>
                                                    </td>
                                                    <td className="text-right d-none d-md-block"> 
                                                    <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> 
                                                    <i className="fa fa-heart" /></a> 
                                                    <button onClick={()=>handleRemove(v.id)}> Remove</button> 
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </aside>
                <aside className="col-lg-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group"> <label>Have coupon?</label>
                                    <div className="input-group"> <input type="text" className="form-control coupon" name placeholder="Coupon code" /> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <dl className="dlist-align">
                                <dt>Total price:</dt>
                                <dd className="text-right ml-3">{totalPrice.toFixed(2)}</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Discount:</dt>
                                <dd className="text-right text-danger ml-3">- $10.00</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt>Total:</dt>
                                <dd className="text-right text-dark b ml-3"><strong>$59.97</strong></dd>
                            </dl>
                            <hr /> <a href="#" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

    );
}

export default ShoppingCart;