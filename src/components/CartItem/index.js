import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props

      const onDecrementCartItem = () => {
        decrementCartItemQuantity(cartItem.id)
      }

      const onIncrementCartItem = () => {
        incrementCartItemQuantity(cartItem.id)
      }

      return (
        <li className="cart-item">
          <div className="cart-item-img-bg-container">
            <div className="cart-item-image-container">
              <img
                src={cartItem.imageUrl}
                alt={cartItem.name}
                className="cart-item-image"
              />
              <h1 className="cart-item-name-desktop">{cartItem.name}</h1>
            </div>
          </div>
          <div className="cart-item-rate-quantity-container">
            <h1 className="cart-item-name">{cartItem.name}</h1>
            <div className="cart-item-counter">
              <button
                type="button"
                className="cart-item-counter-button"
                onClick={onDecrementCartItem}
              >
                <BsDashSquare className="cart-item-counter-icon " />
              </button>
              <p className="cart-item-count">{cartItem.quantity}</p>
              <button
                type="button"
                className="cart-item-counter-button"
                onClick={onIncrementCartItem}
              >
                <BsPlusSquare className="cart-item-counter-icon" />
              </button>
            </div>
            <div className="cart-item-cost-container">
              <BiRupee className="cart-item-rupee-icon" />
              <p className="cart-item-rate">
                {cartItem.quantity * cartItem.cost}
              </p>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
