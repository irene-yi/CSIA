import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { Redirect } from "react-router";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Chart from "react-google-charts";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";

import Header from "../components/header.js";
import calcvariables from "../components/calcvariables.js";

const pieOptions = {
  title: 'My Daily Activities',
  slices: [
    {
      color: "#9265DC"
    },
    {
      color: "#4807B3"
    },
    {
      color: "#220E43"
    },
    {
      color: "#B39DD7"
    },
    {
      color: "#5F15E7"
    },
    {
      color: "#CBA9E5"
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
    height: "80%",
    paddingTop:0
  },
  backgroundColor: '#d7e1e5',
      is3D: true,
};

class CalcThreePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Education: [
      {
      Name: "",
      Cost: 0,
    },
    ],
    done:false
  };
  }

  handleChange(event, field) {
    this.setState({
      [field]: Number.parseInt(event.target.value)
    });
  }
navigateAway(event) {
    event.preventDefault();
    let uid = this.props.auth.uid;
    this.props.firebase.update(`/users/${uid}/calc_three`, this.state.Education)
    .then((response) => {
      this.setState({
      done: true
    });
   })
  }

addRow(){
    this.setState({
      Education: [...this.state.Education,
        {
          Name: "",
          Cost: 0,
        }
      ]
    });
  }

handleExpenseChange(event, fieldName, index){
    let Education = this.state.Education;
    let value;
    if(fieldName == "Cost"){
      value = Number.parseInt(event.target.value);
    }else{
      value = event.target.value;
    }
    Education[index][fieldName] = value;
    this.setState({Education: Education});
  }

  render() {
    let payload;
    if (!isLoaded(this.props.calc_three)) {
      payload = null;
    }
    if (isLoaded(this.props.calc_three) && !isEmpty(this.props.calc_three)) {
      payload = Object.keys(this.props.calc_three).map(key => {
        let calc_three = this.props.calc_three[key];
        const styles = theme => ({
          root: {
            flexGrow: 1
          }
      });
    });
}
    if (this.state.done) {
      return <Redirect to="calc_four" />;
    }
    let allEducation = this.state.Education.map((Education, index) => {

    return (
      <Grid container spacing={24}>
        <br /><br />
          <Grid item xs={3} id="gridItem">
            <FormControl fullWidth>
              <TextField label="Expense Name" margin="normal"
              onChange={(event) => {this.handleExpenseChange(event, 'Name', index)}}
              />
            </FormControl>
          </Grid>

          <Grid item xs={3} id="gridItem">
            <FormControl fullWidth>
              <TextField label="Cost" margin="normal"
              onChange={(event) => {this.handleExpenseChange(event, 'Cost', index)}}
              />
            </FormControl>
          </Grid>
        </Grid>
      );
    });
var charteducation=[["Education", "Cost"]];
    for (var i=0; i <this.state.Education.length; i++){
      charteducation.push([this.state.Education[i].Name,this.state.Education[i].Cost])
    }

            
    if(!isLoaded(this.props.profile)){
  // not ready to be ready
  //LOADING PAGE
}

if(isLoaded(this.props.profile) && isEmpty(this.props.profile)){
  // assume user is not logged in
  //MESSAGE THAT SAYS USER MUST LOG IN TO SEE CALCULATOR
}
/////////////////////



if(isLoaded(this.props.profile) && !isEmpty(this.props.profile) && typeof this.props.profile.calc_one !== "undefined" && typeof this.props.profile.calc_two !== "undefined"){
    for (var i=0; i <this.props.profile.calc_two.length; i++){
      charteducation.push([this.props.profile.calc_two[i].Name,this.props.profile.calc_two[i].Cost])
    }

var totalEducation = this.props.profile.calc_one.Monthly_Salary;
    for (var i=0; i<this.state.Education.length; i++){
     console.log(this.state.Education[i].Cost);
      totalEducation -= this.state.Education[i].Cost;
    }

    for (var i=0; i<this.props.profile.calc_two.length; i++){
      totalEducation -= this.props.profile.calc_two[i].Cost;
      console.log(this.props.profile.calc_two[i].Cost);
    }
    charteducation.push(["Remaining Income", totalEducation]);
      payload = <div>

     <button class="numCss">
                {this.props.profile.name}'s Monthly Salary: {this.props.profile.calc_one.Monthly_Salary}
        </button>

            
                <button class="numCss1">

                  {this.props.profile.name}'s Remaining Income: {totalEducation}
          </button>
          </div>
        }

  return (
      <div>

        <Header />
          <br />

      
          <br />
          <br />
          <br />
          <div class="linecss" id="calcs">
              <Link to="/calc_one">
                <button class="buttonCss1">1</button>
              </Link>
              <Link to="/calc_two">
                <button class="buttonCss1">2</button>
              </Link>
              <Link to="/calc_three">
                <button class="buttonCss1">3</button>
              </Link>
              <Link to="/calc_four">
                <button class="buttonCss">4</button>
              </Link>
              <Link to="/calc_five">
                <button class="buttonCss">5</button>
              </Link>
          </div>

          <br />
          <br />
           <br />
         
         <font size="20"> What are your monthly personal expenses?</font>
          <br />
          <br />
        
          {payload}
        <form onSubmit={event => {this.navigateAway(event)}} >
          <div className="CalcThreePage">
            <Chart
              style={{display: isLoaded(this.props.profile) && !isEmpty(this.props.profile) ? 'block' : 'none'}}
              chartType="PieChart"
              data={charteducation}
              graph_id="PieChart"
              options={pieOptions}
              width={"100%"}
              height={"400px"}
            />
          </div>
          {allEducation}
          <Button
            variant="fab"
            mini
            color="secondary"
            aria-label="Add"
            id="addButton"
            onClick={() => {
              this.addRow();
            }}
          >
            <AddIcon />

          </Button>
          <br />
          <br />
          <Link to="/calc_two">
            <Button
            variant="contained"
            color="primary">
              Back
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
        <br />
        <br />
  </div>
    );
  }
}

export default compose(
  firebaseConnect(props => [{ path: "calc_three" }]),
  connect(({firebase: {auth}}) => ({auth})),
  connect((state, props) => ({
    calc_three: state.firebase.data.calc_three
  })),
  connect(({firebase: {profile}}) => ({profile}))
)(CalcThreePage);
