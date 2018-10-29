import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from "@material-ui/core/Grid";
import Header from "../components/header.js";
import Paper from '@material-ui/core/Paper';
import TodoList from "../pages/todolist.js";
import TodoItems from"../pages/todoitems.js";

class SignupPage extends React.Component{
  constructor(props){
	  super(props);
	  this.state = {
      Name: '',
      Email: '',
	    Password: '',
      showPassword: false,
	  };

    this.state = {
    items: []
  };
  this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
  }

  console.log(this.state.items);

  e.preventDefault();
  }

  handleChange(event , field){
    this.setState({
      [field]: event.target.value
    });
  };

  handleSubmit(event){
	  event.preventDefault();

    const credentials = {
      name: this.state.First_Name,
      email: this.state.Email,
      password: this.state.Password
    }
    const user = {
      name: this.state.First_Name,
      Email: this.state.Email,
    }

	  this.props.firebase.createUser(credentials,user)
	   .then((response) => {
		})
	  .catch((error) => {
      console.log(error);
		  switch(error.code){
		    case 'auth/email-already-in-use':
        alert('email is already in use')
			  break;
		    case 'auth/invalid-email':
        alert('Enter a valid email')
			  break;
		    case 'auth/operation-not-allowed':
  			break;
		    case 'auth/weak-password':
        alert('Enter a stronger password')
			  break;
		    default:
		  }
	  });
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render(){
	  let payload;
    const { classes } = this.props;
	  if(!this.props.auth.isLoaded){
	    payload = null;
	  }
	  if(this.props.auth.isLoaded && this.props.auth.isEmpty){
  	  payload = <form onSubmit={(event) => {this.handleSubmit(event);}}>
        <Grid container spacing={24}>
          <Grid item xs={7} id="gridItem">
           <br />
           <br />
            <FormControl>
    		      <TextField
              required
              id="required"
    			    label="First Name"
    			    value={this.state.f_name}
    			    onChange={(event) => {this.handleChange(event, 'First_Name');}}
    			    margin="normal"
    		      />
    		    </FormControl>
          </Grid>
          <Grid item xs={3} id="gridItem">
           <br />
      <br />
            <FormControl>
    		      <TextField
              required
              id="required"
    			    label="Last Name"
    			    value={this.state.l_name}
    			    onChange={(event) => {this.handleChange(event, 'Last_Name');}}
    			    margin="normal"
    		      />
    		    </FormControl>
          </Grid>
        </Grid>
        <FormControl fullWidth>
		      <TextField
          required
          id="required"
			    label="Email"
			    value={this.state.email}
			    onChange={(event) => {this.handleChange(event, 'Email');}}
			    margin="normal"
		      />
		    </FormControl>
        <FormControl fullWidth>
          <InputLabel
            required
            id="required"
            htmlFor="adornment-password">
            Password
          </InputLabel>

          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
  			    onChange={(event) => {this.handleChange(event, 'Password');}}
  			    margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      <br />
      <br />
       <br />
      <br /> <br />
      <br />
		  <Button type="submit"
			  variant="contained"
			  color="primary"
			  size="large">
		 <br />
      <br />

        <font size="6" face = "Ropa Sans">Create my account</font>
      </Button>

      <br />
      <br />

      <p><font size="5"




       face = "Ropa Sans">Already have an account? <Link to="/login">Login!</Link></font></p>

	  </form>;

	  }
    if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {

      payload = (
        <div id="login">
          <header>
            <Grid container justify="center">
              <Grid item xs={5} >
                <Paper elevation={8} id="loginPaper" className="transparent_paper">
                  <h1>Welcome {this.props.profile.name}</h1>
                </Paper>
              </Grid>
            </Grid>
          </header>

          <section id="login2">
            <Grid container justify="center">
              <Grid item xs={7} >
                <Paper elevation={8} id="loginPaper" className="transparent_paper">
                  <h1>What are your goals for today?</h1>
                </Paper>
              </Grid>
            </Grid>

                <div id="insert">
                  <TodoList />
                </div>
              <div id="insert">
                <TodoItems entries={this.state.items}/>

              </div>
          </section>
      </div>
			);
		}
		return (
			<div>
        <Header />
          <br />
    			<br />
    			<br />
				{payload}
			</div>
		)
  }
};

export default compose(
  firebaseConnect(),
  connect(({firebase: {auth}}) => ({auth})),
  connect(({firebase: {profile}}) => ({profile}))
)(SignupPage);
