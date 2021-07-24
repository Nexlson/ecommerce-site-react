import React from 'react'
import './collection-items.styles.scss'
import CustomButton from '../custom-button/custom-button.components'
import { connect } from 'react-redux'
import { addItem } from '../../reduxCodes/cart/cart.action'

const CollectionItems = ({item, addItemssss}) => {
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item '> 
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItemssss(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItemssss: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItems)
