import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.components'
import CartDropDown from '../cart-dropdown/cart-dropdown.components'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../reduxCodes/cart/cart.selector'
import { selectCurrentUser } from '../../reduxCodes/user/user.selector'

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/'>CONTACT</Link>
                {
                    currentUser? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropDown />}
        </div>
    )
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps) (Header)
