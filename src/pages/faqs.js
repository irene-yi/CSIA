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
class FAQPage extends React.Component {
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
				          		<h1>Budget</h1>
				        	</Paper>
						</Grid>
					</Grid>
				  </header>

				<section className="about">
					<Grid container>
					  	<Grid item xs={6}>
							<Paper elevation={8} id="paperPara1" className="transparent_paper">
						          <h1>What is a Budget?
						          <br />
						          <br />
									Budget
									is an estimate of income and expenses
									<br />
									for a set period
									of time, frequently designated
									<br />
									 into categories.
									<br />
									<br />

											1. Helps make sure you will have enough
											<br />
											money to sustain yourself every month
									<br />
									<br />
											2. Shows how much money you make
											<br />and how you've spent your money.
											</h1>
							</Paper>
						</Grid>
					</Grid>
				</section>

				<section className ="about2">
				  	<Grid container>
					  	<Grid item xs={6}>
							<Paper elevation={8} id="paperPara2" className="transparent_paper">
					  			<h1>Zero-Based Budget
					  			<br />
					  			<br />
								The idea of a <strong>
								zero-based budget </strong>
								is simple: <strong>
								<br />
								income minus money you spend equals zero.
								</strong>
								<br />
								In other words, if you bring home $3,000 each
								<br />
								month in
								income, you need to budget where
								<br /> that money should go.
								This doesn’t mean you
								<br />
								have a bank account balance of
								zero, but
								<br />
								when you get paid, you have already
								<br /> allocated
								where every cent is going.</h1>
				  			</Paper>
				  		</Grid>
				  	</Grid>
				</section>

				<section className="about3">
				  	<Grid container justify="flex-end">
					  	<Grid item xs={6} >
							<Paper elevation={8} id="paperPara3" className="transparent_paper">
					  			<h1>50-30-20 Plan
								<br />
								<br />
								With this plan, it is recommended that
								<br />
								<strong>50%</strong> of your income (after taxes) is
								used for
								<br />
								essentials.
								<strong> 30%</strong> of your income (after taxes)
								<br />
								can
								be allocated to your wants and personal.
								<br />
								 needs. The
								remaining <strong>20%</strong> can be allocated
								<br />
								to your
								savings.</h1>
				  			</Paper>
				  		</Grid>
				  	</Grid>
				</section>

				  <section className ="about4">
				  	<Grid container>
					  	<Grid item xs={6}>
							<Paper elevation={8} id="paperPara4" className="transparent_paper">
					  			<h1>Establish a college repayment fund.
					  			<br />
					  			<br />
								Having money moved automatically into savings is
								effective
								<br />
								because it’s forced. It enables people to set
								aside money to
								<br />
								grow that otherwise would be spent on
								clothes or dining out.
								<br />
										Set up an account that will be used only for
										paying back
										<br />
										your college debt.</h1>
				  			</Paper>
				  		</Grid>
				  	</Grid>
				  </section>

				  <section className ="about5">
				  	<Grid container>
					  	<Grid item xs={6}>
							<Paper elevation={8} id="paperPara4" className="transparent_paper">
					  			<h1>Recommended Sites:
					  			<br />
					  			<br />
					  			<a href="http://time.com/money/best-colleges/build-your-own-rankings/">Find the School Best Fit for You </a>
					  			<br /><br />

					  			<a href="https://apple.news./AFan5ZLM-RyCxPanS_WTNhg">25 Best Colleges in the U.S. Right Now</a>
					  			</h1>
				  			</Paper>
				  		</Grid>
				  	</Grid>
				  </section>

				</div>
			</div>
		);
	}
}

export default withStyles(styles)(FAQPage);
