import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Navbarr} from './components/navbarr';
import {Footer} from '../src/components/footer';
import {Contact} from '../src/components/contact';
import {Signup} from '../src/components/signup';
import {Info} from '../src/components/info';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbarr/>
        <Switch>
          <Route path="/" component={Signup} exact={true}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/info" component={Info}/>
         

        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
