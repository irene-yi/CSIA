import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header_Home extends React.Component{
	state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  constructor(props){
	  super(props);
	  this.state = {
	    snackbar: {
		    open: false,
		    message: null
	    }
	  }
  }

  logout() {
		this.props.firebase.logout();
	}

  closeSnackbar(event, reason){
	  if(reason == "clickaway"){
	    // do nothing
	    return;
	  }
	  this.setState({
	    snackbar: {
		    open: false
	    }
	  });
  }

  render(){
  	return(
			<div>
				<AppBar id="Toolbar1">
					<span id="nav1">
						<Link to="/" id="company">
						 <font face="Ropa Sans">Balance that Budget</font>
						</Link>
					</span>
				</AppBar>
				<Snackbar
					anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',}}
					open={this.state.snackbar.open}
					autoHideDuration={2500}
					onClose={(event, reason) => {this.closeSnackbar(event, reason);}}
					message={this.state.snackbar.message}
				/>
			</div>
	  );
  }
}



export default compose(
  firebaseConnect(),
  connect(({firebase: {auth}}) => ({auth}))
)(Header_Home);
