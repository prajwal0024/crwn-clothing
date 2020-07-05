import React from 'react'
import './cart-icon.styles.scss'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">1</span>
  </div>
)

const mapDispatchToState = dispatch => ({
  toggleCartHidden: () => (dispatch(toggleCartHidden()))
})
export default connect(null, mapDispatchToState)(CartIcon)