import React from "react"
import "./header.styles.scss"
//Firebase
import { auth } from "../../firebase/firebase.utils"
//Router
import { Link } from "react-router-dom"
//Redux
import { connect } from 'react-redux'
//SVG
import { ReactComponent as Logo } from "../../assests/original.svg"

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shops">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser
          ? //If currentUser is true (i.e User is logged in)
          (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          )
          : //If currentUser is false (i.e User is logged out)
          (
            <Link to="signin" className="option">
              SIGN IN
            </Link>
          )
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
