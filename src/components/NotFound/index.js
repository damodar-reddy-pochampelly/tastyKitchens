import './index.css'

const NotFound = props => {
  const onClickHomePage = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dqfyurtdb/image/upload/v1686588411/Group_fuxb0o.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="page-not-found">Page Not Found</h1>
      <p className="page-not-found-description">
        We are sorry,the page you requested could not be found.Please go back to
        the homepage
      </p>
      <button type="button" className="home-page-btn" onClick={onClickHomePage}>
        Home Page
      </button>
    </div>
  )
}

export default NotFound
