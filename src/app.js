/*
   --------
   Import needed packages
   --------
 */

import React from 'react';
import './style/main.css';
import firebase from 'firebase';
import Header from './components/header';
import Grid from '@material-ui/core/Grid';
import initialState from './initialState.json';
import { connect, Provider } from 'react-redux';
import {createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createStore, combineReducers, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';




/*
   --------
   import your pages here
   --------
 */

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import BudgetsPage from './pages/budget';
import TodoList from './pages/todolist.js';
import TodoItems from './pages/todoitems.js';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import SchedulePage from './pages/schedule';



/*
   --------
   configure everything
   --------
 */

const firebaseConfig = {
    /*
       --------
       REPLACE WITH YOUR FIREBASE CREDENTIALS
       --------
     */
    apiKey: "AIzaSyBvUEriWYaTTrJilT9WJckFFVMyL3xY5bE",
    authDomain: "the-stuff.firebaseapp.com",
    databaseURL: "https://the-stuff.firebaseio.com",
    projectId: "the-stuff",
    storageBucket: "the-stuff.appspot.com",
    messagingSenderId: "707524126013"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);









/*
   --------
   setup redux and router
   --------
 */


const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
});

const store = createStoreWithFirebase(rootReducer, initialState);


const ConnectedRouter = connect()(Router);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d7e1e5',
    },
    secondary: {
      light: '#f5e2d0',
      main: '#7c8491',
      contrastText: '#2c3646',
    },
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
};


export default class App extends React.Component{
    render(){
	return(
    <div>
    <MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<ConnectedRouter>
			    <div>
					  <Route exact path="/" component={HomePage} />
  					<Route exact path="/login" component={LoginPage} />
  					<Route exact path="/signup" component={SignupPage} />
  					<Route exact path="/budget" component={BudgetsPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/schedule" component={SchedulePage} />
			    </div>
			</ConnectedRouter>
		</Provider>
 </MuiThemeProvider>
</div>
	);
    }
}
