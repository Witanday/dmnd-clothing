import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Homepage  from "./pages/homepage/homepage.component" 
import ShopPage from './pages/shop/shop.component'
import  Header from './components/header/header.component'
import SignINAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


import {auth} from './firebase/firebase.utils';
 

class App  extends React.Component {
    constructor(){
      super();
      this.state ={
        currentUser:null,
      }
    }
  
    unsubscribeFromAUth = null;
  componentDidMount(){
   this.unsubscribeFromAUth= auth.onAuthStateChanged(user =>{
      this.setState({
        currentUser:user 
      });
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAUth()
  }
  render(){
  return (
    <div className="App">
    <Header  currentUser= {this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignINAndSignUp} />
    </Switch>
    
    </div>
  );
}
}

export default App;
