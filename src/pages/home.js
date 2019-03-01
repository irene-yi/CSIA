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
import Header_Home from "../components/header_home.js";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	},
	row: {
		display: "flex",
		justifyContent: "center"
	},
	root1: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	},
	image: {
		position: "relative",
		[theme.breakpoints.down("xs")]: {
			width: "500% !important",
			height: 50
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

			<div id="home">
				<section class="first">
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
											<b>Need <i>help</i> for the college process?</b>
										</h1>
										<h5>
											<i>scroll down for more</i>
										</h5>
									</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
					<img
						src="https://cdn0.iconfinder.com/data/icons/controls-4/24/caret-down-512.png"
						id="arrow"
					/>
				</section>
				<header>
					<div class="row">
						<div class="twelve columns">
							<h1 id="problems">WHAT IS <strong>NaMu Consulting</strong>?</h1>
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
										id="pad2"
										className="transparent_paper"
									>
										<h2>
											<i>NaMu </i>
											is a consulting company for high schoolers aiming to be accepted into prestigious colleges and universities. We work hand in hand with the SAT test prep academy, Master Klass.
										</h2>
									</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
				</section>
				<section class="about2">
					<div class="twelve columns">
						<h1 id="problems">OUR GOAL</h1>
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
							<h2>
								Our goal is to help students achieve their dreams of going to their top choice college or university both within the United States and internationally.
							</h2>
							</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
				</section>
				<section class="about4">
					<div class="row">
						<div class="twelve columns">
							<div id="copyright">
								<div className={classes.row}>
									<div class="three columns" id="cred">
										<Grid container direction="column">
											<Link to="/">
												<p id="head">
													NaMu Consulting
												</p>
											</Link>
										</Grid>
									</div>
									<div class="three columns" id="cred">
										<Grid container direction="column">
											<Link to="/calc_one">
												<p id="head">About Us</p>
												<p id="bod">Who are we?</p>
											</Link>
										</Grid>
									</div>
									<div class="three columns" id="cred">
										<span>
											<Link to="/budget">
												<p id="head">Contact Us</p>
												<p id="bod">Where are we located?</p>
											</Link>
										</span>
									</div>
									<div class="three columns" id="cred">
										<span>
											<Link to="/debt">
												<p id="head">Schedule</p>
												<p id="bod">Do you want to see us?</p>
											</Link>
										</span>
									</div>
								</div>
								<div id="copy">
									<p>
										Copyright © 2018 JJ Design Corp. Inc. - All
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
