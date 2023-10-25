import React from 'react';

function ShoppingCart({ cartItems }) {
  return (
    <div className="shopping-cart">
      <div className="title">
        Shopping Bag
      </div>
      <div className="item">
        <div className="buttons">
          <span className="delete-btn" />
          <span className="like-btn" />
        </div>

        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>
        <div className="quantity">
          <button className="plus-btn" type="button" name="button">
            <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt />
          </button>
          <input type="text" name="name" defaultValue={1} />
          <button className="minus-btn" type="button" name="button">
            <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt />
          </button>
        </div>
        <div className="total-price">$549</div>
      </div>
      {/* Product #2 */}
      <div className="item">
        <div className="buttons">
          <span className="delete-btn" />
          <span className="like-btn" />
        </div>

        <div className="description">
          <span>Maison Margiela</span>
          <span>Future Sneakers</span>
          <span>White</span>
        </div>
        <div className="quantity">
          <button className="plus-btn" type="button" name="button">
            <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt />
          </button>
          <input type="text" name="name" defaultValue={1} />
          <button className="minus-btn" type="button" name="button">
            <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt />
          </button>
        </div>
        <div className="total-price">$870</div>
      </div>
      {/* Product #3 */}
      <div className="item">
        <div className="buttons">
          <span className="delete-btn" />
          <span className="like-btn" />
        </div>

        <div className="description">
          <span>Our Legacy</span>
          <span>Brushed Scarf</span>
          <span>Brown</span>
        </div>
        <div className="quantity">
          <button className="plus-btn" type="button" name="button">
            <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt />
          </button>
          <input type="text" name="name" defaultValue={1} />
          <button className="minus-btn" type="button" name="button">
            <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt />
          </button>
        </div>
        <div className="total-price">$349</div>
      </div>
    </div>

  );
}

export default ShoppingCart;