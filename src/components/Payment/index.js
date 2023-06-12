import {withRouter} from 'react-router-dom'

import CartContext from '../../context/CartContext'
import './index.css'

const Payment = props => (
  <CartContext.Consumer>
    {value => {
      const {removeAllCartItems} = value

      const onClickGoToHome = () => {
        removeAllCartItems()
        const {history} = props
        history.replace('/')
      }

      return (
        <div className="payment-container">
          <img
            src="https://res.cloudinary.com/dqfyurtdb/image/upload/v1686586463/Vector_eij9m5.png"
            alt="Payment Done"
            className="done-image"
          />
          <h1 className="payment-successful">Payment Successful</h1>
          <p className="success-description">
            Thank you for ordering Your payment is successfully completed.
          </p>
          <button
            type="button"
            className="go-to-home-btn"
            onClick={onClickGoToHome}
          >
            Go To Home Page
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Payment)
