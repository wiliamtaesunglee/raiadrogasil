import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routes;
