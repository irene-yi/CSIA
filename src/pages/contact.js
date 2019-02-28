import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Header from "../components/header.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

function PaperSheet(props) {
  const { classes } = props;
}
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class ContactPage extends React.Component {
	render() {
		const styles = theme => ({
			root: {
			    ...theme.mixins.gutters(),
			    paddingTop: theme.spacing.unit * 8,
			    paddingBottom: theme.spacing.unit * 8,
				},
			});
		return (
		<div>
			<Header />
				  <br />
				  <br />
					<br />
			<div id="budget">
				<header id="budgetPage">
				  <Grid container justify="center">
					  <Grid item xs={3} >
							<Paper elevation={8} id="budgetPaper" className="transparent_paper">
				        <h1>Contact US</h1>
				      </Paper>
						</Grid>
					</Grid>
				</header>
        <div id="nav10">
        <div>
          <img src="http://mklassusa.com/academy/wp-content/uploads/2013/12/IMG_0181-e1461954876681-400x300.jpg" />
        </div>
        <p id="nav15">
          <h3>
            Palisades Park Branch
          </h3>
          <br />
          <br />
          342A Commercial Ave. Palisades Park, NJ 07650
          <p id="address">
            <iframe src="https://cdn4.iconfinder.com/data/icons/rcons-phone/16/handset_round-2-512.png">
            </iframe>
            201-242-9494
          </p>
          <br />
          <br />
          <p id="address">
            <iframe src="https://cdn0.iconfinder.com/data/icons/elite-general/513/envelope-1-512.png">
            </iframe>
            info@mklassusa.com
          </p>
        </p>
        <p id="nav20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.9014848126803!2d-74.00384138459075!3d40.852086679316926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7140e142d01%3A0x166384ee72bb1ad8!2s342A+Commercial+Ave%2C+Palisades+Park%2C+NJ+07650!5e0!3m2!1sen!2sus!4v1461955357741" width="350" height="250" frameborder="0" allowfullscreen="allowfullscreen">
          </iframe>
        </p>
      </div>

			</div>
		</div>
		);
	}
}

export default withStyles(styles)(ContactPage);
