import React from 'react'
import { connect } from 'react-redux'
import './collection.styles.scss'
import { selectSpecificCollection } from '../../reduxCodes/shop/shop.selector'
import CollectionItem from '../../components/collection-items/collection-items.components'

const CollectionPage = ({ collection }) => {
    const  { title, items } = collection
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
    }

const mapStatetoProps = (state, ownProps) => ({
    collection: selectSpecificCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStatetoProps) (CollectionPage)