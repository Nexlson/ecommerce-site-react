import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInPage from './pages/signInPage/signInPage.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux'
import { setCurrentUser } from './reduxCodes/user/user.action';
import { selectCurrentUser } from './reduxCodes/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkoutpage/checkout.components';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          }, ()=> console.log(this.state))
      }else{
        setCurrentUser(userAuth)
      }
      

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div className="App">
        <Header/>
        {/* Exact -> determine to use exact url or not */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/'/>) :  <SignInPage/>}/>
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
