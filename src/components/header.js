import React from 'react';
import 'typeface-raleway';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';


class Header extends React.Component {
	state = {
		anchorEl: null
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {

		this.setState({ anchorEl: null });
	};

	constructor(props) {
		super(props);
		this.state = {
			snackbar: {
				open: false,
				message: null
			}
		};
	}

	logout() {
		this.props.firebase.logout();
	}

	closeSnackbar(event, reason) {
		if (reason == "clickaway") {
			// do nothing
			return;
		}
		this.setState({
			snackbar: {
				open: false
			}
		});
	}

	render() {
		const { anchorEl } = this.state;
		let greeting;
		if (!this.props.auth.isLoaded) {
			// auth is still warming up
			// so unsure if user is logged in or not;
			greeting = null;
		}
		if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {
			// user is logged in!
			greeting = (
				<span>
					<Button
						id="MenuProfile"
						variant="contained"
						style={{ marginLeft: 30 }}
						aria-owns={anchorEl ? "simple-menu" : null}
						aria-haspopup="true"
						onClick={this.handleClick}
					>
						<FontAwesomeIcon icon={faUser} size="2x" />
					</Button>
				</span>
			);
		}
		if (this.props.auth.isLoaded && this.props.auth.isEmpty) {
			// user is not logged in
		}

		return (
			<div>
				<div id="MenuProfile">
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={this.handleClose}
					>
						<MenuItem onClick={this.handleClose}>
							<Link to="/results">
								<font color="#2c3646" face="Ropa Sans">
									My Past Budget
								</font>
							</Link>
						</MenuItem>
						<MenuItem onClick={() => {this.logout();}}>
							<Link to="/">
								<font color="#2c3646" face="Ropa Sans">
									Logout
								</font>
							</Link>
						</MenuItem>
					</Menu>
				</div>
				<AppBar>
					<Toolbar id="Toolbar">
						<Typography
							variant="title"
							color="#2c3646"
							style={{ flexGrow: 1.25 }}
						>
							<span id="nav">
								<Link to="/" id="company">
									<font face='Raleway'>
										NaMu Consulting
									</font>
								</Link>

								<Link to="/">
									<Button
										variant="contained"
										id="headerButtons"
									>
										<font face="Ropa Sans">About Us</font>
									</Button>
								</Link>

								<Link to="/">
									<Button
										variant="contained"
										id="headerButtons"
									>
										<font face="Ropa Sans">Contact Us</font>
									</Button>
								</Link>

								<Link to="/">
									<Button
										variant="contained"
										id="headerButtons"
									>
										<font face="Ropa Sans">Schedule</font>
									</Button>
								</Link>

								<Link to="/">
									<Button
										variant="contained"
										id="headerButtons"
									>
										<font face="Ropa Sans">Packages</font>
									</Button>
								</Link>

								<Link to="/">
									<Button
										variant="contained"
										id="headerButtons"
									>
										<font face="Ropa Sans">FAQs</font>
									</Button>
								</Link>

								<Link to="/login">
									<Button
										variant="contained"
										id="headerButtons"
									>
										<font face="Ropa Sans">Login</font>
									</Button>
								</Link>

								{greeting}
							</span>
						</Typography>
					</Toolbar>
				</AppBar>
				<Snackbar
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left"
					}}
					open={this.state.snackbar.open}
					autoHideDuration={2500}
					onClose={(event, reason) => {
						this.closeSnackbar(event, reason);
					}}
					message={this.state.snackbar.message}
				/>
			</div>
		);
	}
}

export default compose(
	firebaseConnect(),
	connect(({ firebase: { auth } }) => ({ auth }))
)(Header);
