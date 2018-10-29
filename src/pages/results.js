import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import Header from "../components/header.js";
const pieOptions = {
	slices: [
		{
			color: "#2c3646"
		},
		{
			color: "#8268C2"
		},
		{
			color: "#68A9C2"
		},
		{
			color: "#68C298"
		},
		{
			color: "#1648E5"
		},
		{
			color: "#1B9CB0"
		},
		{
			color: "#9F8AD2"
		},
		{
			color: "#D6DBDF"
		},
		{
			color: "#EBEDEF"
		}
	],
	legend: {
		position: "bottom",
		alignment: "center",
		textStyle: {
			color: "#233238",
			fontSize: 14
		}
	},
	tooltip: {
		showColorCode: true
	},
	chartArea: {
		left: 0,
		top: 0,
		width: "100%",
		height: "80%"
	},
	backgroundColor: "#d7e1e5",
	is3D: true
};

class ResultsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			/*working on in */

			expenses: [
				{
					name: "a",
					cost: 0
				}
			]
		};
	}

	handleChange(event, field) {
		this.setState({
			[field]: Number.parseInt(event.target.value)
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.firebase
			.push("results", this.state)
			.then(response => {
				this.setState({
					Monthly_Salary: "$"
				});
			})
			.catch(error => {
				switch (error.code) {
					default:
				}
			});
	}

	handleExpenseChange(event, fieldName, index) {
		let expenses = this.state.expenses;
		let value;
		if (fieldName == "cost") {
			value = Number.parseInt(event.target.value);
		} else {
			value = event.target.value;
		}
		expenses[index][fieldName] = value;
		this.setState({ expenses: expenses });
	}

	render() {
		let payload;
		if (!isLoaded(this.props.calc_five)) {
			payload = null;
		}
		if (isLoaded(this.props.calc_five) && !isEmpty(this.props.calc_five)) {
			payload = Object.keys(this.props.calc_five).map(key => {
				let calc_five = this.props.calc_five[key];
				//return <li key={key}>
				//<strong>{calc_five.salary}</strong>
				//<b>{calc_five.ingredients}</b><br />
				//<i>{calc_five.reason}</i>
				//</li>
			});
		}

		if (!isLoaded(this.props.profile)) {
			// not ready to be ready
			//LOADING PAGE
		}

		if (isLoaded(this.props.profile) && isEmpty(this.props.profile)) {
			// assume user is not logged in
			//MESSAGE THAT SAYS USER MUST LOG IN TO SEE CALCULATOR
		}
		/////////////////////
		/*<Chart
								chartType="PieChart"
								data={[["Thing", "Amount"], ["Essentials", 50], ["Personal Wants", 30],["Savings",20]]}
								options={pieOptions}
								graph_id="PieChart3"
								width={"100%"}
								height={"400px"}
							/>
*/

		var charteducation = [["Education", "Cost"]];
		if (isLoaded(this.props.profile) && !isEmpty(this.props.profile)) {
			/* && typeof this.props.profile.calc_one !== "undefined" && typeof this.props.profile.calc_two !== "undefined" && typeof this.props.profile.calc_three !== "undefined" && typeof this.props.profile.calc_four !== "undefined"){*/
			var essentials = 0;
			var Pwants = 0;

			var totalEducation = this.props.profile.calc_one.Monthly_Salary;
			for (var i = 0; i < this.props.profile.calc_two.length; i++) {
				charteducation.push([
					this.props.profile.calc_two[i].Name,
					this.props.profile.calc_two[i].Cost
				]);
				totalEducation -= this.props.profile.calc_two[i].Cost;
				essentials += this.props.profile.calc_two[i].Cost;
			}

			for (var i = 0; i < this.props.profile.calc_three.length; i++) {
				charteducation.push([
					this.props.profile.calc_three[i].Name,
					this.props.profile.calc_three[i].Cost
				]);
				totalEducation -= this.props.profile.calc_three[i].Cost;
				Pwants += this.props.profile.calc_three[i].Cost;
			}
			console.log(essentials);
			console.log(Pwants);
			charteducation.push(["Savings", totalEducation]);
			var totalspent = 0;
			totalspent =
				this.props.profile.calc_one.Monthly_Salary - totalEducation;

			payload = (
				<div>
					<button class="numCss">
						{this.props.profile.name}
						's Monthly Salary:{" "}
						{this.props.profile.calc_one.Monthly_Salary}
					</button>
					<button class="numCss1">
						{this.props.profile.name}
						's Remaining Income: {totalEducation}
					</button>
					<br />
					<br />
					<div id="resultsPara">You have spent {totalspent} dollars this month. You spent{" "}
					{essentials} dollars on your essentials, {Pwants} dollars on
					your personal wants, and your remaining income of{" "}
					{totalEducation} dollars will go into your Savings. Ideally,
					50% of your income should go into essentials, 30% of your
					income should go into your personal wants and 20% of your
					income should go into your savings. You prioritized {this.props.profile.calc_four[0]}, 
					{" "}{this.props.profile.calc_four[1]}, and {this.props.profile.calc_four[2]}. 
					We recommend, based on your budget and priorities, that you reevaluate your priorities and cut back on either your {this.props.profile.calc_four[0]}, your {" "}
					{this.props.profile.calc_four[1]}, or your {" "}{this.props.profile.calc_four[2]}.
					</div>
				</div>
			);
		}

		return (
			<div>
				<Header />
				<br />
				<br />
				<br />
				<form
					onSubmit={event => {
						this.handleSubmit(event);
					}}
				/>
				<br />
				<br />
				<font size="20">Results</font>
				
				<body class="chartCss" id="calcs">

				<Grid container spacing={24}>
        <Grid item xs={4}>
          
					<div id="results">
						<p id="results">Your Budget </p>
						<Chart
							chartType="PieChart"
							data={charteducation}
							graph_id="PieChart"
							options={pieOptions}
							width={"100%"}
							height={"400px"}
						/>
					</div>
	</Grid>
 <Grid item xs={4}>
					<div id="reulsts">
						<p id="results">Your Budget (continued)</p>

						<Chart
							chartType="PieChart"
							data={[
								["Thing", "Amount"],
								["Essentials", essentials],
								["Personal Wants", Pwants],
								["Savings", totalEducation]
							]}
							graph_id="PieChart2"
							options={pieOptions}
							width={"100%"}
							height={"400px"}
						/>
					</div> 
						</Grid>
 <Grid item xs={4}>

					<div id="results">
						<p id="results">Ideal Budget</p>
						<Chart
							chartType="PieChart"
							data={[
								["Thing", "Amount"],
								["Essentials", 50],
								["Personal Wants", 30],
								["Savings", 20]
							]}
							options={pieOptions}
							graph_id="PieChart3"
							width={"100%"}
							height={"400px"}
						/>
					</div>
					</Grid>
				</Grid>
					<div>{payload}</div>
				</body>

				<br />
				<br />
				<Link to="/calc_five">
					<Button
						color="#f5e2d0"
						variant="contained"
						size="medium"
					>
						<font face="Ropa Sans">Back</font>
					</Button>
				</Link>
				<Link to="/">
					<Button
						color="#f5e2d0"
						variant="contained"
						size="medium"
					>
						<font face="Ropa Sans">Home</font>
					</Button>
				</Link>
			</div>
		);
	}
}

export default compose(
	firebaseConnect(props => [{ path: "results" }]),
	connect((state, props) => ({
		results: state.firebase.data.results
	})),
	connect(({ firebase: { profile } }) => ({ profile })),
	connect(({ firebase: { auth } }) => ({ auth }))
)(ResultsPage);
