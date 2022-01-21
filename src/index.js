import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './components/User';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie';
import home from './Pages/Home'
import Product from './Pages/Products'
import Checkout from './Pages/Checkout'
import SignUp from './components/SignUp'
import GetDesign from './Pages/GetDesign'
import Meeting from './Pages/Meeting'
import ProjectTitle from './Pages/ProjectTitle';
function Router() {
  return(
    <CookiesProvider>
    <BrowserRouter>
    <Route exact path = "/" component = {home}/>
    <Route exact path = "/home" component = {home}/>
    <Route exact path = "/login" component = {Login}/>
    <Route exact path = "/signup" component = {SignUp}/>
    <Route exact path = "/user" component = {User}/>
    <Route exact path = "/product" component = {Product}/>
    <Route exact path = "/Checkout" component = {Checkout}/>
    <Route exact path = "/GetDesign" component = {GetDesign}/>
    <Route exact path = "/Meeting" component = {Meeting}/>
    <Route exact path = "/Project" component = {ProjectTitle}/>

    </BrowserRouter>
    </CookiesProvider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
