import './index.css'

const BrowserItem = props => {
  const {browserDetails, onClickDelete} = props
  // eslint-disable-next-line no-unused-vars
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onClickDeleteButton = () => {
    onClickDelete(id)
  }

  return (
    <li className="inner-holder">
      <div className="history-content-container">
        <p className="time">{timeAccessed}</p>
        <div className="icon-site-name-holder ">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="site-details-content ">
            <p className="site-name">{title}</p>
            <p className="website-url">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-button">
          <button
            type="button"
            testid="delete"
            className="delete-icon"
            onClick={onClickDeleteButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowserItem
