import React from "react"
import "./menu-item.styles.scss"
//Router
import { withRouter } from "react-router-dom"

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`} //Size for the two larger section
    onClick={() => history.push(`${match.url}${linkUrl}`)} //match.url = \ linkUrl = hats
  >
    <div //for background image
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
