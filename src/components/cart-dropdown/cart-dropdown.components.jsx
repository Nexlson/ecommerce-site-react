import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.components'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.components'
import { selectCartItems } from '../../reduxCodes/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router'
import { toggleCartHidden } from '../../reduxCodes/cart/cart.action'

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'> 
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className="empty-message">Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT </CustomButton> 
    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartDropDown))