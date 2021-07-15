import React, { Component } from 'react'
import { ShopData } from './shop.data';
import PreviewCollections from '../../components/preview-collections/preview-collections.components';

class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    render(){
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {collections.map(({id, ...others}) => (
                    <PreviewCollections key={id} {...others}/>
                ))}
            </div>
        );
    }
}

export default ShopPage;