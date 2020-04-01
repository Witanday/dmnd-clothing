import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import Homepage  from "./pages/homepage/homepage.component" 
import ShopPage from './pages/shop/shop.component'
import  Header from './components/header/header.component'
import SignINAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


import {auth, createUserProfileDocument} from './firebase/firebase.utils';
 

class App  extends React.Component {
    constructor(){
      super();
      this.state ={
        currentUser:null,
      }
    }
  
    unsubscribeFromAUth = null;
  componentDidMount(){
   this.unsubscribeFromAUth= auth.onAuthStateChanged(async userAuth =>{
    if (userAuth){

      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot =>{

        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        })
          console.log(this.state)
      })
    }
      
      this.setState({currentUser:userAuth})
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
