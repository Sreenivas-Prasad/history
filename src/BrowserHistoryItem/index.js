import './index.css'

const BrowserHistoryItem = props => {
  const {initialHistoryList, getId} = props
  const {id, timeAccessed, title, logoUrl, domainUrl} = initialHistoryList

  const giveId = () => {
    getId(id)
  }

  return (
    <li className="card-con">
      <div className="three-in-one">
        <p className="time">{timeAccessed}</p>
        <div className="img-text">
          <img src={logoUrl} alt="domain logo" className="image1" />
          <div className="text">
            <p className="titlee">{title}</p>
            <p className="span">{domainUrl}</p>
          </div>
        </div>
      </div>
      <li className="button-con">
        <button
          data-test-id="delete"
          type="button"
          className="button1"
          onClick={giveId}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="image3"
            onClick={giveId}
          />
        </button>
      </li>
    </li>
  )
}

export default BrowserHistoryItem
