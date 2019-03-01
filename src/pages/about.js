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
class AboutPage extends React.Component {
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
				          		<h1>About Us</h1>
				        	</Paper>
						</Grid>
					</Grid>
				  </header>
          <div id="title2c">
            <p>At Master Klass Academy, we believe that all students have the potential and the proper skills to achieve success in all their academic endeavors.</p>
            <p>Master Klass Academy consists only of highly regarded instructors who are professionals in their respective fields and teach with relevant and practical ways.</p>
            <p>The commitment of our staff comes second to none, as all our instructors devote the entirety of their time teaching students between our two branches throughout the week.</p>
            <p>After dedicating much of our time upgrading our books and materials to eliminate any irrelevant and unnecessary sections, we offer an efficient educational program that is effective in improvement and progress.</p>
          </div>

			</div>
		</div>);
	}
}

export default withStyles(styles)(AboutPage);
