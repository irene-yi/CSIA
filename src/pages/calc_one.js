import React from "react";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import Chart from "react-google-charts";
import { Redirect } from "react-router";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import Calc_Nav from "../components/Calc_nav.js";
import Header from "../components/header.js";




class CalcOnePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Monthly_Salary: 0,

      done: false
    };
  }

  handleChange(event, field) {
    this.setState({
      [field]: Number.parseInt(event.target.value)
    });
  }

  navigateAway(event) {
    event.preventDefault();
    const calc_one = {
      Monthly_Salary: this.state.Monthly_Salary
    }
    let uid = this.props.auth.uid;
    this.props.firebase.update(`/users/${uid}/calc_one`, calc_one)
    .then((response) => {
      this.setState({
         done: true
        });
    });
  };


  render() {
    let payload;
    if (!isLoaded(this.props.calc_one)) {
      payload = null;
    }
    if (isLoaded(this.props.calc_one) && !isEmpty(this.props.calc_one)) {
      payload = Object.keys(this.props.calc_one).map(key => {
        let calc_one = this.props.calc_one[key];
      });
    }
    if (this.state.done) {
      return(<Redirect to='calc_two' />);
    }


    return (
      <div>
        <br />

        <Header />
        
        <form
          onSubmit={event => {
            this.navigateAway(event);
          }}
        >
          <br />
          <br />
<br />
        <Calc_Nav />
         
          <br /><br />
          <br />

          <font size="20"> What is your monthly salary?</font>

          <br />
          <br />
     

          <FormControl fullWidth>
            <TextField
              label="Monthly Salary"
              value={this.state.salary}
              onChange={event => {
                this.handleChange(event, "Monthly_Salary");
              }}
            />
          </FormControl>
          <br />
          <br />


          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary">

           <font size="5"> Next</font>
          </Button>

        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default compose(
  firebaseConnect(props => [{ path: "calc_one" }]),
  connect(({firebase: {auth}}) => ({auth})),
  connect((state, props) => ({
    calc_one: state.firebase.data.calc_one
  }))
)(CalcOnePage);
