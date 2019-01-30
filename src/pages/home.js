import React from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Header from "../components/header.js";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	},
	root1: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	},
	image: {
		position: "relative",
		[theme.breakpoints.down("xs")]: {
			width: "500% !important", // Overrides inline-style
			height: 500
		},
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.15
			},
			"& $imageMarked": {
				opacity: 0
			},
			"& $imageTitle": {
				border: "4px solid white"
			}
		}
	},

	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white
	},

	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%"
	},

	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create("opacity")
	},

	imageTitle: {
		position: "relative",
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
			4}px ${theme.spacing.unit + 6}px`
	},

	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity")
	},

	row: {
		display: "flex",
		justifyContent: "center"
	},
	bigAvatar: {
		width: 200,
		height: 200,
		margin: 70
	}
});

const images = [
	{
		url:
			"https://4.bp.blogspot.com/-unisNva_EOQ/VeLTkxN_pAI/AAAAAAABzX4/D82cRwgeq1s/s0/Live_the_Freedom_in_Nature_wallpaper.jpg",
		title: (
			<font size="8" face="Ropa Sans" color="white">
				Start
			</font>
		),
		title1: (
			<font size="8" face="Ropa Sans" color="black">
				Start Now!
			</font>
		),
		width: "100%"
	}
];

function ButtonBases(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Header />
			{images.map(image => (
				<ButtonBase
					focusRipple
					key={image.title}
					className={classes.image}
					focusVisibleClassName={classes.focusVisible}
					style={{
						width: image.width
					}}
				>
					<span
						className={classes.imageSrc}
						id="img_style"
						style={{
							backgroundImage: `url(${image.url})`
						}}
					/>
					<span className={classes.imageBackdrop} id="img_style" />
					<span className={classes.imageButton} id="img_style">
						<Link to="/login">
							<Typography
								component="span"
								variant="subheading"
								color="white"
								className={classes.imageTitle}
							>
								{image.title}
								<span>
									<img
										src="https://www.thrivingparish.org/wp-content/uploads/2018/01/white-down-arrow-png-2.png"
										id="arrow"
									/>
							</span>
								<span className={classes.imageMarked} />
							</Typography>
						</Link>
					</span>
				</ButtonBase>
			))}

			<div id="home">
				<header>
					<div class="row">
						<div class="twelve columns">
							<h1 id="problems">WHAT IS <font face="Megrim"><strong>BALANCE THAT BUDGET</strong></font>?</h1>
						</div>
					</div>
				</header>
				<section class="about">
					<div class="row">
						<div class="twelve columns">
							<Grid container justify="flex-left">
								<Grid item xs={3}>
									<Paper
										elevation={8}
										id="pad"
										className="transparent_paper"
									>
										<h1>
											<i>Balance that Budget </i>
											is a website application created by
											high school students <i>for</i> high
											school students. This webapp will
											teach you about topics that are NOT
											taught in school. By pressing
											start, you can access our budgeting
											calcualtor as well as learn from our
											educational pages.
										</h1>
									</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
				</section>
				<section class="about2">
					<div class="twelve columns">
						<h1 id="problems">OUR PROBLEM</h1>
					</div>
				</section>
				<section class="about3">
					<div class="row">
						<div class="twelve columns" >
						<Grid container justify="flex-end">
								<Grid item xs={6}>
									<Paper
										elevation={8}
										id="pad1"
										className="transparent_paper"
									>
							<h1>
								According to the National Endowment for Financial
								Education, 76 percent of millennials
								lack basic financial literacy. This statstic
								results from the absense of financial classes
								during their educational career. Consequently, students graduate unaware of how to pay
								off their loans and budget their
								money.
							</h1>
							</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
				</section>
				<section class="about4">
					<div class="row">
						<div class="twelve columns">
							<h1 id="problems">OUR GOALS AND MISSION</h1>
						</div>
					</div>
				</section>
				<section class="about5">
					<div class="row">
						<div class="twelve columns" >
						<Grid container justify="flex-left">
								<Grid item xs={3}>
									<Paper
										elevation={8}
										id="pad2"
										className="transparent_paper"
									>
							<h1>
								<i>As a team, </i> we wanted to focus on helping
								students learn more about finances because
								we ourselves are affected. Initially, we aimed to help high
								school and college students in the New York
								area. However, as we continue to develop our webapp,
								we hope to deploy it for
								all students across the nation and worldwide.
							</h1>
							</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
				</section>
				<section class="about6">
					<div class="row">
						<div class="twelve columns">
							<h1 id="problems">MEET THE TEAM</h1>

							<br />
							<div id="box">
								<Paper className={classes.root1} elevation={1}>
									<div id="aboutus" className={classes.row}>
										<Avatar
											alt="A"
											src="https://msbfile03.usc.edu/digitalmeasures/iyi/pci/Irene-Yi-1.jpg"
											className={classNames(
												classes.bigAvatar
											)}
										/>
										<Grid container direction="column">
											<h2>Irene Yi - Senior</h2>
											<h2>School: The Dwight School</h2>
											<h2>
												Dream: CIA Intelligence Officer
											</h2>
										</Grid>
									</div>
									<hr />
									<div id="aboutus" className={classes.row}>
										<Avatar
											alt="A"
											src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/22688813_1990194594603104_4468263580838472487_n.jpg?_nc_cat=0&oh=151fc3049b7b56efa247af66855db7f0&oe=5BF6085E"
											className={classNames(
												classes.bigAvatar
											)}
										/>
										<Grid container direction="column">
											<h2>Katie Sidebotham - Junior</h2>
											<h2>
												School:Randolph High School{" "}
											</h2>
											<h2>
												Dream: Digital Advertisement
												Manager
											</h2>
										</Grid>
									</div>
									<hr />
									<div id="aboutus" className={classes.row}>
										<Avatar
											alt="A"
											src="https://static1.squarespace.com/static/560894d6e4b00830fde888a6/5b52e00b352f530b8e136861/5b52e027575d1f8f7cccbbe8/1532158589074/Malini+Kundamal.jpg"
											className={classNames(
												classes.bigAvatar
											)}
										/>
										<Grid container direction="column">
											<h2>Malini Kundamal - Junior</h2>
											<h2>School: Trinity School </h2>
											<h2>Dream: CEO </h2>
										</Grid>
									</div>
									<hr />
									<div id="aboutus" className={classes.row}>
										<Avatar
											alt="A"
											src="https://pbs.twimg.com/media/C3xF10gWIAA52gy.jpg"
											className={classNames(
												classes.bigAvatar
											)}
										/>
										<Grid container direction="column">
											<h2>Audrey Safir - Junior</h2>
											<h2>School: The Lawrenceville School </h2>
											<h2>Dream: Lol, what dream? </h2>
										</Grid>
									</div>
									<hr />
									<div id="aboutus" className={classes.row}>
										<Avatar
											alt="A"
											src="https://mmanewsblog.files.wordpress.com/2013/01/michail-tsarev.jpg"
											className={classNames(
												classes.bigAvatar
											)}
										/>
										<Grid container direction="column">
											<h2>Daniel Tsarev- Senior</h2>
											<h2>School: a place :^)</h2>
											<h2>Dream: Finish this six week program with my sanity intact (btw that's not my picture)</h2>
										</Grid>
									</div>
								</Paper>
							</div>
							<div id="copyright">
								<div className={classes.row}>
									<div class="three columns" id="cred">
										<Grid container direction="column">
											<Link to="/">
												<p id="head">
													Balance that Budget
												</p>
											</Link>
										</Grid>


										{/*{images.map(image => (
         <section class="about5">
            <div class="row">
              <div class="twelve columns" id="pad">
                <h1>
                  <i>As a team, </i> we focused on financial literacy because we ourselves are affected by the issue. Initially, we aimed to help high school and college students in the New York area. However, as we continue to develop our webapp, we hope to deploy it for all students across the nation and worldwide.
                </h1>
              </div>
            </div>
        </section>

        <section class="about6">
            <div class="row">
              <div class="twelve columns">
                <h1>
                  MEET THE TEAM
                </h1>

                <br />
                <div id="box">
                <Paper className={classes.root1} elevation={1}>
                  <div id="aboutus" className={classes.row}>
                    <Avatar
                      alt="A"
                      src="https://msbfile03.usc.edu/digitalmeasures/iyi/pci/Irene-Yi-1.jpg"
                      className={classNames(classes.bigAvatar)}
                    />
                    <Grid
                      container
                      direction="column"
                    >
                      <h2>Irene Yi - Senior</h2>
                      <h2>School: The Dwight School</h2>
                      <h2>Dream: CIA Intelligence Officer</h2>
                    </Grid>
                  </div>
                  <hr></hr>
                  <div id="aboutus" className={classes.row}>
                    <Avatar
                      alt="A"
                      src="https://i.ytimg.com/vi/xG7NLBewdQM/hqdefault.jpg"
                      className={classNames(classes.bigAvatar)}
                    />
                    <Grid
                      container
                      direction="column"
                    >
                      <h2>Katie Sidebotham - Junior</h2>
                      <h2>School: </h2>
                      <h2>Dream: </h2>
                    </Grid>
                  </div>
                  <hr></hr>
                  <div id="aboutus" className={classes.row}>
                    <Avatar
                      alt="A"
                      src="https://static1.squarespace.com/static/560894d6e4b00830fde888a6/5b52e00b352f530b8e136861/5b52e027575d1f8f7cccbbe8/1532158589074/Malini+Kundamal.jpg"
                      className={classNames(classes.bigAvatar)}
                    />
                    <Grid
                      container
                      direction="column"
                    >
                      <h2>Malini Kundamal - Junior</h2>
                      <h2>School: </h2>
                      <h2>Dream: </h2>
                    </Grid>
                  </div>
                  <hr></hr>
                  <div id="aboutus" className={classes.row}>
                    <Avatar
                      alt="A"
                      src="https://pbs.twimg.com/media/C3xF10gWIAA52gy.jpg"
                      className={classNames(classes.bigAvatar)}
                    />
                    <Grid
                      container
                      direction="column"
                    >
                      <h2>Audrey Safir - Junior</h2>
                      <h2>School:  </h2>
                      <h2>Dream: </h2>
                    </Grid>
                  </div>
                  <hr></hr>
                  <div id="aboutus" className={classes.row}>
                    <Avatar
                      alt="A"
                      src="https://mmanewsblog.files.wordpress.com/2013/01/michail-tsarev.jpg"
                      className={classNames(classes.bigAvatar)}
                    />
                    <Grid
                      container
                      direction="column"
                    >
                      <h2>Daniel Tsarev</h2>
                      <h2>School: </h2>
                      <h2>Dream: </h2>
                    </Grid>
                  </div>
                </Paper>
                </div>
                <div id="copyright">
                  <div className={classes.row}>
                    <div class="three columns" id="cred">
                      <Grid
                        container
                        direction="column"
                      >
              					<Link to="/">
              					 <p id="head">Balance that Budget</p>
              					</Link>
              				</Grid>
                      {/*{images.map(image => (
                        <ButtonBase
                          focusRipple
                          key={image.title}
                          className={classes.image}
                          focusVisibleClassName={classes.focusVisible}
                          style={{
                            width: image.width,
                          }}
                        >
                        <Link to="/login">
                          {image.title1}
                        </Link>
                      </ButtonBase>
                      ))}*/}

									</div>
									<div class="three columns" id="cred">
										<Grid container direction="column">
											<Link to="/calc_one">
												<p id="head">
													Budget Calculator
												</p>
												<p id="bod">
													What is your monthly salary?
												</p>
												<p id="bod">Monthly Expenses</p>
												<p id="bod">Education Prices</p>
												<p id="bod">Priorities</p>
												<p id="bod">
													Your Budget vs. The Ideal
													Budget
												</p>
											</Link>
										</Grid>
									</div>
									<div class="three columns" id="cred">
										<span>
											<Link to="/budget">
												<p id="head">How to Budget</p>
												<p id="bod">
													What is a budget?
												</p>
												<p id="bod">
													Zero-Based Budget
												</p>
												<p id="bod">50-30-20 Plan</p>
												<p id="bod">
													Establish a College
													Repayment Fund
												</p>
											</Link>
										</span>
									</div>
									<div class="three columns" id="cred">
										<span>
											<Link to="/debt">
												<p id="head">
													Understanding Debt{" "}
												</p>
												<p id="bod">What is debt?</p>
												<p id="bod">
													The Debt Snowball
												</p>
												<p id="bod">
													The Debt Avalanche
												</p>
											</Link>
										</span>
									</div>
									<div class="three columns" id="cred">
										<span>
											<Link to="/debt">
												<p id="head">Student Loan</p>
												<p id="bod">
													The Student Repayment Plan
												</p>
												<p id="bod">The Power of 50</p>
												<p id="bod">
													Direct Consolidation Loans
												</p>
											</Link>
										</span>
									</div>
								</div>
								<br />
								<br />
								<br />
								<div id="copy">
									<p>
										Copyright © 2018 Snack Attack Inc. - All
										rights reserved.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

ButtonBases.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonBases);
