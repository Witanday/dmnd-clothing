import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg'
import {connect} from 'react-redux'
import './cart-icon.styles.scss';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {selectCartItemsCount }  from '../../redux/cart/cart.selectors'



const CartIcon = ({toggleCartHidden, itemCount}) => {
   console.log(itemCount)
    return (
        <div className='cart-icon'  onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
// repalced by reselect to avoid multiple rendering
//const mapStateToProps =({cart:{cartItems}})=>({
 //   itemCount : cartItems.reduce((accumulatedQuantity , cartItem) =>accumulatedQuantity + cartItem.quantity, 0)
//})

const mapStateToProps =state=>({
    itemCount : selectCartItemsCount(state)})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CartIcon);