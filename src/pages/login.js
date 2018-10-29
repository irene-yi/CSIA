import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Header from "../components/header.js";
import TodoList from "../pages/todolist.js";
import TodoItems from"../pages/todoitems.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
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
	handleChange(event, field) {
		this.setState({
			[field]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.firebase
			.login(this.state)
			.then(response => {
				console.log(response);
				console.log(this.props);
			})
			.catch(error => {
				switch (error.code) {
					case "auth/user-not-found":
						alert("user not found");
						break;
					case "auth/wrong-password":
						alert("wrong password");
					case "auth/invalid-email":
						alert("invalid email");
						break;
					case "auth/network-request-failed":
						break;
					default:
				}
			});
	}

	logout() {
		this.props.firebase.logout();
	}

	render() {
		let payload;
		if (!this.props.auth.isLoaded) {
			payload = null;
		}
		if (this.props.auth.isLoaded && this.props.auth.isEmpty) {
			payload = (
				<form
					onSubmit={event => {
						this.handleSubmit(event);
					}}
				>
					<br />
					<br />
					<br />
					<br />

					<FormControl fullWidth>
						<TextField
							required
							id="required"
							label="Email"
							value={this.state.email}
							onChange={event => {
								this.handleChange(event, "email");
							}}
							margin="normal"
							color="#2c3646"
						/>
					</FormControl>
					<FormControl fullWidth>
						<TextField
							required
							id="required"
							label="Password"
							type="password"
							value={this.state.password}
							onChange={event => {
								this.handleChange(event, "password");
							}}
							margin="normal"
						/>
					</FormControl>
					<br />
					<br />
					<Button type="submit" variant="contained" color="primary">
						<font size="5" face="Ropa Sans">
							Login
						</font>
					</Button>
					<br />
					<br />
					<br />
					<br />
					<p>
						<font size="5" face="Ropa Sans">
							Don't have an account? Sign Up!
						</font>
					</p>
<br />

					<Link to="/signup">
						<Button variant="contained" color="primary">
							<font size="4.5" face="Ropa Sans">Sign Up</font>
						</Button>
					</Link>
				</form>
			);
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
		);
	}
}

export default compose(
	firebaseConnect(),
	connect(({ firebase: { auth } }) => ({ auth })),
	connect(({ firebase: { profile } }) => ({ profile }))
)(LoginPage);
