import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';


import Homepage  from "./pages/homepage/homepage.component" 
import ShopPage from './pages/shop/shop.component'
import  Header from './components/header/header.component'
import SignINAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


import {auth, createUserProfileDocument} from './firebase/firebase.utils';
 
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import { selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component';



class App  extends React.Component {
 
    unsubscribeFromAUth = null;
  componentDidMount(){

    const {setCurrentUser} = this.props;
   this.unsubscribeFromAUth= auth.onAuthStateChanged(async userAuth =>{
    if (userAuth){

      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot =>{
        setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
      
      
    })
  }
    setCurrentUser(userAuth)
  
})}
  componentWillUnmount(){
    this.unsubscribeFromAUth()
  }
  render(){
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route exact path='/signin' render = {()=>this.props.currentUser?(<Redirect to='/'/>):(<SignINAndSignUp/>)} />
    <Route path='/checkout' component={CheckoutPage } />
    </Switch>
    
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})
/*const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})*/
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
