import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* Exact -> determine to use exact url or not */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
