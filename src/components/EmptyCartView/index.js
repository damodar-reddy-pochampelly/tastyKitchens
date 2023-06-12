import {withRouter} from 'react-router-dom'

import './index.css'

const EmptyCartView = props => {
  const onClickOrderNowEmptyCart = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="empty-cart-container">
      <img
        src="https://res.cloudinary.com/dqfyurtdb/image/upload/v1686580505/OBJECTS_md5jtg.png"
        alt="empty cart"
        className="no-orders-image"
      />
      <h1 className="no-orders-yet">No Orders Yet!</h1>
      <p className="no-orders-description">
        Your cart is empty.Add something from the menu.
      </p>
      <button
        type="button"
        className="empty-cart-order-now-btn"
        onClick={onClickOrderNowEmptyCart}
      >
        Order Now
      </button>
    </div>
  )
}

export default withRouter(EmptyCartView)
