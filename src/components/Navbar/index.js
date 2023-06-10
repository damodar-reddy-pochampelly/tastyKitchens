import {GiHamburgerMenu} from 'react-icons/gi'
import {IoCloseCircleSharp} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Navbar = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        <div className="logo-name-container">
          <Link to="/" className="nav-link">
            <img
              src="https://res.cloudinary.com/dqfyurtdb/image/upload/v1686064158/Frame_274_v0twde.png"
              alt="website logo"
              className="nav-website-logo"
            />
          </Link>
          <h1 className="nav-title">Tasty Kitchens</h1>
        </div>
        <div className="popup-container">
          <Popup
            trigger={
              <button type="button" className="hamburger-button">
                <GiHamburgerMenu className="hamburger-icon" />
              </button>
            }
            position="bottom right"
          >
            {close => (
              <div className="hamburger-menu-items-container">
                <div className="hamburger-items">
                  <Link to="/" className="nav-link">
                    <p className="home-item-mobile">Home</p>
                  </Link>
                  <Link to="/cart" className="nav-link">
                    <p className="cart-item-mobile">Cart</p>
                  </Link>
                  <button
                    type="button"
                    className="logout-btn-mobile"
                    onClick={onClickLogout}
                  >
                    Logout
                  </button>
                </div>
                <button
                  type="button"
                  className="close-icon-btn"
                  onClick={() => close()}
                >
                  <IoCloseCircleSharp className="close-icon" />
                </button>
              </div>
            )}
          </Popup>
        </div>
        <ul className="nav-items-container">
          <li className="home-item-tablet">Home</li>
          <li className="cart-item-tablet">Cart</li>
          <li className="logout-item">
            <button
              type="button"
              className="logout-btn-mobile"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
