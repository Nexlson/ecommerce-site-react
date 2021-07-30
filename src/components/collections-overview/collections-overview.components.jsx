import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewCollections from '../preview-collections/preview-collections.components';
import { selectCollectionForPreview } from '../../reduxCodes/shop/shop.selector';
import './collections-overview.styles.scss'

const CollectionsOverview = ( { collections } ) => (
    <div className='collections-overview'>
        {collections.map(({id, ...others}) => (
            <PreviewCollections key={id} {...others}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps) (CollectionsOverview)