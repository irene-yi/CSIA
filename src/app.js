/*
   --------
   import the packages we need
   --------
 */

import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import initialState from './initialState.json';
import './style/main.css';
import Header from './components/header';
import Grid from '@material-ui/core/Grid';
import {createMuiTheme } from '@material-ui/core/styles';




/*
   --------
   import your pages here
   --------
 */

import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import BudgetsPage from './pages/budget';
import CalcOnePage from './pages/calc_one';
import CalcTwoPage from './pages/calc_two';
import CalcThreePage from './pages/calc_three';
import CalcFourPage from './pages/calc_four';
import CalcFivePage from './pages/calc_five';
import DebtPage from './pages/debt';
import ResultsPage from './pages/results';
import TodoList from "./pages/todolist.js";
import TodoItems from"./pages/todoitems.js";



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
            <Route exact path="/calc_five" component={CalcFivePage} />
            <Route exact path="/calc_four" component={CalcFourPage} />
            <Route exact path="/calc_three" component={CalcThreePage} />
            <Route exact path="/calc_two" component={CalcTwoPage} />
            <Route exact path="/calc_one" component={CalcOnePage} />
            <Route exact path="/debt" component={DebtPage} />
            <Route exact path="/results" component={ResultsPage} />
			    </div>
			</ConnectedRouter>
		</Provider>
 </MuiThemeProvider>
</div>
	);
    }
}
