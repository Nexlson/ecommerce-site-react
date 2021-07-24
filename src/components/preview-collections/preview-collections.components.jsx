import React from 'react'
import './preview-collections.styles.scss'
import CollectionItems from '../collection-items/collection-items.components';

const PreviewCollections = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map( (item) => (
                <CollectionItems key={item.id} item={item} />
            )
            )}
        </div>
    </div>
)

export default PreviewCollections;