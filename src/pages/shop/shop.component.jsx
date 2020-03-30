import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectopnPreview from '../../components/preview-collection/preview-collection.component'



export default class ShopPage extends Component {
   constructor(){
       super();

       this.state = {
           collections : SHOP_DATA
       }
   }
   
   
    render() {
        const {collections} = this.state;
        
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps }) =>(
                        <CollectopnPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
