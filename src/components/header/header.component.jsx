import React from 'react';
import{Link} from 'react-router-dom';

import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/dm1.svg'

import {auth} from '../../firebase/firebase.utils';

import {connect, } from 'react-redux';

import CartIcon from '../cart-con/cart-icon.component'
import CartDroDown from '../cart-dropdown/cart-dropdown.component'

import {createStructuredSelector}  from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';



const Header = ({currentUser, hidden}) => {
  console.log(currentUser)
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
            <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link  to='/shop' className='option'>SHOP</Link>
                <Link   to='/contact' className='option'>CONTACT</Link>
                {currentUser ?
                    (<div className="option"  onClick={()=>auth.signOut()}>SIGN OUT</div>
                    ):
                (<Link className="option" to="/signin">SIGN IN</Link>)}
                <CartIcon/>
                </div>
                 { hidden ? null :(<CartDroDown />)}   

            
        </div>
    );
};



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}) ;
/*const mapStateToProps = (state) =>({
    currentUser: selectCurrentUser(state) ,
    hidden: selectCartHidden(state)
}) ;*/




/*const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser ,
    hidden
}) ;*/


export default connect(mapStateToProps)(Header);